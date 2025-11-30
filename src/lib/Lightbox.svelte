<script>
    import { DateTime } from "luxon";
    import { base } from "$app/paths";
    import { fade } from "svelte/transition";
    import { photomode, lightboxphoto } from "$lib/stores";
    import details from "$lib/details";
    import Flipper from "./Flipper.svelte";
    import Purchase from "./Purchase.svelte";

    let buttonWidth = $state(72);
    let padding = $state(16);

    let buttons = $state([]);

    let screenWidth = $state(0);
    let screenHeight = $state(0);
    let imgNaturalWidth  = $state(0);
    let imgNaturalHeight = $state(0);

    let showInfo = $state(false);
    let showPrint = $state(false);


    let imageDims = $derived.by(() => {
        if (screenWidth && screenHeight && imgNaturalWidth && imgNaturalHeight) {
            let w = 0;
            let h = 0;
            if (imgNaturalWidth >= imgNaturalHeight) {
                w = screenWidth - buttonWidth - 2*padding - 3;
                h = w * (imgNaturalHeight / imgNaturalWidth);
                if (h > (screenHeight - 2*padding - 2)) {
                    h = screenHeight - 2*padding - 2;
                    w = h * (imgNaturalWidth / imgNaturalHeight);
                }
            }
            else {
                h = screenHeight - 2*padding - 2;
                w = h * (imgNaturalWidth / imgNaturalHeight);
                if (w > (screenWidth - buttonWidth - 2*padding - 3)) {
                    w = screenWidth - buttonWidth - 2*padding - 3;
                    h = w * (imgNaturalHeight / imgNaturalWidth);
                }
            }
            return [w, h];
        }
        return [0, 0];
    });

    const close = () => {
        $lightboxphoto = "";
        showInfo = false;
        showPrint = false;
    }

    $effect(() => {
        if (screenWidth && screenHeight) {
            if ((screenWidth < 400) || (screenWidth < 400)) {
                buttonWidth = 48;
                padding = 4;
            }
            else {
                buttonWidth = 72;
                padding = 16;
            }
        }
    });

    $effect(() => {
        if ($lightboxphoto) {
            document.body.style.overflowY = "hidden";
            document.body.style.height = "100vh";
            buttons = [
                {
                    icon: 'icon-[pixel--info-circle]',
                    label: 'info',
                    disabled: !details[$lightboxphoto],
                    onclick: e => {
                        showInfo = !showInfo;
                        showPrint = false;
                        e.stopPropagation();
                    },
                },
                {
                    icon: 'icon-[streamline-pixel--business-money-coin-currency]',
                    label: 'print',
                    disabled: false,
                    onclick: e => {
                        showPrint = !showPrint;
                        showInfo = false;
                        e.stopPropagation();
                    },
                },
            ];
        }
        else {
            document.body.style.overflowY = "auto";
            document.body.style.height = "auto";
            buttons = [];
        }
    });

</script>

{#if $lightboxphoto}
    <div
        bind:clientWidth={screenWidth}
        bind:clientHeight={screenHeight}
        transition:fade={{ duration: 200 }}
        class="
            fixed top-0 left-0 right-0 bottom-0 z-50 bg-black/50
            flex flex-col items-center justify-center
        "
        style="padding:{padding}px;"
        onclick={close}
        onkeypress={close}
        aria-label="x"
        role="button"
        tabindex={-1}
    >
        <div
            class="relative flex flex-row items-center justify-center"
            style="padding-right:{buttonWidth}px;"
            onclick={e => { e.stopPropagation() }}
            onkeypress={e => { e.stopPropagation() }}
            aria-label="o"
            role="button"
            tabindex={-1}
        >
            <Flipper
                autoflip={false}
                flipped={!showInfo && !showPrint}
                class="rounded-l border border-slime"
                style="width:{imageDims[0]}px;height:{imageDims[1]}px;"
            >
                <img
                    bind:naturalWidth={imgNaturalWidth}
                    bind:naturalHeight={imgNaturalHeight}
                    alt="{$lightboxphoto} {$photomode}"
                    src="{base}/img/{$photomode}/lg/{$lightboxphoto}.webp"
                    class="object-contain w-full h-full"
                />
                {#snippet bside()}
                    {#if showInfo}
                        <div
                            transition:fade
                            class="
                                w-full h-full p-4 overflow-y-auto text-center
                                flex flex-col items-center text-slime
                            "
                        >
                            {#if details[$lightboxphoto].title}
                                <h2 class="text-base md:text-lg font-semibold mb-2">
                                    {details[$lightboxphoto].title} {$photomode === 'photo' ? '' : `{${$photomode}}`}
                                </h2>
                            {/if}
                            {#if details[$lightboxphoto].location}
                                <span class="text-xs md:text-sm">
                                    {details[$lightboxphoto].location}
                                </span>
                            {/if}
                            {#if details[$lightboxphoto].time}
                                <span class="text-xs md:text-sm">
                                    {DateTime.fromISO(
                                        details[$lightboxphoto].time
                                    ).setZone(
                                        "America/Los_Angeles"
                                    ).toLocaleString({
                                        ...DateTime.DATE_MED_WITH_WEEKDAY,
                                        ...DateTime.TIME_24_WITH_SHORT_OFFSET,
                                        // second: "none",
                                    })}
                                </span>
                            {/if}
                            {#if $photomode !== 'photo'}
                                <span class="text-xs md:text-sm">
                                    algorithmically modified photograph (no AI)
                                </span>
                            {/if}
                            {#if details[$lightboxphoto].description}
                                <span class="text-xs md:text-sm mt-4">
                                    {@html details[$lightboxphoto].description}
                                </span>
                            {/if}
                            <div class="mt-4 flex-col items-start gap-1 text-xs hidden md:flex">
                                {#each [
                                    'camera', 'lens', 'aperture', 'exposure', 'iso', 'teleconverter', 'flash'
                                ] as spec}
                                    {#if details[$lightboxphoto][spec]}
                                        <div class="flex flex-row items-start justify-center gap-2">
                                            <span class="w-28 text-end">{spec}:</span>
                                            <span class="w-fit">{details[$lightboxphoto][spec]}</span>
                                        </div>
                                    {/if}
                                {/each}
                                {#if details[$lightboxphoto].diopter}
                                    <div class="flex flex-row items-start justify-center gap-2">
                                        <span class="w-28 text-end">macro ext:</span>
                                        <span class="w-fit">+{details[$lightboxphoto].diopter} diopters</span>
                                    </div>
                                {/if}
                                {#if details[$lightboxphoto].mag}
                                    <div class="flex flex-row items-start justify-center gap-2">
                                        <span class="w-28 text-end">macro ext:</span>
                                        <span class="w-fit">{details[$lightboxphoto].mag}x</span>
                                    </div>
                                {/if}
                                {#if details[$lightboxphoto].stack}
                                    <div class="flex flex-row items-start justify-center gap-2">
                                        <span class="w-28 text-end">stack:</span>
                                        <span class="w-fit">{details[$lightboxphoto].stack} frames</span>
                                    </div>
                                {/if}
                            </div>
                        </div>
                    {:else if showPrint}
                        <Purchase />
                    {/if}
                {/snippet}
            </Flipper>
            <div
                class="
                    absolute top-0 bottom-0 right-0 py-2 md:py-8
                    rounded-r border border-slime border-l-0
                    bg-black/50 backdrop-blur-md
                    flex flex-col items-center justify-center gap-4 md:gap-6
                "
                style="width:{buttonWidth}px;"
            >
                {#each buttons as b}
                    <button
                        class="
                            flex flex-col items-center gap-1
                            text-xl md:text-3xl transition-transform
                            {b.disabled
                                ? 'text-gray-600 cursor-not-allowed'
                                : 'text-slime hover:text-emerald-400 hover:scale-110 cursor-pointer'
                            }
                        "
                        disabled={b.disabled}
                        aria-label={b.label}
                        onclick={b.onclick}
                    >
                        <span class={b.icon}></span>
                        <span
                            class="
                                text-xs uppercase
                            "
                        >
                            {b.label}
                        </span>
                    </button>
                {/each}
                {#each [0, 1] as i}
                    <button
                        class="
                            absolute text-xl md:text-3xl
                            my-2 md:my-4
                            text-rose-400 cursor-pointer
                            {i===0 ? 'top-0' : 'bottom-0'}
                        "
                        onclick={close}
                        aria-label="x"
                    >
                        <span class="icon-[pixelarticons--close]"></span>
                    </button>
                {/each}
            </div>
        </div>
    </div>
{/if}

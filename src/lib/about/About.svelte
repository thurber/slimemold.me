<script>
    import { fade } from "svelte/transition";
    import Flipper from "$lib/Flipper.svelte";
    import mapSeward from "$lib/img/seward_map.png";
    import mapRaleigh from "$lib/img/raleigh_map.png";
    import meSlime from "$lib/img/cyberslime-tbterracotta.jpg";
    import me from "$lib/img/tbterracotta.jpg";

    let terracottaSwapped = $state(false);
    let mapSwapped = $state(false);
    let moSwapped = $state(false);

</script>

<div
    out:fade
    class="w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-center"
>
    <Flipper class="lg:flex-1 w-96 lg:w-auto h-96 lg:h-[30rem] lg:self-stretch">
        <button
            class="w-full h-full flex flex-col items-center p-4 gap-4 cursor-pointer"
            onclick={() => terracottaSwapped=!terracottaSwapped}
        >
            <div class="flex flex-row gap-4 items-center text-slime">
                <h2 class="text-lg underline underline-offset-8 decoration-1">
                    ME
                </h2>
                <span class="mt-1 rotate-90 text-base icon-[streamline-pixel--interface-essential-flip-vertical-up]"></span>
            </div>
            <div class="w-full h-full relative">
                {#key terracottaSwapped}
                    <img
                        transition:fade
                        alt='me'
                        src={terracottaSwapped ? me : meSlime}
                        class="absolute w-full h-full object-contain object-top"
                    />
                {/key}
            </div>
        </button>
    </Flipper>
    <Flipper class="lg:flex-1 w-96 lg:w-auto h-96 lg:h-[30rem] lg:self-stretch">
        <button
            class="w-full h-full flex flex-col items-center p-4 gap-4 cursor-pointer"
            onclick={() => mapSwapped=!mapSwapped}
        >
            <div class="flex flex-row gap-4 items-center text-slime">
                <h2 class="text-lg underline underline-offset-8 decoration-1">
                    {mapSwapped ? 'PoB' : 'HQ'}
                </h2>
                <span class="mt-1 rotate-90 text-base icon-[streamline-pixel--interface-essential-flip-vertical-up]"></span>
            </div>
            <div class="w-full h-full relative">
                {#key mapSwapped}
                    <img
                        transition:fade
                        alt="Stylized map of {mapSwapped ? 'Raleigh, NC, USA' : 'Seward Park, Seattle, WA, USA'}"
                        src={mapSwapped ? mapRaleigh : mapSeward}
                        class="absolute w-full h-full object-contain object-top"
                    />
                {/key}
            </div>
        </button>
    </Flipper>
    <Flipper class="lg:flex-1 w-96 lg:w-auto h-[40rem] 2xl:h-96 lg:self-stretch">
        <button
            class="w-full h-full flex flex-col items-center p-4 gap-4 cursor-pointer"
            onclick={() => moSwapped=!moSwapped}
        >
            <div class="flex flex-row gap-4 items-center text-slime">
                <h2 class="text-lg underline underline-offset-8 decoration-1">
                    {moSwapped ? 'GEAR' : 'MO'}
                </h2>
                <span class="mt-1 rotate-90 text-base icon-[streamline-pixel--interface-essential-flip-vertical-up]"></span>
            </div>
            {#if moSwapped}
                <div class="flex flex-col gap-2 items-center text-xs xl:text-sm text-slime">
                    <span>Fujifilm GFX100 II camera</span>
                    <span>Fujifilm GF 500mm f/5.6 telephoto lens</span>
                    <span>Fujifilm GF 120mm f/4 lens</span>
                    <span>Fujifilm GF 45mm f/2.8 lens</span>
                    <span>Laowa 25mm f/2.8 2.5-5X lens</span>
                    <span>Zeiss 120mm f/4 macro lens</span>
                    <span>Godox V860III flash</span>
                    <span>Fringer adapters (C645 and NF)</span>
                </div>
            {:else}
                <p
                    class="
                        w-full h-min object-cover text-slime text-xs px-2 text-justify
                    "
                >
                    hi, i'm travis, a macro & wildlife photographer based in Seattle, Washington, USA.
                    <br/><br/>
                    in the quiet world of small creatures, a complex and often unnoticed beauty thrives.
                    my work seeks to reveal this delicate and intricate life, magnifying the vibrant ecosystems of our world.
                    i invite viewers to step into the microscope and witness the whimsical proboscis of a butterfly, the iridescent sheen of a dragonfly, or the solemn gaze of a crow.
                    <br/><br/>
                    in a time when biodiversity is dwindling at an alarming rate, I aim to create more than just portraits.
                    these images are meant to provoke reflection; a meditative pause in our chaotic world where the beauty of life is slipping away unnoticed.
                    my photographs act as elegies for what we stand to lose if we do not act.
                    <br/><br/>
                    don't hesitate to reach out if you'd like to collaborate!
                </p>
            {/if}
            <div class="flex flex-col gap-2 w-full items-center mt-2">
                <p
                    class="text-xs text-slime px-2 underline decoration-1 underline-offset-8 mb-2"
                >
                    GET IN TOUCH
                </p>
                <a
                    href="mailto:tbt@slimemold.me"
                    onclick={e=>{e.stopPropagation()}}
                    class="
                        flex flex-row items-center gap-2 px-2
                        text-sm text-slime group
                        hover:text-emerald-500
                    "
                >
                    <span class="icon-[streamline-pixel--email-envelope] group-hover:animate-spin"></span>
                    <span class="group-hover:underline decoration-1 underline-offset-4">tbt@slimemold.me</span>
                </a>
                <a
                    href="https://reddit.com/u/formicidwanderer/submitted"
                    onclick={e=>{e.stopPropagation()}}
                    target="_blank"
                    rel="noreferrer"
                    class="
                        flex flex-row items-center gap-2 px-2
                        text-sm text-slime group
                        hover:text-emerald-500
                    "
                >
                    <span class="icon-[pixel--reddit] group-hover:animate-spin"></span>
                    <span class="group-hover:underline decoration-1 underline-offset-4">formicidwanderer</span>
                </a>
                <a
                    href="https://bsky.app/profile/autumnmeadowhawk.bsky.social"
                    onclick={e=>{e.stopPropagation()}}
                    target="_blank"
                    rel="noreferrer"
                    class="
                        flex flex-row items-center gap-2 px-2
                        text-sm text-slime group
                        hover:text-emerald-500
                    "
                >
                    <span class="icon-[pixel--bluesky] group-hover:animate-spin"></span>
                    <span class="group-hover:underline decoration-1 underline-offset-4">autumnmeadowhawk</span>
                </a>
                <a
                    href="https://www.inaturalist.org/people/autumnmeadowhawk"
                    onclick={e=>{e.stopPropagation()}}
                    target="_blank"
                    rel="noreferrer"
                    class="
                        flex flex-row items-center gap-2 px-2
                        text-sm text-slime group
                        hover:text-emerald-500
                    "
                >
                    <span class="icon-[academicons--inaturalist] group-hover:animate-spin"></span>
                    <span class="group-hover:underline decoration-1 underline-offset-4">autumnmeadowhawk</span>
                </a>
                <a
                    href="https://github.com/thurber"
                    onclick={e=>{e.stopPropagation()}}
                    target="_blank"
                    rel="noreferrer"
                    class="
                        flex flex-row items-center gap-2 px-2
                        text-sm text-slime group
                        hover:text-emerald-500
                    "
                >
                    <span class="icon-[pixel--github] group-hover:animate-spin"></span>
                    <span class="group-hover:underline decoration-1 underline-offset-4">thurber</span>
                </a>
            </div>
        </button>
    </Flipper>
</div>

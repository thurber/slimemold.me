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
    <Flipper class="lg:flex-1 w-96 lg:w-auto h-96 lg:h-[30rem] lg:self-stretch">
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
                    <span>Fujifilm GF 45mm f/2.8 lens</span>
                    <span>Nikon 200mm f/4 macro lens</span>
                    <span>Zeiss 120mm f/4 macro lens</span>
                    <span>Godox V860III flash</span>
                    <span>Fringer adapters (C645 and NF)</span>
                </div>
            {:else}
                <p
                    class="
                        w-full h-min object-cover text-slime text-sm px-2 text-justify
                    "
                >
                    hi, i'm travis, a macro & wildlife photographer in Seattle, Washington, USA.
                    i'm passionate about the lifeforms all around us and their little details that often go unnoticed.
                    you may stumble across me bumbling around the parks and nature preserves in the Pacific Northwest lugging a giant camera and awkwardly peering into a bush.
                    <br/><br/>
                    don't hesitate to reach out if you'd like to collaborate or even just chat!
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

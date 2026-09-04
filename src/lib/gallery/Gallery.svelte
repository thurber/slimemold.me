<script>
    import { DateTime } from "luxon";
    import { base } from "$app/paths";
    import { photomode } from "$lib/stores";
    import { fade } from "svelte/transition";
    import Flipper from "$lib/Flipper.svelte";
    import Contact from "$lib/Contact.svelte";
    import photos from "$lib/photos.json";
    import details from "$lib/details";
    import { PUBLIC_LAST_UPDATED } from '$env/static/public';

    const lastUpdated = DateTime.fromISO(
        PUBLIC_LAST_UPDATED
    ).toLocaleString({
        ...DateTime.DATE_MED_WITH_WEEKDAY,
        ...DateTime.TIME_24_WITH_SHORT_OFFSET,
    });

    const lastUpdatedShort = DateTime.fromISO(
        PUBLIC_LAST_UPDATED
    ).toLocaleString({
        ...DateTime.DATE_MED_WITH_WEEKDAY
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let sortedPhotos = $state(shuffleArray(photos));
    let sortMethod = $state('random');

    const sortPhotos = (how) => {
        if ((how!==sortMethod) || (how==='random')) {
            sortMethod = how;
            sortedPhotos = [];
            setTimeout(() => {
                if (how === 'random') {
                    sortedPhotos = [...shuffleArray(photos)];
                }
                else {
                    photos.sort((a, b) => {
                        const adt = DateTime.fromISO(details[a].time);
                        const bdt = DateTime.fromISO(details[b].time);
                        return bdt < adt ? -1 : bdt > adt ? 1 : 0;
                    });
                    sortedPhotos = [...photos];
                }
            }, 50);
        }
    }

    let visible = $state(false);

    $effect(() => {
        setTimeout(() => {
            visible = true;
            $photomode = 'photo';
        }, 200);
    });

</script>

{#if visible}
    <div
        transition:fade
        class="flex flex-col items-center w-full"
    >
        <div
            class="flex flex-col gap-2 items-center"
        >
            <div class="flex flex-row items-center gap-2">
                <span class="text-xs text-slime">Sort:</span>
                {#each [
                    ['random', 'icon-[streamline-pixel--entertainment-events-hobbies-board-game-dice]'],
                    ['recency', 'icon-[pixelarticons--clock]']
                ] as [text, icon]}
                    <button
                        class="
                            text-xs px-1.5 pt-px pb-0.5 rounded border
                            flex flex-row items-center gap-1 cursor-pointer transition-all z-20
                            hover:outline-2 hover:outline-emerald-500/75 hover:outline-offset-2 hover:outline-double hover:border-emerald-500
                            active:outline-2 active:outline-emerald-400/75 active:outline-offset-3 active:outline-double active:border-emerald-400
                            active:inset-shadow-xs active:inset-shadow-white/25
                            {text===sortMethod
                                ? 'text-emerald-500 outline-1 outline-emerald-500/75 outline-offset-1 border-emerald-500'
                                : 'text-slime border-slime'
                            }
                        "
                        onclick={() => sortPhotos(text)}
                    >
                        <span class="{icon} mt-px"></span> {text}
                    </button>
                {/each}
            </div>
            <span class="text-slime text-xs">Updated: {lastUpdatedShort}</span>
        </div>
        <div
            class="
                flex flex-row flex-wrap items-center justify-center gap-4 my-4
            "
        >
            {#each sortedPhotos as p (p)}
                <Flipper
                    class="
                        w-64 h-64 hover:scale-110 transition-transform hover:z-30
                        hover:outline-2 hover:outline-double hover:border
                        outline-offset-3 outline-emerald-400/75  border-emerald-400
                    "
                >
                    <a
                        class="
                            block
                            w-full h-full object-cover bg-black
                            border-2 border-slime/25 cursor-pointer p-0.5
                        "
                        href='#{p}'
                    >
                        <img
                            loading="lazy"
                            class="
                                w-full h-full object-cover
                            "
                            src="{base}/img/{$photomode}/sm/{p}.webp"
                            alt="{p}"
                        />
                    </a>
                </Flipper>
            {/each}
        </div>
        <Contact />
    </div>
{/if}
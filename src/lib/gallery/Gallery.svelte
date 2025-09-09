<script>
    import { DateTime } from "luxon";
    import { base } from "$app/paths";
    import { photomode, lightboxphoto } from "$lib/stores";
    import { fade } from "svelte/transition";
    import Flipper from "$lib/Flipper.svelte";
    import photos from "$lib/photos.json";
    import details from "$lib/details";
    import { PUBLIC_LAST_UPDATED } from '$env/static/public';

    const lastUpdated = DateTime.fromISO(
        PUBLIC_LAST_UPDATED
    ).toLocaleString({
        ...DateTime.DATE_MED_WITH_WEEKDAY,
        ...DateTime.TIME_24_WITH_SHORT_OFFSET,
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let sortedPhotos = $state(shuffleArray(photos));

    const sortPhotos = (how) => {
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

</script>

<div
    transition:fade
    class="flex flex-col items-center mt-4 w-full"
>
    <div
        class="
            flex flex-col md:flex-row md:items-center gap-2 w-full px-8
        "
    >
        <div class="flex flex-row items-center gap-2">
            <span class="text-xs text-slime">Sort by:</span>
            {#each [
                ['random', 'icon-[streamline-pixel--entertainment-events-hobbies-board-game-dice]'],
                ['recency', 'icon-[pixelarticons--clock]']
            ] as [text, icon]}
                <button
                    class="
                        text-xs px-1.5 pt-px pb-0.5 rounded border border-slime text-slime
                        flex flex-row items-center gap-1 cursor-pointer transition-all
                        hover:outline-2 hover:outline-emerald-500/75 hover:outline-offset-2 hover:outline-double hover:border-emerald-500
                        active:outline-2 active:outline-emerald-400/75 active:outline-offset-3 active:outline-double active:border-emerald-400
                        active:inset-shadow-xs active:inset-shadow-white/25
                    "
                    onclick={() => sortPhotos(text)}
                >
                    <span class="{icon} mt-px"></span> {text}
                </button>
            {/each}
        </div>
        <span class="md:ml-auto text-slime text-xs">Last updated: {lastUpdated}</span>
    </div>
    <div
        class="
            flex flex-row flex-wrap items-center justify-center gap-4 my-8
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
                <button
                    class="
                        w-full h-full object-cover bg-black
                        border-2 border-slime/25 cursor-pointer p-0.5
                    "
                    onclick={() => { $lightboxphoto = p }}
                >
                    <img
                        loading="lazy"
                        class="
                            w-full h-full object-cover
                        "
                        src="{base}/img/{$photomode}/sm/{p}.webp"
                        alt="{p}"
                    />
                </button>
            </Flipper>
        {/each}
    </div>
</div>

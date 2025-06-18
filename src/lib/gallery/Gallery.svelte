<script>
    import { base } from "$app/paths";
    import { photomode, lightboxphoto } from "$lib/stores";
    import { fade } from "svelte/transition";
    import Flipper from "$lib/Flipper.svelte";

    import photos from "$lib/photos.json";


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffled = shuffleArray(photos);

</script>

<div
    out:fade
    class="
        flex flex-row flex-wrap items-center justify-center gap-4 my-8
    "
>
    {#each shuffled as p (p)}
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

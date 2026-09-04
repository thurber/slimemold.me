<script>

    import { fade } from "svelte/transition";

    import Flipper from "$lib/Flipper.svelte";
    import Contact from "$lib/Contact.svelte";

    import meSlime from "$lib/img/cyberslime-tbterracotta.jpg";
    import me from "$lib/img/tbterracotta.jpg";

    let terracottaSwapped = $state(true);

</script>

<div
    class=""
>

    <div class="flex flex-col-reverse md:flex-row">
        <Flipper class="h-96 md:w-96 md:h-auto relative">
            <button
                class="w-full h-full flex flex-col items-center py-1 px-4 gap-4 cursor-pointer"
                onclick={() => terracottaSwapped=!terracottaSwapped}
            >
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
        <p
            class="
                w-72 md:w-96 object-cover text-slime text-xs md:text-sm px-2 pb-4 text-justify
            "
        >
            Hi, I'm travis, a macro & wildlife photographer based in Seattle, Washington.
            <br/><br/>
            In the quiet world of small creatures, a complex and often unnoticed beauty thrives.
            My work seeks to reveal this delicate and intricate life, magnifying the vibrant ecosystems of our world.
            I invite viewers to step into the microscope and witness the whimsical proboscis of a butterfly, the iridescent sheen of a dragonfly, or the solemn gaze of a crow.
            <br/><br/>
            In a time when biodiversity is dwindling at an alarming rate, I aim to create more than just portraits.
            These images are meant to provoke reflection; a meditative pause in our chaotic world where the beauty of life is slipping away unnoticed.
            My photographs act as elegies for what we stand to lose if we do not act.
        </p>
    </div>

    <Contact />

</div>

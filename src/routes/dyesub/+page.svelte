<script>

    import { fade } from "svelte/transition";

    import Flipper from "$lib/Flipper.svelte";
    import Contact from "$lib/Contact.svelte";

    import printsPicSlime from "$lib/img/dyesub_slimed.jpg";
    import printsPic from "$lib/img/dyesub.jpg";

    let printSwapped = $state(true);

    const examplePrices = [
        {
            medium: 'medium',
            options: ['options'],
            price: 'price',
        },
        {
            medium: 'light color t-shirt',
            options: ['size', 'front/back'],
            price: '$30',
        },
        {
            medium: 'aluminum panel 4x6',
            options: ['matte/gloss', 'invisible frame'],
            price: '$35',
        },
        {
            medium: 'aluminum panel 5x7',
            options: ['matte/gloss', 'invisible frame'],
            price: '$45',
        },
        {
            medium: 'aluminum panel 8x12',
            options: ['matte/gloss', 'invisible frame'],
            price: '$55',
        },
    ];

</script>

<div
    class=""
>

    <div class="flex flex-col-reverse md:flex-row items-center md:items-start">
        <Flipper class="h-50 md:h-64 w-72 md:w-96 relative">
            <button
                class="w-full h-full flex flex-col items-center py-1 px-4 gap-4 cursor-pointer"
                onclick={() => printSwapped=!printSwapped}
            >
                <div class="w-full h-full relative">
                    {#key printSwapped}
                        <img
                            transition:fade
                            alt='me'
                            src={printSwapped ? printsPic : printsPicSlime}
                            class="absolute w-full h-full object-contain object-top"
                        />
                    {/key}
                </div>
            </button>
        </Flipper>
        <div
            class="
                w-72 md:w-96 object-cover text-slime text-xs md:text-sm px-2 md:pb-4 text-justify
            "
        >
            <p>
                I can print your photos or images onto a variety of media such as t-shirts and aluminum panels using <a
                    href="https://en.wikipedia.org/wiki/Dye-sublimation_printing"
                    rel="noreferrer"
                    target="_blank"
                    class="cursor-pointer hover:text-emerald-500 underline underline-offset-4"
                >dye sublimation</a>.
                <br/><br/>
                This processes fuses dye with the material in a vibrant and durable way, such that the resulting print is highly fade and wash resistant.
                <br/><br/>
                I provide this service at cost plus $25/hour for my time, and can provide quick turnaround if the materials are readily available.
                <br/><br/>
            </p>
        </div>
    </div>
    <div class="text-xs md:text-sm flex flex-col items-center text-start text-slime mt-6 md:mt-2">
        <p>
            Approximate prices for various media:
            <br/><br/>
        </p>
        {#each examplePrices as p}
            <div class="flex flex-row items-center not-last:border-b first-of-type:text-emerald-500 first-of-type:font-bold">
                <p class="w-36 md:w-44">{p.medium}</p>
                <div class="w-24 md:w-36 border-x border-slime p-2">
                    {#each p.options as o}
                        <p class="">{o}</p>
                    {/each}
                </div>
                <p class="w-12 md:w-16 pl-2">{p.price}</p>
            </div>
        {/each}
    </div>
    <p class="text-slime text-xs md:text-sm w-72 md:w-full text-center">
        <br/><br/>
        Email me at <a
            href="mailto:travis@slimemold.me"
            class="cursor-pointer hover:text-emerald-500 underline underline-offset-4"
        >travis@slimemold.me
        </a> or call at <a
            href="tel:9196161150"
            class="cursor-pointer hover:text-emerald-500 underline underline-offset-4"
        >919.616.1150
        </a> to arrange your prints.
    </p>

    <Contact />

</div>

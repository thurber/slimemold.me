<script>
    import { fade } from "svelte/transition";
    import { base } from "$app/paths";
    import { photomode, lightboxphoto } from "./stores";
</script>

<div
    transition:fade
    class="
        w-full h-full p-4 overflow-y-auto
        flex flex-col items-center text-slime text-center
    "
>
    <h2 class="text-base md:text-lg font-semibold mb-2">
        purchase an aluminum sublimation print
    </h2>
    <span class="hidden sm:block text-sm leading-5 mb-4">
        i print, press, and ship these myself
        <br/>
        watermark will not be present on the print
        <br/>
        mount using command strips or reach out about custom frames
        <br/>
        <a href="mailto:tbt@slimemold.me" class="underline underline-offset-4">email me</a> for custom sizes or special requests
    </span>
    {#each [
        { width: 4, height:  6, price: 30, class: "w-16 md:w-20", buy: 'https://buy.stripe.com/5kQaEZ78qeOncQB1TU9oc01', },
        { width: 5, height:  7, price: 50, class: "w-20 md:w-40", buy: 'https://buy.stripe.com/cNi6oJ0K235F9EpdCC9oc00', },
        { width: 8, height: 10, price: 75, class: "w-32 md:w-64", buy: 'https://buy.stripe.com/bJecN7dwO0XxaIt5669oc02', },
    ] as l}
        <div class="flex flex-row gap-4 my-4">
            <div class="w-32 md:w-64 flex flex-col items-end justify-center">
                <div class={l.class}>
                    <img
                        alt="{$lightboxphoto} {$photomode}"
                        src="{base}/img/{$photomode}/lg/{$lightboxphoto}.webp"
                        class="object-contain w-full h-full object-right"
                    />
                </div>
            </div>
            <div class="w-32 md:w-64 flex flex-row items-center h-auto gap-4">
                <span class="text-xs md:text-sm w-12 md:w-20 whitespace-nowrap">{l.width}″ x {l.height}″</span>
                <span class="text-xs md:text-sm w-8 md:w-12 whitespace-nowrap">${l.price}</span>
                <a
                    class="
                        w-12 md:w-16 p-1 flex flex-row items-center gap-2 justify-center
                        bg-slime text-white text-xs md:text-sm
                        border border-slime
                        outline-offset-2 outline-emerald-500/75
                        hover:border-emerald-500 hover:outline-double
                        active:border-emerald-400 active:outline-double active:outline-emerald-400/75 active:outline-offset-3
                    "
                    target="_blank"
                    href="{l.buy}?client_reference_id={$lightboxphoto}_{$photomode}"
                >
                    buy
                </a>
            </div>
        </div>
    {/each}
</div>

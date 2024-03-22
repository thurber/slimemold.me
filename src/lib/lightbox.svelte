<script>
    import Image from '$lib/image.svelte';

    export let src;
    export let placeholder = '';
    export let wrecked = '';
    export let buyURL = '';
</script>

<div class="w-full h-fit flex flex-col">
    <Image
        large
        class="w-full max-w-full sm:max-h-[75vh] object-contain"
        {src}
        {placeholder}
        {wrecked}
    />
    <div class="w-full bg-black px-2 pt-2 pb-1 flex flex-row items-center justify-center">
        <span class="text-xs sm:text-base text-white mr-2">
            Help me survive in this cruel world:
        </span>
    </div>
    <div class="w-full bg-black px-2 p-0.5 flex flex-row items-center justify-center">
        <a
            target="_blank"
            rel="noreferrer noopener"
            href={buyURL}
            class="group text-xs sm:text-base text-[#0094c1] hover:text-[#00b0a8] flex flex-row items-center"
        >
            <span
                class="text-transparent text-sm sm:text-lg mr-1"
                style="text-shadow: 0 0 0 #e7d056, 1px 1px 0 black, 0px 1px 0 rgba(255,255,255,0.25);"
            >
                💲
            </span>
            <span class="group-hover:underline underline-offset-4">
                Purchase a metal print!
            </span>
            <span
                class="text-sm sm:text-lg ml-1"
            >
                🗿 🤘🏽 👩🏽‍🎤 
            </span>
        </a>
    </div>
    <div class="w-full bg-black px-2 pt-0.5 pb-2 flex flex-row items-center justify-center">
        <span
                class="text-transparent text-sm sm:text-lg mr-1"
                style="text-shadow: 0 0 0 #e7d056, 1px 1px 0 black, 0px 1px 0 rgba(255,255,255,0.25);"
            >
                @
            </span>
        <a
            target="_blank"
            rel="noreferrer noopener"
            href="mailto:myxomycete@protonmail.com"
            class="group text-xs sm:text-base text-[#0094c1] hover:text-[#00b0a8] flex flex-row items-center"
        >
            <span class="group-hover:underline underline-offset-4">
                Contact me to license for digital use. 
            </span>
        </a>
        <span
            class="text-sm sm:text-lg ml-1"
        >
            👩🏽‍⚖️ 🪪 
        </span>
    </div>
</div>


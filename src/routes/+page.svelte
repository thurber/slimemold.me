<script>
    import { onMount, getContext } from 'svelte';
    import { base } from '$app/paths';
    const { open } = getContext('simple-modal');
    import WordShuffler from '$lib/word-shuffler';
    import shuffleArray from '$lib/shuffle';
    import Lightbox from '$lib/lightbox.svelte';
    import Image from '$lib/image.svelte';

    const fencerLeftColors = [
        '#e6680c',
        '#dc5e0e',
        '#d1530f',
        '#c74910',
        '#bc3f10',
        '#b13510',
        '#a62a10',
        '#9b200f',
        '#8f140e',
        '#84050c',
    ];
    const fencerRightColors = [
        '#62fa27',
        '#00f065',
        '#00e39a',
        '#00d4cc',
        '#00c2f9',
        '#00b0ff',
        '#009aff',
        '#0080ff',
        '#005eff',
        '#472ae3',
    ];

    const styles = [
        'photo',
        'noir',
        'ascii',
    ];

    const images = shuffleArray([
        'abstract_01',
        'camel_sunset',
        'channels',
        'clouds_01',
        'dandelion_01',
        'darkshroom',
        'diaspora_01',
        'dogs_01',
        'dolichovespula_maculata',
        'heron',
        'kirkjufellfoss_01',
        'mopop_01',
        'moth_01',
        'mushroom_01',
        'shiva_01',
        'sunrise_01',
        'tiger_moth',
        'wasp_01',
        'waterfall_park_01',
    ]);

    const lightbox = (src, placeholder, wrecked, buyURL ) => open(Lightbox, { src, placeholder, wrecked, buyURL });

    let style = styles[0];

    let baseBuyURL;

    onMount(() => {
        const slime = document.getElementById('slime');
        const mold = document.getElementById('mold');
        const me = document.getElementById('me');
        new WordShuffler(slime, {
            fps: 18,
            fontSize: '36px',
            textColor : '#18ea1c70',
            timeOffset : 12,
            mixCapital : true,
            mixSpecialCharacters : true
        });
        new WordShuffler(mold, {
            fps: 15,
            fontSize: '36px',
            textColor : '#27c97570',
            timeOffset : 15,
            mixCapital : true,
            mixSpecialCharacters : true
        });
        new WordShuffler(me, {
            fps: 12,
            fontSize: '36px',
            textColor : '#f70bec80',
            timeOffset : 20,
            mixCapital : true,
            mixSpecialCharacters : true
        });
        baseBuyURL =  `https://www.pictorem.com/order.html?apiid=AI8NTM10LNO&import=${window.location.origin}${base.startsWith('/') || window.location.origin.endsWith('/') ? '' : '/'}${base}${!base || base.endsWith('/') ? '' : '/'}`;
    });

</script>

<div class="px-8 pt-3 flex flex-col lg:flex-row w-full gap-4 items-center">
    <div class="flex flex-col shrink-0 w-fit gap-4 items-center">
        <div class="flex flex-col w-fit gap-2 relative">
            <div
                class="flex flex-row justify-between"
            >
                <div class="flex flex-row delay-left animate-[spin_5s_ease-in-out_alternate_2]">
                    <span class="">🦠</span>
                    <span class="mt-auto">🦠</span>
                </div>
                <h1 class="text-2xl sm:text-4xl font-extrabold w-full text-center tracking-widest px-2">
                    <span id='slime' class="text-[#18ea1c70] moldy">
                        slime</span><span id='mold' class="text-[#27c97570] moldy">
                            mold</span><span class="text-[#ffffffd0] moldy" style="--c: #dfcca71a">
                                .</span><span id='me' class="text-[#f70bec80] moldy" style="--c: #f70bec1a;">
                                    me</span>
                </h1>
                <div class="flex flex-row delay-right animate-[spin_5s_ease-in-out_1]">
                    <span class="">🦠</span>
                    <span class="mt-auto">🦠</span>
                </div>
            </div>
            <div class="font-pixel flex flex-col w-fit gap-2">
                <div class="font-bold text-lg sm:text-xl flex flex-row justify-center gap-4">
                    <div class="flex flex-row">
                        {#each fencerLeftColors as c}
                            <span
                                class="scale-x-[-1] origin-right text-transparent w-[0.33rem] opacity-75"
                                style="text-shadow: 0 0 0 {c}"
                            >🤺</span>
                        {/each}
                        <span class="scale-x-[-1] w-[0.33rem]" style="text-shadow: 0 0 0 black">🤺</span>
                    </div>
                    <h2 class="">freelance</h2>
                    <div class="flex flex-row-reverse">
                        {#each fencerRightColors as c}
                            <span class="text-transparent w-[0.33rem] opacity-75" style="text-shadow: 0 0 0 {c}">🤺</span>
                        {/each}
                        <span class="w-[0.33rem] z-10" style="text-shadow: 0 0 0 black">🤺</span>
                    </div>
                </div>
                <div class="text-sm sm:text-lg flex flex-row justify-between gap-2 sm:gap-4">
                        <span class="">📸</span>
                        <h2 class="">photography & computation</h2>
                        <span class="">💾</span>
                </div>
                <div class="text-sm sm:text-base text-gray-200 flex flex-row justify-center gap-4">
                    <span class="">☕️</span>
                    <h2 class="">seattle, wa</h2>
                    <span class="">🌲</span>
                </div>
            </div>
            <div class="text-base sm:text-lg flex flex-row items-center justify-center mb-7">
                <span class="">
                    @: 
                </span> <a class="text-[#0094c1] hover:text-[#00b0a8]"
                        href="mailto:myxomycete@protonmail.com"
                        target="_blank"
                        rel="noopener noreferrer">
                    myxomycete@protonmail.com
                </a>
            </div>
            <div class="holo self-center"></div>
        </div>
        <div class="text-xs sm:text-base mb-2 sm:mb-3 flex-1 flex-col items-center justify-center sm:px-2 flex lg:hidden">
            <div class="">
                <p class="border-b border-b-white w-fit mb-1">Available for:</p>
                <div class="">
                    <span class="text-[#bc62d1]">➳</span>
                    <span class="text-[#00c094] ml-[-1.25rem]">➳</span>
                    <span class="ml-[-1.25rem]">➳</span>
                    <span>unique photographic assignments</span>
                </div>
                <div class="">
                    <span class="text-[#700036]">➳</span>
                    <span class="text-[#4d97fb] ml-[-1.25rem]">➳</span>
                    <span class="ml-[-1.25rem]">➳</span>
                    <span>divergent web development</span>
                </div>
                <div class="">
                    <span class="text-[#006573]">➳</span>
                    <span class="text-[#f7310e] ml-[-1.25rem]">➳</span>
                    <span class="ml-[-1.25rem]">➳</span>
                    <span>multithreaded scientific computing</span>
                </div>
            </div>
        </div>
        <div class="radio-group flex flex-row items-center justify-center ">
            <span class="text-xs sm:text-sm font-light text-[#ffffffd0] moldy" style="--c: #dfcca71a">style: </span>
            {#each styles as s}
                <label class="ml-2 sm:ml-4 relative pl-[40px] inline-block text-xs sm:text-sm font-pixel cursor-pointer">
                    <input name="styles" class="opacity-0 absolute" type="radio" value={s} bind:group={style} checked={style==s} />
                    <span class="radio-label">{s}</span>
                </label>
            {/each}
        </div>
    </div>
    <div class="flex-1 flex-col items-center justify-center text-base hidden lg:flex">
        <div class="">
            <p class="border-b border-b-white w-fit mb-1">Available for:</p>
            <div class="">
                <span class="text-[#bc62d1]">➳</span>
                <span class="text-[#00c094] ml-[-1.25rem]">➳</span>
                <span class="ml-[-1.25rem]">➳</span>
                <span>unique photographic assignments</span>
            </div>
            <div class="">
                <span class="text-[#700036]">➳</span>
                <span class="text-[#4d97fb] ml-[-1.25rem]">➳</span>
                <span class="ml-[-1.25rem]">➳</span>
                <span>divergent web development</span>
            </div>
            <div class="">
                <span class="text-[#006573]">➳</span>
                <span class="text-[#f7310e] ml-[-1.25rem]">➳</span>
                <span class="ml-[-1.25rem]">➳</span>
                <span>multithreaded scientific computing</span>
            </div>
        </div>
    </div>
</div>
{#if baseBuyURL}
    <div class="overflow-hidden columns-1 sm:columns-2 lg:columns-3 gap-5 px-8 py-4">
        {#each images as i}
            <div
                tabindex="0"
                role="button"
                class="group w-full mb-5 max-w-md overflow-hidden relative rounded cursor-zoom-in {style}"
                on:click={() => {
                    lightbox(
                        `/photos/original/${style}/${i}.jpg`,
                        `/photos/${style}/${i}.webp`,
                        `/photos/wrecked/${i}.webp`,
                        `${baseBuyURL}photos/original/${style}/${i}.jpg`,
                    )
                }}
                on:keypress={() => {
                    lightbox(
                        `/photos/original/${style}/${i}.jpg`,
                        `/photos/${style}/${i}.webp`,
                        `/photos/wrecked/${i}.webp`,
                        `${baseBuyURL}photos/original/${style}/${i}.jpg`,
                    )
                }}
            >

                <div class="w-full h-full absolute">
                    <Image class="w-full" src={`/photos/${style}/${i}.webp`} wrecked={`/photos/wrecked/${i}.webp`} />
                </div>
                <div class="w-full p-0.5 group-active:p-1 rounded overflow-hidden backdrop-blur-lg backdrop-grayscale">
                    <Image class="w-full rounded-sm" src={`/photos/${style}/${i}.webp`} wrecked={`/photos/wrecked/${i}.webp`} />
                </div>
                <div class="absolute bottom-0 right-0 px-4 py-2 flex flex-row gap-2">
                    <a
                        target="_blank"
                        href="{baseBuyURL}photos/original/{style}/{i}.jpg"
                        rel="noreferrer noopener"
                        class="w-7 h-7 rounded-lg transition-all bg-white/10 hover:bg-white/25 shadow shadow-black/50 flex items-center justify-center"
                    >
                        <span
                            class="text-transparent text-lg hover:text-xl transition-all"
                            style="text-shadow: 0 0 0 #e7d056, 1px 1px 0 black, 0px 1px 0 rgba(255,255,255,0.25);"
                        >
                            💲
                        </span>
                    </a>
                </div>
            </div>
        {/each}
    </div>
{/if}

<style>
    .moldy {
        --c: #1dd3b01a;
        text-shadow:
            1px 1px var(--c),
            2px 2px var(--c),
            3px 3px var(--c),
            4px 4px var(--c),
            5px 5px 2px var(--c);
        transform: skew(-15deg);
    }
    .delay-left {
        animation-delay: 5s
    }
    .delay-right {
        animation-delay: 8s
    }
    .radio-label::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 30px;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.25);
        transition: border-bottom 0.5s ease;
    }
    input:focus ~ .radio-label::before {
        border-bottom: 1px solid rgba(255, 255, 255, 0.75);
    }
    input:checked ~ .radio-label::after {
        content: '\2713';
        color: #fff;
        position: absolute;
        font-size: 12px;
        left: 12px;
        top: 1px;
    }
    .photo {
        --shade: 72, 103, 128;
    }
    .noir {
        --shade: 111, 111, 111;
    }
    .ascii {
        --shade: 228, 170, 58;
    }
    .photo, .noir, .ascii {
        will-change: box-shadow;
        transition: box-shadow 200ms ease-in;
        box-shadow: 
            rgba(var(--shade), 0.3) -3px 3px 0 0, 
            rgba(var(--shade), 0.2) -6px 6px 0 0, 
            rgba(var(--shade), 0.1) -9px 9px 0 0, 
            rgba(var(--shade), 0.05) -12px 12px 0 0, 
            rgba(var(--shade), 0.025) -15px 15px 0 0;
    }
    .photo:hover, .noir:hover, .ascii:hover {
        box-shadow: 
            rgba(var(--shade), 0.4)  0 0 0 3px, 
            rgba(var(--shade), 0.3)  0 0 0 6px, 
            rgba(var(--shade), 0.2)  0 0 0 9px, 
            rgba(var(--shade), 0.1)  0 0 0 12px, 
            rgba(var(--shade), 0.05) 0 0 0 15px;
    }
    .holo {
        z-index: 2;
        position: absolute;
        bottom: 0;
        width: 75%;
        height: 5px;
        margin: -5px auto 0;
        background-color: #00FCFC59;
        border-radius: 100%;
        filter: blur(2.5px);
        transform: perspective(100px) rotateX(-30deg);
        transform-style: preserve-3d;
        animation: holographic 5s 1 ease-in-out alternate;
        backface-visibility: hidden;
        opacity: .5;
    }
    .holo::after {
        position: absolute;
        bottom: 0;
        left: -10px;
        right: -10px;
        content: "";
        height: 10px;
        background-color: #00FCFC80;
        border-radius: 100%;
        filter: blur(5px);
    }

    @keyframes holographic {
        from {
            will-change: box-shadow;
            box-shadow:
                0 -75px 5px #00FCFC26,
                0 -1px 2px #00FCFC80,
                0 -45px 5px #00FCFC26,
                0 -2px 3px #00FCFC80,
                0 -3px 4px #00FCFC80,
                0 -4px 6px #00FCFC80,
                0 -5px 10px #00FCFCbf,
                0 -7px 20px #00FCFCbf,
                0 -10px 30px #00FCFCbf,
                0 -15px 40px #00FCFCbf,
                0 -25px 50px #00FCFCbf,
                0 -35px 60px #00FCFCd9,
                0 -45px 70px #00FCFCf2,
                0 -65px 80px #00FCFCff,
                0 -75px 90px #00FCFCff;
        } to {
            will-change: unset;
            box-shadow:
                0 -1px 5px #00FCFC26,
                0 -1px 2px #00FCFC80,
                0 -1px 5px #00FCFC26,
                0 -2px 3px #00FCFC80,
                0 -3px 4px #00FCFC80,
                0 -4px 6px #00FCFC80,
                0 -5px 7px #00FCFCbf,
                0 -7px 10px #00FCFCbf,
                0 -10px 15px #00FCFCbf,
                0 -15px 20px #00FCFCbf,
                0 -25px 25px #00FCFCbf,
                0 -35px 30px #00FCFCd9,
                0 -45px 35px #00FCFCf2,
                0 -65px 40px #00FCFCff,
                0 -75px 50px #00FCFCff;
        }
    }
</style>

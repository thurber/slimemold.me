<script>
    import WordShuffler from '$lib/word-shuffler';
    import { photomode } from "$lib/stores";
    import HyperLiner from './HyperLiner.svelte';
    import ElectricPulse from './ElectricPulse.svelte';
    import Button from "./Button.svelte";
    import logo from "$lib/img/tbt_stamp.png";

    let {
        selected = $bindable(),
    } = $props();

    let slimeEl = $state();
    let moldEl = $state();
    let meEl = $state();
    let aboutEl = $state();
    let photoEl = $state();

    let swung = $state(false);
    let hyper = $state(true);
    let leftLaser = $state(false);
    let rightLaser = $state(false);

    let rotation = $state(0);

    const rotate = (direction) => {
        rotation = rotation + direction * 30;
    };

    const select = (item) => {
        if (selected===item) {
            selected = undefined;
            swung = false;
        }
        else {
            swung=false;
            selected = item;
            if (item === 'photography') {
                $photomode = 'photo';
            }
            hyper = true;
            setTimeout(() => {
                swung = true;
                if (selected==='slimemold') {
                    setTimeout(() => {
                        selected = undefined;
                        swung = false;
                    }, 1000);
                }
            }, 1000);
        }

    }

    $effect(() => {
        if (hyper)
            setTimeout(() => { hyper = false }, Math.floor(Math.random() * (5000 - 1000 + 1) + 1000));
    });

    $effect(() => {
        if (leftLaser)
            setTimeout(() => { leftLaser = false }, Math.floor(Math.random() * (5000 - 1000 + 1) + 1000));
    });

    $effect(() => {
        if (rightLaser)
            setTimeout(() => { rightLaser = false }, Math.floor(Math.random() * (5000 - 1000 + 1) + 1000));
    });

    $effect(() => {
        if (slimeEl && moldEl && meEl && aboutEl && photoEl) {
            new WordShuffler(slimeEl, {
                fps: 18,
                fontSize: '16px',
                textColor : '#18ea1caa',
                timeOffset : 12,
                mixCapital : true,
                mixSpecialCharacters : true
            });
            new WordShuffler(moldEl, {
                fps: 15,
                fontSize: '16px',
                textColor : '#27c975aa',
                timeOffset : 14,
                mixCapital : true,
                mixSpecialCharacters : true
            });
            new WordShuffler(meEl, {
                fps: 12,
                fontSize: '16px',
                textColor : '#f70becbb',
                timeOffset : 20,
                mixCapital : true,
                mixSpecialCharacters : true
            });
            new WordShuffler(aboutEl, {
                fps: 18,
                fontSize: '16px',
                textColor : '#18ea1caa',
                timeOffset : 7,
                mixCapital : true,
                mixSpecialCharacters : true
            });
            new WordShuffler(photoEl, {
                fps: 18,
                fontSize: '16px',
                textColor : '#18ea1caa',
                timeOffset : 5,
                mixCapital : true,
                mixSpecialCharacters : true
            });
        }
    });

</script>

<div
    class="
        w-96 h-96 flex flex-row items-center justify-center relative
        origin-center text-lg font-bold tracking-widest
        border border-slime rounded-full box-content
        transition-transform duration-150 ease-in-out
    "
    style={`transform: rotate(${rotation}deg);`}
>
    {#if hyper}
        <div
            class="absolute top-0 left-0 right-0 bottom-0"
        >
            <HyperLiner />
        </div>
    {/if}
    <div
        class="
            absolute -top-12 -left-12 -right-12 -bottom-12 opacity-0
            {hyper ? 'animate-[pulse_150ms_250ms_alternate_4]' : ''}
        "
    >
        <img
            alt=""
            src={logo}
            class="w-full h-full object-contain"
        />
    </div>
    {#each [0, 1] as i}
        {#each [0, 1] as j}
            <button
                onclick={j===1 ? () => rotate(i===0 ? -1 : 1) : undefined}
                aria-label="<|>"
                class="
                    icon-[arcticons--emoji-satellite-antenna]
                    absolute -top-4 text-9xl 
                    {i===0 ? '-left-20 -rotate-55' : '-right-20 rotate-55 -scale-x-100'}
                    {j===0 ? 'text-slime/50' : 'text-black cursor-pointer'}
                    {j===0 ? '' : (i===0 ? 'translate-x-1' : '-translate-x-1 ')}
                "
            ></button>
            <button
                aria-label="~~~"
                onclick={j===1 ? () => {
                    if (i===0) leftLaser=true;
                    else rightLaser=true;
                } : undefined}
                class="
                    icon-[game-icons--space-needle]
                    absolute -bottom-2 text-8xl -scale-y-100
                    {i===0 ? '-right-0 -rotate-25' : '-left-0 rotate-25 -scale-x-100'}
                    {j===0 ? 'text-slime/50' : 'text-black cursor-pointer'}
                    {j===0 ? '' : (i===0 ? 'translate-x-0.5' : '-translate-x-0.5')}
                "
            ></button>
        {/each}
        <span
            class="
                icon-[game-icons--acid-blob]
                absolute text-5xl -scale-y-100
                {i===0 ? 'text-slime/50' : 'text-black -translate-x-1'}
            "
        ></span>
    {/each}
    <button
        class="
            absolute w-2 h-2 border border-slime/50 rounded-full cursor-pointer
            top-12 {$photomode==='dithernoir' ? 'bg-slime' : ''}
        "
        onclick={() => {
            if ($photomode==='dithernoir') $photomode='photo';
            else $photomode = 'dithernoir';
        }}
        aria-label="o"
    ></button>
    <button
        class="
            absolute w-2 h-2 border border-slime/50 rounded-full cursor-pointer
            top-6 ml-6 {$photomode==='dithscii' ? 'bg-slime' : ''}
        "
        onclick={() => {
            if ($photomode==='dithscii') $photomode='photo';
            else $photomode = 'dithscii';
        }}
        aria-label="o"
    ></button>
    <button
        class="
            absolute w-2 h-2 border border-slime/50 rounded-full cursor-pointer
            top-6 -ml-6 {$photomode==='cyberslime' ? 'bg-slime' : ''}
        "
        onclick={() => {
            if ($photomode==='cyberslime') $photomode='photo';
            else $photomode = 'cyberslime';
        }}
        aria-label="o"
    ></button>
    <div
        class="
            absolute w-52 h-11
            pointer-events-none
        "
    >
        <Button
            class="absolute uppercase pointer-events-auto"
            delayedClass="-translate-x-24 -translate-y-8 -rotate-55"
            onclick={() => { select("slimemold") }}
        >
            <span bind:this={slimeEl} class="moldy text-[#18ea1caa] pointer-events-none">
                slime
            </span><span bind:this={moldEl} class="moldy text-[#27c975aa] pointer-events-none">
                mold
            </span><span class="moldy text-[#ffffffd0]" style="--c: #dfcca71a pointer-events-none">
                .
            </span><span bind:this={meEl} class="moldy text-[#f70becbb] pointer-events-none" style="--c: #f70bec1a">
                me
            </span>
        </Button>
        {#each [0, 1] as i}
            <div
                class="
                    relative pointer-events-none
                    w-min flex items-center justify-center
                    rotate-0 opacity-0 transition duration-1000
                    {selected==='slimemold'
                        ? `${i===0 ? 'translate-x-18 -translate-y-36' : '-translate-x-24 translate-y-20'} rotate-359 ${swung ? 'opacity-0' : 'opacity-100'}`
                        : `${i===0 ? 'translate-x-13 -translate-y-28' : '-translate-x-19 translate-y-12'}`
                    }
                "
            >
                <span>🦠</span>
                <span>🦠</span>
            </div>
        {/each}
    </div>
    <div
        class="
            absolute w-52 h-11 rotate-0
            origin-[10rem_-3.375rem] pointer-events-none
            transition-transform duration-1000
            {selected==='about' ? `rotate-[-55deg] ease-linear` : `${selected==='about' && swung ? 'rotate-12' : 'rotate-0'} ease-[cubic-bezier(0.065,1.230,0.630,1.370)]`}
        "
    >
        <Button
            class="absolute pointer-events-auto"
            delayedClass="translate-x-24 -translate-y-8 rotate-55"
            onclick={() => { select("about") }}
        >
            <span bind:this={aboutEl} class="moldy text-[#18ea1caa] pointer-events-none">
                about me
            </span>
        </Button>
    </div>
    <div
        class="
            absolute w-52 h-11 rotate-0 
            origin-[1rem_8.375rem] pointer-events-none
            transition-transform duration-1000
            {selected==='photography' ? 'ease-[cubic-bezier(0.065,1.230,0.630,1.370)]' : 'ease-linear'}
        "
        style="transform:rotate({selected === 'photography' ? ((swung ? 90 : 80) - rotation % 360) : 0}deg)"
    >
        <Button
            class="absolute pointer-events-auto"
            delayedClass="translate-y-28"
            onclick={() => { select("photography") }}
        >
            <span bind:this={photoEl} class="moldy text-[#18ea1caa] pointer-events-none">
                photography
            </span>
        </Button>
    </div>
    {#if leftLaser}
        <div class="absolute -bottom-8 w-80 h-16">
            <ElectricPulse col="#ffdf20" />
        </div>
    {/if}
    {#if rightLaser}
        <div class="absolute -bottom-8 w-80 h-16">
            <ElectricPulse col="#a78bfa" />
        </div>
    {/if}
</div>

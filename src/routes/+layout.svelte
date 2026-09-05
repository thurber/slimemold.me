<script>
	import '../app.css';
	
    import { photomode } from "$lib/stores";
	import WordShuffler from '$lib/word-shuffler';
    import Lightbox from "$lib/Lightbox.svelte";
	import Nav from '$lib/nav/Nav.svelte';

	let { children } = $props();

    let slimeEl = $state();
    let moldEl = $state();
    let meEl = $state();
	let tEl = $state();

    const togglePhotoMode = (m) => {
        if ($photomode === m) {
            $photomode = 'photo';
        }
        else {
            $photomode = m;
        }
    }

	$effect(() => {
        if (slimeEl && moldEl && meEl && tEl) {
            new WordShuffler(slimeEl, {
                fps: 23,
                fontSize: '24px',
                textColor : '#18ea1caa',
                timeOffset : 8,
                mixCapital : true,
                mixSpecialCharacters : true
            });
            new WordShuffler(moldEl, {
                fps: 20,
                fontSize: '24px',
                textColor : '#27c975aa',
                timeOffset : 10,
                mixCapital : true,
                mixSpecialCharacters : true
            });
            new WordShuffler(meEl, {
                fps: 17,
                fontSize: '24px',
                textColor : '#f70becbb',
                timeOffset : 16,
                mixCapital : true,
                mixSpecialCharacters : true
            })
			;new WordShuffler(tEl, {
                fps: 23,
                fontSize: '14px',
                textColor : '#18ea1caa',
                timeOffset : 3,
                mixCapital : true,
                mixSpecialCharacters : true
            });
        }
    });
	
</script>

<div
    class="
        w-full min-h-full flex flex-col items-center
    "
>

    <div
        class="
            flex flex-col w-min items-center
            my-2 md:my-4 mx-4 md:mx-8
        "
    >

        <span
            class="uppercase text-2xl tracking-widest whitespace-nowrap"
        >
            <span bind:this={slimeEl} class="moldy text-[#18ea1ccc]">
                slime
            </span><span bind:this={moldEl} class="moldy text-[#27c975cc]">
                mold
            </span><span class="moldy text-[#ffffffd0]" style="--c: #dfcca71a">
                .
            </span><span bind:this={meEl} class="moldy text-[#f70beccc]" style="--c: #f70bec1a">
                me
            </span>
        </span>

        <span
            class="uppercase text-base tracking-wide whitespace-nowrap py-1"
        >
            🌳🦉🦋🌻 📸🦠🔬 🎞️🖨️🫟🖼️
        </span>

        <span
            class="uppercase text-base tracking-wide text-[#18ea1c] whitespace-nowrap"
        >
            Wildlife Photography
        </span>

        <span
            class="uppercase moldy text-base tracking-wide self-center whitespace-nowrap -mt-0.5"
        >
            <span class="text-[#18ea1c11] text-xs">&
            </span><span class="text-[#18ea1c33] text-sm">&
            </span><span class="text-[#18ea1c55] text-sm">&
            </span><span class="text-[#18ea1c66] text-base">&
            </span><button
                class="
                    text-[#18ea1ccc] text-lg hover:text-slime cursor-pointer
                "
                onclick={() => { togglePhotoMode('cyberslime') }}
            >&
            </button><span class="text-[#18ea1c66] text-base">&
            </span><span class="text-[#18ea1c55] text-sm">&
            </span><span class="text-[#18ea1c33] text-sm">&
            </span><span class="text-[#18ea1c11] text-xs">&
            </span>
        </span>

        <span
            class="uppercase text-base tracking-wide text-[#18ea1c] whitespace-nowrap"
        >
            Dye Sub Metal Prints
        </span>

        <span
            class="uppercase text-sm self-center tracking-wide text-[#18ea1ccc] whitespace-nowrap pt-1"
        >
            ⏤<button
                class="hover:text-slime cursor-pointer"
                onclick={() => { togglePhotoMode('dithscii') }}
            >☾
            </button>⏤ by ⏤<button
                class="inline-block -scale-x-100 hover:text-slime cursor-pointer"
                onclick={() => { togglePhotoMode('dithernoir') }}
            >☾
            </button>⏤
        </span>

        <span bind:this={tEl} 
            class="moldy text-sm self-center tracking-wide text-[#18ea1ccc] whitespace-nowrap pt-1"
        >
            travis b thurber
        </span>

    </div>

	<Nav />

    <div
        class="
            flex flex-col gap-4 items-center justify-center
            mt-2 mb-2 md:mb-4 px-4 md:px-8
        "
    >
		{@render children()}
    </div>

    <Lightbox />
</div>


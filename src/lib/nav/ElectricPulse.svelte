<script>
    // Adapted from Tibixx on codepen: https://codepen.io/Tibixx/pen/KYEmQx

    import { fade } from "svelte/transition";

    let {
        amp = 84,       // Amplitude
        frq = 0.01,     // Frequency
        spd = 0.1,      // Animation Speed
        wid = 1,        // Line Width
        glo = 20,       // Glow
        nxs = 4.1,      // X-Distortion Scale (Less is More)
        nys = 2.0,      // Y-Distortion Scale (Less is More)
        col = "#ffdf20" // Color
    } = $props();

    let c = $state();
    let w = $state();
    let h = $state();
    let rendered = $state(false);

    $effect(() => {
        if (c && w && h) {
            const ctx = c.getContext('2d');
            c.width = w;
            c.height = h;
            const rad = Math.PI / 180;
            const topOffset = h / 2;

            let phi = 0;
            let frames = 0;

            function drawMainWave() {
                frames += spd;
                phi = frames * spd;
                ctx.clearRect(0, 0, w, h);
                drawWave();
            }

            function drawWave(){
                ctx.beginPath();
                ctx.lineWidth   = wid;
                ctx.shadowBlur  = glo;
                ctx.strokeStyle = col;
                ctx.shadowColor = col;
                
                for (let x = 0; x < w; x++) {
                    const yn = noise.perlin2(x/nxs, frames)/nys;
                    const y = Math.cos(x * frq + phi) * 1 + amp;
                    ctx.lineTo(x, (y*yn) + topOffset);
                }
                
                ctx.stroke();
                ctx.closePath();
            }

            function render() {
                drawMainWave();
                requestAnimationFrame(render);
            }
            
            render();
            rendered = true;
        }
    });

</script>


<canvas
    id="electric-pulse"
    class="
        w-full h-full
        transition-opacity duration-150 ease-in
        {rendered ? 'opacity-100' : 'opacity-0'}
    "
    bind:this={c}
    bind:clientWidth={w}
    bind:clientHeight={h}
    out:fade
></canvas>

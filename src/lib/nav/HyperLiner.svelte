<script>

    let lines = $state([]);

    const newLine = () => ({
        id: Math.random().toString(36).replace('0.', 'l'),
        y1: Math.floor(Math.random() * (1000 + 1)),
        dy: Math.floor(Math.random() * (100 - -100 + 1) - 100),
        size: Math.floor(Math.random() * 3),
        color: Math.floor(Math.random() * 3),
        opacity: Math.floor(Math.random() * 3),
        flip: Math.floor(Math.random() * 2),
    });

    const run = () => {
        const totalLines = 25;
        let drawn = 0;
        const draw = () => {
            setTimeout(() => {
                const l = newLine();
                lines = [...lines, l];
                setTimeout(() => {
                    lines = lines.filter(line => line.id !== l.id);
                }, 250);
                drawn++;
                if (drawn < totalLines) {
                    draw();
                }
            }, Math.floor(Math.random() * (220 - 50 + 1) + 50))
        }
        draw();
    };

    $effect(() => {
        run();
    })

</script>

<div class="w-full h-full rounded-full overflow-hidden">
    <svg
        viewBox="0 0 1000 1000"
        width="24rem"
        height="24rem"
    >
        {#each lines as l (l.id)}
            <line
                class="
                    {l.color===2 ? 'stroke-slime' : (l.color===1 ? 'stroke-[steelblue]' : 'stroke-yellow-400')}
                    {l.size===2 ? 'stroke-10' : (l.size===1 ? 'stroke-5' : 'stroke-3')}
                    {l.opacity===2 ? 'opacity-75' : (l.opacity===1 ? 'opacity-50' : 'opacity-25')}
                    [stroke-dasharray:1000] [stroke-dashoffset:1000]
                    animate-[draw_200ms_linear_1]
                "
                x1={l.flip ? 1000 : 0}
                x2={l.flip ? 0 : 1000}
                y1={l.y1}
                y2={l.y1 + l.dy}
            />
        {/each}
    </svg>
</div>

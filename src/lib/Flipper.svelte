<script>

    let {
        class: clazz = '',
        autoflip = true,
        flipped = $bindable(false),
        style: sty,
        bside,
        children,
    } = $props();

    $effect(() => {
        if (autoflip) {
            setTimeout(() => {
                flipped = true;
            }, Math.floor(Math.random() * (1001 - 25) + 25));
        }
    })

</script>

<div
    class="
        relative perspective-distant overflow-visible
        {clazz}
    "
    style={sty}
>
    <div
        class="
            absolute w-full h-full transition-transform duration-500 transform-3d
            {flipped ? 'rotate-y-180' : ''}
        "
    >
        <div
            class="
                absolute bg-black w-full h-full backface-hidden
                top-0 left-0 right-0 bottom-0
            "
        >
            {@render bside?.()}
        </div>
        <div
            class="
                absolute bg-black w-full h-full rotate-y-180 backface-hidden
                top-0 left-0 right-0 bottom-0
            "
        >
            {@render children?.()}
        </div>
    </div>
</div>

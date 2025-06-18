<script>

    let {
        onclick = () => {},
        class: clazz = '',
        delayedClass = '',
        children,
    } = $props();

    let rendered = $state(false);
    let waited = $state(false);
    let done = $state(false);

    let jitter = $state(false);

    const jit = () => {
        setTimeout(() => {
            jitter = true;
            setTimeout(() => {
                jitter = false;
                jit();
            }, Math.floor(Math.random() * (300 - 30 + 1) + 30));
        }, Math.floor(Math.random() * (10000 - 2000 + 1) + 2000));
    };

    $effect(() => {
        rendered = true;
        setTimeout(() => {
            waited = true;
            setTimeout(() => {
                done = true;
                jit();
            }, 400);
        }, 100);
    })

</script>

<button
    {onclick}
    class="
        {clazz}
        {waited ? delayedClass : ''}
        {done ? 'duration-100' : 'duration-500'}
        {rendered ? 'w-full h-full opacity-100' : 'w-0 h-0 opacity-0'}
        {jitter ? 'animate-jitter' : ''}
        flex items-center justify-center overflow-hidden
        border border-slime transition-all
        text-slime bg-black/50
        cursor-pointer
        hover:outline-2 hover:outline-emerald-500/75 hover:outline-offset-2 hover:outline-double hover:border-emerald-500
        active:outline-2 active:outline-emerald-400/75 active:outline-offset-3 active:outline-double active:border-emerald-400
        active:inset-shadow-xs active:inset-shadow-white/25
    "
>
    {@render children?.()}
</button>

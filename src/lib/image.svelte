<script>
    export let src;
    export let large = false;
    export let placeholder = '';
    export let wrecked = '';

    let preloaded = false;
    let loaded = false;
    let element;
    
    const onLoad = () => {
        preloaded = true;
        setTimeout(() => {
            loaded = true;
        }, large ? 2000 : 1100);
    }

</script>

<div
    class="relative"
>
    {#if placeholder && !loaded}
        <img
            alt=""
            src={placeholder}
            class="
                {$$restProps.class || ''}
                absolute top-0 left-0 right-0 bottom-0 blur-lg
            "
        />
    {/if}
    <img
        bind:this={element}
        {src}
        alt=""
        loading="lazy"
        on:load={onLoad}
        class="
            {$$restProps.class || ''}
            transition-opacity duration-1000 m-auto
            {large ? 'delay-1000' : 'delay-100'}
            {preloaded || element?.complete ? 'opacity-100' : 'opacity-0'}
        "
    />
    {#if wrecked}
        <img
            alt=""
            src={wrecked}
            class="
                {$$restProps.class || ''}
                absolute top-0 left-0 right-0 bottom-0 blur-sm opacity-0
            "
        />
    {/if}
</div>

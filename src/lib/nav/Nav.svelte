<script>
    import ButtonRing from "./ButtonRing.svelte";
    let {
        selected = $bindable(),
    } = $props();
</script>

<div
    class="scale-60 lg:scale-100 z-20"
>
    <ButtonRing bind:selected={selected} />
</div>

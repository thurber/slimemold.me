<script>
    import Lightbox from "$lib/Lightbox.svelte";
    import Nav from "$lib/nav/Nav.svelte";
    import About from "$lib/about/About.svelte";
    import Gallery from "$lib/gallery/Gallery.svelte";
    import Announcement from "$lib/Announcement.svelte";

    let selected = $state();

</script>

<div
    class="
        flex flex-col gap-4 items-center justify-center
        py-4 lg:py-16 px-2 lg:px-8
    "
>
    <div
        class="
            flex flex-col xl:flex-row gap-x-24 gap-y-8 items-center md:justify-center w-full
        "
    >
        <Nav bind:selected={selected} />
        <Announcement />
    </div>
    {#if selected==='about'}
        <About />
    {:else if selected==='photography'}
        <Gallery />
    {/if}
</div>

<Lightbox />

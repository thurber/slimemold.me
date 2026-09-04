<script>

    import { page } from '$app/state';

    const routes = [
        {name: 'about', route: '/about'},
        {name: 'gallery', route: '/'},
        {name: 'print services', route: '/dyesub'},
    ];

</script>

<div
    class="
        flex flex-row items-center justify-center py-1 my-2 md:my-0 md:mb-4 px-2 sm:px-4 md:px-8
        border-y border-y-slime/40
    "
>
    <div
        class="w-max flex flex-row items-center"
    >
        {#each routes as r}
            <a
                href={r.route===page.url.pathname ? undefined : r.route}
                aria-disabled={r.route===page.url.pathname}
                class="
                    text-center w-28 sm:w-32 md:w-48
                    {r.route===page.url.pathname
                        ? 'uppercase moldy text-[#18ea1ccc] text-xs sm:text-sm md:text-base lg:text-lg'
                        : 'text-[#18ea1c77] text-xs md:text-sm lg:text-base italic hover:text-slime'
                    }
                "
            >
                {r.name}
            </a>
        {/each}
    </div>
</div>

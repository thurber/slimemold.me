<script>

</script>

<div
    class="flex flex-col gap-2 w-full items-center mt-12 mb-4"
>
    <p
        class="text-sm text-slime px-2 mb-2 border-y py-1"
    >
        GET IN TOUCH
    </p>
    <a
        href="mailto:travis@slimemold.me"
        onclick={e=>{e.stopPropagation()}}
        class="
            flex flex-row items-center gap-2 px-2
            text-sm text-slime group
            hover:text-emerald-500
        "
    >
        <span class="icon-[streamline-pixel--email-envelope] group-hover:animate-spin"></span>
        <span class="group-hover:underline decoration-1 underline-offset-4">travis@slimemold.me</span>
    </a>
    <a
        href="https://www.inaturalist.org/people/autumnmeadowhawk"
        onclick={e=>{e.stopPropagation()}}
        target="_blank"
        rel="noreferrer"
        class="
            flex flex-row items-center gap-2 px-2
            text-sm text-slime group
            hover:text-emerald-500
        "
    >
        <span class="icon-[academicons--inaturalist] group-hover:animate-spin"></span>
        <span class="group-hover:underline decoration-1 underline-offset-4">autumnmeadowhawk</span>
    </a>
    <a
        href="tel:9196161150"
        onclick={e=>{e.stopPropagation()}}
        class="
            flex flex-row items-center gap-2 px-2
            text-sm text-slime group
            hover:text-emerald-500
        "
    >
        <span class="icon-[streamline-pixel--email-envelope] group-hover:animate-spin"></span>
        <span class="group-hover:underline decoration-1 underline-offset-4">+1.919.616.1150</span>
    </a>
    <a
        href="https://github.com/thurber"
        onclick={e=>{e.stopPropagation()}}
        target="_blank"
        rel="noreferrer"
        class="
            flex flex-row items-center gap-2 px-2
            text-sm text-slime group
            hover:text-emerald-500
        "
    >
        <span class="icon-[pixel--github] group-hover:animate-spin"></span>
        <span class="group-hover:underline decoration-1 underline-offset-4">thurber</span>
    </a>
</div>
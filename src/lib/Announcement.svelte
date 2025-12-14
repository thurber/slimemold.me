<script>
    import { fade } from "svelte/transition";
    import b612 from "$lib/img/b612smallworks.jpg";
    import crow from "$lib/img/crow_eye_detail.jpg";

</script>

<a
    transition:fade
    class="
        flex flex-col-reverse sm:flex-row border-1 border-solid border-slime rounded-sm overflow-hidden
        hover:outline-1 outline-slime outline-offset-2 hover:border-double
    "
    href="https://www.galleryb612.com/event-details-registration/grand-opening-first-thursday-art-walk-2026-01-08-14-00"
    target="_blank"
>
    <img
        src={b612}
        alt="gallery b612"
        class="w-64 lg:w-80 h-64 lg:h-80 object-cover"
    />
    <div
        class="flex flex-col-reverse sm:flex-col w-64 lg:w-80 h-64 lg:h-80 border-t-1 sm:border-t-0 border-l-0 sm:border-l-1 border-slime"
    >
        <p class="text-slime text-sm lg:text-base text-center p-2">
            Come see<br/><i>Crow Eye Reflecting Tahoma</i><br/>at<br/>Gallery B612<br/>in<br/>Seattle<br/>Jan 8 - 28!
        </p>
        <img
            src={crow}
            alt="crow eye detail"
            class="flex-1 w-full h-full object-cover border-t-1 border-t-slime"
        />
    </div>
</a>
<script>
    import Modal from 'svelte-simple-modal';
    import "../app.css";
</script>

<Modal
    styleWindow={{ width: '100%',  }}
    styleWindowWrap={{ margin: 0, }}
    styleContent={{ padding: 0, background: 'black', }}
>
    <div class="w-full h-screen overflow-auto bg-black text-white font-mono">
        <slot />
    </div>
</Modal>

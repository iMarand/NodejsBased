<script>
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    
    let { to } = $props();

    $effect(() => {
        if (browser) {
            goto(to);
        }
    });
</script>


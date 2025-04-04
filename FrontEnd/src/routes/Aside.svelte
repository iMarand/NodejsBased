<script>
    let { cStyle } = $props();

    const _s = {
        aside: "min-w-[80px] max-w-[25rem] border-r border-gray-200 h-fill overflow-auto"
    } 

    console.log(cStyle);
</script>

<aside style={cStyle} class={_s.aside}>

</aside>

<style>
    /* Styles */

</style>
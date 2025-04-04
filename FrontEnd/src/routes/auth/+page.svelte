<script>
    import { page } from "$app/state";

    import Login from "./Login.svelte";
    import Signup from "./Signup.svelte";
    import Redirect from "$lib/Redirect.svelte";
    

    const isAuthPage = $derived(page.url.pathname.includes("/auth"));
</script>

<main class="isMax flex-col border p-8">
    {#if isAuthPage && page.url.search == "?=login"}
        <Login />
    {:else if isAuthPage && page.url.search == "?=signup"}
        <Signup />
    {:else}
        <Redirect to="/auth?=login" />
    {/if}
</main>

<style>
    .isMax {
        /* background: url("../background.jpg"); */
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
    }

    /* .loginForm {
        backdrop-filter: blur(15px);
        width: 26rem;

        background: linear-gradient(30deg, #ff000070, #0dffdba6);
    } */
</style>
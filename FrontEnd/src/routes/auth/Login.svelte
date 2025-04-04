<script>
    /** 
     * Author: Marand
     * Description: Signup Page Using Node JS And Svelte 
    */

    import { Sigin } from "./auth.js";

    const _si = { /* Sign in object for signin elements */ }
    const _err = { /* Object for credential error */ }

    _si.Signin = async function() {
        try {
            const { email, password, rememberMe } = _si;
            const result = await Sigin({email, password, rememberMe});

            console.log(result);
        } catch(err) {
            console.error(err)
        }
    }
</script>

<section>
    <form class="loginForm p-5 rounded-xl">
        <header class="text-center mb-8">
            <h1 class="text-white text-3xl font-bold">Welcome Back</h1>
            <p class="text-white/80 mt-2">Sign in to access your account</p>
        </header>

        <fieldset class="space-y-6">
            <section>
                <label for="email" class="block text-white text-sm font-medium mb-2">Email</label>
                <input type="email" bind:value={_si.email} id="email" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="name@example.com" required/>
            </section>
        
            <section>
                <label for="password" class="block text-white text-sm font-medium mb-2">Password</label>
                <input type="password" bind:value={_si.password} id="password" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="••••••••" required/>
            </section>
        
            <section class="flex items-center justify-between">
                <label class="flex items-center">
                    <input bind:checked={_si.rememberMe} type="checkbox" class="rounded bg-white/10 border-white/20 text-teal-600 focus:ring-teal-500">
                    <span class="ml-2 text-sm text-white/80">Remember me</span>
                </label>

                <a href="#" class="text-sm text-white hover:text-white/80">Forgot password?</a>
            </section>
        </fieldset>
      
        <button onclick="{_si.Signin}" type="button" class="w-full bg-white mt-8 py-3 px-4 rounded-lg text-teal-600 font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white transition-all">
            Sign in
        </button>
        
        <footer class="mt-8 text-center text-white/80 text-sm">
            <p>Don't have an account? <a href="/auth?=signup" class="text-white font-medium hover:underline">Sign up</a></p>
        </footer>
    </form>
</section>

<style>
    .loginForm {
        backdrop-filter: blur(15px);
        width: 26rem;

        background: linear-gradient(30deg, #ff000070, #0dffdba6);
    }

    .formInput {
        background-color: transparent;
        outline: blue;
        width: 80%;
    }
</style>
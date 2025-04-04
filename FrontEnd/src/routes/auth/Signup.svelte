<script>
    /** 
     * Author: Marand
     * Description: Signup Page Using Node JS And Svelte 
    */

    import { validateCredentials, Signup, setChars } from "./auth.js";

    const _so = { /* Sign up object For binding sign up elements*/ };
    const _err = $state({ /* For error handling */ });
    
    let toLogin;

    _so.Signup = async function() {
        const { userEmail, userNames, userPassword } = _so;
        const vObj = {
            EmailBased: setChars(userEmail),
            NameBased: setChars(userNames),
            // PasswordBased: setChars(userPassword)
        };

        if(!CredentialAutoValidate(vObj)) {
            return false;
        }

        try {
            const endpointURI = new URLSearchParams({userEmail, userPassword, userNames});
            const resultData = await Signup(endpointURI.toString());

            if(resultData.status === 200) {
                return toLogin.click();
            } else {
                throw new Error("Unable to create your account");
            }

        } catch(err) {
            console.error(err);
        }

    };

    const CredentialAutoValidate = function(_values) {
        _err["iVzA"] = true;
        const validate = validateCredentials(_values);

        Object.entries(validate).map(entry => {
            _err[entry[0]] = !entry[1];
            if(_err[entry[0]]) _err["iVzA"] = false;
        });

        return _err["iVzA"];
    };

</script>

<section>
    <form class="signupForm p-5 rounded-xl">
        <header class="text-center mb-8">
            <h1 class="text-white text-3xl font-bold">Register Here</h1>
            <p class="text-white/80 mt-2">Sign up to create your account</p>
        </header>

        <fieldset class="space-y-6">
            <section>
                <label for="usernames" class="block text-white text-sm font-medium mb-2">User Names</label>
                <input type="text" bind:value={_so.userNames} id="usernames" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="John Deo" required/>
                {#if _err.userNames}
                    <p class="text-red-500 text-xs mt-1">Please enter a valid username (no number or special characters)</p>
                {/if}
            </section>

            <section>
                <label for="email" class="block text-white text-sm font-medium mb-2">Email</label>
                <input type="email" bind:value={_so.userEmail} id="email" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="name@example.com" required/>
                {#if _err.userEmail}
                    <p class="text-red-500 text-xs mt-1">Please enter a valid Email (check your email and try again)</p>
                {/if}
            </section>
        
            <section>
                <label for="password" class="block text-white text-sm font-medium mb-2">Create Password</label>
                <input type="password"  bind:value={_so.userPassword} id="password" class="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="••••••••" required/>
                {#if _err.userPassword}
                    <p class="text-red-500 text-xs mt-1">Please enter strong password (minimum 6 characters, at least 1 number ad at least 1 special character)</p>
                {/if}
            </section>
        
            <section class="flex items-center justify-between">
                <label class="flex items-center">
                    <input type="checkbox" class="rounded bg-white/10 border-white/20 text-teal-600 focus:ring-teal-500">
                    <span class="ml-2 text-sm text-white/80"><a style="color: #ffc107" href="/terms">Agree terms and conditions</a></span>
                </label>
            </section>
        </fieldset>
      
        <button type="button" onclick={_so.Signup} class="w-full bg-white mt-8 py-3 px-4 rounded-lg text-teal-600 font-medium hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white transition-all">
            Sign up
        </button>
        
        <footer class="mt-8 text-center text-white/80 text-sm">
            <p>Already have an account? <a bind:this={toLogin} href="/auth?=login" class="text-white font-medium hover:underline">Sign in</a></p>
        </footer>
    </form>
</section>

<style>
    .signupForm {
        backdrop-filter: blur(15px);
        width: 26rem;

        background: linear-gradient(30deg, #ff000070, #0dffdba6);
    }
</style>
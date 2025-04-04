import { redirect } from '@sveltejs/kit';
// Middleware Auth Look Up

const _URL = "http://localhost:2004";

const redirectURLs = {
    authRedirect: new Response(null, {
        status: 303,
        headers: {
            location: "/auth"
        }
    }),

    mainRedirect: new Response(null, {
        status: 303,
        headers: {
            location: "/"
        }
    })
};

export const handle = async function({ event, resolve }) {
    try {
        const headerCookie = event.request.headers.get('cookie');
        const currentURL = event.url.pathname;

        async function validateToken(isAuth) {
            try {
                const _response = await fetch(`${_URL}/validate-user`, {
                    method: "GET",
                    headers: {
                        'Cookie': headerCookie,
                        'Content-Type': 'application/json'
                    }
                });

                if(!_response.ok) {
                    console.error(_response.text());
                    return false;
                }

                const _result = await _response.json();
                if (!_result.ok && _result.status !== 200) {throw new Error("Can't resolve")};

                return await resolve(event);
            } catch(err) {
                console.error(err);
                return await redirectURLs.authRedirect;
            }
        };

        const token = event.cookies.get("authToken");

        switch(true) {
            case currentURL.startsWith("/auth"):
                return await resolve(event);
            default:
                if(!token) {return await redirectURLs.authRedirect;} 
                else { return validateToken("NONE"); }
        }


    } catch(err) {
        console.error(err)
    }
}
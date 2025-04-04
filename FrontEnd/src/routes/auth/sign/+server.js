import { json } from '@sveltejs/kit';

const _URL = "http://localhost:2004";

String.prototype.BasicRequest = function(opts) {
    const sentURL = this;
    return (async () => {
        try {
            const response = await fetch(sentURL, opts ? opts : null);
            if (!response.ok) throw new Error(response.text());
    
            let headers;
            const result = await response.json();

            if(opts.method === "POST" && opts.credentials === "include") {
                headers = new Headers();
                headers.append("Content-Type", "application/json");

                const getCookie = response.headers.get("set-cookie");
                if(getCookie) {
                    headers.append('Set-Cookie', getCookie);
                }

                return new Response(JSON.stringify(result), {
                    headers: headers
                });

            } else {
                return json(result);
            }

        } catch(err) {
            return {
                problem: "Unable to resolve",
                error: err
            };
        }
    })();
}

// User Registration endpoint trigger
export const GET = async function({ request }) {
    let params = new URL(request.url).searchParams;

    const ENDPOINT = `/users/user-signup-endpoint?${params}`;
    const serverResponse = await _URL.concat(ENDPOINT).BasicRequest({
        method: "GET"
    });

    return serverResponse;
}

// User Login endpoint trigger
export const POST = async function ({ request}) {
    const data = await request.json();
    const requestCookie = request.headers.get('cookie');

    const ENDPOINT = `/users/user-signin-endpoint`;
    const serverResponse = await _URL.concat(ENDPOINT).BasicRequest({
        method: "POST",
        credentials: "include",
        headers: {
            'Cookie': requestCookie,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return serverResponse;
}
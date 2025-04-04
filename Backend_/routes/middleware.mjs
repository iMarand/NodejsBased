import { validateSession, validateParams } from "./authValidation.mjs";

export const handleMiddleWare = (request, response, next) => {
    const ENDURL = request.url;
    const _URL = `${request.protocol}://${request.get("host")}${ENDURL}`;

    const authToken = request.cookies.authToken;

    const Params = new URL(_URL).searchParams;
    request._PARAMS_REGISTER = Params;
    
    switch(true) {
        case ENDURL.startsWith("/users/user-signup-endpoint"): !function() {
            // Validate to avoid bypass client validation
            const oV = validateParams(Params);
            return (oV === "passEndpoint") ? next() : response.json({
                status: 400,
                message: oV.message,
                requires: oV.requires
            });
        }(); break;
        case ENDURL.startsWith("/users/user-signin-endpoint"): next() ; break;
        default:
            // verify token
            (() => {
                if(!authToken) {
                    return response.json({
                        message: "Please Login to continue",
                        status: 512,
                        ok: false,
                        what: "Unauthorized"
                    });
                }

                const validated = validateSession(authToken);
                return (validated.valid) ? (() => { next(); return response.json({status: 200, ok: true})})() : response.json({
                    message: "Invalid Token",
                    status: 404,
                    ok: false,
                    what: "Unauthorized"
                });
            })();
    }
}
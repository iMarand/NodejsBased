import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET_HEX;

export const validateSession = function(token) {
    try {
        const decodeJWT = jwt.verify(token, JWT_SECRET);
        return {
            valid: true,
            msg: "Pass Next"
        }
    } catch(err) {
        return {
            valid: false,
            msg: err
        }
    }
} 

export const validateCredentials = (cred) => {
    const { EmailBased, NameBased, PasswordBased } = cred;
    const validateEmail = function(_Email) {
        return (typeof _Email === 'string') ? 
            (!/^[^@.][^@]*@[^@.]+(\.[^@.]+)+$/.test(_Email) || 
            _Email.includes('..')) ? false : true : false;
    };

    const validateUserNames = function(_Usernames) {
        return (typeof _Usernames === 'string') ?
            (!/^[a-zA-Z][a-zA-Z _-]{1,}$/.test(_Usernames)) ?
                false : true : false;
    };

    const validatePassword = function(_Password) {
        return (typeof _Password === 'string') ?
            (!/^(?=.*[0-9])(?=.*[!@#$%^&*()_+ \-=[\]{};':"\\|,.<>/?])[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,}$/.test(_Password)) ?
                false : true : false;
    };

    const _op = {};

    [
        { which: EmailBased, run: validateEmail, as: 'userEmail'}, 
        { which: NameBased, run: validateUserNames, as: 'userNames'},
        { which: PasswordBased, run: validatePassword, as: 'userPassword' }].map(Ev => {
        if(Ev.which) { _op[Ev.as] = Ev.run(Ev.which) }
    });

    return _op;
}  
const _err = {};

export const validateParams = function(params) {
    const vObj = {
        EmailBased: params.get("userEmail"),
        NameBased: params.get("userNames"),
        // PasswordBased: params.get("userPassword") 
    }

    const CredentialAutoValidate = function(_values) {
        _err["iVzA"] = true;
        const validate = validateCredentials(_values);

        Object.entries(validate).map(entry => {
            _err[entry[0]] = !entry[1];
            if(_err[entry[0]]) _err["iVzA"] = false;
        });

        return _err["iVzA"];
    };

    const errMsg = {
        message: "Validation failed on user credentials",
        requires: [
            "Check if your password has 6 characters with at least 1 special character and at least 1 Upper case character",
            "Check if your email is valid with @ and . with also other valid email validation requirements",
            "Check your usernames if is validate without any numbers or special characters and at least 2 characters"
        ]
    }

    return !CredentialAutoValidate(vObj) ? errMsg : "passEndpoint";
}
// AUTH BASED CLIENT SIDE JAVASCRIPT

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
            (!/^(?=.*[0-9])(?=.*[!@#$%^&*()_ +\-=[\]{};':"\\|,.<>/?])[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{6,}$/.test(_Password)) ?
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

export const Signup = function(data) {
    return fetch("/auth/sign?" + data).then(response => response.json()).then(data => data).catch(err => err);
} 

export const Sigin = function(data) {
    return fetch("/auth/sign/", {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => data).catch(err => err);
}

export const setChars = function(_data) {
    return _data ? _data : ' ';
}
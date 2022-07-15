let password = 'p@ssw0rd1';

let password1 = 'p@ssW0rd11';

let password2 = 'PASSWORD';

let password3 = 'letmein';
//(?:x) is a non capturing group, matches but does not remember the match

//^ start of string
//(?=.*d) -> Check if there is at least one number
//#As this is lookahead the position of checking will reset to starting again

//(?=.*[a-z]) -> Check if there is at least one lowercase letter
//#As this is lookahead the position of checking will reset to starting again

//(?=.*[A-Z] -> Check if there is at least one uppercase letter
//#As this is lookahead the position of checking will reset to starting again

//. -> preceding conditions match any single character

//{10,}-> preceding condition met at least 10 times
//$ -> end of string

let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}$/

let illegalPasswords = ['password', 'letmein', 'pasword1234'];


//should fail
checkPassword(password);
//should pass
checkPassword(password1);
//should fail
checkPassword(password2);
//should fial
checkPassword(password3);

function checkPassword(password) {
    
    let lowercasePassword = new String(password).toLowerCase;
    let isIllegalPassword = illegalPasswords.indexOf(lowercasePassword) > 0;

    password.match(validPassword) && !isIllegalPassword ? 
        console.log('success!') : console.log(`failure: ${password} is an illegal password`);
}
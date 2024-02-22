// console.log('Hi');

// -Mail
//     -input mail
const mailToCheck = 'aaa';

//     -set mails list (array)
const authorizedMails = ['aaa','bbb','ccc','ddd'];

//     -check the mails list (for)

for (let i = 0; i < authorizedMails.length; i++) {
    const authorizedMail = authorizedMails[i];

    console.log(authorizedMail);
    
}

//     -if mail part of mails list message OK
//     -if mail NOT part of mails list message NO

//     -BONUS
//         -add input form for the mail
//         -add button to start the actions:
//             -get mail
//             -check list
//             -get result
//             -print result on page
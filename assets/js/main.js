// console.log('Hi');

// -Mail
//     -input mail test
// const mailToCheck = 'aaa';

//     -set mails list (array) test
// const authorizedMails = ['aaa','bbb','ccc','ddd'];

//     -check the mails list (for)

/*
for (let i = 0; i < authorizedMails.length; i++) {
    const authorizedMail = authorizedMails[i];

    // console.log(authorizedMail);

    if (mailToCheck !== authorizedMail) {
//         -if mail NOT part of mails list message NO
        console.log('NOT OK')
    } else {
//         -if mail part of mails list message OK
console.log('OK');
}

}
*/

//     -show result on console
//         -set result as variable

/*
let result = 'not OK';

for (let i = 0; i < authorizedMails.length; i++) {
    const authorizedMail = authorizedMails[i];

    // console.log(authorizedMail);

    if (mailToCheck === authorizedMail) {
        result = 'OK'
    }
    
}

//         -show result on console

console.log(result);
*/


//     -BONUS
//         -add input form for the mail
//         -add button to start the actions:
//             -get mail
const emailToCheck = document.getElementById('mail_to_check');
//             -check list
const authorizedMails = ['aaa@mail.com','bbb@mail.com','ccc@mail.com'];
//             -get result
let result = 'not authorize'
//             -print result on page
const resultBox = document.querySelector('.result_box')
const resultText = document.createElement('div');
resultBox.append(resultText);

const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    
    e.preventDefault()
    
    for (let i = 0; i < authorizedMails.length; i++) {
        const authorizedMail = authorizedMails[i];
        
        console.log(authorizedMail);
        
        if (emailToCheck.value === authorizedMail) {
            result = 'authorized'
        }
        
    }
    
    console.log(result);
    
    //             -print result on page
    resultText.innerHTML = result;

    document.querySelector('.card').style.display = 'block';
    
    
})

//         -style the css


// -Gioco dei dadi
//     -generate a random namber between 1 and 6
//         -a number for the user
const userNumber = Math.floor(Math.random() * 6) + 1;
//         -a number for the pc
const pcNumber = Math.floor(Math.random() * 6) + 1;
//     -check the numbers
console.log(userNumber , pcNumber);
//     -decide the winner
let winner = 'tie'
//         -the higher number win
if (userNumber > pcNumber) {
    winner = 'user WIN'
} else if (userNumber < pcNumber) {
    winner = 'pc WIN'
}
//     -print the result
console.log(winner);
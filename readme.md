# Instructions

- Mail
    Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

- Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

- Bonus
    Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

#Steps

-Mail
    -input mail
    -set mails list (array)
    -check the mails list (for)
        -if mail part of mails list message OK
        -if mail NOT part of mails list message NO    
     -show result on console
         -set result as variable
         -show result on console

    -BONUS
        -add input form for the mail
        -add button to start the actions:
            -get mail
            -check list
            -get result
            -print result on page
        -style the css


-Gioco dei dadi
    -generate a random namber between 1 and 6
        -a number for the user
        -a number for the pc
    -check the numbers
    -decide the winner
        -the higher number win
    -print the result

    -add HTML
        -add boxes
        -add button
            -print at the button click
    -style css

#Tools

-const / let
-array[]
-FOR loop
-if / else
-math.random
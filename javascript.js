function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100) % 3;

    switch(randomNum) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

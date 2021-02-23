const game = (() => {

    // cache DOM
    const tiles = document.getElementsByClassName("tile");

    // Variables
    const gameBoard = [...tiles];
    const playerList = []; 

    // Functions
    const player = (name, token) => {
        const getName =  name;
        const getToken = token;
        const placeToken = (e) => {
            if (e.target.innerHTML.length === 0) {
                e.target.textContent = player.getToken;
            } else if (!(e.target.textContent.length === 0)) {
                alert('Token already placed here, choose somewhere else!')
            };
        };
        
        return { getName, getToken, placeToken };
    };

    const displayController = () => {
    
        const renderGameBoard = () => {
            for (i = 0; i < tiles.length; i++) {
                tiles[i].textContent = gameBoard[i];
            };
        };

        let createEvents = (nodeList) => {
            nodeList.forEach(item => {
                item.addEventListener('click', e => {
                    console.log(item, 'was clicked')
                    console.log(e);
                    player.placeToken(player.getToken);
                    
                });
            });
        };

        createEvents(gameBoard);
        renderGameBoard();

        return { renderGameBoard, createEvents }
    };


    return { displayController, player, gameBoard };
})();


// Can create new playerList etc by e.g const chris = game.player('chris', 'X');
// Can change gameBoard by game.gameBoard[i/x].textContent = 'X';   Does this change the array ?

/* Destructuring assignment to push the html nodelist into our array
    const arrayBoard = [...tiles]; WRONG ?

    const arrayBoard = [] 
    arrayBoard = gameBoard[...]
    */

// Other Stuff

// Create playerList

const alex = game.player('alex', 'X');
const ben = game.player('ben', 'O');

/* Winning tile combinations
123 || 321
456 || 654
789 || 987
147 || 741
369 || 963
357 || 753
159 || 951 */
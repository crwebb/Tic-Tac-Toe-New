const gameBoard = (() => {

    const gameBoard = ['X','O','O','X','O','X','O','X','X'];
 
    // cache DOM
    const myBoard = board.getElementsByClassName("tile")
 
    const player = name => {
        const getName = () => name;
     };
 
     const controller = () => {
 
         myBoard.forEach(item => {
             item.textContent = "boo";
         })
     };
     controller();
  
    return {player, gameBoard, controller};
 })();
 
 
 
 
 /*
 board.forEach(item => {
             item.addEventListener('click', event => {
                 //handle click
             });
         });
 */
 
 /*
 Winning tile combinations
 
 123 || 321
 456 || 654
 789 || 987
 147 || 741
 369 || 963
 357 || 753
 159 || 951
 
 */
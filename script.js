
const gameboard = (function() {
    const boardContainer = document.querySelector(".gameboard")
    
    // create a factory function that creates players
    const playerFactory = (name, playerChoice) => {
        
        return {name, playerChoice}
    }
    
    
    let elsArray = []; 
    // create DOM els
    for(i = 0; i < 9; i++) {
        let el = document.createElement('div');
        el.classList.add('squareEl');
        el.style.width = '5.6rem'
        el.style.height = '5.6rem'
        el.style.textAlign = 'center'
        el.style.fontSize = '4.9rem'
        elsArray.push(el);
        el.id = elsArray.indexOf(el);
    }
    console.log(elsArray)
    render()
    
    const harry = playerFactory('harry', "X")
    const jen = playerFactory('jen', 'O')
    
    function render() {
        for(const item of elsArray) {
            boardContainer.appendChild(item)
    }}

    function addPlayerChoice(e) {
        if(!e.target.classList.contains('squareEl')) {
            return;
        }    
        e.target.innerText = jen.playerChoice
    }

    boardContainer.addEventListener('click', addPlayerChoice)
       
})()

// wins =

// Rows
// [0,1,2]
// [3,4,5]
// [6,7,8]

// Columns
// [0,3,6]
// [1,4,7]
// [2,5,8]

// Diagonal
// [0,4,8]
// [2,4,6]
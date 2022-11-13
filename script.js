
const game = (function() {
    const boardContainer = document.querySelector(".gameboard");
    const XPlayerInput = document.querySelector("#xplayer");
    const OPlayerInput = document.querySelector("#oplayer");
    const startBtn = document.querySelector(".start");
    const resetBtn = document.querySelector(".reset");
    const display = document.querySelector('.display');
    const xplayerTitle = document.querySelector('.xplayer-score');
    const oplayerTitle = document.querySelector('.oplayer-score');
    const xplayerScore = document.querySelector('.xplayer-display');
    const oplayerScore = document.querySelector('.oplayer-display');
    let turn = true
    let roundOver = false
    let xPlayer
    let oPlayer
    let xScore = 0
    let oScore = 0

    
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
    
    render()
    
    function render() {
        for(const item of elsArray) {
            boardContainer.appendChild(item)
        }}
        
        
        function startGame(e) {
            
            if(!e.target.classList.contains('squareEl') || (roundOver === true)) {
                return;
            }    
            if(e.target.innerText === '') {
                if(turn) {
                    e.target.innerText = xPlayer.playerChoice
                } else {
                    e.target.innerText = oPlayer.playerChoice   
                }
                turn = !turn
                
                if(((elsArray[0].innerText === 'X') &&
                    (elsArray[1].innerText === 'X') &&
                    (elsArray[2].innerText === 'X')) ||
                   ((elsArray[3].innerText === 'X') &&
                    (elsArray[4].innerText === 'X') &&
                    (elsArray[5].innerText === 'X')) ||
                   ((elsArray[6].innerText === 'X') &&
                    (elsArray[7].innerText === 'X') &&
                    (elsArray[8].innerText === 'X')) ||
                   ((elsArray[0].innerText === 'X') &&
                    (elsArray[3].innerText === 'X') &&
                    (elsArray[6].innerText === 'X')) ||
                   ((elsArray[1].innerText === 'X') &&
                    (elsArray[4].innerText === 'X') &&
                    (elsArray[7].innerText === 'X')) ||
                   ((elsArray[2].innerText === 'X') &&
                    (elsArray[5].innerText === 'X') &&
                    (elsArray[8].innerText === 'X')) ||
                   ((elsArray[0].innerText === 'X') &&
                    (elsArray[4].innerText === 'X') &&
                    (elsArray[8].innerText === 'X')) ||
                   ((elsArray[2].innerText === 'X') &&
                    (elsArray[4].innerText === 'X') &&
                    (elsArray[6].innerText === 'X')))
                    {display.innerHTML = `${xPlayer.name} won!`
                     xScore += 1
                     updateScore()
                    //  turn = false
                     roundOver = true
                    }
                
                if(((elsArray[0].innerText === 'O') &&
                    (elsArray[1].innerText === 'O') &&
                    (elsArray[2].innerText === 'O')) ||
                   ((elsArray[3].innerText === 'O') &&
                    (elsArray[4].innerText === 'O') &&
                    (elsArray[5].innerText === 'O')) ||
                   ((elsArray[6].innerText === 'O') &&
                    (elsArray[7].innerText === 'O') &&
                    (elsArray[8].innerText === 'O')) ||
                   ((elsArray[0].innerText === 'O') &&
                    (elsArray[3].innerText === 'O') &&
                    (elsArray[6].innerText === 'O')) ||
                   ((elsArray[1].innerText === 'O') &&
                    (elsArray[4].innerText === 'O') &&
                    (elsArray[7].innerText === 'O')) ||
                   ((elsArray[2].innerText === 'O') &&
                    (elsArray[5].innerText === 'O') &&
                    (elsArray[8].innerText === 'O')) ||
                   ((elsArray[0].innerText === 'O') &&
                    (elsArray[4].innerText === 'O') &&
                    (elsArray[8].innerText === 'O')) ||
                   ((elsArray[2].innerText === 'O') &&
                    (elsArray[4].innerText === 'O') &&
                    (elsArray[6].innerText === 'O')))
                    {display.innerHTML = `${oPlayer.name} won!`
                     oScore += 1
                     updateScore()
                    //  turn = false
                     roundOver = true
                    }
                
                
                
                  if((elsArray[0].innerText !== '') && 
                     (elsArray[1].innerText !== '') &&
                     (elsArray[2].innerText !== '') &&
                     (elsArray[3].innerText !== '') &&
                     (elsArray[4].innerText !== '') &&
                     (elsArray[5].innerText !== '') &&
                     (elsArray[6].innerText !== '') &&
                     (elsArray[7].innerText !== '') &&
                     (elsArray[8].innerText !== '')) 
                     {display.innerHTML = 'Tied!'}       
                    }
                    
                }       
                
                
    function updateScore() {             
                xplayerScore.innerHTML = xScore
                oplayerScore.innerHTML = oScore
    }
    
    function reset() {
                roundOver = false
                display.innerHTML = ''
                elsArray[0].innerText = ''
                elsArray[1].innerText = ''
                elsArray[2].innerText = ''
                elsArray[3].innerText = ''
                elsArray[4].innerText = ''
                elsArray[5].innerText = ''
                elsArray[6].innerText = ''
                elsArray[7].innerText = ''
                elsArray[8].innerText = ''
    }
            
    boardContainer.addEventListener('click', startGame)
    
    startBtn.addEventListener('click', function(){
        xPlayer = playerFactory(`${XPlayerInput.value}`, 'X');
        oPlayer = playerFactory(`${OPlayerInput.value}`, 'O');
        XPlayerInput.value = ''
        OPlayerInput.value = ''
        xplayerTitle.innerHTML = `${xPlayer.name}`
        oplayerTitle.innerHTML = `${oPlayer.name}`
        updateScore()
    })
    
    resetBtn.addEventListener('click', reset)
    
       
    return {reset}
    
})()





                
                     
                     

                     
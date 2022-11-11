
const gameboard = (function() {
    const boardContainer = document.querySelector(".gameboard")
    const resetBtn = document.querySelector(".reset");
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
              if(e.target.innerText === '') {
              e.target.innerText = harry.playerChoice

                if((((elsArray[0].innerText === 'O') &&
                     (elsArray[1].innerText === 'O') &&
                     (elsArray[2].innerText === 'O')) ||
                    ((elsArray[0].innerText === 'X') &&
                     (elsArray[1].innerText === 'X') &&
                     (elsArray[2].innerText === 'X'))) ||

                   (((elsArray[3].innerText === 'O') &&
                     (elsArray[4].innerText === 'O') &&
                     (elsArray[5].innerText === 'O')) ||
                    ((elsArray[3].innerText === 'X') &&
                     (elsArray[4].innerText === 'X') &&
                     (elsArray[5].innerText === 'X'))) ||

                   (((elsArray[6].innerText === 'O') &&
                     (elsArray[7].innerText === 'O') &&
                     (elsArray[8].innerText === 'O')) ||
                    ((elsArray[6].innerText === 'X') &&
                     (elsArray[7].innerText === 'X') &&
                     (elsArray[8].innerText === 'X'))) ||

                   (((elsArray[0].innerText === 'O') &&
                     (elsArray[3].innerText === 'O') &&
                     (elsArray[6].innerText === 'O')) ||
                    ((elsArray[0].innerText === 'X') &&
                     (elsArray[3].innerText === 'X') &&
                     (elsArray[6].innerText === 'X'))) ||

                   (((elsArray[1].innerText === 'O') &&
                     (elsArray[4].innerText === 'O') &&
                     (elsArray[7].innerText === 'O')) ||
                     ((elsArray[1].innerText === 'X') &&
                     (elsArray[4].innerText === 'X') &&
                     (elsArray[7].innerText === 'X'))) ||
                     
                     (((elsArray[2].innerText === 'O') &&
                     (elsArray[5].innerText === 'O') &&
                     (elsArray[8].innerText === 'O')) ||
                     ((elsArray[2].innerText === 'X') &&
                     (elsArray[5].innerText === 'X') &&
                     (elsArray[8].innerText === 'X'))) ||
                     
                     (((elsArray[0].innerText === 'O') &&
                     (elsArray[4].innerText === 'O') &&
                     (elsArray[8].innerText === 'O')) ||
                     ((elsArray[0].innerText === 'X') &&
                     (elsArray[4].innerText === 'X') &&
                     (elsArray[8].innerText === 'X'))) ||
                     
                     (((elsArray[2].innerText === 'O') &&
                     (elsArray[4].innerText === 'O') &&
                     (elsArray[6].innerText === 'O')) ||
                     ((elsArray[2].innerText === 'X') &&
                     (elsArray[4].innerText === 'X') &&
                     (elsArray[6].innerText === 'X'))))
                     
                     {console.log('You Won!!!')}
                     
                  if((elsArray[0].innerText !== '') && 
                     (elsArray[1].innerText !== '') &&
                     (elsArray[2].innerText !== '') &&
                     (elsArray[3].innerText !== '') &&
                     (elsArray[4].innerText !== '') &&
                     (elsArray[5].innerText !== '') &&
                     (elsArray[6].innerText !== '') &&
                     (elsArray[7].innerText !== '') &&
                     (elsArray[8].innerText !== '')) 
                     {console.log('Tied!')
                      
                     
                    }       
                }
                
            }       
            
            function reset() {
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
            
            
            boardContainer.addEventListener('click', addPlayerChoice)
            resetBtn.addEventListener('click', reset)
    
    return {reset}        

})()


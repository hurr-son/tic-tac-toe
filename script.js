
const gameboard = (function() {
    
    let elsArray = []; 
    // create DOM els
    for(i = 0; i < 9; i++) {
        let el = document.createElement('div');
        el.classList.add('squareEl');
        el.style.width = '5.6rem'
        el.style.height = '5.6rem'
        elsArray.push(el);
        render()
    }
    
    
    
    function render() {
        const boardContainer = document.querySelector(".gameboard")
        for(const item of elsArray) {
        boardContainer.appendChild(item)
    }}
    
    
    
    
    
    
    
    
})()





















// let gameboard = {
//     init: function() {
//         this.cacheDom()
//         this.render()

//         },
//         cacheDom: function() {
//             this.squareEls =
//             function() {
//                     let elsArray = []; 
//                     for(i = 0; i < 9; i++) {
//                     let el = document.createElement('div');
//                     el.classList.add('squareEl');
//                     el.style.width = '3rem'
                    
//                     elsArray.push(el);
//                 }
//                 return elsArray;
//             }
            
//         },
//         render: function() {
//             this.boardWrapperEl = document.getElementsByClassName('gameboard-wrapper')
//             this.squareEls = document.getElementsByClassName('squareEl');
//         }
        
//     };
    
//     gameboard.init();

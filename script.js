let gameboard = {
    init: function() {
        this.cacheDom()
        this.render()

        },
        cacheDom: function() {
            this.squareEls =
            function() {
                    let elsArray = []; 
                    for(i = 0; i < 9; i++) {
                    let el = document.createElement('div');
                    el.classList.add('squareEl');
                    el.style.width = '3rem'
                    
                    elsArray.push(el);
                }
                return elsArray;
            }
            
        },
        render: function() {
            this.boardWrapperEl = document.getElementsByClassName('gameboard-wrapper')
            this.squareEls = document.getElementsByClassName('squareEl');
        }
        
    };
    
    gameboard.init();

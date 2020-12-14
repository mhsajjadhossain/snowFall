let snowOptions = new Object();
// parent, symbol = '&#10052', speed = 1000 ,color = '#ffffff',size = 20

let snowFall = (snowOptions) => {
     // stopInterval function
     function stopIntervl(){
        clearInterval(functionRendar)
    }


    let appendOn = document.querySelector(snowOptions.appendOn)
    let runnerFunction = () => {
        appendOn.style.position = 'relative';
        appendOn.style.overflow = 'hidden';
        let shapeElement = document.createElement('span');
        shapeElement.classList.add('snow__shape')
        shapeElement.innerHTML = snowOptions.symbol;
        appendOn.appendChild(shapeElement)
        
        shapeElement.style.cssText = `position:absolute;top:-20px;`;
        shapeElement.style.left = `${Math.random() * window.innerWidth}px`;

        // snowOptions.fillColor = 'red'

        shapeElement.style.color = snowOptions.fillColor;
        // creating keyFrames for animation 
        shapeElement.animate([
            // keyframes
            {
                top: '-20%' ,
                transform : 'rotate(0deg)'
            },
            {
                top: '100%',
                transform : 'rotate(360deg)'
            }
        ], {
            // timing options
            duration: Math.random()*snowOptions.speed+2000,
            iterations: Infinity
        });
        
        // adjusting opacity
        shapeElement.style.opacity = Math.random();
        shapeElement.style.fontSize = `${Math.random()*snowOptions.size}px`;
        
        
        let snowShapes = document.querySelectorAll(`${snowOptions.appendOn} .snow__shape`)
        console.log('snowShapes :', snowShapes.length);

        if(snowShapes.length >= snowOptions.shapeCount){
            stopIntervl();
        }
        
    }
    
    
   
    let functionRendar = setInterval(runnerFunction, snowOptions.speed)

    

    

    

    let selectorParent = snowOptions.appendOn;



    
}






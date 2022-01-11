const char = document.getElementById('char')
 
let faceClasses = ['face-up','face-right','face-down','face-left']
     
document.addEventListener('keydown', function(event) {
    
switch (event.key) {
    case "ArrowLeft":
        // Left pressed
        console.log(event.key)
        for(let i=0;i < faceClasses.length;i++){
            char.classList.contains(faceClasses[i]) ?
            char.classList.remove(faceClasses[i]) : null
            console.log(char.classList)
        } 
        char.classList.add('face-left')
        break;
    case "ArrowRight":
        // Right pressed
        console.log(event.key)
        for(let i=0;i < faceClasses.length;i++){
            char.classList.contains(faceClasses[i]) ?
            char.classList.remove(faceClasses[i]) : null
            console.log(char.classList)
        }
        char.classList.add('face-right')
        console.log(char.classList)
        break;
    case "ArrowUp":
        // Up pressed
        console.log(event.key)
        for(let i=0;i < faceClasses.length;i++){
            char.classList.contains(faceClasses[i]) ?
            char.classList.remove(faceClasses[i]) : null
        }
        char.classList.add('face-up')
        console.log(char.classList)
        break;
    case "ArrowDown":
        // Down pressed
        console.log(event.key)
        for(let i=0;i < faceClasses.length;i++){
            char.classList.contains(faceClasses[i]) ?
            char.classList.remove(faceClasses[i]) : null
        }
        char.classList.add('face-down')
        console.log(char.classList)
        break;
}  
})
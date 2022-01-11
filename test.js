const btn5 = document.getElementById('btn5')
const btns = document.getElementById('btns')
btn5.addEventListener('click', changeName)

function changeName() {
    let children = btns.children
    console.log(children)
    // children.forEach( (index, element) => {
    //     console.log(index);     // children's index
    //     console.log(element);   // children's element
    //  });    
    for(let i=0; i<children.length; i++){
        // console.log(children.length)
        let child = children[i]
        if(child.id=='btn1' || child.id=='btn2'){
            child.classList.remove(`btn${i+1}`)
            child.classList.add(`btn${i+2}`)
            console.log(child.classList)
        } else if(child.id== 'btn3' || child.id== 'btn6'){
            child.classList.remove(`btn${i+1}`)
            child.classList.add(`btn${i+4}`)
        } else if(child.id== 'btn4' || child.id== 'btn7'){
            child.classList.remove(`btn${i+1}`)
            child.classList.add(`btn${i-2}`)
        } else if(child.id== 'btn8' || child.id== 'btn9'){
            child.classList.remove(`btn${i+1}`)
            child.classList.add(`btn${i}`)
        }
        console.log(btns)
        
    }
}

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(buttons);

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function (e) {
        // console.log(e);
        // console.log(e.target)
        //++++++++++++++IF ELSE WAY++++++++++++++++++++
        // if (button.id==='grey') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (button.id==='white') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (button.id==='blue') {
        //     body.style.backgroundColor = e.target.id;
        // }
        // if (button.id==='yellow') {
        //     body.style.backgroundColor = e.target.id;
        // }

        //++++++++++++++SWITCH++++++++++++++++++++
        switch (button.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id 
                break;
            case 'white':
                body.style.backgroundColor = e.target.id 
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id 
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id 
                break;
        
            default:
                break;
        }
    })
})
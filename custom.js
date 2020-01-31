//Mocked values for test
const amount = 'RAID x {{amount}}';
const animation = 'wobble';
//const name = '0123456789012345678'; // 19 caracteres
//const name = '0123456789012345'; // 16 caracteres
//const name = '01234567890123'; // 14 caracteres
//const name = '012345678901'; // 12 caracteres
const name = '{{name}}'; //10 caracteres

//Get element HTML
const userNameContainer = document.querySelector('#username-container');
const amountContainer = document.querySelector('#amount-container');

// change the properties
amountContainer.innerHTML = stringToAnimatedHTML(amount, animation);
userNameContainer.innerHTML = stringToAnimatedHTML(name, animation);
userNameContainer.style.fontSize = renderUserName();
userNameContainer.style.textAlign = alignUserName();
userNameContainer.style.top = marginTopUserName();

// create span and animate Name user
function stringToAnimatedHTML(s, anim) {
        return `<span id="username-box" class="animated-letter ${anim}">${s}</span>`
}

// Render font size in relation for caracter length
function renderUserName() {
    
    if (name.length > 11 && name.length <=12) {
        return "0.9em";
    }else if(name.length > 12 && name.length <=15){
        return "0.7em";
    } else if(name.length >= 16 && name.length <=19){
        return "0.6em";
    }   
}

function alignUserName() {
    
    if (name.length <= 7) {
        return "center";
    }
        return "right";   
}

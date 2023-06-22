const customiz=document.getElementById("customize")
const customizdiv=document.querySelector('.customiza-div')
const lab=document.getElementById('label')
const input=document.getElementById('chick')
const exit=document.getElementById('eix')
const def=document.querySelector('.def-color')
const c1=document.getElementById('c1')
const c2=document.getElementById('c2')
const c3=document.getElementById('c3')
const c4=document.getElementById('c4')
const c5=document.getElementById('c5')
const c6=document.getElementById('c6')
const c7=document.getElementById('c7')
const c8=document.getElementById('c8')
const c9=document.getElementById('c9')
const c10=document.getElementById('c10')
const elments=document.querySelectorAll('.main-category, .imag, .top-one')
const defFont=document.querySelector('.text-button')
const font1=document.querySelector('.f1-1')
const font2=document.querySelector('.f1-2')
const font3=document.querySelector('.f1-3')
const font4=document.querySelector('.f1-4')
const font5=document.querySelector('.f1-5')
const font6=document.querySelector('.f1-6')
const font7=document.querySelector('.f1-7')
const font8=document.querySelector('.f1-8')


customiz.onclick=()=>{
    if (input.checked) {
        customizdiv.style.right='0'
        customiz.style.right='250px'
    }
    else{
        customizdiv.style.right='-335px'
        customiz.style.right='0'
    }
}

exit.onclick=()=>{
    customizdiv.style.right='-335px'
    customiz.style.right='0'
}

def.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#faedeb";
        
}}

c1.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#9b51e0";
}}

c2.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#ff42B3";
}}

c3.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#ff6a97";
}}

c4.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#ff5100";
}}

c5.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#f9c349";
}}

c6.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#30c7b5";
}}

c7.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#1bae70";
}}

c8.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#73d6ff";
}}

c9.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#4175fc";
}}

c10.onclick=()=>{
    for(let i = 0; i < elments.length; i++) {
        elments[i].style.backgroundColor = "#ef4d48";
}}

defFont.onclick=()=>{
    document.body.style.fontFamily = "'Poppins', sans-serif";
}

font1.onclick=()=>{
    document.body.style.fontFamily = "'Playfair Display', serif";
}

font2.onclick=()=>{
    document.body.style.fontFamily = "'Dancing Script', sans-serif";
}

font3.onclick=()=>{
    document.body.style.fontFamily = "'Bagel Fat One', sans-serif";
}

font4.onclick=()=>{
    document.body.style.fontFamily = "'Rubik', sans-serif";
}

font5.onclick=()=>{
    document.body.style.fontFamily = "'Roboto Condensed', sans-serif";
}

font6.onclick=()=>{
    document.body.style.fontFamily = "'Merriweather', sans-serif";
}

font7.onclick=()=>{
    document.body.style.fontFamily = "'Vollkorn', sans-serif";
}

font8.onclick=()=>{
    document.body.style.fontFamily = "'Work Sans', sans-serif";
}
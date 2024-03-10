/*?------------------------------------------------slider--------------------------------------------------------*/

function prev(){
    document.getElementById('slider-container').scrollLeft -= 226;
}

function next()
{
    document.getElementById('slider-container').scrollLeft += 226;
}

let Body = document.getElementById('body')
let anim = document.getElementById('animation')
let h = document.getElementById('h1-title')
let dark = document.getElementById('dark')




Body.addEventListener('unload' , function(){
    anim.style.display='visible'

});

setTimeout(() => {
    anim.style.display='none'
}, 7100);

dark.addEventListener('click', function(){
    Body.style.backgroundColor ='#938c8c99'
})
light.addEventListener('click', function(){
    Body.style.backgroundColor ='white'
})
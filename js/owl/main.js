$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const imgs = window.document.getElementById('filme');
const img = document.querySelectorAll('#filme filme');

let idx = 0;

function mudarTela(){
    idx ++;
    if(idx > img.length -1){
        idx = 0;
    }

    imgs.style.transform =  `translateX(${-idx * 400}px)`;
}
setInterval(mudarTela, 2000);



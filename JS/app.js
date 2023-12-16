var aa=document.querySelector('.fa-bars');
var ab=document.querySelector('.fa-angles-left');
var ac=document.querySelector('.item1');
var ad=document.querySelector('.item2');
var ae=document.querySelector('#sbtn');
var af=document.querySelector('.abs');
var ag=document.querySelector('#langs');
ag.addEventListener('click',adf);

aa.addEventListener('click',abc);
ab.addEventListener('click',ade);

function abc(){
    ac.style.display='block'
    ab.style.display='block'
    aa.style.display='none'
}
function ade(){
    ac.style.display='none'
    ab.style.display='none'
    aa.style.display='block'
    ad.style.width='100vw'
}

// function sea(){
//     ae.style.display='block'
// }
// function seat(){
//     ae.style.display='none'
// }

function adf(){
    af.style.display='block'
}
function aff(){
    af.style.display='none'
}
document.addEventListener('DOMContentLoaded',()=>{

const images=document.querySelectorAll('img');
const left=document.querySelector('.fa-arrow-left');
const right=document.querySelector('.fa-arrow-right');
position=0;

onstart();


function onstart(){

images.forEach((image,index)=>{
if(index!=0)
image.style.display="none";
});
}


left.addEventListener('click',leftclicked);

right.addEventListener('click',rightclicked);


//leftclicked function 

function leftclicked(){
if(position==0)
return;
else{
    position--;
    images.forEach(image=>{
        image.style.display="none";
    })
    images[position].style="inline block";
}
}


//rightclicked function 

function rightclicked(){

    
    if(position==images.length-1)
return;
else{
    position++;
    images.forEach(image=>{
        image.style.display="none";
    })
    images[position].style="inline block";
}

}




});//dom content loaded function

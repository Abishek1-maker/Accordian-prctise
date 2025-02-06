const item=document.querySelectorAll('.accordion-header');
item.forEach(item =>  item.addEventListener('click',()=>{
        const allcontent=document.querySelectorAll('.accordion-content');


   allcontent.forEach((content)=>{
    if(content !==item.nextElementSibling){
        content.classList.remove('active');
    }})
    const content=item.nextElementSibling;
   content.classList.toggle('active');
    }));
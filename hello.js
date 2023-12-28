// New feature add this file
  
 let div=document.querySelector('div');
   let btn=document.createElement('button');
     btn.innerText="click me!";
      btn.classList.add("btn");
        div.appendChild(btn);

         btn.addEventListener('click',async()=>{
             let a=document.createElement('a');
               a.innerText="hello";
                a.href="#action";
                 div.appendChild(a);

              
         });

           let hello;
       
         
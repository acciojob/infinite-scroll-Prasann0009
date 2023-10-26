const scrollContainer = document.getElementById("infi-list");

let elementNumber = 1;

function addTenMore()
{
  for(let i=1;i<=10;i++)
  {
    let li = document.createElement("li");
    li.innerText = `Item ${elementNumber++}`;
    scrollContainer.appendChild(li);
  }
 }

 scrollContainer.addEventListener("scroll",()=>{
   const totalScrollHeight = scrollContainer.scrollHeight;
   const visibleHeight = scrollContainer.clientHeight;
   const scrolledHeight = scrollContainer.scrollTop;

   let remainingScrollHeight = totalScrollHeight - visibleHeight - scrolledHeight;

   if(remainingScrollHeight => 4)
   {
      addTenMore();
   }
 });
 
addTenMore();
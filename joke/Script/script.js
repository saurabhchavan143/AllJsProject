
let jokeclick=document.querySelector('#jokeclick');
 let joke=document.getElementById('joke');

// const ubdate=()=>{
//    const setheader={
//        headers:{
//            Accept:"application/json"
//        }

//    }
//      fetch("https://icanhazdadjoke.com",setheader)
//      .then((res)=>res.json() )
//      .then((data)=>{
//          joke.innerHTML=data.joke;
//      })
//      .catch((error)=>{
//          joke.innerHTML="make sure your internet is connected";
//          console.log("error is ocure");
//      })

// }


 const ubdate=async ()=>{
     const setheader={
       headers:{
           Accept:"application/json"
       }
   }
  try{
    let res=await fetch("https://icanhazdadjoke.com",setheader);
      let data=await res.json();
           joke.innerHTML=data.joke;
  }
  catch(error){
      joke.innerHTML=error ;
  }
 }


    ubdate();
    jokeclick.addEventListener('click',ubdate);
    setInterval(()=>{
       return ubdate();

    },5000)

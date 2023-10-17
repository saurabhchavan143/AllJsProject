
        let result=document.getElementById('res');
        let btn=document.getElementById('btn');
function myfun()
{

        let tempvalue=document.getElementById('tempvalue').value;
        let tempof=document.getElementById('temp');
        const valuetemp=temp.options[tempof.selectedIndex].value;
        let res;
   
     const celtofe=(cel)=> {
                           let fah=Math.round((cel-32)*5/9);
                               return fah;
                           }
              
      const fehtoce=(feh)=>
                          {
                          let cel=Math.round((feh*9/5)+32);
                           return cel;
                           }
          

          if(valuetemp==='cel')
          {
              res=celtofe(tempvalue);
            document.getElementById('result').innerHTML=`${tempvalue}° feranide =${res}° celsious `;
          }
          else
          {
              res=fehtoce(tempvalue)
              document.getElementById('result').innerHTML=`${tempvalue}° celsious= ${res}° feranide  `;
          }


}
btn.onclick=myfun;
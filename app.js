// for (key in conversion_rates){
//     console.log(key,":",conversion_rates[key]);
  
// }
let select=document.body.getElementsByTagName('select');
let s1=select[0];
let s2=select[1];
// console.log(s1);
// let arr=Array.from(select[0].innerText);
// console.log(arr)
// for(option in select){
//     console.log(select);
// }
// for(key1 of s1){
    // let e=key1[0];
    // console.log(key1);
    for(key2 in conversion_rates){
        let newelement=document.createElement('option');
        newelement.innerText=key2;
        // document.body.=newelement;
        s1.appendChild(newelement);
        if(newelement.innerText=="USD"){
            newelement.selected='selected';
        }
    }
    for(key2 in conversion_rates){
        let newelement=document.createElement('option');
        newelement.innerText=key2;
        // document.body.=newelement;
        s2.appendChild(newelement);
        if(newelement.innerText=="INR"){
            newelement.selected='selected';
        }
    }
let btn=document.getElementById('btn');
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let SI=s1.selectedIndex;
    let SOP=s1.options[SI];
    let from=SOP.innerText;
    console.log(from);

    let SI2=s2.selectedIndex;
    let SOP2=s2.options[SI2];
    let to=SOP2.innerText;
    console.log(to);
    //taking the input amount
    let input=document.getElementById('input');
    let amount=input.value;
    console.log(amount);
    //showing the result here
    let resultbox=document.getElementById('result');
    let exchangerate=conversion_rates[to]/conversion_rates[from];
    console.log(exchangerate);
    // let tovalue=conversion_rates[to];
    let result=exchangerate*amount;
    resultbox.innerHTML=result;
})





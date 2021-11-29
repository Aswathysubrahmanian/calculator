// function clickButton(val){
//     document.querySelector("#result").value+=val
// }
let clickButton=val=>result.value+=val
let clearDisplay=()=>result.value="";
let clickEqual=()=>result.value=eval(result.value);
let eraseElement=()=>result.value=result.value.slice(0,-1);



// function clearDisplay(){
//     document.querySelector("#result").value=""
// }
// function eraseElement(){
//     let text=document.querySelector("#result")
//     text.value=text.value.slice(0,-1)
// }
// function clickEqual(){
//     var text=document.getElementById("result").value
//     var op=eval(text)
//     document.getElementById("result").value=op
// }
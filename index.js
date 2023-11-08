let pin = 7777
let chance = 0
let enter

while ( chance < 3) {
 let enter = +prompt('enter your password')
if( enter === pin) {
    alert('welcome')
 console.log('welcome');
 break
}else {
 chance++
 alert('wrong password ' + chance)
console.log("wrong password");
}
} 


let num = 1
 do {
    document.write(`2 * ${num} = ${ 2 * num}  <br>`);
     num++
} while (num <= 10) {
  
 }
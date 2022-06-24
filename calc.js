let firstNo = parseInt(prompt("Enter First Number"));
console.log(firstNo); //prints the first number

let anotherNo = parseInt(prompt("Enter Another Number"));
console.log(anotherNo); //prints another number

let operator = prompt("Which Operation Do You Want To Perform (Hint: +, -, / or *)");
console.log(firstNo); //prints the first number

switch (operator) {
    case '+':
        let add = firstNo + anotherNo;
         alert("Answer is " +add);
        break;
     case '-':
        let minus = firstNo - anotherNo;
         alert("Answer is " +minus);
        break;
     case '*':
        let multiply = firstNo * anotherNo;
         alert("Answer is " +multiply);
        break;
     case '/':
        let divide = firstNo / anotherNo;
         alert("Answer is " +divide);
        break;
    default:
        alert("You didn't input a valid operator");
        break;
}
let anotherOp ="Do you want to perform another operation?";
if (window.confirm(anotherOp) == true) {
alert("Refresh the page")
}
else{
    alert("Thanks for calculating");
}

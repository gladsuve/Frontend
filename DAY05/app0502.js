//  var hoistiong test(var 호이스팅)

testVar = 2;
var testVar;

console.log(testVar);

/* 
VAR로 선언하지 않아도
변수명 = 값의 형태면 선언이 된다.
*/


// 오류 발생
// 아래서 선언이 되어있지 않고, 위에서 호출할 경우
// console.log(testVar3);
// testVar3 = 10;

console.log(testVar4);
testVar4 = 10;
var testVar4;

{
    let age = 20;
    console.log("inner : "+age);
}

{
    age2 = 30;
    var age2;
}
console.log(age2);
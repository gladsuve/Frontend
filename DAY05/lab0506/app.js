/* 
함수의 선언 및 사용
*/
// 함수선언(Return 타입이 없는 경우)
function add(a, b){
    console.log(a+b);
}
// 함수 호출
add(1,2);

// 함수선언(Return 타입이 있는 경우)
function multiple(a, b){
    return(a * b);
}
// first class object
// console.log(multiple(3, 5));

// 함수에서도 hoisting 가능
// 선을 아래에서 해도 위에서 호출가능
coffeeMachine("아아", 3000);


function coffeeMachine(type, price){
    console.log(`가격이 ${price}인 ${type} 커피가 나왔습니다.`);
}


// 함수를 만들었을 때 장점
/* 
1) 재사용 가능
2) 프로그램을 이해하기 쉬워진다
3) 수정이 쉽다.
*/

// 함수 표현 방법
// 선언문 정의
function square(x) {
    return x * x;
}

// 함수 리터럴로 정의
const square2 = function(x) {
    return x * x;
}

// function 생성자로 정의 방법
const square3 = Function("x", "return x * x");

// 화살표 함수로 표현식으로 정의하는 방법
const square4 = x => x * x;

// 즉시 실행 함수
(function(){})();
// 즉시 실행 함수도 인자값을 전달할 수 있다.
(function(a,b){})(1,2);
//즉시 실햄 함수도 이름을 붙일 수 있다. 단, 이 경우 함수 내부에서만 유효하다.
(function square5(x){
    return x * x;
})(3);

// 함수 정의식을 함수값으로 만들수도 있다.
console.log(
+function(){
    return 1+1;
}());

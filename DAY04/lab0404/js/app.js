/*
javascript
    - 웹에서 동적으로 데이터나 DOM을 조작하기 위한 언어
    - 웹에서 사용하는 클라이언트(Browser) 및 서버(Node.js)용 언어이다.
    - 현재는 javascript library 혹은 framework 등과 함께 사용이 된다.
    - Angular(Goole) - React.js(Meta, facebook) - Vue.js(EvanYou) - Typescript -> Svelte
    - jQuery : Java - SpringFramework같은 거랑 비슷(역할창)
                js.가 해야할 많은 내용을 간단하게 사용할 수 있도록 구현한 library
*/

// jsp에서 일반적으로 말하는 객체
// jsp에서 중요한 것은 객체를 구성하는 모양
// 아래와 같은 형태의 객체는 가장 일반적
// 이를 literal(값) 형태의 객체
let coffee = {
    type: "아아",
    price: 4500
}

console.log(coffee);
let coffeeType = "아아";
let coffeePrice = 4500;

//리터럴 객체에서 값을 가져오는 방법
console.log(coffee.type);
console.log(coffee.price);
console.log(coffee["type"]);
console.log(coffee["price"]);

// 리터럴 객체에 없는 속성을 가져오는 경우
// console.log(coffee.name); undefined 값을 가져온다.

// 그냥 빈 객체를 선언할 경우
let obj = []
console.log(obj);

// 변수나 객체를 선언할 때 사용하는 선언자
// let : 값을 다시 할당해도 되고, []안에서만 값이 유용하다.(local variable)
// const : 변하지 않는 상수 값을 정의할 때 사용한다.
//          const로 선언한 변수에 값을 다시 할당하게 되면 오류가 발생한다.
//          const PI = 3.14, const LOCAL_URL = "https://www.daum.net/";

const coffee1 = {
    type:"Latte",
    price:5000
}

// jsp를 사용할 때 맨 마지막 문장에는 ;을 붙인다.
// jsp에서 ;을 쓰지 않는 경우도 있는데 그럴 경우에는 맨 마지막 문장에서 엔터를 쳐서 작성하면 된다.
// 그러면 다음 문장으로 인식

// 성능때문에 jsp의 용량을 최소로 줄이는 경우가 있기에 맨 마지막에는 ;을 붙이는 것이 좋다.

// jsp는 대소문자를 구분해야 한다.
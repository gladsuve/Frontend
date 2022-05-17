/*
행위와 속성을 나타내는 형태의 객체
*/

const coffee = {
    type : "아아",
    price : 4500,
    makeCoffee : function(){
        console.log(this.type + "//" + this.price);
        // this를 붙이지 않으면 에러발생
    }
}

// 함수 호출
coffee.makeCoffee();
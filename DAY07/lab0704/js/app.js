/**
 * arrow function을 확인해본다.
 * arrow function으로 사용할 API가 setTimeout이라
 * web browser 띄우고 jsp 실행
 * 
 */

// setTimeout(function(){
//     console.log("하이");
// }, 1000)

// // arrow function
// setTimeout(() => {
//     console.log("Hi~")
// }, 2000)

// this context of arrow function
// const myObj = {
//     runTimeout(){
//         setTimeout(function(){
//             console.log(this === window);
//         });
//     }
// };
// myObj.runTimeout();

const myObj = {
    runTimeout(){
        setTimeout(function(){
            this.printData();
        }.bind(this),1000);
    },
    printData(){
        console.log("print data 출력!!")
    }
};
myObj.runTimeout();
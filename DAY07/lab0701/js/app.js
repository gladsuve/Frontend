// document.querySelector("div")
//         .addEventListener("click", function({target}){
            // event -> a
            // target -> element(<div>)
//             // console.log(target.tagName);
//             console.log(target.innerText);
//         });
// document.querySelector("div")
// .addEventListener("click", function({type}){
//     // console.log(target.tagName);
//     console.log(type);
// });
document.querySelector("div")
        .addEventListener("click", function({type, target}){
            // console.log(target.tagName);
            console.log(type, target.tagName);

            console.log("eval=", eval(1+2));
            console.log(`<${target.tagName}>div테스트</${target.tagName}>`);
        });
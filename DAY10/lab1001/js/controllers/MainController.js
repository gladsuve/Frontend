// FormView를 가져와서 setup메소드 세팅을한다.

import SearchMenu from "../models/SearchMenu.js";
import FormView from "../views/FormView.js";
import SearchResultView from "../views/SearchResultView.js";

// module "D:/Frontend/DAY10/lab1001/js/models/SearchMenu.js";


const tag = "[MainController]"

// 외부에서 접근할 수 있도록 export
// 그 안에 가장 기본적인 세팅을 위한 init()함수 적용
export default{
    init(){
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form')).on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset', e => this.resetForm());

        SearchResultView.setup(document.querySelector('#search-result'))
    },

    search(query){
        console.log(tag, "search()", query);
        this.onSearchResult([]);
        SearchMenu.list(query).then(data => {
            this.onSearchResult(data);
        })
    },
    onSubmit(input){
        console.log(tag, 'onSubmit()', input);
        this.search(input);
    },

    resetForm(){
        console.log(tag, "onResetForm()")
    },

    onSearchResult(data){
        SearchResultView.render(data);
    }
}
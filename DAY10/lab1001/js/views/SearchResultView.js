import View from "./View.js"

const tag = "[SearchResultView]";

// View를 copy
const SearchResultView = Object.create(View);

SearchResultView.setup = function(element){
    this.init(element);
    this.searchRstEl = element.querySelector("#search-result");
    return this;
}

//데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render = function(data = []) {
    console.log(tag, 'render', data);
    this.element.innerHTML = data.length? this.getSearchResultHtml(data):"검색결과가 없습니다.";

}


SearchResultView.getSearchResultHtml = function(data){
    console.log(tag, 'getSearchResultHtml', data);
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item);
        return html;
    }, `<ul>`) + `</ul>`;
}

SearchResultView.getSearchItemHtml = function(item){
    return `<li>
        <img src=${item.image}>
        <p>${item.name}</p>
        </li>`;
}
//검색결과가 존재한다면, html tag가 들어가게 될 예정
// SearchResultView.getSearchResultHtml = function(data){
//     console.log(tag, 'getSearchResultHtml',data);
// }

export default SearchResultView;
(window["webpackJsonpmovie-app"]=window["webpackJsonpmovie-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/AQuitPlace.8e06191e.png"},function(e,t,a){e.exports=a.p+"static/media/BridBox.f7a9cddb.png"},,function(e,t,a){e.exports=a.p+"static/media/Plus.1475a81f.png"},function(e,t,a){e.exports=a.p+"static/media/GameOfThrone.aee17703.png"},function(e,t,a){e.exports=a.p+"static/media/EscapeRom.8a4bec41.jpg"},function(e,t,a){e.exports=a.p+"static/media/ToyStory.db9833bb.jpg"},,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(8),o=a.n(r),c=(a(26),a(9)),l=a(10),s=a(19),m=a(11),u=a(20),d=(a(27),function(e){var t=e.value,a=e.onChange,n=void 0===a?function(){}:a;return i.a.createElement("div",null,i.a.createElement("div",{className:"header"},i.a.createElement("input",{type:"text",onChange:function(e){return n(e.target.value)},id:"header-text",value:t}),i.a.createElement("button",{type:"button",id:"header-search",value:"search"},"Search")))}),p=a(12),v=a.n(p),g=a(13),h=a.n(g),f=a(6),E=a.n(f),b=a(33),w=a(34),y=a(35),C=a(36),k=function(e){var t=e.Y;return i.a.createElement(b.a,{className:"col-3 card1"},i.a.createElement("div",{className:" List"},i.a.createElement(E.a,{name:"rate1",starCount:5,value:t.rating}),i.a.createElement(w.a,{top:!0,height:"300px",src:t.image,alt:"Card image cap"}),i.a.createElement(y.a,null,i.a.createElement(C.a,null,t.title))))},x=a(15),N=a.n(x),S=function(e){var t=e.movies,a=void 0===t?[]:t,n=e.onAddMovie,r=void 0===n?function(){}:n;return i.a.createElement("div",{className:"card-list"},i.a.createElement("div",{className:"row"},a.map(function(e){return i.a.createElement(k,{key:e.id,Y:e})})),i.a.createElement("div",null,i.a.createElement("img",{src:N.a,className:"prompt-button",onClick:function(){r({id:Math.random,title:prompt("movie title: "),rating:Number(prompt("movie rating: "))})},type:"button",alt:"image-prompt"})))},j=a(16),O=a.n(j),B=a(17),R=a.n(B),A=a(18),M=a.n(A),F=[{id:"inception",rating:"5",image:h.a,title:"Brid Box - 2018 "},{id:"inception",rating:"1",image:v.a,title:" A Quit Place"},{id:"inception",rating:"4",image:O.a,title:" Game Of Throne - 2017 "},{id:"inception",rating:"4",image:R.a,title:" Escape Rom - 2019 "},{id:"inception",rating:"3",image:M.a,title:" Toy Story - 2019 "}],T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={movies:F,titleFilter:"",minRating:2},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onStarClick",value:function(e,t,a){this.setState({minRating:e})}},{key:"addNewMovie",value:function(e){this.setState({movies:this.state.movies.concat(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row name-rating"},i.a.createElement(d,{onChange:function(t){return e.setState({titleFilter:t})},value:this.state.titleFilter}),i.a.createElement(E.a,{name:"rate1",starCount:5,value:this.state.minRating,onStarClick:this.onStarClick.bind(this)})),i.a.createElement(S,{movies:this.state.movies.filter(function(t){return t.rating>=e.state.minRating&&t.title.toLowerCase().includes(e.state.titleFilter.toLowerCase().trim())}),onAddMovie:function(t){return e.addNewMovie(t)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.bc599638.chunk.js.map
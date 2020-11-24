import Vue from 'vue'
import LottoGenerator from "./LottoGenerator";

let vue = new Vue({
	render: createElement => createElement(LottoGenerator)
})
vue.$mount('#root')

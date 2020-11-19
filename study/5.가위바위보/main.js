import Vue from 'vue'
import RockPager from "./RockPaper";

let vue = new Vue({
	render: createElement => createElement(RockPager)
})
vue.$mount('#root')

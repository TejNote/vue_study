import Vue from 'vue'
import ResponseCheck from "./ResponseCheck";

let vue = new Vue({
	render: createElement => createElement(ResponseCheck)
})
vue.$mount('#root')

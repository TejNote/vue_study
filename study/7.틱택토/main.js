import Vue from 'vue'
import TicTacToe from "./TicTacToe";

new Vue({
	data: {
		tableData: [
			['', '', ''],
			['', '', ''],
			['', '', '']
		],
		turn: 'O',
		winner: '',
	},
	render: createElement => createElement(TicTacToe)
}).$mount('#root')

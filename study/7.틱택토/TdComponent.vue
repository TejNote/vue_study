<template>
	<td @click="onClickTurn">{{ cellData }}</td>
</template>

<script>
export default {
	name: "TdComponent",
	props: {
		cellData: String,
		rowIndex: Number,
		cellIndex: Number,
	},
	methods: {
		onClickTurn() {
			if (this.cellData) return

			const rootData = this.$root.$data
			this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn)
			let win = false;
			if (rootData.tableData[this.rowIndex][0] === rootData.turn &&
				rootData.tableData[this.rowIndex][1] === rootData.turn &&
				rootData.tableData[this.rowIndex][2] === rootData.turn) {

				win = true;
			}

			if (rootData.tableData[0][this.cellIndex] === rootData.turn &&
				rootData.tableData[1][this.cellIndex] === rootData.turn &&
				rootData.tableData[2][this.cellIndex] === rootData.turn) {

				win = true;
			}

			//대각선
			if (rootData.tableData[0][0] === rootData.turn &&
				rootData.tableData[1][1] === rootData.turn &&
				rootData.tableData[2][2] === rootData.turn) {

				win = true;
			}

			if (rootData.tableData[0][2] === rootData.turn &&
				rootData.tableData[1][1] === rootData.turn &&
				rootData.tableData[2][0] === rootData.turn) {

				win = true;
			}

			//승리했을때
			if (win) {
				rootData.winner = rootData.turn;
				rootData.turn = 'O';
				rootData.tableData = [
					['', '', ''],
					['', '', ''],
					['', '', ''],
				];
			}
			else {
				//무승부일때
				let all = true; //all이 true면 무승부
				//무승부 검사
				rootData.tableData.forEach(row => {
					//2차원 배열이니 두번 forEach 실행
					row.forEach(cell => {
						// 칸이 비어있는경우면 all = false
						if (!cell) {
							all = false;
						}
					});
				});
				//무승부일때 값 초기화
				if (all) {
					rootData.winner = '';
					rootData.turn = 'O';
					rootData.tableData = [
						['', '', ''],
						['', '', ''],
						['', '', ''],
					];
					//무승부가 아니므로 턴만 넘긴다
				}
				else {
					rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
				}
			}
		}
	}
}
</script>

<style scoped>
td {
	border: 1px solid black;
	width: 40px;
	height: 40px;
	text-align: center;
}
</style>
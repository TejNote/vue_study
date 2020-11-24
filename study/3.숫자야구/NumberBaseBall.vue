<template>
	<div>
		<h1>{{ result }}</h1>
		<form @submit.prevent="onSubmitForm">
			<input ref="answer" maxlength="4" v-model="value">
			<button type="submit">입력</button>
		</form>
		<div>시도 : {{ tries.length }}</div>
		<ul>
			<li v-for="tryValue in tries" v-bind:key="tryValue.inputData">
				<div>{{ tryValue.inputData }}</div>
				<div>{{ tryValue.result }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
const getNumbers = () => {
	const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const array = [];
	for (let i = 0; i < 4; i++) {
		const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
		array.push(chosen)
	}
	return array;
}
export default {
	name: "NumberBaseBall",
	data() {
		return {
			answer: getNumbers(),
			tries: [],
			value: '',
			result: '',
		}
	},
	methods: {
		onSubmitForm(e) {
			e.preventDefault();
			if (this.value === this.answer.join('')) {

				this.tries.push({
					inputData: this.value,
					result: '홈런!!'
				});
				alert('게임을 다시 실행 합니다.')
				this.result = '홈런'
				this.tries = []
				this.answer = getNumbers();
			}
			else {
				if(this.tries.length >= 9){

					this.tries.push({
						inputData: this.value,
						result: '실패!!'
					});
					alert('게임을 다시 실행 합니다.');
					this.result = `10번 넘게 돌려서 실패 답은 ${this.answer.join(',')} 입니다`;
					this.tries = [];
					this.answer = getNumbers();
				}
				else {

					let strike = 0;
					let ball = 0;
					const answerArray = this.value.split('').map(v => parseInt(v))
					for (let i = 0; i < answerArray.length; i++) {
						if (answerArray[i] === this.answer[i]) {
							strike++;
						}
						else if (this.answer.includes(answerArray[i])) {
							ball++;
						}
					}
					this.tries.push({
						inputData: this.value,
						result: `Strike : ${strike}\nBall : ${ball}`
					})
				}
			}
			this.value = ''
			this.$refs.answer.focus()
		}
	}
}
</script>

<style scoped>

</style>
<template>
	<div>
		<div>당첨 숫자</div>
		<div id="resultView">
			<lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
		</div>
		<div>보너스</div>
		<lotto-ball v-if="bonus" :number="bonus"/>
		<button v-if="redo" @click="onClickRedo">한번 더</button>
	</div>
</template>


<script>
import LottoBall from "./LottoBall";

function getWinNumbers() {
	const candidate = Array(45).fill().map((v, i) => i + 1)
	const shuffle = []
	while (candidate.length > 0) {
		shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
	}
	const bonusNumber = shuffle[shuffle.length - 1]
	const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c)
	return [...winNumbers, bonusNumber]
}

const timeOuts = []
export default {

	components: {
		LottoBall
	},
	data() {
		return {
			winNumbers: getWinNumbers(),
			winBalls: [],
			bonus: null,
			redo: false,
		}
	},
	computed: {},
	methods: {
		onClickRedo() {
			this.winNumbers = getWinNumbers()
			this.winBalls = []
			this.bonus = null
			this.redo = false
		},

		showBalls() {
			for (let i = 0; i < this.winNumbers.length - 1; i++) {
				timeOuts[i] = setTimeout(() => {
					this.winBalls.push(this.winNumbers[i])
				}, (i + 1) * 500)
			}

			timeOuts[this.winNumbers.length - 1] = setTimeout(() => {
				this.bonus = this.winNumbers[this.winNumbers.length - 1]
				this.redo = true
			}, (this.winNumbers.length) * 500)
		}
	},
	mounted() {
		this.showBalls()
	},
	beforeDestroy() {
		timeOuts.forEach((timeout) => {
			clearTimeout(timeout)
		})
	},
	watch: {
		winBalls(value, oldValue) {
			if (value.length === 0) {
				this.showBalls()
			}
		}
	}
}
</script>
<style scoped>
</style>
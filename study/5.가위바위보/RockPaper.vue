<template>
	<div>
		<div id="computer" :style="styleData"></div>
		<div>
			<button @click="onClickButton('가위')">가위</button>
			<button @click="onClickButton('바위')">바위</button>
			<button @click="onClickButton('보')">보</button>
		</div>
		<div>{{ result }}</div>
		<div>현재 {{ score }}점</div>
	</div>
</template>

<script>
const positions = {
	바위: '0',
	가위: '-142px',
	보: '-284px'
}

let interval = null;
export default {
	data() {
		return {
			result: '',
			score: 0,
			imgPosition: positions.바위
		}
	},
	computed: {
		styleData() {
			return {
				background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgPosition} 0`
			}
		}
	},
	methods: {
		onClickButton(choice) {
			clearInterval(interval)
			if (choice === '가위') {
				if (this.imgPosition === positions.보) {
					this.winUser()
				}
				else if (this.imgPosition === positions.바위) {
					this.loseUser()
				}
				else if (this.imgPosition === positions.가위) {
					this.sameUser()
				}
			}
			else if (choice === '바위') {

				if (this.imgPosition === positions.보) {
					this.loseUser()
				}
				else if (this.imgPosition === positions.바위) {
					this.sameUser()
				}
				else if (this.imgPosition === positions.가위) {
					this.winUser()
				}
			}
			else if (choice === '보') {

				if (this.imgPosition === positions.보) {
					this.sameUser()
				}
				else if (this.imgPosition === positions.바위) {
					this.winUser()
				}
				else if (this.imgPosition === positions.가위) {
					this.loseUser()
				}
			}

			setTimeout(this.resetInterval, 1000)
		},
		winUser() {
			this.score++
			this.result = '이겼다!'
		},
		loseUser() {
			this.score--
			this.result = '졌어요'
		},
		sameUser() {
			this.result = '비겼어요'
		},
		resetInterval() {
			interval = setInterval(() => {
				if (this.imgPosition === positions.가위) {
					this.imgPosition = positions.바위
				}
				else if (this.imgPosition === positions.바위) {
					this.imgPosition = positions.보
				}
				else {
					this.imgPosition = positions.가위
				}
			}, 100)
		}
	},
	created() {
		console.log('created')
	},
	mounted() {
		console.log('mounted')
		this.resetInterval()
	},
	updated() {
		console.log('updated')
	},
	beforeDestroy() {
		console.log('beforeDestroy')
		clearInterval(interval)
	}
}
</script>

<style scoped>
#computer {
	width: 142px;
	height: 200px;
	background-position: 0 0;
}


</style>
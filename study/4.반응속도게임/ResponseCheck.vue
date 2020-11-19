<template>
	<div>
		<div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
		<template v-if="result.length">
			<div>평균시간 {{ average }}s</div>
			<button @:click="onReset">리셋</button>
		</template>
	</div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timer = null;

export default {
	name: "ResponseCheck",
	data() {
		return {
			result: [],
			state: 'waiting',
			message: '클릭해서 시작하세요',
		}
	},
	computed: {
		average() {
			return this.result.reduce((before, after) => before + after, 0) / this.result.length / 1000 || 0
		}
	},
	methods: {
		onReset() {
			this.result = []
			clearTimeout(timer)
			this.state = 'waiting'
			this.message = '잠시 후 클릭 하세요'
		},
		onClickScreen() {
			if (this.state === 'waiting') {
				this.state = 'ready';
				this.message = '잠시 후 클릭 하세요'
				timer = setTimeout(() => {
					this.state = 'now'
					this.message = '지금!!'
					startTime = new Date()
				}, Math.floor(Math.random() * 1000) + 2000)
			}
			else if (this.state === 'ready') {
				clearTimeout(timer)
				this.state = 'waiting'
				this.message = '실패!!'
			}
			else if (this.state === 'now') {
				endTime = new Date()
				this.state = 'waiting'
				this.message = '클릭 해서 실행하세요'
				this.result.push(endTime - startTime)
			}
		}
	}
}
</script>

<style scoped>
#screen {
	width: 300px;
	height: 300px;
	text-align: center;
	user-select: none;
}

#screen.waiting {
	background-color: gray;
	color: black;
}

#screen.ready {
	background-color: yellow;
	color: black;
}

#screen.now {
	background-color: green;
	color: white;
}
</style>
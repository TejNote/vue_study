<template>
	<div>
		<div>{{ $root.$data.turn }} 님의 턴 입니다</div>
		<table-component :table-data="$root.$data.tableData"/>
		<div v-if="$root.$data.winner">{{ $root.$data.winner }} 님의 승리 입니다</div>
	</div>
</template>

<script>
import TableComponent from './TableComponent'

export default {
	components: {
		TableComponent,
	},
	computed: {},
	methods: {},
	mounted() {
	},
	beforeDestroy() {
	},
	watch: {}
}
</script>

<style scoped>
table {
	border-collapse: collapse;
}
</style>
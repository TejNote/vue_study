<template>
	<table>
		<tr-component v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" :row-index="index"/>
	</table>
</template>

<script>
import TrComponent from "./TrComponent";

export default {
	name: "TableComponent",
	props: {
		tableData: Array,
	},
	components: {
		TrComponent,
	}
}
</script>

<style scoped>

</style>
<template>
	<view class="container">
		<view class="search-area">
			<SearchCom />	
		</view>
	</view>
</template>

<script>
	import SearchCom from "../../components/search/search.vue"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			SearchCom,
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		.search-area {
			padding: 30rpx;
		}
	}
</style>

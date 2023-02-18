<template>
	<view class="container">
		<image src="../../static/images/search.png" mode="widthFix"></image>
		<text>输入剧名搜索</text>
	</view>
</template>

<script>
	export default {
		name: "search",
		data() {
			return {};
		},
		methods: {},
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 30rpx;
		height: 70rpx;
		display: flex;
		align-items: center;
		border-radius: 40rpx;
		background-color: #fff;
		color: #989797;
		font-weight: bold;

		image {
			width: 40rpx;
			margin-left: 20rpx;
			margin-right: 20rpx;
		}
	}
</style>

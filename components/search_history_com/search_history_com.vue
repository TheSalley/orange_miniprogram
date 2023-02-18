<template>
	<view>
		<view class="title">{{ title }}</view>
		<view class="box">
			<text v-for="item in list" :key="item.id">{{ item.name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search_history_com",
		props: ["list", "isShow"],
		data() {
			return {
				title: this.isShow ? "搜索历史" : "大家都在搜"
			};
		}
		
	}
</script>



<style scoped lang="scss">
	.title {
		color: #9da07f;
		font-size: 30rpx;
		margin-left: 20rpx;
	}

	.box {
		padding: 30rpx;

		text {
			margin-right: 40rpx;
			white-space: nowrap;
			font-size: 30rpx;
		}
	}
</style>

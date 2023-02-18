<template>
	<view>
		<view class="">
			输入框
		</view>
		<view class="select_btn">
			<text v-for="item in select_btns" :key="item.id" :class="is_active">{{ item.name }}</text>
		</view>
		<search_history_com :isShow="false" :list="list"></search_history_com>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				select_btns: [{
						id: 1,
						name: "综合排序"
					},
					{
						id: 2,
						name: "销量"
					}, {
						id: 3,
						name: "价格"
					}
				],
				list: [{
						id: 1,
						name: "玩具"
					}, {
						id: 2,
						name: "手机"
					}, {
						id: 3,
						name: "平板电脑"
					}, {
						id: 4,
						name: "自行车"
					}, {
						id: 5,
						name: "洗衣机"
					}, {
						id: 6,
						name: "键盘"
					}, {
						id: 7,
						name: "沙发"
					},

				],
				is_active: false,
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.active {
		background-color: #fbe842;
	}

	.select_btn {
		margin: 30rpx 20rpx 50rpx;
		text {
			font-size: 30rpx;
			background-color: #f2f3f5;
			border-radius: 50rpx;
			padding: 10rpx 30rpx;
			margin-right: 15rpx;
		}
	}
</style>

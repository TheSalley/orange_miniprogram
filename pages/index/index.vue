<template>
	<view class="container">
		<view class="textBox">
			<text v-for="(item,index) in title_list" :key="item.id" :class="current == index? '__text-main': ''">
				{{ item.name }}
			</text>
		</view>
		<search></search>
		<banner></banner>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				title_list: [{
						id: 1,
						name: "小剧场"
					},
					{
						id: 2,
						name: "剧情介绍"
					},
					{
						id: 3,
						name: "故事投稿"
					},
					{
						id: 4,
						name: "剧集壁纸"
					}
				]
			}
		},
		onShow() {
			uni.setTabBarStyle({
				backgroundColor: '#fff',
			})
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		margin-bottom: 30rpx;

		.textBox {
			display: flex;
			font-size: 38rpx;
			color: #989797;
			background-color: #fff;
			padding: 30rpx 0;
			position: sticky;
			top: 0;

			text {
				margin: 0 0 0 20rpx;
			}
		}
	}
</style>

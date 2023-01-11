<template>
	<view class="container">
		<view class="icon">
			<image src="../../static/images/Orange.png" mode="widthFix"></image>
		</view>
		<view class="recommend_content">
			<!--  :animation="animationData" -->
			<view>{{ list[current_index].title }}</view>
		</view>
		<view class="search_button">
			<text>搜索</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "search",
		data() {
			return {
				current_index: 0,
				list: [
					{
						id: 101,
						title: "计算机科学与设计"
					}, {
						id: 2,
						title: "Python高级程序设计"
					}, {
						id: 3,
						title: "Mysql从入门到精通"
					},
					{
						id: 102,
						title: "Python高级程序设计"
					},
					{
						id: 103,
						title: "Mysql从入门到精通"
					}
				],
				animation: null,
				animationData: {},
				timer: null
			};
		},
		methods: {
			run() {
				// var animation = uni.createAnimation({
				// 	duration: 1000,
				// 	timingFunction: 'ease',
				// })

				// this.animation = animation

				// if (this.current_index < this.list.length) {
				// 	if(this.timer) return;
				// 	this.timer = setInterval(() => {
				// 		// this.animation.translateY(-40).step()
				// 		// this.animationData = animation.export()
				// 		this.animation.translateY(30).step()
				// 		this.animationData = animation.export()
						
				// 		if(this.current_index == this.list.length - 1) {
				// 			this.current_index = 0
				// 		}
				// 		this.current_index += 1
				// 		console.log('timer is running', this.current_index, this.list);
				// 	}, 3000)
				// } else {
				// 	this.current_index = 0
				// }


			}
		},
		mounted() {
			console.log(this.list);
			// this.run()
		},
		beforeDestroy() {
			clearInterval(this.timer)
		}
	}
</script>

<style scoped lang="scss">
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		width: 100%;
		border: 5rpx solid #fadc19;
		border-radius: 40rpx;
		// overflow: hidden;

		.icon {
			width: 70rpx;

			image {
				width: 100%;
			}
		}

		.recommend_content {
			flex-grow: 1;
			border-left: 1rpx solid gainsboro;
			padding-left: 30rpx;
			margin-left: 30rpx;
			color: gainsboro;
		}

		.search_button {
			height: 100%;
			background-color: #fadc19;
			padding: 0rpx 50rpx;
			border-radius: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30rpx;
		}
	}
</style>

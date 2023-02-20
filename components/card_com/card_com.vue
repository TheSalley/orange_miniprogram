<template>
	<view class="card_box">
		<view class="top_box">
			<text>{{ title }}</text>
		</view>
		<view class="bottom_box">
			<view class="img_box" v-for="item in data" :key="item.bookId">
				<image :src="item.bookCover"></image>
				<text>{{ item.bookName }}</text>
				<text v-if="item.tag" :class="['tag_title', item.tag == '火爆' ? 'hot_tag' : 'recent_tag']">{{ item.tag }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "card_com",
		props: ["title", "data"],
		data() {
			return {

			};
		}

	}
</script>



<style lang="scss" scoped>
	.card_box {
		margin: 20rpx;
		background: #fff;
		border-radius: 30rpx;
		padding: 0 20rpx;

		.top_box {
			height: 120rpx;
			line-height: 120rpx;

			text {
				font-size: 40rpx;
			}
		}

		.bottom_box {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.img_box {
				display: flex;
				flex-direction: column;
				width: 30%;
				margin-bottom: 30rpx;
				position: relative;

				image {
					width: 100%;
					height: 300rpx;
					border-radius: 10rpx;
				}

				text {
					width: 100%;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.tag_title {
					position: absolute;
					top: 0;
					left: 0;
					color: #fff;
					width: auto;
					padding: 6rpx 14rpx 6rpx 10rpx;
					border-radius: 0% 100% 35% 65% / 100% 0% 100% 0% ;
				}
				.hot_tag {
					background-color: #fb8033;
				}
				.recent_tag {
					background-color: #fb5980;
				}
			}
		}
	}
</style>

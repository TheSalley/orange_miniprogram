<template>
	<view class="box">
		<swiper class="swiper" circular indicator-dots>
			<swiper-item>
				<image
					src="//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/f8131d72b9204738310b0be4555316a5.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image
					src=" //bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/649537ff7bda43ca802b2d6bb8dc477f.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image
					src=" //bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/a8749650240eab344714e132825b769b.jpg"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "banner",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		padding: 0 30rpx;

		swiper-item {
			border-radius: 30rpx;
			overflow: hidden;
			margin-right: 60rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>

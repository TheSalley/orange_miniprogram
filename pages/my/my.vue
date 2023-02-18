<template>
	<view>
		<ul class="operate_list">
			<li>
				<i :class="['iconfont icon-aixin_shixin', item.give_a_like ? 'give_a_like_active' : '']  "
					@click="handle_give_a_like"></i>
				<span>{{ item.photo.liked }}</span>
			</li>
			<li>
				<i class="iconfont icon-shoucang"></i>
				<span>追剧</span>
			</li>
			<li>
				<!-- #ifdef MP-WEIXIN -->
				<image src="../../static/images/wechat.png" mode="widthFix" style="width: 80rpx;"></image>
				<!-- #endif -->
				<!-- #ifdef MP-TOUTIAO -->
				<image src="../../static/images/tiktok.png" mode="widthFix" style="width: 80rpx;"></image>
				<!-- #endif -->
				<span>{{ item.photo.viewCount }}</span>
			</li>
			<li>
				<img src="../../static/images/gift.png" alt="" class="welfare">
				<span>福利</span>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				a: 0
			}
		},
		methods: {
			
		},
		watch: {
			a(newV, oldV) {
				console.log(newV);
			}
		}
	}
</script>

<style>

</style>

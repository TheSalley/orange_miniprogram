<template>
	<view v-if="lists.length > 0">
		<swiper :current="current" vertical @change="handle_swiper">
			<swiper-item v-for="(item, index) in lists" :key="item.photo.id">
				<view class="videoBox" @click="handle_show_controls">
					<!-- <text>选集</text> -->
					<view class="is_playing_box" v-if="is_show_controls" @click.stop="handle_video_play">
						<image :src="play_or_pause"></image>
					</view>
					<video :src="item.photo.videoResource.h264.adaptationSet[0].representation[0].url"
						:id="`video-${item.photo.id}`" :autoplay="index == current" :show-fullscreen-btn="false"
						:controls="is_show_controls" :show-play-btn="false"></video>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		requestVideo
	} from "../../apis/index.js"
	export default {
		data() {
			return {
				current: 0, // swiper 当前选中项
				is_show_controls: false, // 是否展示底部控制栏
				lists: [], // 视频列表
				is_playing: true, // 视频是否在播放
			}
		},
		methods: {
			// 处理swiper 滑动
			async handle_swiper(e) {
				this.current = e.mp.detail.current;
				console.log(e.mp.detail.current);
				if (this.current == 19) {
					const {
						data: res
					} = await requestVideo(2);
					this.lists.splice(0, 20);
					this.lists = this.lists.concat(res.data);
					this.current -= 19
				}

				this.lists.forEach((item, index) => {
					const videoContext = uni.createVideoContext(`video-${item.photo.id}`)

					index === this.current ? videoContext.play() : videoContext.pause()
				})

			},
			// 处理是否展示底部控制栏
			handle_show_controls() {
				this.is_show_controls = !this.is_show_controls;
			},
			handle_give_a_like() {
				this.lists[this.current].give_a_like = !this.list[this.current].give_a_like;
			},
			// 设置视频是否在播放
			set_is_playing() {
				this.is_playing = true;
			},
			// 点击播放、暂停按钮
			handle_video_play() {
				this.is_playing = !this.is_playing;
				const videoContext = uni.createVideoContext(`video-${this.lists[this.current].photo.id}`)
				this.is_playing ? videoContext.play() : videoContext.pause()
				this.is_show_controls = true;
			}
		},
		async onReady() {
			const {
				data: res
			} = await requestVideo();
			this.lists = res.data;


		},
		onShow() {
			uni.setTabBarStyle({
				backgroundColor: '#000000',
			})
		},
		computed: {
			play_or_pause() {
				return this.is_playing ? "../../static/images/pause.png" : "../../static/images/play.png"
			}
		},
		watch: {
			currnt: {
				async handler(newV, oldV) {

				},
				immediate: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	swiper {
		height: 100vh;
	}

	swiper-item {
		height: 100vh;
		width: 100vw;

		.videoBox {
			height: 100%;
			position: relative;

			.operate_list {
				position: absolute;
				z-index: 1000;
				right: 0;
				top: 35vh;

				li {
					margin-top: 40rpx;
					display: flex;
					flex-direction: column;
					align-items: center;
					color: #fff;
					font-size: 30rpx;
				}

				i {
					font-size: 80rpx;
				}

				.welfare {
					width: 80rpx;
					height: 80rpx;
				}

				.give_a_like_active {
					color: #e55376;
					animation: .4s linear 1 animate_give_a_like;
				}
			}

			.icon-aixin_shixin {
				color: #e8e7e6;
			}

			.icon-shoucang {
				color: #e8e7e6;
			}

			.is_playing_box {
				position: absolute;
				top: 60%;
				left: 50%;
				transform: translateX(-50%);
				z-index: 1000;
				background-color: rgba(0, 0, 0, .7);
				border-radius: 50%;
				width: 140rpx;
				height: 140rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					width: 100rpx;
					height: 100rpx;
				}
			}

			text {
				position: absolute;
				right: 0;
				top: 300rpx;
				z-index: 1000;
			}

			video {
				height: 100%;
				width: 100%;
			}
		}
	}

	@keyframes animate_give_a_like {
		from {
			transform: scale(1.3);
		}

		to {
			transform: scale(1);
		}
	}
</style>

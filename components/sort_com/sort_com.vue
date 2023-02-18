<template>
	<view>
		<uni-grid :column="5" :highlight="true" @change="change">
			<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
				<view class="grid-item-box">
					<image :src="item.icon" mode="widthFix"></image>
					<text class="text">{{ item.title }}</text>
				</view>
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	export default {
		name: "sort",
		data() {
			return {
				list: [{
					id: 100,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, {
					id: 101,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, {
					id: 102,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, {
					id: 103,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, {
					id: 104,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, {
					id: 105,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, {
					id: 106,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, {
					id: 107,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, {
					id: 108,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, {
					id: 109,
					title: "家具家装",
					icon: "https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp",
				}, ]
			};
		}
	}
</script>

<style scoped>
	.grid-item-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	image {
		width: 80rpx;
	}

	.text {
		font-size: 13px;
	}
</style>

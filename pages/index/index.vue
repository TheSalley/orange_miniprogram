<template>
	<view class="container">
		<view class="textBox">
			<text v-for="(item,index) in title_list" :key="item.id" :class="current == index? '__text-main': ''">
				{{ item.name }}
			</text>
		</view>
		<search_com></search_com>
		<banner></banner>
		<view class="grid_box">
			<view class="grid_item">
				<image src="../../static/images/heart.png"></image>
				<text>追剧</text>
			</view>
			<view class="grid_item">
				<image src="../../static/images/crown.png"></image>
				<text>排行榜</text>
			</view>
			<view class="grid_item">
				<image src="../../static/images/coin.png"></image>
				<text>领币</text>
			</view>
			<view class="grid_item">
				<image src="../../static/images/my.png"></image>
				<text>我的</text>
			</view>
		</view>
		<card_com title="优选好剧" :data="lists"></card_com>
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
				],
				lists: [{
						"title": "小姐姐和帅大叔闪婚，没想到大叔真实身份竟然是……",
						"bookId": "41000100054",
						"bookName": "霸总娇妻是大佬",
						"name": "霸总娇妻是大佬",
						"price": "0.66",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000100054/41000100054.jpg?t=1664335508347&imageView2/0/w/200/h/267",
						"allChapterId": 100,
						"lastChapterId": "531318275",
						"lastChapterUtime": "2022-09-28 15:06:24",
						"lastChapterName": "第一百集",
						"remark": "顾眠本是顾氏集团的合法继承人，母亲死于空难，父亲被赵兰芝和其女儿顾柔儿所蛊惑，为调查母亲死亡的真相，夺回顾氏。顾眠独自踏上复仇之路，却偶然间将霍氏集团少爷霍冷卷入其中......",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 0,
						"status": 1,
						"tag": "",
						"subscribeNum": "5",
						"freeNum": "9"
					},
					{
						"title": "成为亿万首富后，我重生了",
						"bookId": "41000100048",
						"bookName": "风云再起",
						"name": "风云再起",
						"price": "0.88",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000100048/41000100048.jpg?t=1672296837243&imageView2/0/w/200/h/267",
						"allChapterId": 97,
						"lastChapterId": "531065753",
						"lastChapterUtime": "2022-09-23 17:10:04",
						"lastChapterName": "第九十七集",
						"remark": "亿万富豪重生1995，当年的烂赌鬼陈浩，绝不再让妻子和女儿被自己连累死。这一世，他要登顶财富之巅，让妻女拥有享之不尽的荣华富贵！",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 1,
						"status": 1,
						"tag": "",
						"subscribeNum": "4",
						"freeNum": "8"
					},
					{
						"bookId": "41000100171",
						"bookName": "黄金年代",
						"name": "黄金年代",
						"price": "0.88",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000100171/41000100171.jpg?t=1674259184760&imageView2/0/w/200/h/267",
						"allChapterId": 100,
						"lastChapterId": "536806762",
						"lastChapterUtime": "2023-01-21 08:28:23",
						"lastChapterName": "第一百集",
						"remark": "顶级企业家惨遭谋害，命运将他一脚踹回到了千禧年初。李向东拍拍身上的土，去迎接属于他的时代！",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 1,
						"status": 1,
						"subscribeNum": "5",
						"freeNum": "10"
					},
					{
						"title": "一代龙皇，携滔天权势重回旧地！以铁血手段，让整个世界颤抖！",
						"bookId": "41000100161",
						"bookName": "盖世龙皇",
						"name": "盖世龙皇",
						"price": "0.88",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000100161/41000100161.jpg?t=1673660971263&imageView2/0/w/200/h/267",
						"allChapterId": 111,
						"lastChapterId": "536295663",
						"lastChapterUtime": "2023-01-14 10:24:36",
						"lastChapterName": "第一百十一集",
						"remark": "一代龙皇，携滔天权势重回旧地！以铁血手段，让整个世界颤抖！",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 1,
						"status": 1,
						"tag": "",
						"subscribeNum": "5",
						"freeNum": "10"
					},
					{
						"bookId": "41000100172",
						"bookName": "盲妻，顾少心尖宠",
						"name": "盲妻，顾少心尖宠",
						"price": "0.88",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000100172/41000100172.jpg?t=1674478438593&imageView2/0/w/200/h/267",
						"allChapterId": 94,
						"lastChapterId": "536854002",
						"lastChapterUtime": "2023-01-23 21:25:54",
						"lastChapterName": "第九十四集",
						"remark": "错信渣男，她楚欣然不仅痛失肚中孩子，就连自己的眼角膜，也被迫捐给了丈夫的白月光。一次次的痛彻心扉，换来的是她的幡然醒悟，楚欣然：“我们……离婚吧！”",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 1,
						"status": 1,
						"subscribeNum": "4",
						"freeNum": "8"
					},
					{
						"title": "战神归来，一声令下，将仇人粉身碎骨！",
						"bookId": "41000010038",
						"bookName": "战神归来",
						"name": "战神归来",
						"price": "0.00",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000010038/41000010038.jpg?t=165899891630eae3&imageView2/0/w/200/h/267",
						"allChapterId": 57,
						"lastChapterId": "527985698",
						"lastChapterUtime": "2022-07-29 10:35:02",
						"lastChapterName": "第五十七集",
						"remark": "戎马十载，一战封神！却突闻至亲兄弟被人所害，含恨而终.....如今携无上神威，强势归来，让仇人粉身碎骨！让所有人向他低头！",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 1,
						"status": 1,
						"tag": "火爆",
						"subscribeNum": "5",
						"freeNum": "58"
					},
					{
						"title": "总裁的头号佳妻",
						"bookId": "41000010037",
						"bookName": "总裁的头号佳妻",
						"name": "总裁的头号佳妻",
						"price": "0.00",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000010037/41000010037.jpg?t=1658998948267&imageView2/0/w/200/h/267",
						"allChapterId": 31,
						"lastChapterId": "527985592",
						"lastChapterUtime": "2022-07-29 10:34:17",
						"lastChapterName": "第三十一集",
						"remark": "雾气朦胧的浴室里,她被男人逼至墙角:“昨晚,是我的第一次,你必须对我负责!”男人西装革履,而她却未着寸缕!她走投无路,邂逅一城首富!闻人臻,滨城权势倾天的高冷贵族,生性凉薄,唯独对她,热情如火!“我要离婚!”婚后一年,得知他和前女友拉扯不清时她忍无可忍的低吼。“我是生意人,不做赔本买卖!”“那你想怎样?”她后退一步,警惕的望着他。“离婚可以,但必须答应我三个条件。”“哪三个条件?”“房子归你,车子归你,我一也归你!缺一条我不签字!”",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 0,
						"status": 1,
						"tag": "最新",
						"subscribeNum": "3",
						"freeNum": "32"
					},
					{
						"title": "替嫁娇妻2-爱逢对手",
						"bookId": "41000010024",
						"bookName": "替嫁娇妻2-爱逢对手",
						"name": "替嫁娇妻2-爱逢对手",
						"price": "0.00",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000010024/41000010024.jpg?t=1658999189419&imageView2/0/w/200/h/267",
						"allChapterId": 56,
						"lastChapterId": "527973016",
						"lastChapterUtime": "2022-07-28 21:06:29",
						"lastChapterName": "第五十六集",
						"remark": "《替嫁娇妻》第二季！乔陌漓和颜汐落爱情的三起三落！",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 0,
						"status": 1,
						"tag": "最新",
						"subscribeNum": "5",
						"freeNum": "57"
					},
					{
						"bookId": "41000100090",
						"bookName": "爱你迟而不晚",
						"name": "爱你迟而不晚",
						"price": "0.88",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000100090/41000100090.jpg?t=1667556806765&imageView2/0/w/200/h/267",
						"allChapterId": 100,
						"lastChapterId": "532907511",
						"lastChapterUtime": "2022-11-04 19:22:59",
						"lastChapterName": "第一百集",
						"remark": "秦希桐爱了季黎川那么多年，但他的心里只有他的白月光。好，她净身出户，给他的白月光腾位置。季黎川以为没了那个女人，他会幸福，直到收到她的病情诊断书......“季黎川，生命的最后时光，我不想再爱你了。”",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 1,
						"status": 1,
						"tag": "",
						"subscribeNum": "4",
						"freeNum": "10"
					},
					{
						"title": "瘫痪三年，妻子被逼改嫁，陈北尧誓死要报仇！",
						"bookId": "41000100092",
						"bookName": "我的绝色小娇妻",
						"name": "我的绝色小娇妻",
						"price": "0.88",
						"bookCover": "http://resali.ssread.cn/cppartner/4x1/41x0/410x0/41000100092/41000100092.jpg?t=1672295501533&imageView2/0/w/200/h/267",
						"allChapterId": 85,
						"lastChapterId": "532999678",
						"lastChapterUtime": "2022-11-08 11:04:57",
						"lastChapterName": "第八十五集",
						"remark": "瘫痪三年，备受白眼，妻子被逼改嫁，各种打击接踵而至……伤愈归来之日，陈北尧誓要将这天捅个窟窿！",
						"updateRemark": "点击右侧按钮更新会提醒您！",
						"endStatus": 1,
						"status": 1,
						"tag": "",
						"subscribeNum": "5",
						"freeNum": "10"
					}
				]
			}
		},
		onShow() {},
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
			z-index: 3000;

			text {
				margin: 0 0 0 20rpx;
			}
		}

		.grid_box {
			height: 200rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 20rpx;

			.grid_item {
				display: flex;
				flex-direction: column;
				align-items: center;

				image {
					width: 100rpx;
					height: 100rpx;
				}
			}
		}
	}
</style>

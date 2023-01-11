<template>
	<view>
		<view :animation="animationData" style="background:red;height:100rpx;width:100rpx"></view>

	</view>
</template>

<script>
	export default{
	  data() {
	    return {
	      animationData: {}
	    }
	  },
	  onShow: function(){
	    var animation = uni.createAnimation({
	      duration: 1000,
	        timingFunction: 'ease',
	    })
	
	    animation.scale(2,2).rotate(45).step()
	
	    this.animationData = animation.export()
	
	    setTimeout(function() {
	      animation.translate(300).step()
	      this.animationData = animation.export()
	    }.bind(this), 3000)
	  },
	  methods:{
	    // rotateAndScale: function () {
	    //   // 旋转同时放大
	    //   this.animation.rotate(45).scale(2, 2).step()
	    //   this.animationData = this.animation.export()
	    // },
	    // rotateThenScale: function () {
	    //   // 先旋转后放大
	    //   this.animation.rotate(45).step()
	    //   this.animation.scale(2, 2).step()
	    //   this.animationData = this.animation.export()
	    // },
	    // rotateAndScaleThenTranslate: function () {
	    //   // 先旋转同时放大，然后平移
	    //   this.animation.rotate(45).scale(2, 2).step()
	    //   this.animation.translate(100, 100).step({ duration: 1000 })
	    //   this.animationData = this.animation.export()
	    // }
	  }
	}

</script>

<style>
	view {
		width: 100%;
		height: 30rpx;
		background-color: aqua;
	}
</style>

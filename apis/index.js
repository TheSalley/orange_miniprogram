export let requestVideo = (page = 1) => {
	return new Promise((resolve, reject) => {
		return  uni.request({
			url: "http://212.129.152.168:3003/video",
			method: "GET",
			header: {},
			data: {
				page
			},
			success(res) {
				resolve(res)
			}
		})
	})
	
}

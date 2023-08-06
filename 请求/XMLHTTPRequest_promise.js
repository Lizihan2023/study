// 在原有的基础上加上Promise
function getXHR() {
	let xHttpRqs;
	try {
		if (window.XMLHttpRequest) {
			xHttpRqs = new XMLHttpRequest()
		} else if (window.ActiveXObject) {
			xHttpRqs = new ActiveXObject("Microsoft XMLHTTP")
		}
	}
	catch (err) {
		throw ("Your Browser Does Not Support XML")
	}
	return xHttpRqs
}

// 发送请求
function sendXHR(url) {
	return new Promise((resolve, reject) => {
		const xhr = getXHR()
		xhr.open("GET", url, true)
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4) {
				if(xhr.status == 200) {
					console.log(JSON.parse(xhr.response))
				} else {
					reject(new Error('Request Failed'))
				}
			}
		}
		xhr.onerror = () => {
			reject(new Error("Network Error"))
		}
		xhr.send(null)
	})
}

// 获取实例
function get(url) {
	sendXHR(url, response => {
		const responseObj = JSON.parse(response)
		console.log(responseObj);
	})
}

get("https://test.harumoe.cn/api/other/hot?list=baidu,csdn&cache=true&lang=zh-cn")


function get(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open("GET", url, true)
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4) {
				if(xhr.status == 200) {
					console.log(JSON.parse(xhr.response))
				} else {
					reject(new Error('Request Failed'))
				}
			}
		}
		xhr.onerror = () => {
			reject(new Error("Network Error"))
		}
		xhr.send(null)
	})
}

get("https://test.harumoe.cn/api/other/hot?list=baidu,csdn&cache=true&lang=zh-cn")
//  https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
// 创建实例
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
function sendXHR(url, callback) {
	const xhr = getXHR()
	xhr.open("GET", url, true)
	xhr.onreadystatechange = () => {
		if (xhr.readyStates == 4) {
			if (xhr.status == 200) {
				callback(xhr.response)
			}
		}
	}
	xhr.send(null)
}

// 获取实例
function get(url) {
	sendXHR(url, response => {
		const responseObj = JSON.parse(response)
		console.log(responseObj);
	})
}

get("https://test.harumoe.cn/api/other/hot?list=baidu,csdn&cache=true&lang=zh-cn")
import axios from 'axios';

enum MSGS {
	'操作成功' = 200,
	'密码错误' = 201,
	'账号错误' = 202,
	'请求异常' = 999,
}
const $http = axios.create({
	//定义mock下使用
	baseURL: '/mock',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
});

$http.interceptors.request.use((config) => {
	//针对可选项配置
	config.headers = config.headers || {};
	// congfig.headers.token = 123
	return config;
});

$http.interceptors.response.use(
	(res) => {
		const code: number = res.data?.code;
		// if (code !== 200) {
		// 	alert(MSGS[code]);
		// 	return Promise.reject(res.data);
		// } else {
		return res.data;
		// }
	},
	(err) => {
		console.log(err);
	}
);

export default $http;

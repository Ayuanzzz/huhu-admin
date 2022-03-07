import Mock from 'mockjs';

//员工名字列表
const nameArr = [
	'任磊',
	'阎涛',
	'段强',
	'郑敏',
	'丁丽',
	'唐敏',
	'秦军',
	'徐丽',
	'杨强',
	'韩芳',
	'郑平',
	'白桂英',
	'万超',
	'康洋',
	'潘霞',
	'马平',
	'邱军',
	'马勇',
	'赖明',
	'戴丽',
	'谢芳',
	'韩霞',
	'武勇',
	'万超',
	'吴磊',
	'崔敏',
	'谭超',
	'邵超',
	'龙秀兰',
	'顾刚',
];

//正则匹配各种url请求
Mock.mock(/\/mock\/Doing.*/, 'get', {
	'doingData|1-10': [
		{
			itemName: '@csentence(5, 15)',
			'employeeData|2-10': [
				{
					joinTime: '@date()',
					'name|1': nameArr,
				},
			],
			percentage: '@natural(0, 99)',
			deadline: '@date()',
			startTime: '@date()',
			status: 'doing',
		},
	],
});

Mock.mock('/mock/Employee', 'get', {
	employeeList: nameArr,
});

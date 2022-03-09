interface Data {
	joinTime?: string;
	name?: string;
}
export function formatEmployeeData(data: Array<Data>): string {
	if (data.length > 1) {
		return data[0].name + '+' + (data.length - 1);
	} else {
		return data[0].name;
	}
}

export function formatEmployeeList(data: Array<Data>): string[] {
	let arr: string[] = [];
	data.forEach((item: Data) => {
		arr.push(item.name);
	});
	return arr;
}

//清除data中多余数据
function same(obj: Array<Data>, ary: string[]): Array<Data> {
	let item1: Data;
	for (item1 of obj) {
		return obj.filter(function (item1) {
			return ary.indexOf(item1.name) > -1;
		});
	}
}

//比较两个数组，删除多余的，添加剩余的
export function mergeEmployee(list: string[], data: Array<Data>, time: string): Array<Data> {
	let arr = [];
	let arr2: Array<Data>;
	let obj: Data = {};
	let item: Data = {};
	let item2: string;
	//清除data中多余数据
	arr2 = same(data, list);
	//遍历data中的name
	for (item of arr2) {
		arr.push(item.name);
	}
	//与list比较并添加新增数据
	for (item2 of list) {
		if (arr.indexOf(item2) < 0) {
			obj.joinTime = time;
			(obj.name = item2), arr2.push(obj);
			obj = {};
		}
	}

	return arr2;
}

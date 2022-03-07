interface data {
	joinTime: String;
	name: String;
}
export function formatEmployeeData(data: Array<data>): String {
	if (data.length > 1) {
		return data[0].name + '+' + (data.length - 1);
	} else {
		return data[0].name;
	}
}

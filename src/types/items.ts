export interface DoingDataMock {
	itemName: string;
	employeeData: [
		{
			joinTime: string;
			name: string;
		}
	];
	percentage: number;
	deadline: string;
	startTime: string;
	status: string;
}

export interface DoingData extends DoingDataMock {
	employeeStr: string;
}

export interface ItemForm {
	itemName: string;
	deadline: string;
	employeeList: string[];
}

export interface changeForm extends ItemForm {
	status: string;
}

//不能确定键值对象
// interface tempObj{
// 	[propName:string]:string[]
// }

interface Param {
	pageNum: number;
	pageSize: number;
}
export class InitData {
	doingDatas: Array<DoingData> = [];
	pageNum: number;
	pageSize: number;
	total: number;
	employeeList: string[];
	changeData: Array<DoingDataMock> = [];
}

export interface DoneData {
	itemName: string;
	employeeData: [
		{
			joinTime: string;
			name: string;
		}
	];
	endTime: string;
	startTime: string;
	status: string;
}

export class InitDoneData {
	doneDatas: Array<DoneData> = [];
	pageNum: number;
	pageSize: number;
	total: number;
}

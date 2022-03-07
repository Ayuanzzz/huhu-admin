export interface DoingDataMock {
	itemName: string;
	employeeData: [
		{
			joinTime: string;
			name: string;
		}
	];
	percentage: string;
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
// export class InitData {
// 	doingData: Array<doingDataInt> = [];
// 	employeeList: string[];
// }

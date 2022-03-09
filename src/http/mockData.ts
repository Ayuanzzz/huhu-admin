import $http from './index';

export function getDoing(data: any): any {
	return $http({
		url: '/Doing',
		method: 'get',
		params: data,
	});
}

export function getEmployee(data: any): any {
	return $http({
		url: '/Employee',
		method: 'get',
		params: data,
	});
}

export function getDone(data: any): any {
	return $http({
		url: '/Done',
		method: 'get',
		params: data,
	});
}

export function postJob(): any {
	return $http({
		url: '/Job',
		method: 'post',
	});
}

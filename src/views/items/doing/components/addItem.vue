<template>
	<div>
		<el-dialog title="新增项目" v-model="isShowDialog" width="500px">
			<el-form :model="itemForm">
				<el-form-item label="项目名称">
					<el-input v-model="itemForm.itemName" placeholder="请输入项目名称" clearable></el-input>
				</el-form-item>
				<el-form-item label="截止日期">
					<el-date-picker
						v-model="itemForm.deadline"
						type="date"
						placeholder="截止日期"
						value-format="YYYY-MM-DD"
						style="width: 100%"
					></el-date-picker>
				</el-form-item>
				<el-form-item label="参与人员">
					<el-select v-model="itemForm.employeeList" multiple placeholder="请选择" style="width: 100%">
						<el-option v-for="item in employeeList" :key="item.index" :label="item" :value="item"> </el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="onCancel" size="small">取 消</el-button>
					<el-button type="primary" @click="addData" size="small">新 增</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>
<script lang="ts">
import { reactive, toRefs, ref } from 'vue';
import { formatDate } from '/@/utils/formatTime';
import { formatEmployeeData } from '/@/utils/items';
import { ItemForm } from '/@/types/items';
export default {
	name: 'AddItem',
	props: {
		addDoingData: {
			type: Function,
			required: true,
		},
		employeeList: {
			type: Array,
			required: true,
		},
	},
	setup(props) {
		const state = reactive<{ itemForm: ItemForm }>({
			itemForm: {
				itemName: '',
				deadline: '',
				employeeList: [],
			},
		});
		const time = ref('');
		//定义弹窗状态
		const isShowDialog = ref(false);
		//打开弹窗
		const openDialog = () => {
			//清空数据
			state.itemForm = {
				itemName: '',
				deadline: '',
				employeeList: [],
			};
			isShowDialog.value = true;
		};
		//关闭弹窗
		const closeDialog = () => {
			isShowDialog.value = false;
		};
		//	格式化数据
		const formatArr = (oldArr) => {
			//格式化时间
			time.value = formatDate(new Date(), 'YYYY-mm-dd');
			let newArr = [];
			oldArr.forEach((item) => {
				let obj = {
					joinTime: '',
					name: '',
				};
				obj.joinTime = time.value;
				obj.name = item;
				newArr.push(obj);
			});
			return newArr;
		};
		//提交
		const addData = () => {
			let employeeData = formatArr(state.itemForm.employeeList);
			let employeeStr = formatEmployeeData(employeeData);
			let doingData = {
				itemName: state.itemForm.itemName,
				employeeData: employeeData,
				employeeStr: employeeStr,
				percentage: 0,
				deadline: state.itemForm.deadline,
				startTime: time.value,
				status: 'doing',
			};
			props.addDoingData(doingData);

			//关闭弹窗
			closeDialog();
		};
		//取消
		const onCancel = () => {
			closeDialog();
		};

		return {
			time,
			isShowDialog,
			openDialog,
			closeDialog,
			onCancel,
			addData,
			formatArr,
			...toRefs(state),
		};
	},
};
</script>
<style></style>

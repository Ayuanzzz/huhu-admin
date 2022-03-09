<template>
	<div>
		<el-dialog title="修改项目" v-model="isShowDialog" width="500px">
			<el-form :model="changeForm">
				<el-form-item label="项目名称">
					<el-input v-model="changeForm.itemName" placeholder="请输入项目名称" clearable></el-input>
				</el-form-item>

				<el-form-item label="截止日期">
					<el-date-picker
						v-model="changeForm.deadline"
						type="date"
						placeholder="截止日期"
						value-format="YYYY-MM-DD"
						style="width: 100%"
					></el-date-picker>
				</el-form-item>
				<el-form-item label="参与人员">
					<el-select v-model="changeForm.employeeList" multiple placeholder="请选择" style="width: 100%">
						<el-option v-for="item in employeeList" :key="item.index" :label="item" :value="item"> </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="项目状态">
					<el-radio-group v-model="changeForm.status">
						<el-radio label="plan">计划</el-radio>
						<el-radio label="doing">进行</el-radio>
						<el-radio label="done">完成</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="onCancel" size="small">取 消</el-button>
					<el-button type="primary" @click="onSubmit" size="small">更 改</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted, ref, watch, computed, onUpdated } from 'vue';
import { changeForm } from '/@/types/items';
import { formatEmployeeList, mergeEmployee, formatEmployeeData } from '/@/utils/items';
import { formatDate } from '/@/utils/formatTime';
export default {
	name: 'AddItem',
	props: {
		changeData: {
			type: Object,
			required: true,
		},
		employeeList: {
			type: Array,
			required: true,
		},
		updateData: {
			type: Function,
			required: true,
		},
	},
	setup(props, { emit }) {
		const isShowDialog = ref(false);
		const state = reactive<{ changeForm: changeForm }>({
			changeForm: {
				itemName: '',
				deadline: '',
				employeeList: [],
				status: '',
			},
		});
		//打开弹窗
		const openDialog = () => {
			isShowDialog.value = true;
		};
		//关闭弹窗
		const closeDialog = () => {
			isShowDialog.value = false;
		};
		//取消
		const onCancel = () => {
			closeDialog();
		};
		//新增
		const onSubmit = () => {
			let time: String = formatDate(new Date(), 'YYYY-mm-dd');
			let submitData: any = {};
			submitData.itemName = state.changeForm.itemName;
			submitData.employeeData = mergeEmployee(state.changeForm.employeeList, props.changeData.employeeData, time);
			submitData.percentage = props.changeData.percentage;
			submitData.deadline = state.changeForm.deadline;
			submitData.startTime = props.changeData.startTime;
			submitData.employeeStr = formatEmployeeData(submitData.employeeData);
			submitData.status = 'doing';
			console.log(submitData);
			props.updateData(submitData);
			closeDialog();
		};

		onUpdated(() => {
			state.changeForm.itemName = props.changeData.itemName;
			state.changeForm.deadline = props.changeData.deadline;
			state.changeForm.employeeList = props.changeData.employeeData ? formatEmployeeList(props.changeData.employeeData) : [];
			state.changeForm.status = props.changeData.status;
		});
		return {
			isShowDialog,
			openDialog,
			closeDialog,
			onSubmit,
			onCancel,
			...toRefs(state),
		};
	},
};
</script>
<style></style>

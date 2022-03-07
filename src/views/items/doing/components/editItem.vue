<template>
	<div>
		<el-dialog title="修改项目" v-model="isShowDialog" width="500px">
			<el-form :model="Data">
				<el-form-item label="项目名称">
					<el-input v-model="Data.itemName" placeholder="请输入项目名称" clearable></el-input>
				</el-form-item>

				<el-form-item label="截止日期">
					<el-date-picker v-model="Data.deadline" type="date" placeholder="截止日期" value-format="YYYY-MM-DD" style="width: 100%"></el-date-picker>
				</el-form-item>
				<el-form-item label="参与人员">
					<el-select v-model="Data.employeeList" multiple placeholder="请选择" style="width: 100%">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="项目状态">
					<el-radio-group v-model="radio">
						<el-radio label="plan">计划</el-radio>
						<el-radio label="doing">进行</el-radio>
						<el-radio label="done">完成</el-radio>
					</el-radio-group>
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="onCancel" size="small">取 消</el-button>
					<el-button type="primary" @click="editData" size="small">更 改</el-button>
				</span>
			</template>
			<p>{{ Data }}</p>
		</el-dialog>
	</div>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted, ref, watch } from 'vue';
export default {
	name: 'AddItem',
	props: {
		Data: {},
	},
	setup(props, { emit }) {
		const sendData = reactive(props.Data);
		const options = [
			{ value: 'wawa', label: 'wawa' },
			{ value: 'huhu', label: 'huhu' },
			{ value: 'Peter', label: 'Peter' },
		];
		//状态
		const radio = ref('doing');
		const editData = () => {
			emit('editData', sendData);
			console.log('Data--after--', sendData);
			closeDialog();
		};
		const state = reactive({
			isShowDialog: false,
		});
		//打开弹窗
		const openDialog = () => {
			state.isShowDialog = true;
		};
		//关闭弹窗
		const closeDialog = () => {
			state.isShowDialog = false;
		};
		//取消
		const onCancel = () => {
			closeDialog();
		};
		//新增
		const onSubmit = () => {
			closeDialog();
		};
		return {
			options,
			radio,
			sendData,
			openDialog,
			closeDialog,
			onSubmit,
			onCancel,
			...toRefs(state),
			editData,
		};
	},
};
</script>
<style></style>

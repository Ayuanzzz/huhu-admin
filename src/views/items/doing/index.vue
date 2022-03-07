<template>
	<div class="system-menu-container">
		<el-card shadow="hover">
			<!-- 查询 -->
			<div class="system-menu-search mb15">
				<el-input size="small" placeholder="请输入菜单名称" style="max-width: 180px"> </el-input>
				<el-button size="small" type="primary" class="ml10">
					<el-icon>
						<elementSearch />
					</el-icon>
					查询
				</el-button>
				<el-button size="small" type="success" class="ml10" @click="openAddItem">
					<el-icon>
						<elementFolderAdd />
					</el-icon>
					新增菜单
				</el-button>
			</div>
			<!-- 列表 -->
			<el-table :data="doingDatas" style="width: 100%" row-key="path" border :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
				<el-table-column prop="itemName" label="项目" show-overflow-tooltip> </el-table-column>
				<el-table-column label="人员" width="120" height="70">
					<template #default="scope">
						<el-popover placement="right" :width="260" :height="500" trigger="click">
							<template #reference>
								<el-button color="#626aef" plain size="small">
									{{ scope.row.employeeStr }}
								</el-button>
							</template>
							<el-table :data="scope.row.employeeData">
								<el-table-column width="150" property="joinTime" label="加入时间"></el-table-column>
								<el-table-column width="100" property="name" label="姓名"></el-table-column>
							</el-table>
						</el-popover>
					</template>
				</el-table-column>
				<el-table-column label="进度" width="220">
					<template #default="scope">
						<el-progress :text-inside="true" :stroke-width="20" :percentage="scope.row.percentage" />
					</template>
				</el-table-column>
				<el-table-column prop="deadline" label="截止日期" width="180"> </el-table-column>
				<el-table-column prop="startTime" label="起始日期" width="180"> </el-table-column>
				<el-table-column label="操作" show-overflow-tooltip width="140">
					<template v-slot="{ row, $index }">
						<el-button size="mini" type="text" @click="onOpenEditItem(row)">修改</el-button>
						<el-button size="mini" type="text" @click="onTabelRowDel(row, $index)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
		<AddItem ref="addItemRef" :addDoingData="addDoingData" :employeeList="employeeList" />
		<EditItem ref="editItemRef" :Data="temp" @editData="receiveEditData" />
	</div>
</template>

<script lang="ts">
import { getDoing, getEmployee } from '/@/http/mockData';
import { DoingData } from '/@/types/items';
import { ref, reactive, toRefs, watch, isReactive, onMounted } from 'vue';
import { formatEmployeeData } from '/@/utils/items';
import { formatDate } from '/@/utils/formatTime';
import AddItem from '/@/views/items/doing/components/addItem.vue';
import EditItem from '/@/views/items/doing/components/edititem.vue';
export default {
	name: 'doing',
	components: { AddItem, EditItem },
	setup(props) {
		const state = reactive<{ doingDatas: DoingData[]; employeeList: string[] }>({
			doingDatas: [],
			employeeList: [],
		});
		const showAddItem = ref(false);
		//打开新增项目弹窗
		const addItemRef = ref();
		const openAddItem = () => {
			addItemRef.value.openDialog();
		};
		//添加数据
		const addDoingData = (doingData) => {
			state.doingDatas.unshift(doingData);
		};
		//**********************************************************
		//接受新增组件数据
		// const receiveAddData = (value) => {
		// 	console.log(value);
		// 	let index = parseInt(formatDate(new Date(), 'YYYYmmddHHMMSS') + 0);
		// 	singleData.id = index;
		// 	singleData.itemName = value.name;
		// 	singleData.employees = value.employees.length > 1 ? `${value.employees[0]}+${value.employees.length - 1}` : value.employees[0];
		// 	singleData.employeeList = value.employees;
		// 	//格式化员工数据
		// 	for (const element of value.employees) {
		// 		const employee = {
		// 			joinTime: '',
		// 			name: '',
		// 		};
		// 		employee.joinTime = value.startTime;
		// 		employee.name = element;
		// 		singleData.employeeData.push(employee);
		// 	}
		// 	singleData.deadline = value.deadline;
		// 	singleData.startTime = value.startTime;
		// 	testData.unshift(singleData);
		// 	//清空数组
		// 	singleData = { id: 0, itemName: '', employees: '', employeeData: [], percentage: 0, deadline: '', startTime: '' };
		// };

		//删除数据
		// const onTabelRowDel = (row, index) => {
		// 	testData.splice(index, 1);
		// };
		//修改数据
		const editItemRef = ref();
		const selectData = reactive({
			obj: {},
		});
		const temp = ref({});
		const onOpenEditItem = (row, index) => {
			editItemRef.value.openDialog();
			// selectData.obj = row;
			//深拷贝数据
			temp.value = Object.assign({}, row);
		};
		//接受修改组件数据
		const receiveEditData = (value) => {
			console.log('receiveEditData', value);
			console.log('testData---', testData);

			// 格式化员工数据
		};
		onMounted(() => {
			//接受项目数据
			getDoing({}).then((res) => {
				const data = res.doingData;
				//处理mock数据
				for (let i in data) {
					state.doingDatas[i] = { ...data[i] };
					state.doingDatas[i].employeeStr = formatEmployeeData(data[i].employeeData);
				}
			});
			//接受员工数据
			getEmployee({}).then((res) => {
				state.employeeList = res.employeeList;
			});
		});
		return {
			showAddItem,
			openAddItem,
			addItemRef,
			addDoingData,
			...toRefs(state),
			editItemRef,
			selectData,
			temp,
			onOpenEditItem,
			receiveEditData,
		};
	},
};
</script>

<style lang="scss"></style>

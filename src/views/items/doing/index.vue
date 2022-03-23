<template>
	<div class="system-menu-container">
		<el-card shadow="hover">
			<!-- 查询 -->
			<div class="system-menu-search mb15">
				<el-input size="small" placeholder="请输入项目名称" style="max-width: 180px"> </el-input>
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
					新增项目
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
						<el-button size="mini" type="text" @click="delData(row, $index)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				@size-change="onHandleSizeChange"
				@current-change="onHandleCurrentChange"
				class="mt15"
				:pager-count="5"
				:page-sizes="[10, 20, 30]"
				v-model:current-page="pageNum"
				background
				v-model:page-size="pageSize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total"
			>
			</el-pagination>
		</el-card>
		<AddItem ref="addItemRef" :addDoingData="addDoingData" :employeeList="employeeList" />
		<EditItem ref="editItemRef" :changeData="changeData" :employeeList="employeeList" :updateData="updateData" />
	</div>
</template>

<script lang="ts">
import { getDoing, getEmployee } from '/@/http/mockData';
import { DoingData, InitData } from '/@/types/items';
import { ref, reactive, toRefs, onMounted } from 'vue';
import { formatEmployeeData } from '/@/utils/items';
import AddItem from '/@/views/items/doing/components/addItem.vue';
import EditItem from '/@/views/items/doing/components/editItem.vue';
export default {
	name: 'doing',
	components: { AddItem, EditItem },
	setup() {
		//项目数据
		const state = reactive(new InitData());
		//初始化数据
		const initData = () => {
			(state.pageNum = 0), (state.pageSize = 10);
		};
		//打开新增项目弹窗
		const addItemRef = ref();
		const openAddItem = () => {
			addItemRef.value.openDialog();
		};
		//添加数据
		const addDoingData = (doingData: DoingData) => {
			state.doingDatas.unshift(doingData);
		};
		//删除数据
		const delData = (row: any, index: number) => {
			state.doingDatas.splice(index, 1);
		};
		//打开修改项目弹窗
		const editItemRef = ref();
		let indexRef: number = 0;
		const onOpenEditItem = (row: any, index: number) => {
			indexRef = index;
			state.changeData = { ...row };
			editItemRef.value.openDialog();
		};
		//更新数据
		const updateData = (data: DoingData, index: number = indexRef) => {
			state.doingDatas.splice(index, 1, data);
		};
		// 分页改变
		const onHandleSizeChange = (val: number) => {
			state.pageSize = val;
		};
		// 分页改变
		const onHandleCurrentChange = (val: number) => {
			state.pageNum = val;
		};
		onMounted(() => {
			//初始化
			initData();
			//接收项目数据
			getDoing({}).then((res: any) => {
				const data = res.doingData;
				//处理mock数据
				for (let i in data) {
					state.doingDatas[i] = { ...data[i] };
					state.doingDatas[i].employeeStr = formatEmployeeData(data[i].employeeData);
					state.total = data.length;
				}
			});
			//接收员工数据
			getEmployee({}).then((res: any) => {
				state.employeeList = res.employeeList;
			});
		});
		return {
			addItemRef,
			editItemRef,
			initData,
			updateData,
			openAddItem,
			addDoingData,
			delData,
			onOpenEditItem,
			onHandleSizeChange,
			onHandleCurrentChange,
			...toRefs(state),
		};
	},
};
</script>

<style lang="scss"></style>

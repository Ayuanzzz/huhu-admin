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
			</div>
			<!-- 列表 -->
			<el-table :data="doneDatas" style="width: 100%" row-key="path" border :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
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

				<el-table-column prop="endTime" label="完成日期" width="180"> </el-table-column>
				<el-table-column prop="startTime" label="起始日期" width="180"> </el-table-column>
				<el-table-column label="操作" show-overflow-tooltip width="70">
					<template v-slot="{ row, $index }">
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
	</div>
</template>

<script lang="ts">
import { getDone } from '/@/http/mockData';
import { InitDoneData } from '/@/types/items';
import { reactive, toRefs, onMounted } from 'vue';
import { formatEmployeeData } from '/@/utils/items';
export default {
	name: 'doing',
	setup() {
		//项目数据
		const state = reactive(new InitDoneData());
		//初始化数据
		const initData = () => {
			(state.pageNum = 0), (state.pageSize = 10);
		};
		//删除数据
		const delData = (row: any, index: number) => {
			state.doneDatas.splice(index, 1);
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
			getDone({}).then((res: any) => {
				const data = res.doneData;
				//处理mock数据
				for (let i in data) {
					state.doneDatas[i] = { ...data[i] };
					state.doneDatas[i].employeeStr = formatEmployeeData(data[i].employeeData);
					state.total = data.length;
					console.log(state.total);
				}
			});
		});
		return {
			initData,
			delData,
			onHandleSizeChange,
			onHandleCurrentChange,
			...toRefs(state),
		};
	},
};
</script>

<style lang="scss"></style>

<template>
	<div class="home-container">
		<el-row :gutter="15">
			<el-col :sm="6" class="mb15">
				<div class="home-card-item home-card-first">
					<div class="flex-margin flex">
						<img :src="getUserInfos.photo" />
						<div class="home-card-first-right ml15">
							<div class="flex-margin">
								<div class="home-card-first-right-title">
									{{ currentTime }}，{{ getUserInfos.userName === '' ? 'test' : getUserInfos.userName }}！
								</div>
								<div class="home-card-first-right-msg mt5">{{ getUserInfos.userName === 'admin' ? '管理员' : '员工' }}</div>
							</div>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :sm="6" class="mb15" v-for="(v, k) in topCardItemList" :key="k">
				<div class="home-card-item home-card-item-box" :style="{ background: v.color }">
					<div class="home-card-item-flex">
						<div class="home-card-item-title pb3">{{ v.title }}</div>
						<div class="home-card-item-title-num pb6" :id="`titleNum${k + 1}`"></div>
						<div class="home-card-item-tip pb3">{{ v.tip }}</div>
						<div class="home-card-item-tip-num" :id="`tipNum${k + 1}`"></div>
					</div>
					<i :class="v.icon" :style="{ color: v.iconColor }"></i>
				</div>
			</el-col>
		</el-row>
		<!-- 剩余工期图表 -->
		<el-row>
			<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mt15">
				<el-card shadow="hover" :header="'项目剩余工期'">
					<div style="height: 200px" ref="homeOvertimeRef"></div>
				</el-card>
			</el-col>
		</el-row>
		<!-- 项目完成情况图表 -->
		<el-row>
			<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb15">
				<el-card shadow="hover" :header="'项目完成情况'">
					<div style="height: 200px" ref="homeLaboratoryRef"></div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import { toRefs, reactive, onMounted, nextTick, computed, getCurrentInstance, watch, onActivated } from 'vue';
import * as echarts from 'echarts';
import { CountUp } from 'countup.js';
import { formatAxis } from '/@/utils/formatTime';
import { useStore } from '/@/store/index';
import { topCardItemList, environmentList, activitiesList } from './mock';
export default {
	name: 'home',
	setup() {
		const { proxy } = getCurrentInstance() as any;
		const store = useStore();
		const state = reactive({
			topCardItemList,
			environmentList,
			activitiesList,
			tableData: {
				data: [
					{
						date: '2016-05-02',
						name: '呼呼之家',
						address: '烟感2.1%OBS/M',
					},
					{
						date: '2016-05-04',
						name: '蛙蛙之家',
						address: '温度30℃',
					},
					{
						date: '2016-05-01',
						name: '鸡鸡之家',
						address: '湿度57%RH',
					},
				],
			},
			myCharts: [],
		});
		// 获取用户信息 vuex
		const getUserInfos = computed(() => {
			return store.state.userInfos.userInfos;
		});
		// 当前时间提示语
		const currentTime = computed(() => {
			return formatAxis(new Date());
		});
		// 初始化数字滚动
		const initNumCountUp = () => {
			nextTick(() => {
				new CountUp('titleNum1', 3).start();
				new CountUp('titleNum2', 12).start();
				new CountUp('titleNum3', 51).start();
				new CountUp('tipNum1', 1).start();
				new CountUp('tipNum2', 6).start();
				new CountUp('tipNum3', 49).start();
			});
		};
		// 项目完成情况
		const initHomeLaboratory = () => {
			const myChart = echarts.init(proxy.$refs.homeLaboratoryRef);
			const option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: { type: 'cross' },
				},
				legend: {},
				xAxis: [
					{
						type: 'category',
						axisTick: {
							alignWithLabel: true,
						},
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					},
				],
				yAxis: [
					{
						type: 'value',
						name: '项目数量',
						min: 0,
						max: 35,
						position: 'left',
					},
					{
						type: 'value',
						name: '在职人数',
						min: 0,
						max: 70,
						position: 'right',
					},
				],
				series: [
					{
						name: '项目数量',
						type: 'bar',
						yAxisIndex: 0,
						data: [12, 15, 11, 7, 5, 15, 17, 14, 14, 18, 9, 12],
					},
					{
						name: '在职人数',
						type: 'line',
						smooth: true,
						yAxisIndex: 1,
						data: [50, 51, 51, 50, 52, 52, 53, 50, 45, 47, 50, 50],
					},
				],
			};
			myChart.setOption(option);
			state.myCharts.push(myChart);
		};
		// 项目工期预警
		const initHomeOvertime = () => {
			const myChart = echarts.init(proxy.$refs.homeOvertimeRef);
			const option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow',
					},
				},
				legend: {},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true,
				},
				xAxis: {
					type: 'value',
					boundaryGap: [0, 0.01],
				},
				yAxis: {
					type: 'category',
					data: ['重庆DEM', '攀枝花DOM', '合川DLG', '上虞DOM', '川东DLG', '铁门关DLG'],
				},
				series: [
					{
						type: 'bar',
						data: [36, 5, 15, 13, 2, 5],
					},
				],
			};
			myChart.setOption(option);
			state.myCharts.push(myChart);
		};
		// 批量设置 echarts resize
		const initEchartsResizeFun = () => {
			nextTick(() => {
				for (let i = 0; i < state.myCharts.length; i++) {
					state.myCharts[i].resize();
				}
			});
		};
		// 批量设置 echarts resize
		const initEchartsResize = () => {
			window.addEventListener('resize', initEchartsResizeFun);
		};
		// 页面加载时
		onMounted(() => {
			initNumCountUp();
			initHomeLaboratory();
			initHomeOvertime();
			initEchartsResize();
		});
		// 由于页面缓存原因，keep-alive
		onActivated(() => {
			initEchartsResizeFun();
		});
		// 监听 vuex 中的 tagsview 开启全屏变化，重新 resize 图表，防止不出现/大小不变等
		watch(
			() => store.state.tagsViewRoutes.isTagsViewCurrenFull,
			() => {
				initEchartsResizeFun();
			}
		);
		return {
			getUserInfos,
			currentTime,
			...toRefs(state),
		};
	},
};
</script>

<style scoped lang="scss">
.home-container {
	overflow-x: hidden;
	.home-card-item {
		width: 100%;
		height: 103px;
		background: var(--el-text-color-secondary);
		border-radius: 4px;
		transition: all ease 0.3s;
		&:hover {
			box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
			transition: all ease 0.3s;
		}
	}
	.home-card-item-box {
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		&:hover {
			i {
				right: 0px !important;
				bottom: 0px !important;
				transition: all ease 0.3s;
			}
		}
		i {
			position: absolute;
			right: -10px;
			bottom: -10px;
			font-size: 70px;
			transform: rotate(-30deg);
			transition: all ease 0.3s;
		}
		.home-card-item-flex {
			padding: 0 20px;
			color: var(--color-whites);
			.home-card-item-title,
			.home-card-item-tip {
				font-size: 13px;
			}
			.home-card-item-title-num {
				font-size: 18px;
			}
			.home-card-item-tip-num {
				font-size: 13px;
			}
		}
	}
	.home-card-first {
		background: var(--el-color-white);
		border: 1px solid var(--el-border-color-light, #ebeef5);
		display: flex;
		align-items: center;
		img {
			width: 60px;
			height: 60px;
			border-radius: 100%;
			border: 2px solid var(--color-primary-light-5);
		}
		.home-card-first-right {
			flex: 1;
			display: flex;
			flex-direction: column;
			.home-card-first-right-title {
				color: var(--el-color-black);
			}
			.home-card-first-right-msg {
				font-size: 13px;
				color: var(--el-text-color-secondary);
			}
		}
	}
}
.el-row:last-child {
	margin-top: 15px;
}
</style>

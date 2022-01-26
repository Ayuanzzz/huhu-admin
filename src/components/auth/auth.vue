<template>
	<slot v-if="getUserAuthBtnList" />
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from '/@/store/index';
export default {
	name: 'auth',
	props: {
		value: {
			type: String,
			default: () => '',
		},
	},
	setup(props) {
		const store = useStore();
		// 获取 vuex 中的用户权限
		const getUserAuthBtnList = computed(() => {
			// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。
			return store.state.userInfos.userInfos.authBtnList.some((v: any) => v === props.value);
		});
		return {
			getUserAuthBtnList,
		};
	},
};
</script>

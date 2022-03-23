<template>
	<div
		class="login-container"
		:style="{
			// backgroundImage: pcLayout ? 'url(' + pcBgi + ')' : mbBgi,
			background: pcLayout ? 'url(' + pcBgi + ') center center/100% no-repeat ' : mbBgi,
		}"
	>
		<div class="login-logo">
			<span>{{ getThemeConfig.globalViceTitle }}</span>
		</div>
		<div
			class="login-content"
			:style="{ transform: pcLayout ? 'translate(0%, -50%) translate3d(0, 0, 0)' : 'translate(-50%, -50%) translate3d(0, 0, 0)' }"
		>
			<div class="login-content-main">
				<h4 class="login-content-title">{{ getThemeConfig.globalTitle }}</h4>
				<p class="login-content-littleTitle">{{ getThemeConfig.littleTitle }}</p>
				<div>
					<el-tabs v-model="tabsActiveName">
						<el-tab-pane :label="$t('message.label.one1')" name="account">
							<Account />
						</el-tab-pane>
						<el-tab-pane :label="$t('message.label.two2')" name="mobile">
							<Mobile />
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { toRefs, reactive, computed, watch, onMounted, ref } from 'vue';
import Account from '/@/views/login/component/account.vue';
import Mobile from '/@/views/login/component/mobile.vue';
import { useStore } from '/@/store/index';
export default {
	name: 'loginIndex',
	components: { Account, Mobile },
	setup() {
		const store = useStore();
		const state = reactive({
			tabsActiveName: 'account',
			isTabPaneShow: true,
			pcLayout: true,
			pcBgi: 'https://gitee.com/sugarpeter/images/raw/master/bg1.jpg',
			mbBgi: 'rgba(255, 255, 255, 0.99)',
		});
		const clientWidth = ref(document.body.clientWidth);
		// 获取布局配置信息
		const getThemeConfig = computed(() => {
			return store.state.themeConfig.themeConfig;
		});
		watch(clientWidth, () => {
			if (clientWidth.value <= 1000) {
				state.pcLayout = false;
			} else {
				state.pcLayout = true;
			}
		});
		onMounted(() => {
			window.onresize = () => {
				return (() => {
					clientWidth.value = document.body.clientWidth;
				})();
			};

			// 判断是否为手机端
			if (clientWidth.value <= 1000) {
				state.pcLayout = false;
			}
		});
		return {
			clientWidth,
			getThemeConfig,
			...toRefs(state),
		};
	},
};
</script>

<style scoped lang="scss">
.login-container {
	width: 100%;
	height: 100%;
	background-size: 100%;
	// background: center center no-repeat;
	.login-logo {
		position: absolute;
		top: 30px;
		left: 50%;
		height: 50px;
		display: flex;
		align-items: center;
		font-size: 20px;
		color: var(--color-primary);
		letter-spacing: 2px;
		width: 90%;
		transform: translateX(-50%);
	}
	.login-content {
		width: 500px;
		padding: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: rgba(255, 255, 255, 0.99);
		transition: all 0.3s ease;
		overflow: hidden;
		z-index: 1;
		.login-content-main {
			margin: 0 auto;
			width: 80%;
			.login-content-title {
				color: #333;
				font-weight: 500;
				font-size: 30px;
				text-align: center;
				letter-spacing: 4px;
				margin: 15px 0 15px;
				white-space: nowrap;
				z-index: 5;
				position: relative;
				transition: all 0.3s ease;
			}
			.login-content-littleTitle {
				color: #333;
				font-weight: 300;
				font-size: 15px;
				text-align: center;
				letter-spacing: 1.5px;
				margin: 0 0 20px;
				position: relative;
			}
		}
	}
}
</style>

<template>
    <!-- style="min-height: 100vh;表示占满屏幕 -->
    <!-- <el-row style="min-height:100vh;" class="bg-indigo-500"> -->
    <el-row class="login-container">
        <el-col :lg="16" :md="12" class="left">
            <div>
                <div>欢迎光临</div>
                <div>此站点是《vue3 + vite实战商城后台开发》视频课程的演示地址</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right">
            <h2 class="title">欢迎回来</h2>
            <div>
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
            </div>
            <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon>
                                <user />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon>
                                <lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[250px]" type="primary" :loading="loading"
                        @click="onSubmit">登
                        录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
// import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
// import { setToken } from '~/composables/auth';
import { toast } from "~/composables/utils";
import { useStore } from "vuex";

const store = useStore();

const router = useRouter();

const form = reactive({
    username: "",
    password: "",
});

const rules = {
    username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
};
// 让登录时触发的函数拿到form内容，并且使用响应式接收
const formRef = ref(null);
const loading = ref(false);
const onSubmit = () => {
    formRef.value.validate((valid) => {
        console.log(valid);
        if (!valid) {
            console.log("验证不通过");
            return false;
        }
        loading.value = true;
        store
            .dispatch("login", form)
            .then((res) => {
                toast("登录成功");
                router.push("/");
            })
            .finally(() => {
                loading.value = false;
            });
    });
};

// 键盘接收函数
function onKeyUp(e) {
    if(e.key == 'Enter'){
        onSubmit()
    }
}

// 页面渲染后函数,监听键盘
onMounted(() => {
    // 添加键盘监听事件(注册键盘监听事件)
    document.addEventListener("keyup", onKeyUp);
});

onBeforeUnmount(() => {
    document.removeEventListener("keyup", onKeyUp);
});
</script>

<style scoped>
.login-container {
    @apply min-h-screen bg-indigo-500;
}

.login-container .left,
.login-container .right {
    @apply flex items-center justify-center;
}

.login-container .right {
    @apply bg-light-50 flex-col;
}

.left>div>div:first-child {
    @apply font-bold text-5xl text-light-50 mb-4;
}

.left>div>div:last-child {
    @apply text-gray-200 text-sm;
}

.right .title {
    @apply font-bold text-3xl text-gray-800;
}

.right>div {
    @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}

.right .line {
    @apply h-[1px] w-16 bg-gray-200;
}
</style>

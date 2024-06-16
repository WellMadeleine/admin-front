<template>
    <div>
        后台首页
        {{ $store.state.user.username }}
        <el-button @click="handleLogout">退出登录</el-button>

    </div>
</template>
<script setup>
import { showModal, toast } from "~/composables/utils"
import { logout } from "~/api/manager"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const router = useRouter()

const store = useStore()

function handleLogout() {
    showModal("是否退出登录").then((res) => {
        logout()
    }).finally(() => {
        store.dispatch("logout")
        router.push("/login")
        toast("退出成功")
    })



}
</script>
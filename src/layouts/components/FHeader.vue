<template>
    <div class="f-header">
        <span class="logo">
                <!-- 图标和文字的间距mr = margin right, mr-1 = 0.25rem  -->
            <el-icon class="mr-1"><House /></el-icon> <!-- log图标 -->
            理想国
        </span>
                     <!-- 图标设置样式 icon-btn  -->
        <el-icon class="icon-btn"><fold /></el-icon> <!-- 折叠图标-->
        <el-icon class="icon-btn"><refresh /></el-icon><!-- 刷新图标 -->
        <!-- 靠右 ml-auto --><!-- 垂直方向上居中-->
        <div class="ml-auto flex items-center">
                     <!-- 图标设置样式 icon-btn  -->
            <el-icon class="icon-btn"><full-screen /></el-icon> <!-- 全屏图标 -->
            <!-- 下拉菜单 -->
            <el-dropdown class="dropdown">
                <!--                垂直居中        字体颜色 -->
                <span class="flex items-center text-light-50">
                    <!-- 头像标签     mr-2外间距margin right    src头像地址 -->
                    <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
                    <!-- 名称 -->
                    {{ $store.state.user.username }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
            
        </div>
    </div>
</template>
<script setup>

</script>
<style>
.f-header{
                /* 垂直方向上居中    背景颜色       文字颜色     固定在头部   */
    @apply flex items-center bg-indigo-700 text-light-50 fixed top-0 left-0 right-0;
    height: 64px;
}

.logo{
    width: 250px;
    @apply flex justify-center items-center text-xl font-thin; 
}

.icon-btn{
    /*          水平方向居中    垂直方向居中  */
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    /* 鼠标指上时出现手形状 */
    cursor: pointer;
}

/* 鼠标指在图标上颜色变浅效果 */
.icon-btn:hover{
    @apply bg-indigo-600;
}

.f-header .dropdown{
    height: 64px;
    /* 鼠标指上时出现手形状 */
    cursor: pointer; 
    @apply flex justify-center items-center mx-5;
}
</style>
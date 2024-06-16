<template>
    <div>
        <el-col :sm="24" :lg="30">
            <el-result icon="warning" title="你找的页面走丢了" sub-title="Please follow the instructions">
                <template #extra>
                    <el-button type="primary" @click="$router.push('/')">回到首页</el-button>
                </template>
            </el-result>
        </el-col>
    </div>
</template>
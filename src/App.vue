<script>
import router from './router';


</script>

<template>
  <!-- <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    </div> 
  -->
  <router-view></router-view>
</template>

<style>
  #nprogress .bar{
    background-color: #f4f4f4!important;
    height: 3px!important;
  }
</style>

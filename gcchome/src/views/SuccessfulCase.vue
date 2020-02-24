<template>
  <div>
    <gheader></gheader>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <div
          style="width:1200px;height:600px;border:1px solid red; display:flex;display: flex;
            justify-content: space-around;
            align-items: center;"
        >
          <div
            style="width:250px;height:100px;border:1px solid black"
            v-for="item in 12"
            :key="item"
          ></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <div>123213</div>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
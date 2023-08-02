<script setup lang="ts">
defineProps(['menuList'])
</script>
<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<template>
  <template v-for="(item,index) in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item v-if="item.meta.show" :index="item.path">
        <template #title>
          <span>biao</span>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item v-if="item.children[0].meta.show" :index="item.children[0].path">
        <template #title>
          <span>biao</span>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<style scoped>

</style>
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Nav from './components/Nav.vue'
</script>

<template>

  <div class="common-layout">
    <el-container>
      <el-header><Nav /></el-header>
      <el-main>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
        <div class="wrapper">
          <HelloWorld msg="You did it!" />
        </div>
        <TheWelcome />
      </el-main>
      <el-footer>Copyright Yuekesoft.com</el-footer>
    </el-container>

  </div>
</template>
<template>
  <div>
    <transition>
      <div>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'root-page'
}
</script>

<style scoped>
</style>

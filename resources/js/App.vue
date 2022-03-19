<template>
    <app-header></app-header>
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
    <app-footer></app-footer>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const AppHeader = defineAsyncComponent(() => import('./components/layout/AppHeader.vue'));
const AppFooter = defineAsyncComponent(() => import('./components/layout/AppFooter.vue'));
export default {
    components: {
        AppHeader, AppFooter
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>

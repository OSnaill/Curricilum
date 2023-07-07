<template>
    <header class="fixed top-0 z-10 w-full">
        <section class="flex flex-row p-[20px] justify-between bg-white">
        <div class="flex flex-row items-center gap-[10px]">
            <div class="xl:hidden">
                <svg v-if="isNavOpen == false" @click="openNav()"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[35px] h-[35px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg v-if="isNavOpen == true" @click="closeNav()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[35px] h-[35px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div>
                <h2 class="font-bold">
                    BorisDevWeb
                </h2>
            </div>
        </div>
        <div class="flex-row items-center justify-center gap-[20px] hidden xl:flex">
            <a href="#">
                <GitIcon class="w-[20px] h-[20px]"/>
            </a>
            <a href="#">
                <LinkedinIcon class="w-[20px] h-[20px]"/>
            </a>
        </div>
        </section>
        <section class="" >
            <div class="w-screen bg-black opacity-30 h-screen absolute xl:hidden" @click="closeNav()" v-if="isNavOpen" >
            </div>
            <transition name="slide-fade" class="xl:hidden relative">
                <NavDrawer v-if="isNavOpen" class=" left-0 top-0" :isOpen="isNavOpen" />
            </transition>
        </section>
    </header>
    <div class="h-[70px]">

    </div>
</template>
<script>
import GitIcon from './icons/GitIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
import MenuIcon from './icons/MenuIcon.vue';
import NavDrawer from './NavDrawer.vue';

export default {
    components: { GitIcon, LinkedinIcon, MenuIcon, NavDrawer },
    data(){
        return {
            isNavOpen: false,
        }
    },
    methods: {
        openNav(){
            this.isNavOpen = true;
        },
        closeNav(){
            this.isNavOpen = false;
        },
        scrollTo(id){
            console.log(id);
            let elementToScroll = document.getElementById(id);
            elementToScroll.scrollIntoView({behavior:'smooth', block:'center'});
        },
    }
}
</script>
<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.1s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-600px);
}
</style>
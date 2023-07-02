<template>
    <header class="flex flex-row p-[10px] justify-between">
        <div class="flex flex-row items-center gap-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[35px] h-[35px]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div>
                <h1 class="font-bold">
                    SOUQUIERE Boris
                </h1>
                <h3> Développeur Web </h3>
            </div>
        </div>
        <div class="flex flex-row items-center justify-center gap-[20px]">
            <a href="#">
                <GitIcon class="w-[20px] h-[20px] fill-cyan-200 "/> 
            </a>
            <a href="#">
                <LinkedinIcon class="w-[20px] h-[20px]"/>
            </a>
        </div>
    </header>
</template>
<script>
import GitIcon from './icons/GitIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';
import MenuIcon from './icons/MenuIcon.vue';
export default {
    components: { GitIcon, LinkedinIcon, MenuIcon }
}
</script>
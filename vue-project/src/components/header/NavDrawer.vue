<template>
    <div class="relative">
        <nav class=" absolute top-0 w-2/3 h-screen border-r-[0.1px] border-solid shadow-2xl bg-white flex flex-col">
            <a href="#" id="pres-link" class="p-[20px]  font-bold flex flex-row gap-[20px] hover:bg-dark hover:text-mint " @click.prevent="scrollTo('pres')">
                <GitIcon class="w-[20px] h-[20px] opacity-80"/> 
                <p> Github </p>
            </a>
            <a href="#" id="pres-link" class="p-[20px]  font-bold flex flex-row gap-[20px] hover:bg-dark hover:text-mint " @click.prevent="scrollTo('pres')">
                <LinkedinIcon class="w-[20px] h-[20px] opacity-80"/> 
                <p> Linkedin </p>
            </a>
        </nav>
    </div>
</template>
<script>
import GitIcon from './icons/GitIcon.vue';
import LinkedinIcon from './icons/LinkedinIcon.vue';

export default {
    components: {
        GitIcon, LinkedinIcon,
    },
    props: {
        isOpen: Boolean,
    },
    setup(props) {
        console.log(props)
    },
    methods:{
        closeNav(){
            this.$emit('closeNav')
        }
    }
}
</script>
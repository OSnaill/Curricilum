<template>
    <div class="relative">
        <nav class=" absolute top-0 w-2/3 h-screen border-r-[0.1px] border-solid shadow-2xl bg-white flex flex-col">
           <a href="#" class="p-[20px]  bg-white text-black  hover:bg-dark hover:text-mint duration-[0.2] "> Présentation </a>
           <a href="#" class="p-[20px]  bg-white text-black  hover:bg-dark hover:text-mint duration-[0.2] "> Technologies </a>
           <a href="#" class="p-[20px]  bg-white text-black  hover:bg-dark hover:text-mint duration-[0.2] "> Soft Skills et Passions </a>
           <a href="#" class="p-[20px]  bg-white text-black  hover:bg-dark hover:text-mint duration-[0.2] "> Projets et parcours </a>
        </nav>
    </div>
</template>
<script>
export default {
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
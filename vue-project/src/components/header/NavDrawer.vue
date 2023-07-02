<template>
    <div class="relative">
        <nav class=" absolute top-0 p-[10px] w-[275px] h-max border-r-[0.1px] border-solid shadow-2xl bg-white">
            <h1> Menu </h1>
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
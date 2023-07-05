<template>
    <div class="p-[20px] flex flex-col gap-[20px] items-center bg-white rounded-lg border shadow-xl border-solid">
        <img :src="newUrl"  alt="html" class="h-[60px]">
        <p class="text-sm"> {{ name }} </p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            url: '/src/assets/img/',
        }
    },
    props: {
            imag: String,
            name: String,
        },
    computed:{
        newUrl: function(){
            return this.url = this.url + this.imag;
        },
    }
}
</script>
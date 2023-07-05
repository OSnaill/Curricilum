<template>
    <div class=" hover:scale-105 duration-[0.05s] p-[20px] border-2  w-[115px] h-[140px]  border-solid shadow-lg rounded-lg  flex flex-col items-center justify-around bg-white">
        <img :src="newUrl"  alt="html" class=" w-[35px]">
        <p class="text-sm font-bold"> {{name}} </p>
        <div class="flex flex-row gap-[8px] items-center">
            <div v-for="value in rankCalc" :class="value == 'yes' ? 'bg-mint' : 'bg-dark'" class="w-[10px] h-[7px] border-2 border-solid rounded-sm } "  :key="index"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                url: '/src/assets/img/',
                rankArray: []
            }
        },
        props: {
            imag: String,
            name: String,
            rank: Number,
        },
        setup(props) {
            console.log(props)
        },
        computed:{
            newUrl: function(){
               return this.url = this.url + this.imag;
               console.log(this.newUrl)
            },
            rankCalc: function(){
                for (let index = 0; index < 5; index++) {
                    index < this.rank ? this.rankArray.push('yes') : this.rankArray.push('false');
                }

                console.log(this.rankArray);
                return this.rankArray;
            }
        }
    }
</script>
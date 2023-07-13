<template>
    <div class=" hover:scale-105 duration-[0.05s] md:p-[20px]  rounded-lg  flex flex-col items-center gap-[10px] bg-white">
        <img :src="newUrl"  alt="html" class=" w-[40px] h-[40px] object-contain">
        <p class="text-xs "> {{name}} </p>
        <!-- <div class="flex flex-row gap-[5px] items-center">
            <div v-for="value in rankCalc" :class="value == 'yes' ? 'bg-mint' : 'bg-dark'" class="w-[5px] h-[4px] rounded-sm } "  :key="index"></div>
        </div> -->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                url: '/assets/img/',
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
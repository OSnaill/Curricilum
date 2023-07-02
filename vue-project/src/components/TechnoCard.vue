<template>
    <div class="w-[300px] border-2 border-solid border-black rounded-lg p-[20px] flex flex- justify-around gap-[20px]">
        <img :src="newUrl" src="../assets/img/html.png" alt="html" class="h-[30px]">
        <h3 class=""> {{name}} </h3>
        <div class="flex flex-row gap-[10px] items-center">
            <div v-for="value in rankCalc" :class="value == 'yes' ? 'bg-mint' : ''" class="w-[12px] h-[12px] border-2 border-solid rounded-sm } "  :key="index"></div>
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
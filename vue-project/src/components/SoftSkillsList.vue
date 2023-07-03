<template>
    <section class="bg-black">
        <h2 class="p-[20px] text-white text-center"> Soft Skills </h2>
        <div class="p-[20px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
            <SquareCard imag="html.png" :name='"Créativité"' />
            <SquareCard imag="html.png" :name='"Autonome"' />
            <SquareCard imag="html.png" :name='"Curieux"' />
            <SquareCard imag="html.png" :name='"Initiative"' />
        </div>
</section>
</template>

<script>

import SquareCard from '../components/SquareCard.vue';
export default {
    components:{SquareCard}
}
</script>
<template>
    <section class="bg-mint">
        <h2 class="p-[20px] text-dark text-center font-bold"> Loisirs </h2>
        <div class="p-[20px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
            <SquareCard imag="html.png" :name='"Jeux vidéos"' />
            <SquareCard imag="html.png" :name='"Jeux de combats"' />
            <SquareCard imag="html.png" :name='"Guitare électrique"' />
            <SquareCard imag="html.png" :name='"Musique"' />
            <SquareCard imag="html.png" :name='"Sport"' />
        </div>
</section>
</template>

<script>

import SquareCard from '../components/SquareCard.vue';
export default {
    components:{SquareCard}
}
</script>
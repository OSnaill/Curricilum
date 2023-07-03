<template>
    <section class="p-[20px]">
        <h1 class="p-[20px] text-center" id="tech"> Technologies </h1>
        <article class="p-[20px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3   gap-[20px] m-auto items-center place-items-center max-w-[1440px]">
          <TechnoCard :imag="'html.png'" :name='"HTML"' :rank="3" />
          <TechnoCard :imag="'html.png'" :name='"CSS"' :rank="5" />
          <TechnoCard :imag="'html.png'" :name='"JS"' :rank="5" />
          <TechnoCard :imag="'html.png'" :name='"PHP"' :rank="5" />
          <TechnoCard :imag="'html.png'" :name='"PHP"' :rank="5" />
          <TechnoCard :imag="'html.png'" :name='"PHP"' :rank="5" />
          <TechnoCard :imag="'html.png'" :name='"PHP"' :rank="5" />
          <TechnoCard :imag="'html.png'" :name='"PHP"' :rank="5" />
          <TechnoCard :imag="'html.png'" :name='"PHP"' :rank="5" />
        </article>
    </section>
</template>
<script>
import TechnoCard from '../components/TechnoCard.vue';
export default {
    components: {TechnoCard},
}
</script>
<style>
</style>
<script>
import TechnoCard from '../components/TechnoCard.vue';
export default {
  components: {TechnoCard}
}
</script>
<template>
  <main class="xl:grid relative">
      <div class="hidden try left-0 xl:w-1/5 xl:flex flex-col">
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint "> Présentation </a>
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint "> Technologies </a>
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint "> Soft Skils & Centres intérêts </a>
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint "> Projets </a>
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint "> Parcours </a>
      </div>
      <div class="col-span-4 xl:page xl:absolute right-0 xl:w-4/5">
      <section class="bg-bottom p-[20px] bg-no-repeat bg-dark ">
        <article class="flex flex-col justify-center align-baseline max-w-[600px] m-auto">
          <div class="p-[20px]">
            <img src="../assets/img/moi.jpg" alt="" class=" w-[200px] rounded-md shadow-xl m-auto">
          </div>
          <div class=" items-center flex flex-col text-white">
            <h1 class="p-[20px] text-center"> Présentation</h1>
            <p class="text-center p-[20px]">
              Bonjour et bienvenue sur mon CV en ligne, ici, <br> vous retrouverez mes compétences, projets que j'ai pu accomplir.
            </p>
          </div>
        </article>
      </section>
      <section>
        <h1 class="p-[20px] text-center"> Technologies </h1>
        <article class="p-[20px] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3  gap-[20px] m-auto items-center place-items-center max-w-[1440px]">
          <TechnoCard :imag="'html.png'" :name='"HTML"' :rank="3" />
          <TechnoCard :imag="'html.png'" :name='"CSS"' :rank="5" />
          <TechnoCard :imag="'html.png'" :name='"JS"' :rank="5" />
          <TechnoCard :imag="'html.png'" :name='"PHP"' :rank="5" />
        </article>
      </section>
    </div>
  </main>
</template>

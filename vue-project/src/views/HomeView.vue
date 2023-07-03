<script>
import TechnoList from '../components/TechnoList.vue';
import SoftSkillsList from '../components/SoftSkillsList.vue';
import LoisirsList from '../components/LoisirsList.vue';

export default {
  components: {TechnoList, SoftSkillsList, LoisirsList},
  methods:{
    scrollTo(id){
      console.log(id);
      let elementToScroll = document.getElementById(id);
      elementToScroll.scrollIntoView({behavior:'instant', block:'start'});
    },

  }
}
</script>
<template>
  <main class="xl:grid relative">
      <div class="hidden try left-0 xl:w-1/5 xl:flex flex-col">
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint " @click.prevent="scrollTo('pres')"> Présentation </a>
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint " @click.prevent="scrollTo('tech')"> Technologies </a>
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint "> Soft Skils & Centres intérêts </a>
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint "> Projets </a>
        <a href="#" class="p-[20px] hover:bg-dark hover:text-mint "> Parcours </a>
      </div>
      <div class="col-span-4 xl:page xl:absolute overflow-none right-0 xl:w-4/5">
      <section class="bg-bottom p-[20px] bg-no-repeat bg-dark ">
        <article class="flex flex-col justify-center align-baseline max-w-[600px] m-auto">
          <div class="p-[20px]" id="pres">
            <img src="../assets/img/moi.jpg" alt="" class=" w-[200px] rounded-md shadow-xl m-auto" id="pres">
          </div>
          <div class=" items-center flex flex-col text-white">
            <h1 class="p-[20px] text-center"> Présentation</h1>
            <p class="text-center p-[20px]">
              Bonjour et bienvenue sur mon CV en ligne, ici, <br> vous retrouverez mes compétences, projets que j'ai pu accomplir.
            </p>
          </div>
        </article>
      </section>
      <TechnoList />
      <aside class="md:grid grid-cols-2 lg:grid-cols-2">
        <SoftSkillsList />
        <LoisirsList />
      </aside>
    </div>
  </main>
</template>

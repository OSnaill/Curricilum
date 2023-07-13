<script>
import TechnoList from '../components/TechnoList.vue';
import PortfolioList from '../components/PortfolioList.vue';
import Apropos from '../components/APropos.vue';
import SoftSkillsList from '../components/SoftSkillsList.vue';
import LoisirsList from '../components/LoisirsList.vue';

 

export default {
  components: {TechnoList, SoftSkillsList, LoisirsList, PortfolioList, Apropos},
  created () {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('DOMContentLoaded', this.checkWindowPosition);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
    scrollTo(id){
      console.log(id);
      let elementToScroll = document.getElementById(id);
      elementToScroll.scrollIntoView({behavior:'smooth', block:'start'});
    },
  }
}
</script>
<template>
  <main>
    <article class="p-[20px] flex flex-col items-center lg:flex-row lg:h-[800px] max-w-[1280px] m-auto">
      <section class="lg:w-1/2">
          <img src="../assets/img/moi.png" alt="" class=" w-[200px] h-[200px] sm:w-[275px] sm:h-[275px] object-cover rounded-full shadow-2xl border-4 border-solid border-dark m-auto hover:rotate-[5deg] duration-100" id="pres">
      </section>
      <section class=" lg:w-1/2 flex flex-col gap-[20px] text-black max-w-[500px] p-[20px] m-auto">
        <h1 class=""> Hello There ! Je m'appelle <span class="text-mint">Souquière Boris </span></h1>
        <p class="text-justify ">
          Je suis développeur web full stack situé en bretagne. 👋
        </p>
        <div class="flex flex-row gap-[20px]">
        <button @click="scrollTo('portfolio')" class="border-2 border-black p-[10px] max-w-[120px] text-sm rounded-full font-bold bg-mint shadow-md hover:opacity-75">
          Mes projets
        </button>
        <button @click="scrollTo('about')" class="border-2 border-black p-[10px] max-w-[120px] text-sm rounded-full font-bold bg-white shadow-md hover:opacity-75">
          à propos
        </button>
        </div>
      </section>
    </article>
    <TechnoList id="tech"/>
    <Apropos />
    <PortfolioList />
  </main>
</template>

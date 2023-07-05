<script>
import TechnoList from '../components/TechnoList.vue';
import SoftSkillsList from '../components/SoftSkillsList.vue';
import LoisirsList from '../components/LoisirsList.vue';

 

export default {
  data(){
    return {
      pres: document.getElementById('pres-link'),
      comp: document.getElementById('comp-link'),
      soft: document.getElementById('soft-link'),
      project: document.getElementById('project-link'),
      parcours: document.getElementById('parcours-link'),
    }
  },
  components: {TechnoList, SoftSkillsList, LoisirsList},
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
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      console.log(scrollY);
      if(scrollY < 400)
      {
        document.getElementById('pres-link').classList.add('bg-dark', 'text-mint')
        document.getElementById('comp-link').classList.remove('bg-dark', 'text-mint')
        document.getElementById('soft-link').classList.remove('bg-dark', 'text-mint')
        document.getElementById('project-link').classList.remove('bg-dark', 'text-mint')
        document.getElementById('parcours-link').classList.remove('bg-dark', 'text-mint')
      }
      if(scrollY > 400)
      {
        document.getElementById('pres-link').classList.remove('bg-dark', 'text-mint')
        document.getElementById('comp-link').classList.add('bg-dark', 'text-mint')
        document.getElementById('soft-link').classList.remove('bg-dark', 'text-mint')
        document.getElementById('project-link').classList.remove('bg-dark', 'text-mint')
        document.getElementById('parcours-link').classList.remove('bg-dark', 'text-mint')
      }
      if(scrollY > 850)
      {
        document.getElementById('pres-link').classList.remove('bg-dark', 'text-mint')
        document.getElementById('comp-link').classList.remove('bg-dark', 'text-mint')
        document.getElementById('soft-link').classList.add('bg-dark', 'text-mint')
        document.getElementById('project-link').classList.remove('bg-dark', 'text-mint')
        document.getElementById('parcours-link').classList.remove('bg-dark', 'text-mint')
      }
    },
    checkWindowPosition() {
      if(scrollY < 300)
      {
        document.getElementById('pres-link').classList.add('bg-dark','text-mint')
      }
    }
  }
}
</script>
<template>
  <main class="xl:grid relative">
    <div class="hidden try left-0 xl:w-1/5 xl:flex flex-col">
      <a href="#" id="pres-link" class="p-[20px] hover:bg-dark hover:text-mint " @click.prevent="scrollTo('pres')"> Présentation </a>
      <a href="#" id="comp-link" class="p-[20px] hover:bg-dark hover:text-mint " @click.prevent="scrollTo('tech')"> Compétences </a>
      <a href="#" id="soft-link" class="p-[20px] hover:bg-dark hover:text-mint "> Soft Skils & Centres intérêts </a>
      <a href="#" id="project-link"  class="p-[20px] hover:bg-dark hover:text-mint "> Projets </a>
      <a href="#" id="parcours-link" class="p-[20px] hover:bg-dark hover:text-mint "> Parcours </a>
    </div>
    <div class="col-span-4 xl:page xl:absolute overflow-none top-[80px] right-0 xl:w-4/5">
      <section class="bg-dar p-[20px] ">
        <article class="flex flex-col justify-center align-baseline max-w-[700px] m-auto">
          <div class="p-[20px]" id="pres">
            <img src="../assets/img/moi.jpg" alt="" class=" w-[200px] rounded-md shadow-xl m-auto" id="pres">
          </div>
          <div class=" items-center flex flex-col text-black">
            <h2 class="p-[20px] text-center"> Présentation</h2>
            <p class="text-justify p-[20px]">
              Bonjour et bienvenue sur mon CV en ligne, ici, 
              vous retrouverez mes compétences, projets que j'ai pu accomplir
              ce cv évoluera au fur et à mesure de ma montée en compétence.
            </p>
          </div>
        </article>
      </section>
      <TechnoList id="tech"/>
      <aside class="md:grid grid-cols-2 lg:grid-cols-2">
        <SoftSkillsList />
        <LoisirsList />
      </aside>
    </div>
  </main>
</template>

<template>
    <article class="max-w-[1280px] m-auto p-[20px]">
        <h2 class="p-[20px]"> Compétences </h2>
        <section class="p-[20px] grid sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
            <div class="w-full bg-white p-[20px] text-black rounded-md border-[1px] border-solid border-slate-300">
                <h3 class="p-[20px] text-center"> Front End </h3>
                <div class="p-[20px] grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    <TechnoCard :imag="'html.png'" :name='"HTML"' :rank="4" />
                    <TechnoCard :imag="'css.png'" :name='"CSS"' :rank="4" />
                    <TechnoCard :imag="'js.png'" :name='"Javascript"' :rank="3" />
                    <TechnoCard :imag="'vue.png'" :name='"Vue"' :rank="3" />
                    <TechnoCard :imag="'tailwind.png'" :name='"TailwindCSS"' :rank="4" />
                </div>
            </div>
            <div class="w-full bg-white p-[20px] text-black rounded-md border-[1px] border-solid border-slate-300" >
                <h3 class="p-[20px] text-center"> Back End </h3>
                <div class="p-[20px]  grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    <TechnoCard :imag="'php.png'" :name='"PHP"' :rank="3" />
                    <TechnoCard :imag="'symfony.png'" :name='"Symfony"' :rank="4" />
                    <TechnoCard :imag="'rest.png'" :name='"REST"' :rank="3" />
                </div>
            </div>
            <div class="w-full bg-white p-[20px] text-black rounded-md border-[1px] border-solid border-slate-300 ">
                <h3 class="p-[20px] text-center"> Outils </h3>
                <div class="p-[20px]  grid grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    <TechnoCard :imag="'figma.png'" :name='"Figma"' :rank="4" />
                    <TechnoCard :imag="'github.png'" :name='"Github"' :rank="4" />
                    <TechnoCard :imag="'insomnia.png'" :name='"Insomnia"' :rank="4" />
                    <TechnoCard :imag="'notion.png'" :name='"Notion"' :rank="4" />
                </div>
            </div>
            <div class="w-full bg-white p-[20px] text-black rounded-md border-[1px] border-solid border-slate-300 md:col-span-3 ">
                <h3 class="p-[20px] text-left"> In progress </h3>
                <div class="  flex flex-col sm:flex-row gap-[20px]">
                    <TechnoCard :imag="'flutter.png'" :name='"Flutter"' :rank="4" />
                    <TechnoCard :imag="'dart.png'" :name='"Dart"' :rank="4" />
                </div>
            </div>
        </section>
    </article>
</template>
<script>
import TechnoCard from '../components/TechnoCard.vue';
export default {
    components: {TechnoCard},
}
</script>
<style>
</style>
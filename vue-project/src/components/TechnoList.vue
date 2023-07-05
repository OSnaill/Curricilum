<template>
    <article class="border-solid">
        <div class="grid grid-cols-1  lg:grid-cols-2 lg:divide-x-[1px] divide-solid ">
            <div class="grid grid-cols-1 divide-y">
                <h2 class="p-[20px] text-center">Technos</h2>
                <section class="">
                    <h2 class="p-[20px]"> Langages </h2>
                    <div class=" md:p-[20px] grid grid-cols-2  sm:grid-cols-3  md:grid-cols-4  gap-[20px]  m-auto place-items-center max-w-[1440px]">
                    <TechnoCard :imag="'html.png'" :name='"HTML"' :rank="4" />
                    <TechnoCard :imag="'css.png'" :name='"CSS"' :rank="4" />
                    <TechnoCard :imag="'js.png'" :name='"Javascript"' :rank="3" />
                    <TechnoCard :imag="'dart.png'" :name='"Dart"' :rank="1" />
                    </div>
                </section>
                <section class="">
                    <h2 class="p-[20px]"> Frameworks </h2>
                    <div class=" p-[20px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:grid-cols-4  gap-[20px]  m-auto place-items-center max-w-[1440px]">
                    <TechnoCard :imag="'symfony.png'" :name='"Symfony"' :rank="4" />
                    <TechnoCard :imag="'laravel.png'" :name='"Laravel"' :rank="2" />
                    <TechnoCard :imag="'vue.png'" :name='"Vue"' :rank="3" />
                    <TechnoCard :imag="'tailwind.png'" :name='"TailwindCSS"' :rank="4" />
                    <TechnoCard :imag="'flutter.png'" :name='"Flutter"' :rank="1" />
                    </div>
                </section>
                <section class="">
                    <h2 class="p-[20px] text-black"> Outils / Technos </h2>
                    <div class=" p-[20px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 md:grid-cols-4 gap-[40px]  m-auto place-items-center max-w-[1440px]">
                    <TechnoCard :imag="'figma.png'" :name='"Figma"' :rank="4" />
                    <TechnoCard :imag="'github.png'" :name='"Github"' :rank="2" />
                    <TechnoCard :imag="'vue.png'" :name='"Vue"' :rank="3" />
                    <TechnoCard :imag="'flutter.png'" :name='"Flutter"' :rank="1" />
                    </div>
                </section>
            </div>
            <div>
                <section class="border-solid">
                    <h2 class="p-[20px] text-center">Compétences</h2>
                    <div class="p-[20px] flex flex-col items-center">
                        <div class="w-[250px] sm:w-[500px] p-[20px] flex flex-col gap-[10px] m-auto">
                            <h3 class="font-bold underline "> Conception </h3>
                            <p class=" flex flex-row text-justify">
                                Capable de conceptualiser un projet et de mettre 'sur papier' grâce à l'UML ou la méthode Merise.
                            </p>
                        </div>
                        <div class="w-[250px] sm:w-[500px] p-[20px] flex flex-col gap-[10px] m-auto">
                            <h3 class="font-bold underline "> UI/UX design </h3>
                            <p class=" flex flex-row text-justify">
                                Notions d'UI/UX design, utilisation régulière de figma
                                pour effectuer mes Wireframes/Maquettes.
                            </p>
                        </div>
                        <div class="w-[250px] sm:w-[500px] p-[20px] flex flex-col gap-[10px] m-auto">
                            <h3 class="font-bold underline "> Front End </h3>
                            <p class=" flex flex-row text-justify">
                                Compétences correctes en intégration et développement front end.
                                TailwindCSS et VueJS sont mes choix de prédilection. 
                            </p>
                        </div>
                        <div class="w-[250px] sm:w-[500px] p-[20px] flex flex-col gap-[10px] m-auto">
                            <h3 class="font-bold underline "> Back End </h3>
                            <p class=" flex flex-row text-justify">
                                Solides compétences en développement Back End,
                                notemment avec PHP et Symfony, notions basiques de Laravel.
                            </p>
                        </div>
                        <div class="w-[250px] sm:w-[500px] p-[20px] flex flex-col gap-[10px] m-auto">
                            <h3 class="font-bold underline "> Anglais </h3>
                            <p class=" flex flex-row text-justify">
                                Anglais  très bien compris à l'écoute et lu, correctement parlé . <br/>
                                Regarde des streams Anglophone <br/>
                                Lis fréquemment des mangas en anglais
                            </p>
                        </div>
                        <div class="w-[250px] sm:w-[500px] p-[20px] flex flex-col gap-[10px] m-auto">
                            <h3 class="font-bold underline ">  Autonomie </h3>
                            <p class=" flex flex-row text-justify">
                                Capacité à aller chercher l'information nécessaire et de la mettre en application.
                            </p>
                        </div>
                        <div class="w-[250px] sm:w-[500px] p-[20px] flex flex-col gap-[10px] m-auto">
                            <h3 class="font-bold underline ">  Auto critique </h3>
                            <p class=" flex flex-row text-justify">
                                Admet mes erreurs et m'en sert pour progresser
                            </p>
                        </div>
                        <div class="w-[250px] sm:w-[500px] p-[20px] flex flex-col gap-[10px] m-auto">
                            <h3 class="font-bold underline ">  Esprit d'équipe </h3>
                            <p class=" flex flex-row text-justify">
                                Apprécie collaborer avec d'autres personnes et avoir leur point de vue.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
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
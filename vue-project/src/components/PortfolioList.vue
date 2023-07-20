<template>
    <article class="bg-dark text-white" id="portfolio">
      <section class="max-w-[1280px] m-auto p-[20px]">
        <h2 class="p-[20px]"> Portfolio </h2>
        <div class="flex flex-col gap-[40px] p-[20px]">
          <a href="https://guitarshop.souquiereboris-dev.fr/" class="lg:h-[400px] hover:scale-[1.01] duration-75  flex flex-col lg:flex-row" target="_blank">
            <div class="w-full h-[200px] lg:w-1/3 lg:h-full block">
              <img src="../assets/img/guitar_shop.png" alt="" class=" w-full h-full object-cover ">
            </div>
            <div class="text-black lg:p-[20px] lg:w-2/3 flex flex-col justify-center bg-white">
              <h3 class="p-[20px]"> Guitar Shop </h3>
              <div class="p-[20px]">
                <p class="text-justify">
                  Boutique de guitare en ligne, construits avec api rest, système de filtrage de marque + administration avec authentification JWT, ( Détails dans le repo ).
                </p>
              </div>
              <div class="flex flex-row items-center flex-wrap gap-[20px] p-[20px] ">
                <p class="font-bold"> Technos : </p>
                <img src="../assets/img/html.png" alt="html" class="w-[20px]">
                <img src="../assets/img/css.png" alt="css" class="w-[20px]">
                <img src="../assets/img/tailwind.png" alt="tailwind" class="w-[20px]">
                <img src="../assets/img/vue.png" alt="vue" class="w-[20px]">
                <p> | </p>
                <img src="../assets/img/symfony.png" alt="vue" class="w-[20px]">
                <img src="../assets/img/rest.png" alt="vue" class="w-[20px]">
              </div>
            </div>
          </a>
        </div>
      </section>
    </article>
</template>
<script>
</script>
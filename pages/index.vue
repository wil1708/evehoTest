<template>
  <main>
    <!-- HEADER -->
    <header class="h-48 md:h-64 bg-cover relative z-1" style="background-image: url('https://admin.shoppingauto.fr/storage/uploads/2020/12/09/5fd10457543c3header-Shopping-auto-1.jpg'); background-position: center center;">
    <div class="absolute z-2 bg-black h-full w-full opacity-50"></div>
    <div class="h-16 fixed w-full z-50 top-0 fixedNav">
      <div class="flex justify-between mx-20 relative">
          <img id="logoNav" src="https://shoppingauto.fr/_nuxt/img/shoppingauto-white.a46fcca.svg" alt="Logo" class="h-6 my-auto">
          <nav>
            <ul class="flex">
              <li class="text-white py-5 px-3 navLink"><img src="https://admin.shoppingauto.fr/storage/uploads/2020/12/21/5fe0d4653f3dcNOS-AUTOS_Picto.svg" class="h-5 md:h-3 inline mr-2 my-auto">Nos voitures</li>
              <li class="text-white py-5 px-3 navLink"><img src="https://admin.shoppingauto.fr/storage/uploads/2020/12/15/5fd8d9f620933GARANTIES.svg" class="h-5 md:h-3 inline mr-2 my-auto">Nos garanties</li>
              <li class="text-white py-5 px-3 navLink"><img src="https://admin.shoppingauto.fr/storage/uploads/2020/12/15/5fd8da0a4da86ABOUT.svg" class="h-5 md:h-3 inline mr-2 my-auto">Qui sommes-nous ?</li>
              <li class="text-green-500 py-5 px-3 navLink"><img src="https://admin.shoppingauto.fr/storage/uploads/2020/12/15/5fd8d9ffe1186FAQ.svg" class="h-5 md:h-3 inline mr-2 my-auto">FAQ</li>
              <li class="text-white py-5 px-3 navLink"><img src="https://shoppingauto.fr/_nuxt/img/connexion.9111e6c.svg" class="h-5 md:h-3 inline mr-2 my-auto">Me connecter</li>
              <li class="py-3 my-auto">
                <div class=" flex border border-green-500 rounded-full py-0.5 px-2">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-sm my-auto md:mt-1 text-green-500 h-4 svg-inline--fa fa-heart fa-w-16"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
                <span class="text-white navLink my-auto text-xs mr-1">
                (0)
                </span>
                <span class="text-white navLink">Ma liste</span>
                </div>
              </li>
            </ul>
          </nav>
      </div>
    </div>
    <div class="absolute z-4 mx-20 mt-32">
      <div class="text-white flex">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 57" stroke-width="5" class="stroke-current h-2 mr-2 my-auto"><path fill="none" stroke-linecap="round" d="M29.5 1l-28 27.5 28 27.5" stroke="currentColor"></path></svg> Retourner à l'accueil
    </div>
    <div class="text-white text-4xl font-bold">FAQ</div>
    </div>
  </header>
  <!-- FIN HEADER! -->

  <!-- SECTION FAQ -->
  <section class="container-raw my-12 md:my-24 mx-28">
    <div style="background-color:#F6F6F6;" class="md:pb-4 pt-4 md:pt-8 px-5 md:px-10 mb-5 colorFaq1">
      <div class="flex justify-between mb-6 cursor-pointer firstFaq">
      <span class="my-auto font-bold text-xl">
        shoppingauto.fr, comment ça marche ?
      </span>
      <span class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="transform transition duration-300 w-6 text-gray-400 stroke-current -rotate-180 firstArrow"><path fill="none" stroke-linecap="round" d="M1 .5l5 5 5-5" stroke="currentColor"></path></svg></span>
      </div>
      <div class="text-sm border-gray-300 border-l-8 pl-5 my-6 answer1 hidden">
        <p>La réponse de shoppingauto.fr :</p>
        <p>Acheter une auto n'aura jamais été aussi facile. Cherchez, comparez et réservez ! Dès réception de votre réservation, on se charge de finaliser votre commande à vos côtés et à 100% en digital ! &#128522;</p>
      </div>
    </div>
    <div style="background-color:#F6F6F6;" class="md:pb-4 pt-4 md:pt-8 px-5 md:px-10 mb-5 colorFaq2">
      <div class="flex justify-between mb-6 cursor-pointer secondFaq">
      <span class="my-auto font-bold text-xl">
        J'aimerais avoir des infos complémentaires sur un véhicule ?
      </span>
      <span class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="transform transition duration-300 w-6 text-gray-400 stroke-current -rotate-180 secondArrow"><path fill="none" stroke-linecap="round" d="M1 .5l5 5 5-5" stroke="currentColor"></path></svg></span>
      </div>
      <div class="text-sm border-gray-300 border-l-8 pl-5 my-6 answer2 hidden">
        <p>La réponse de shoppingauto.fr :</p>
        <p>Une question sur la finition ? Une trace d'usure ? Nos conseillers shoppingauto.fr vous répondent directement sur notre chat ! &#128526;</p>
      </div>
    </div>
    <div style="background-color:#F6F6F6;" class="md:pb-4 pt-4 md:pt-8 px-5 md:px-10 mb-5 colorFaq3">
      <div class="flex justify-between mb-6 cursor-pointer thirdFaq">
      <span class="my-auto font-bold text-xl">
        Comment savoir combien coutera ma livraison ?
      </span>
      <span class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="transform transition duration-300 w-6 text-gray-400 stroke-current -rotate-180 thirdArrow"><path fill="none" stroke-linecap="round" d="M1 .5l5 5 5-5" stroke="currentColor"></path></svg></span>
      </div>
      <div class="text-sm border-gray-300 border-l-8 pl-5 my-6 answer3 hidden">
        <p>La réponse de shoppingauto.fr :</p>
        <p>Rien de plus simple : Une fois votre véhicule choisi, appuyez sur le bouton "je shop" et une étape plus tard on vous demandera dans quel département vous souhaitez être livré et on vous indiquera le tarif ! 🚀</p>
      </div>
    </div>
    <div style="background-color:#F6F6F6;" class="md:pb-4 pt-4 md:pt-8 px-5 md:px-10 mb-5 colorFaq4">
      <div class="flex justify-between mb-6 cursor-pointer fourthFaq">
      <span class="my-auto font-bold text-xl">
        Comment réserver le véhicule ?
      </span>
      <span class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="transform transition duration-300 w-6 text-gray-400 stroke-current -rotate-180 fourthArrow"><path fill="none" stroke-linecap="round" d="M1 .5l5 5 5-5" stroke="currentColor"></path></svg></span>
      </div>
      <div class="text-sm border-gray-300 border-l-8 pl-5 my-6 answer4 hidden">
        <p>La réponse de shoppingauto.fr :</p>
        <p>Afin de bloquer la voiture de vos rêves, nous vous invitons à réserver le véhicule en ligne en versant un acompte de 250€, un bon de réservation vous seras transmis automatiquement par mail.</p>
      </div>
    </div>
    <div style="background-color:#F6F6F6;" class="md:pb-4 pt-4 md:pt-8 px-5 md:px-10 mb-5 colorFaq5">
      <div class="flex justify-between mb-6 cursor-pointer fifthFaq">
      <span class="my-auto font-bold text-xl">
        Comment payer le solde du véhicule ?
      </span>
      <span class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="transform transition duration-300 w-6 text-gray-400 stroke-current -rotate-180 fifthArrow"><path fill="none" stroke-linecap="round" d="M1 .5l5 5 5-5" stroke="currentColor"></path></svg></span>
      </div>
      <div class="text-sm border-gray-300 border-l-8 pl-5 my-6 answer5 hidden">
        <p>La réponse de shoppingauto.fr :</p>
        <p>Le montant de l'acompte sera enlevé du montant global et notre service administratif se chargera de vous envoyer la facture, le bon de commande et notre RIB. Pour le paiement du solde, un virement sera exigé en amont de la livraison et dès réception des fonds, la livraison pourra être effectuée.</p>
      </div>
    </div>
    <div style="background-color:#F6F6F6;" class="md:pb-4 pt-4 md:pt-8 px-5 md:px-10 mb-5 colorFaq6">
      <div class="flex justify-between mb-6 cursor-pointer sixthFaq">
      <span class="my-auto font-bold text-xl">
        Que faire si le véhicule ne me convient pas ?
      </span>
      <span class="my-auto"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 6" class="transform transition duration-300 w-6 text-gray-400 stroke-current -rotate-180 sixthArrow"><path fill="none" stroke-linecap="round" d="M1 .5l5 5 5-5" stroke="currentColor"></path></svg></span>
      </div>
      <div class="text-sm border-gray-300 border-l-8 pl-5 my-6 answer6 hidden">
        <p>La réponse de shoppingauto.fr :</p>
        <p>Pas de panique ! Vous êtes protégé avec notre garantie satisfait ou remboursé.</p>
      </div>
    </div>
  </section>
  <!-- FIN SECTION FAQ -->

  <!-- SECTION CONTACT -->
  <section class="container-raw my-12 md:my-24 mx-28">
    <div>
      <h3 class="text-xl md:text-4xl font-semibold mb-8">
        Vous n’avez pas trouvé de réponse à votre question ? Contactez-nous !
      </h3>
      <div class="flex">
        <div class="flex items-center">
          <img src="https://admin.shoppingauto.fr/storage/uploads/2020/12/15/5fd88680e42195d7fae39ec200PICTO_Hotline.svg" class="w-16 mr-5">
          <div>
            <p class="text-base md:text-xl font-bold">
              Hotline téléphonique
            </p>
            <p class="text-sm">Du lundi au samedi de 9h00 à 19h00 au <a href="tel:0237648440">02 37 64 84 40</a>.</p>
          </div>
        </div>
        <div class="flex items-center ml-20">
          <img src="https://admin.shoppingauto.fr/storage/uploads/2020/12/15/5fd886839aec65d7fae3a008b3PICTO_Chat.svg" class="w-16 my-auto mr-6">
          <div>
            <p class="text-base md:text-xl font-bold">
              Chat en ligne
            </p>
            <p class="text-sm">7 jours sur 7, de 6h à minuit <a href="tel:0237648440">02 37 64 84 40</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- FIN SECTION CONTACT -->

  <!-- FOOTER -->
  <footer style="background-color:#f6f6f6;">
    <div class="flex justify-around py-4">
      <img data-src="https://admin.shoppingauto.fr/storage/uploads/2020/12/09/5fd0fc4e58111shoppingauto-gray.svg" alt="Logo" class="h-8 ls-is-cached lazyloaded" src="https://admin.shoppingauto.fr/storage/uploads/2020/12/09/5fd0fc4e58111shoppingauto-gray.svg">
      <div>
        <p class="text-xl font-semibold mb-4">Navigation</p>
        <nav class="flex">
        <ul>
          <li>Nos voitures</li>
          <li>Qui sommes-nous ?</li>
          <li>Mentions légales</li>
          <li>Actualités</li>
          <li>Contact</li>
        </ul>
        <ul class="ml-60">
          <li>Nos garanties</li>
          <li>FAQ</li>
          <li>Conditions générales de services</li>
          <li>Nos véhicules</li>
          <li>Me connecter</li>
        </ul>
      </nav>
      </div>
      <div>
        <div class="ml-32">
          <p class="text-xl font-semibold mb-4 text-right">Suivez-nous</p>
          <i class="fab fa-facebook-f py-3 px-4 rounded-full" style="background-color:#2ef2db"></i>
          <i class="fas fa-camera py-3 px-3 rounded-full ml-2" style="background-color:#2ef2db"></i>
          <i class="fab fa-youtube py-3 px-3 rounded-full ml-2" style="background-color:#2ef2db"></i>
        </div>
      </div>
    </div>
    <div class="flex justify-center pt-6 pb-12">
      <p class="text-xs my-auto mx-auto mb-2 md:mb-0 md:ml-0 md:mr-3 flex"><span class="my-auto">
        shoppingauto.fr utilise la technologie
      </span> <a href="https://eveho.io" target="_blank" class="inline my-auto ml-1 h-3 icon-eveho"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 197.6" class="fill-current h-full"><path d="M245.2 50.3l37.1 96 37.1-96h46.4l-61.5 144h-44.7l-60.7-144h46.3zM622.1 197.6v-83.1c0-16.5-9-28-26.1-28-17.7 0-27 12.4-27 27.5v83.6h-43.8V0H569v67.3h.3c5.3-7.5 12.1-12.7 19.9-15.4 8.1-3 15.2-4.3 21.4-4.3 18 0 31.7 5.7 41 16.7 9.3 11.1 14 24.5 14 40.4v92.8h-43.5zM702 69c16-14.6 35.7-21.8 58.4-21.8 22.8 0 42.1 7.3 57.9 21.6 15.7 14.3 23.6 31.8 23.6 53.1 0 21.6-7.9 39.6-23.9 54.2-16 14.3-35.4 21.6-58.2 21.6-23 0-42.4-7-58.2-21.3-15.7-14.3-23.6-32.1-23.6-53.7.1-21.4 8-39.5 24-53.7zm31.7 79.8c7 6.7 16 10.2 26.4 10.2 21.1 0 36.8-15.4 36.8-36.9 0-10.5-3.7-19.4-10.7-26.2-7-7-16-10.5-26.4-10.5-10.4 0-19.1 3.5-26.1 10.5-7 6.7-10.7 15.6-10.7 26.2.1 10.8 3.7 19.7 10.7 26.7zM99.9 28.5h60.3c7.7 0 13.9-6.2 13.9-13.9S167.9.7 160.2.7H99.9C92.2.7 86 6.9 86 14.6s6.2 13.9 13.9 13.9zM101 121.1c0 4.5.8 8.8 2.1 12.9h103.5c.3-3.2.6-8.4.6-15.1 0-21.3-7-38.8-20.8-52-13.8-13.2-31.7-20-53.9-20-21.6 0-40.5 7.3-56.2 22.1C65 79.9 57.7 92.2 54.7 106.2H13.9c-7.7 0-13.9 6.2-13.9 13.9S6.2 134 13.9 134h39.9c2.4 16.8 10 31 22.8 42.6 16 14 35.4 21 58.7 21 30.6 0 52-10.8 64.6-32.6l-31.7-20c-6.7 10.5-20.2 17.3-33.4 17.3-7.9 0-15.3-2-21.3-5.6-12.6-6.6-21.3-20.1-21.3-35.6 0-19.9 14.2-36.4 32.7-39.4.1 0 .3 0 .4-.1 1.9-.3 3.8-.5 5.7-.5h.5c.4 0 .8.1 1.2.1h.5c18.8.7 29.2 12.7 30.3 24.9H104c-2 4.7-3 9.7-3 15zM510.5 118.8c0-21.3-7-38.8-20.8-52-13.8-13.2-31.7-20-53.9-20-21.6 0-40.5 7.3-56.2 22.1-15.5 14.8-23.3 32.4-23.3 53.1 0 22.1 7.9 40.2 23.6 54.5 16 14 35.4 21 58.7 21 30.6 0 52-10.8 64.6-32.6l-31.7-20c-6.7 10.5-20.2 17.3-33.4 17.3-7.9 0-15.3-2-21.3-5.6-12.6-6.6-21.3-20.1-21.3-35.6 0-19.9 14.2-36.4 32.7-39.4.1 0 .3 0 .4-.1 1.9-.3 3.8-.5 5.7-.5h.5c.4 0 .8.1 1.2.1h.5c18.8.7 29.2 12.7 30.3 24.9h-59.5c-1.8 4.6-2.8 9.6-2.8 14.9 0 4.5.8 8.8 2.1 12.9h103.5c.1-3.1.4-8.2.4-15z" class="eveho-white_svg__st0"></path></svg></a></p>
      <p class="text-xs mt-auto">
      © 2021 shoppingauto.fr
      —
      <a href="/mentions-legales" class="">Mentions légales</a> <span>
        et
        <a href="/conditions-generales-servicess" class="">CGS</a></span></p>
    </div>
  </footer>
  </main>
</template>


<script>
  export default {
    head() {
      return {
        // script: [
        //   {
        //     src: 'https://code.jquery.com/jquery-3.5.1.min.js',
        //     src: 'newFile.js'
        //   }
        // ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
          }
        ]
      }
    }
  }
</script>

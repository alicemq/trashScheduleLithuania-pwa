<script setup>
  const deviceInstructions = {
    ios: {
      title: 'Importavimas į iPhone / iOS',
      content: `
      <ol>
        <li>Nukopijuokite kalendoriaus URL mygtuką "Kopijuoti".</li>
        <li>Eikite į "Nustatymai" > "Kalendorius" > "Paskyros" > "Pridėti paskyrą" > "Kita".</li>
        <li>Pasirinkite "Pridėti prenumeruojamą kalendorių".</li>
        <li>Įklijuokite nukopijuotą URL.</li>
        <li>Spauskite "Toliau" ir tada "Išsaugoti".</li>
      </ol>
      <p>Kalendorius bus pridėtas ir automatiškai atnaujinamas.</p>
    `
    },
    android: {
      title: 'Importavimas į Android',
      content: `
      <ol>
        <li>Atidarykite Google Calendar programėlę.</li>
        <li>Spauskite "Meniu" (trys horizontalios linijos) > "Nustatymai" > "Pridėti kalendorių" > "URL".</li>
        <li>Nukopijuokite kalendoriaus URL ir įklijuokite jį.</li>
        <li>Spauskite "Pridėti kalendorių".</li>
      </ol>
      <p>Kalendorius bus pridėtas ir automatiškai sinchronizuojamas.</p>
    `
    },
    google: {
      title: 'Importavimas į Google Calendar',
      content: `
      <ol>
        <li>Eikite į <a href="https://calendar.google.com" target="_blank">Google Calendar</a>.</li>
        <li>Kairėje pusėje, šalia "Kiti kalendoriai", spauskite "+" mygtuką.</li>
        <li>Pasirinkite "Iš URL".</li>
        <li>Nukopijuokite kalendoriaus URL ir įklijuokite jį.</li>
        <li>Spauskite "Pridėti kalendorių".</li>
      </ol>
      <p>Google Calendar dabar rodys jūsų atliekų išvežimo grafiką.</p>
    `
    }
  }
</script>

<template>
  <div
    class="modal fade"
    id="deviceInstructionsModal"
    tabindex="-1"
    aria-labelledby="deviceInstructionsModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deviceInstructionsModalLabel">
            {{ deviceInstructions.title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div class="modal-body" v-html="deviceInstructions.content"/>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Supratau</button>
        </div>
      </div>
    </div>
  </div>
</template>

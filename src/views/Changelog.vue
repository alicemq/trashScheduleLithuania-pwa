<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container mt-4">
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Pradžia</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Pakeitimų žurnalas</li>
      </ol>
    </nav>
    <h2>Pakeitimų žurnalas</h2>
    <hr />

    <div class="card mb-3">
      <div class="card-header"><strong>V 1.2.0</strong> - 2025-06-14</div>
      <div class="card-body">
        <ul>
          <li>
            Patobulinta vartotojo sąsaja:
            <ul>
              <li>Perkelta PDF atsisiuntimo funkcija į pagrindinį kalendoriaus pridėjimo ekraną</li>
              <li>Pakeistas peržiūros kortelės dizainas</li>
              <li>Patobulinta priminimų nustatymų vieta ir pateikimas</li>
            </ul>
          </li>
          <li>
            Pridėta nauja funkcija:
            <ul>
              <li>Galimybė atsisiųsti kalendorių PDF formatu</li>
              <li>PDF faile rodomi savaitgaliai ir darbo dienos su skirtingu fonu</li>
              <li>
                Patogus spausdinimo formatas su visais reikalingais duomenimis:
                <ul>
                  <li>Adreso informacija</li>
                  <li>Ateinančių 12 mėnesių kalendorius su įvykiais</li>
                  <li>Konteinerių tipų santrumpos</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Pataisyti kelių adresų pasirinkimo ekrano veikimo nesklandumai</li>
          <li>Patobulintas įvykių sąrašo atvaizdavimas</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header"><strong>V 1.1.0</strong> - 2025-06-13</div>
      <div class="card-body">
        <ul>
          <li>Pridėta adreso pasirinkimo ekrano funkcija keliems rastiems adresams.</li>
          <li>Įdiegta miesto pasrinkimo funkcija.</li>
          <li>Pridėtas adresas, konteinerio formatas ir sutarties numeris į įvykio aprašymą.</li>
          <li>
            Patobulintas kalendoriaus įvykių grupavimas, siekiant sujungti tuos pačius konteinerių
            tipus vienai dienai.
          </li>
          <li>
            Pridėtas "netikras" parametras į ICS nuorodą, siekiant geriau valdyti naršyklės ir
            kalendoriaus programų talpyklą (cache).
          </li>
          <li>Įvykiai dabar neblokuoja kalendoriaus laiko (nerodo kaip Busy)</li>
        </ul>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header"><strong>V 1.0.0</strong> - 2024-07-20</div>
      <div class="card-body">
        <ul>
          <li>Pirminė versija.</li>
          <li>Kalendoriaus generavimas pagal adresą ir savivaldybę.</li>
          <li>Galimybė pasirinkti datų diapazoną.</li>
          <li>Priminimų nustatymai.</li>
          <li>ICS failo atsisiuntimas.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Add any specific styles for this component if needed */
</style>

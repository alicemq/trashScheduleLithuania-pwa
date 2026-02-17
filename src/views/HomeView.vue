<script setup>
  // No imports needed as we're using router-link for navigation
</script>

<template>
  <div class="container py-4">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1 class="mb-4">Atliekų Išvežimo Grafikai Lietuva</h1>

        <!-- Quick Start -->
        <div class="card mb-4">
          <div class="card-header">
            <h2 class="h5 mb-0">Kaip naudotis?</h2>
          </div>
          <div class="card-body">
            <ol class="mb-0">
              <li>Įveskite savo adresą</li>
              <li>Pasirinkite priminimų nustatymus</li>
              <li>
                Pridėkite kalendorių vienu paspaudimu į:
                <ul>
                  <li>Google Calendar</li>
                  <li>Outlook</li>
                  <li>Apple Calendar</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <!-- Start Button -->
        <div class="text-center mb-4">
          <router-link to="/generate" class="btn btn-primary btn-lg px-5">
            <i class="bi bi-calendar-plus me-2"/>Pradėti kurti kalendorių
          </router-link>
        </div>

        <!-- Description -->
        <div class="card mb-4">
          <div class="card-body">
            <p>
              Ši svetainė – puikus įrankis Kauno Švaros klientams, leidžiantis patogiai sekti
              atliekų išvežimo grafikus tiesiai telefone ar kompiuteryje. Naudodamiesi svetaine
              galite susikurti specialią kalendoriaus nuorodą (iCal formato), kuri automatiškai
              pridės atliekų išvežimo datas į jūsų mėgstamą kalendoriaus programėlę („Google
              Calendar", „Outlook" ar kt.). Taip pat svetainė leidžia nustatyti priminimus, todėl
              visada laiku gausite pranešimą, kada išstumti atliekų konteinerius.
            </p>
            <p>
              Pamiršote, kada išvežamos šiukšlės? Nebereikės skambinti į atliekų surinkimo įmones ar
              kaimynams! Su mūsų kalendoriumi visada žinosite tikslų datą. Jokių praleistų šiukšlių
              išvežimo dienų ir jokių nemalonių kvapų!
            </p>
            <p class="mb-0">
              Tai padeda išvengti situacijų, kai pamirštama išstumti konteinerius laiku, užtikrina
              tvarkingą gyvenamąją aplinką ir sumažina stresą dėl praleistų išvežimų. Patogu,
              paprasta ir naudinga – nereikės daugiau rūpintis popieriniais grafikais ar ieškoti
              informacijos kituose šaltiniuose.
            </p>
          </div>
        </div>

        <!-- FAQ -->
        <div class="card mb-4">
          <div class="card-header">
            <h2 class="h5 mb-0">Dažniausiai užduodami klausimai</h2>
          </div>
          <div class="card-body">
            <div class="accordion" id="faqAccordion">
              <!-- Calendar Types -->
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    Kokius kalendorius palaiko sistema?
                  </button>
                </h3>
                <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Sistema palaiko visas populiariausias kalendorių programas:
                    <ul>
                      <li>Google Calendar</li>
                      <li>Microsoft Outlook</li>
                      <li>Apple Calendar</li>
                      <li>Bet kurią kitą programą, palaikančią .ics failus</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Reminders -->
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    Kaip veikia priminimai?
                  </button>
                </h3>
                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>Galite nustatyti:</p>
                    <ul>
                      <li>Dienų skaičių prieš išvežimą</li>
                      <li>Priminimo laiką</li>
                      <li>Priminimai veiks visose kalendoriaus programose</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Auto-update -->
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    Ar kalendorius atsinaujina automatiškai?
                  </button>
                </h3>
                <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Taip, naudojant kalendoriaus URL prenumeratą, tvarkaraštis atsinaujins
                    automatiškai. Parsisiųstą .ics failą reikės atnaujinti rankiniu būdu.
                  </div>
                </div>
              </div>

              <!-- Default Reminders -->
              <div class="accordion-item">
                <h3 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    Kaip nustatyti numatytuosius priminimus kalendoriuje?
                  </button>
                </h3>
                <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    <p>Papildomi priminimai pagal kalendoriaus programą:</p>
                    <ul>
                      <li>
                        <strong>Google Calendar:</strong>
                        <ol>
                          <li>
                            Eikite į kalendoriaus nustatymus (3 taškai prie kalendoriaus pavadinimo)
                          </li>
                          <li>Pasirinkite "Notifications"</li>
                          <li>Nustatykite numatytuosius priminimus visiems įvykiams</li>
                        </ol>
                      </li>
                      <li>
                        <strong>Outlook:</strong>
                        <ol>
                          <li>Atidarykite kalendoriaus nustatymus</li>
                          <li>Pasirinkite "Calendar options"</li>
                          <li>Nustatykite "Default reminders"</li>
                        </ol>
                      </li>
                      <li>
                        <strong>Apple Calendar:</strong>
                        <ol>
                          <li>Eikite į Calendar nustatymus</li>
                          <li>Pasirinkite "Alerts"</li>
                          <li>Nustatykite numatytuosius priminimus</li>
                        </ol>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

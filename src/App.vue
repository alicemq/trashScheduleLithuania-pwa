<script setup>
  import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-primary py-3">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <a href="/" class="text-white text-decoration-none">
          <h1 class="h4 m-0">Atliekų Išvežimo Grafikai Lietuva</h1>
        </a>
      </div>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="bg-light py-3 mt-auto">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0">&copy; 2025 Atliekų išvežimo grafikai</p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <p class="mb-0">
            <a
              href="https://github.com/alicemq/trashScheduleLithuania"
              target="_blank"
              class="text-decoration-none me-2"
            >
              <i class="bi bi-github"/> GitHub
            </a>
            <RouterLink to="/changelog" class="text-decoration-none">Pakeitimų žurnalas</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>

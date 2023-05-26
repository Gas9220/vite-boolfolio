<script>
export default {
  name: 'AppHeader'
}
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand align-items-center d-flex fw-bold" href="#">
          <img src="../../public/logo.png" alt="logo" class="d-inline-block align-text-top me-2 logo">
          Personal portfolio
        </a>
        <ul class="list-unstyled gap-2 d-flex mb-0">
          <li>
            <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
 
<style scoped lang="scss">
nav {
  background-color: #146C94;

  a {
    color: #F6F1F1;

    &:hover {
      color: #AFD3E2;
    }
  }

  .logo {
    height: 3.125rem;
  }
}
</style>

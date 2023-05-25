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
          <img src="logo.png" alt="logo" class="d-inline-block align-text-top me-2 logo">
          Personal portfolio
        </a>
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

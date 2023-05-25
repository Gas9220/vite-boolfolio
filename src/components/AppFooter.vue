<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer class="d-flex justify-content-end p-3">
        <div class="social-links d-flex gap-2 me-3">
            <a href="#" class="social-link fs-4"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-link fs-4"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-link fs-4"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="social-link fs-4"><i class="bi bi-telegram"></i></a>
            <a href="#" class="social-link fs-4"><i class="bi bi-github"></i></a>
            <a href="#" class="social-link fs-4"><i class="bi bi-google"></i></a>
            <a href="#" class="social-link fs-4"><i class="bi bi-skype"></i></a>
        </div>
    </footer>
</template>
 
<style scoped lang="scss">
footer {
    background-color: #146C94;

    .social-links {
        .social-link {
            color: #F6F1F1;

            &:hover {
                color: #AFD3E2;
            }
        }
    }
}
</style>
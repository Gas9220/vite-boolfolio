<script>

export default {
    name: 'TypesPage',

}
</script>

<template>
    <main>
        <h1 class="text-center pt-2">Contact me</h1>
        <div class="container-fluid justify-content-center d-flex">
            <form class="w-50 pb-3 pt-3">
                <div class="mb-3">
                    <label for="user" class="form-label">Your name</label>
                    <input type="text" class="form-control" id="user" aria-describedby="user" name="user">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="email" name="email">
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="message"
                        style="height: 150px" name="message"></textarea>
                    <label for="message">Your message...</label>
                </div>
                <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    </main>
</template>
 
<style scoped lang="scss"></style>
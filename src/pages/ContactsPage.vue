<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'ContactsPage',
    data() {
        return {
            store,
            messageData: {
                user: '',
                message: '',
                email: ''
            },
            resultMessage: ''
        }
    },
    methods: {
        sendMessage() {

            const data = {
                user: this.messageData.user,
                message: this.messageData.message,
                email: this.messageData.email
            };

            axios.post(this.store.messagesUrl, data)
                .then((response) => {
                    console.log(response)

                    if (response.status === 201) {
                        this.resultMessage = 'I received your message'
                        this.clearFields()
                    }

                })
                .catch((error) => {
                    console.log(error)
                    this.resultMessage = 'Failed to send message'
                });

        },
        clearFields() {
            this.messageData.user = ''
            this.messageData.message = ''
            this.messageData.email = ''
        }
    }
}
</script>

<template>
    <main>
        <h1 class="text-center pt-2">Contact me</h1>
        <h3 class="text-center text-success" :class="{'d-none': resultMessage === ''}">{{ resultMessage }}</h3>
        <div class="container-fluid justify-content-center d-flex">
            <form @submit.prevent="sendMessage" class="w-50 pb-3 pt-3">
                <div class="mb-3">
                    <label for="user" class="form-label">Your name</label>
                    <input type="text" class="form-control" id="user" aria-describedby="user" name="user"
                        v-model="messageData.user" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="email" name="email"
                        v-model="messageData.email" required>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="message" style="height: 150px"
                        name="message" v-model="messageData.message" required></textarea>
                    <label for="message">Your message...</label>
                </div>
                <button type="submit" class="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    </main>
</template>
 
<style scoped lang="scss"></style>
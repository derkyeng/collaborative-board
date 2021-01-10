<template>
    <div class="backdrop">
        <div class="popup">
            <form>
                <label>Title: </label>
                <input type="text" required v-model="title">

                <label>Desciption:</label>
                <input type="text" required v-model="description">

                <button type="button" @click="sendPost(); closePopup()">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            description: ''
        }
    },
    methods: {
        closePopup() {
            this.$emit("close")
            console.log('close')
        },
        sendPost() {
            this.$emit("post", { title: this.title, description: this.description })
        }
    }
}
</script>

<style>
    .popup {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
        text-align: left;
    }
    .backdrop {
        left: 0;
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        height: 100%;
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: .6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    .popup button {
        display: block;
        margin: 0 auto;
        margin-top: 20px;
    }
</style>
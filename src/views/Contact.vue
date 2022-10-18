<template>
    <center>
<div class="row pt-4 gx-4 gy-4">
                <div class="col">
                    <a href="https://www.instagram.com/abdiisurya_/" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/900px-Instagram-Icon.png?20190314235631"
                    width="100"
                    height="90">
                </a>
                <p>Instagram</p>
                </div>
                <div class="col">
                    <a href="https://wa.me/082285413093" target="_blank">
                    <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-BDC0A8063B-seeklogo.com.png"
                    width="100"
                    height="90">
                </a>
                <p>Whatsapp</p>
                </div>
                <div class="col">
                    <a href="mailto:abdisury4@gmail.com" target="_blank">
                    <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png"
                    width="100"
                    height="90">
                </a>
                <p>Gmail</p>
                </div>
                <div class="col">
                    <a href="https://github.com/abdisuryaperdana" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" 
                    width="100"
                    height="90">
                    </a>
                    <p>GitHub</p>
                </div>
</div>
<div class="contact">
    <form @submit.prevent="submit">
        <BaseInput v-model="input.name" name="name" label="name" type="text" /><br>
        <BaseInput v-model="input.email" name="email" label="Email" type="email" /><br>
        <BaseInput v-model="input.phone" name="phone" label="phone" type="number" /><br>
        <BaseInput v-model="input.chat" name="chat" label="chat" type="text" />
        <br>
        <br>
        <button type="submit" class="btn btn-primary">Kirim</button>
        <!-- <button type="submit">Submit</button> -->
    </form>
    
</div>
</center>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';

export default{
    name:'ContactView',
    components:{
        BaseInput,
    },
    data:()=>({
        title:'contact',
        input:{
            name:'',
            email:'',
            class:'',
            phone:'',
            chat:'',
        },
        
    }),

    methods:{
        submit(){
            console.log(this.input);
        }
    },
};
</script>


<style>
@media(min-width:1024px) {
    .contact{
        min-height: 1vh;
    }
}
</style>
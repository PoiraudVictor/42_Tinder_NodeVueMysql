<template>
<div v-if="!confirm" class="columns is-centered">
  <div class="is-half">
    <form class="box" @submit.prevent="Signup">
        <b-field label="Full Name" :type="Errors.fullname.err" :message="Errors.fullname.msg">
            <b-input v-model="fullname" maxlength="30"></b-input>
        </b-field>
        <b-field :type="Errors.date.err" :message="Errors.date.msg" label="Birthdate">
            <b-datepicker v-model="date" placeholder="Click to select...">
            </b-datepicker>
        </b-field>
        <b-field label="Username" :type="Errors.username.err" :message="Errors.username.msg">
            <b-input v-model="username" maxlength="30" autocomplete="new-username"></b-input>
        </b-field>
        <b-field label="Email" :type="Errors.email.err" :message="Errors.email.msg">
            <b-input type="email" v-model="email" maxlength="50" autocomplete="new-mail"></b-input>
        </b-field>
        <b-field label="Password" :type="Errors.password.err" :message="Errors.password.msg" >
            <b-input type="password" v-model="password" maxlength="30" autocomplete="new-password" password-reveal></b-input>
        </b-field>
        <b-message v-if="err" type="is-danger">YOU HAVE AN ERROR PLEASE TRY AGAIN!<br>OR RELOAD PAGE!</b-message>
        <div class="level-right">
            <button type="submit" class="button is-success"> Submit </button>
        </div>
    </form>
  </div>
</div>
<div class="columns is-centered" v-else>
    <div class="box has-text-success has-text-centered">
        <p class="has-text-weight-bold is-size-4">Please Click link on your email, to confirm your account!</p>
    </div>
</div>
</template>

<script>
import moment from 'moment'

export default {
    name: "Signup",
    data(){
        return{
            fullname: '',
            username: '',
            email: '',
            password: '',
            date: new Date(),
            err: false,
            confirm: false,
            Errors: {
                fullname: {
                    err: null,
                    msg: null
                },
                username: {
                    err: null,
                    msg: null
                },
                email: {
                    err: null,
                    msg: null
                },
                password: {
                    err: null,
                    msg: null
                },
                date: {
                    err: null,
                    msg: null
                },
            }
        };
    },
    mounted(){
        if (localStorage.token)
            this.$router.push({ path: '/dashboard'});
    },
    methods:{
        Signup() {
            let old = new Date(this.date).toLocaleDateString();
            let gooddate = moment(old, "DD/MM/YYYY").format("YYYY-MM-DD");
            if (this.validate()){
            this.$http.post('Signup', {
                user_name: this.username.toLowerCase(),
                user_fullname: this.fullname,
                user_birthdate: gooddate,
                user_password: this.password,
                user_mail: this.email
                })
                 .then( res =>{
                     //console.log(res);
                    if (!res.data.success){
                        if(res.data.error)
                        {
                            if(res.data.error === "username exist")
                                {this.Errors.username.err = "is-danger";
                                this.Errors.username.msg = "this username already exists";}
                            else if(res.data.error === "mail exist")
                                {this.Errors.email.err = "is-danger";
                                this.Errors.email.msg = "this email already exists";}
                       }else
                        this.err = true;

                    }else{
                        this.confirm = true;
                    }
                 })
                 .catch(err => console.log(err));
            }
        },
        validate(){
        let old = new Date(this.date).toLocaleDateString();
        let gooddate = moment(old, "DD/MM/YYYY").format("YYYY-MM-DD");
        let age = moment().diff(gooddate, 'years');
        if (age < 18) {
            this.Errors.date.err = "is-danger";
            this.Errors.date.msg = "you have to be more than 18";
            return false;
        } else {
            this.Errors.date.err = "is-success";
            this.Errors.date.msg = "";
        }

        if (!String(this.fullname).match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g) || this.fullname.length > 30 || this.fullname.length < 5){ // a-z A-Z  ' , . space -
            this.Errors.fullname.err = "is-danger";
            this.Errors.fullname.msg = "please Entre your real name";
            return false;
        }else{
            this.Errors.fullname.err = "is-success";
            this.Errors.fullname.msg = "";
        }

        if (!String(this.username).match(/^[a-zA-Z]+([_-]?[a-zA-Z0-9])*$/g) || this.username.length > 30 || this.username.length < 3){ //a-z 0-9 _ 2~30
            this.Errors.username.err = "is-danger";
            this.Errors.username.msg = "this username is unvalide";
            return false;
        }else{
            this.Errors.username.err = "is-success";
            this.Errors.username.msg = "";
        }

        if (!String(this.email).match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/ig)){
            this.Errors.email.err = "is-danger";
            this.Errors.email.msg = "please Entre a valide Email";
            return false;
        }else{
            this.Errors.email.err = "is-success";
            this.Errors.email.msg = "";
        }

        if (!String(this.password).match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,30}$/g)){
            this.Errors.password.err = "is-danger";
            this.Errors.password.msg = "your password is not strong";
            return false;
        }else{
            this.Errors.password.err = "is-success";
            this.Errors.password.msg = "";
        }
        return true;
        }
    }
}
</script>

<style>

</style>

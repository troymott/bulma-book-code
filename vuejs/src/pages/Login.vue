<template>
  <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form class="box">
                <div class="field has-text-centered">
                  <img src="../assets/logo.png">
                </div>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left">
                    <input class="input" type="email" placeholder="e.g. alexjohnson@gmail.com" required
                          :class="{'is-danger': error.email}" v-model="form.email">
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                  <p class="help is-danger" v-if="error.email">Oops! Can't find user.</p>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left">
                    <input class="input" type="password" placeholder="********" required
                          :class="{'is-danger': error.password}" v-model="form.password">
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <p class="help is-danger" v-if="error.password">Password doesn't match our records.</p>
                </div>
                <div class="field">
                  <label class="checkbox">
                    <input type="checkbox">
                    Remember me
                  </label>
                </div>
                <div class="field">
                  <button class="button is-success" @click.prevent="tryLogin">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: {
        email: false,
        password: false
      }
    }
  },
  methods: {
    tryLogin(){
      this.resetErrors();

      if(this.form.email !== 'user@bulma.com'){ return this.error.email = true;}
      if(this.form.password !== 'password'){ return this.error.password = true;}

      this.resetErrors();

      this.$router.push('dashboard');
    },
    resetErrors(){
      this.error.email = false;
      this.error.password = false;
    }
  }
}
</script>

<style>

</style>

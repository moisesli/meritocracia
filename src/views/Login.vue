<template>
  <div>
    <div class="col-8">
      <!-- Card Login -->
      <div class="card">
        <div class="card-header">
          Contacta con Personas extraordinarias
        </div>
        <div class="card-body">

          <!-- Email -->
          <div class="d-inline-flex pt-3" style="width: 100%">
            <div style="width: 30%" class="text-sm-right pt-2">
              Email
            </div>
            <div style="width: 50%; box-sizing: content-box;">
              <div class="pl-2">
                <input type="email" class="form-control" placeholder="correo@gmail.com">
              </div>
            </div>
          </div>

          <!-- Password -->
          <div class="d-inline-flex pt-3" style="width: 100%">
            <div style="width: 30%" class="text-sm-right pt-2">
              Password
            </div>
            <div style="width: 50%; box-sizing: content-box;">
              <div class="pl-2">
                <input type="password" class="form-control">
              </div>
            </div>
          </div>

          <!-- Ingresar Unirme -->
          <div class="d-inline-flex pt-2" style="width: 100%">
            <div style="width: 30%" class="text-sm-right"></div>
            <div style="width: 25%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-secondary btn-block">Ingresar</button>
              </div>
            </div>
            <div style="width: 25%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-primary btn-block">Unirme</button>
              </div>
            </div>
          </div>

          <!-- Abrir Con Redes Sociales -->
          <div class="d-inline-flex pt-2" style="width: 100%">
            <div style="width: 30%" class="text-sm-right"></div>
            <div style="width: 15%; box-sizing: content-box;">
              <div class="pl-2 pt-1">
                Login con
              </div>
            </div>
            <div style="width: 10%; box-sizing: content-box;">
              <button class="btn btn-outline-warning btn-block">Face</button>
            </div>
            <div style="width: 10%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-warning btn-block">Link</button>
              </div>
            </div>
            <div style="width: 15%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-warning btn-block">Google</button>
              </div>
            </div>

          </div>


          <!-- Ingresar Anonimamente -->
          <div class="d-inline-flex pt-1" style="width: 100%">
            <div style="width: 30%" class="text-sm-right"></div>
            <div style="width: 50%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-danger btn-block">Ingresar Anonimamente</button>
              </div>
            </div>
          </div>

          <!-- Ingresar Ambassador -->
          <div class="d-inline-flex pt-1" style="width: 100%">
            <div style="width: 30%" class="text-sm-right"></div>
            <div style="width: 50%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-success btn-block">Ingresar Ambassador</button>
              </div>
            </div>
          </div>

        </div><!-- end card-body -->
      </div><!-- end card -->
    </div><!-- end col-10 -->
  </div>
</template>

<script>
  const axios = require('axios');
  export default {
    data(){
      return{

      }
    },
    methods: {
      Login: function () {
        axios.post('http://localhost:8082/Auth.php?f=login').then(res => {
          console.log(res.data)
        });
      }
    },
    mounted() {
      this.Login();
    }
  }

</script>

<template>
  <div>
    <div class="col-8">


      <!-- Card Login -->
      <div class="card" style="margin-top: 50px;">
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
                <input type="email"
                       class="form-control"
                       v-model="login.email"
                       placeholder="correo@gmail.com">
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
                <input type="password"
                       v-model="login.password"
                       class="form-control">
              </div>
            </div>
          </div>

          <!-- Ingresar Unirme -->
          <div class="d-inline-flex pt-2" style="width: 100%">
            <div style="width: 30%" class="text-sm-right"></div>
            <div style="width: 25%; box-sizing: content-box;">
              <div class="pl-2">
                <button
                    @click="Login"
                    class="btn btn-outline-secondary btn-block">
                  <i class="fa fa-user-alt" v-if="logged_in=='no'"></i>
                  <i class="fa fa-spinner fa-spin" v-if="logged_in=='cargando'"></i>
                  Ingresar
                </button>
              </div>
            </div>
            <div style="width: 25%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-primary btn-block"
                        data-toggle="modal" data-target="#exampleModal">Unirme</button>
              </div>
            </div>
          </div>

          <!-- Abrir Con Redes Sociales -->
          <div class="d-inline-flex pt-2" style="width: 100%">
            <div style="width: 30%" class="text-sm-right"></div>
            <div style="width: 14%; box-sizing: content-box;">
              <div class="pl-2 pt-1">
                Login con
              </div>
            </div>
            <div style="width: 9%; box-sizing: content-box;">
              <div class="pr-2">
                <button class="btn btn-outline-primary btn-block">
                  <i class="fab fa-facebook-f"></i>
                </button>
              </div>
            </div>
            <div style="width: 8%; box-sizing: content-box;">
              <button class="btn btn-outline-success btn-block">
                <i class="fab fa-twitter"></i>
              </button>
            </div>
            <div style="width: 10%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-info btn-block">
                  <i class="fab fa-linkedin-in"></i>
                </button>
              </div>
            </div>
            <div style="width: 9%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-warning btn-block">
                  <i class="fab fa-google"></i>
                </button>
              </div>
            </div>
          </div>


          <!-- Ingresar Anonimamente -->
          <div class="d-inline-flex pt-1" style="width: 100%">
            <div style="width: 30%" class="text-sm-right"></div>
            <div style="width: 50%; box-sizing: content-box;">
              <div class="pl-2">
                <button class="btn btn-outline-danger btn-block" @click="GoToPage('anonymous')">Ingresar Anonimamente</button>
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


      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Como quieres unirte?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="d-inline-flex pt-1" style="width: 100%">
                <!-- Button Trueque -->
                <div style="width: 50%; box-sizing: content-box;">
                  <div class="pr-1">
                    <button class="btn btn-primary btn-block btn-lg" @click="UnirteOpction('trueque')">
                      <i class="fa fa-user"></i> Trueque
                    </button>
                  </div>
                </div>
                <!-- Button Ambassador-->
                <div style="width: 50%; box-sizing: content-box;">
                  <div class="pl-1">
                    <button class="btn btn-warning btn-block btn-lg" @click="UnirteOpction('ambassador')">
                      <i class="fa fa-users"></i> Ambassador
                    </button>
                  </div>
                </div>
              </div>
            </div><!-- End ModalBody -->
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div><!-- End Modal -->

    </div><!-- end col-10 -->
  </div>
</template>

<script>
  const axios = require('axios');
  import $ from 'jquery'
  export default {
    data() {
      return {
        logged_in: 'no',
        login: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      Login: function () {
        this.logged_in = 'cargando';
        axios.post('http://localhost:8082/src/Auth.php?f=login', {login: this.login})
          .then(res => {
            if (res.data.logged_in == 'si') {
              this.logged_in = 'yes';
              this.$router.push('Dashboard');
            }
            console.log(res.data.logged_in)
          });
      },
      UnirteOpction: function (option) {
        if (option == 'trueque'){
          /* Cierra el Modal Unirte */
          $('#exampleModal').modal('hide');
          this.$router.push('trueque_new');
        }else if (option == 'ambassador'){
          this.$router.push('');
        }
      },
      GoToPage(option) {
        switch (option) {
          case "anonymous":
            this.$router.push('anonymous_register');
            break;
        
          default:
            break;
        }
      }
    },
    mounted() {
      // this.Login();
    }
  }

</script>

<template>
  <div>

    <!-- Titulo Registro Usuario Normal -->
    <h1 class="display-4 pt-4"><i class="fa fa-user-plus"></i> Pasos Para Registrarte Trueque</h1>

    <!-- Wizard Form-->
    <div class="list-group list-group-horizontal-lg pt-4">

      <div class="list-group-item list-group-item-action list-group-item-primary">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">1. <i class="fa fa-share-alt"></i> Recomienda Alguien</h5>
          <small>Siguiente <i class="fa fa-arrow-alt-circle-right"></i></small>
        </div>
        <p class="mb-1">Recomienda a alguien o a ti mismo para poder Continuar con el siguinte.</p>
        <small>Paso 1</small>
      </div>

      <div class="list-group-item list-group-item-action list-group-item-light">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">2. <i class="fa fa-user-cog"></i> Registro de usuario.</h5>
          <small>Siguiente <i class="fa fa-arrow-alt-circle-right"></i></small>
        </div>
        <p class="mb-1">Completa Tus datos, nombre , apellido, contrasenia y asegurate que sean correctos.</p>
        <small>Paso 2</small>
      </div>

      <div class="list-group-item list-group-item-action list-group-item-light">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">3. Completado.</h5>
          <small class="text-muted">Completado <i class="fa fa-arrow-alt-circle-down"></i></small>
        </div>
        <p class="mb-1">Has completado todo el registro de Usuario Regular exitosamente. Bievenido .!!</p>
        <small class="text-muted">Paso 3</small>
      </div>

    </div><!-- End Wizard Form-->

    <!-- Formulario Recomienda -->
    <div class="row pt-4 d-flex justify-content-center">
      <div class="col-9">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">1. Recomienda </h2>
            <p class="card-text">
              Para poder ingresar a nuestra red de contactos necesitamos que nos refieras a por lo menos
              1 persona extraordinaria que conoces, Si tu crees que reunes las condiciones podras
              referirte a ti mismo.
            </p>

            <!-- Formulario-->
            <div class="form-row pt-3">
              <div class="col">
                <label>Nombres</label>
                <input type="text" class="form-control form-control-lg" placeholder="Abraham Moises">
              </div>
              <div class="col">
                <label>Apellidos</label>
                <input type="text" class="form-control form-control-lg" placeholder="Linares Oscco">
              </div>
            </div>

            <div class="form-row pt-3">
              <div class="col">
                <label>Email</label>
                <input type="text" class="form-control form-control-lg" placeholder="elnaufrago2009@gmail.com">
              </div>
              <div class="col">
                <label>Telefono</label>
                <input type="text" class="form-control form-control-lg" placeholder="952631806">
              </div>
            </div>

            <div class="form-row pt-4">
              <div class="col-8">
                <label>Link de Red Social del Referido:</label>
                <input type="text" class="form-control form-control-lg" placeholder="https://www.facebook.com/AbrahamMoisesLinares">
              </div>
            </div>

            <a href="#" class="btn btn-primary mt-4">Enviar</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

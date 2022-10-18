<template>
  
  <div class="project">
    <br>
    <center>
    <div class="card" style="width: 35rem;">
      <h3>Project 1</h3>
      <!-- <img src="src\assets\prokon.png" class="card-img-top"> -->
      <div class="card-body">
        <h5 class="card-title">Filter Air Otomatis Berbasis Arduino</h5>
        <p class="card-text">Pembuatan alat penyaring air otomatis berbasis teknologi Arduino</p>
        <RouterLink :to="{path:'project1'}" class="btn btn-primary">detail project</RouterLink>
      </div>
    </div>
    <br>
    <div class="card" style="width: 35rem;">
      <h3>Project 2</h3>
      <!-- <img src="src\assets\meka(3).png" class="card-img-top"> -->
      <div class="card-body">
        <h5 class="card-title">Selenoid Door Lock with fingerprint and RFID</h5>
        <p class="card-text">Alat Pembuka pintu otomatis dengan memanfaatkan teknologi sidik jari</p>
        <RouterLink :to="{path:'project2'}" class="btn btn-primary">detail project</RouterLink>
      </div>
    </div>
    <br>
    <div class="card" style="width: 35rem;">
      <h3>Project 3</h3>
      <!-- <img src="src\assets\logo.jpg" class="card-img-top"> -->
      <div class="card-body">
        <h5 class="card-title">Design Logo</h5>
        <p class="card-text">Pembuatan logo untuk Universitas Mahmud Yunus Batusangkar</p>
        <RouterLink :to="{path:'project3'}" class="btn btn-primary">detail project</RouterLink>
      </div>
    </div>
    </center>
    </div>
  <RouterView />

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

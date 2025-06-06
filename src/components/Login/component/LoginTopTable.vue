<script setup>

</script>

<template>
<div class="Blog-Login-component-LoginTopTable-class">
  <div class="Login-top-table-box">
    <router-link v-slot="{ navigate , isActive }" to="/" class="link-style">
      <div @click="navigate"
           :class="{'custom-action' : isActive}"
           class="custom-link">
        <img class="Login-top-table-box-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIklEQVR4nO2aW0tcVxhAz0v6H2o0RaMz6pSGXgi90BBSGppG6YWGkhJ6I53GaEygUpW2hJpgi0msNlhqIIW2lNI66ngbzYzO8TKj0kogjQmkDxVqyHs1L0FhlS8lL+bYvUf3mc4pZ8F6OX57z9rbAS+MZfn4+Pj4+Pj4+KjJO0Zlfg12fjW382sgp5SmapJ51VRYbrDtKM0PVYMX3HaU00YPX1xF5fYqKKriTlEVHwarybNyDGkqqqJeGqW18IjBd0IgjB18HwJh6q0cJxCmQVqDYcaMbRp6j+VQGErDPGjlONIoraEwS8Y23XEYRMsjGO997F0QLY9gvHfnOyBaHsF479NvgWh5BOO9u94E0fIIxnv3HAIx03UnpgjVpvmidpr52jS3j0/DWuW5fP14mtZjs5T/l73rsvcNEC1NTs7zQF2a83VpVuvSkIGrdSnaw3NsyWavkn0HQdQ9fGOKRGMKNmpDivhmLiGTXi0qXwdRZ/bjSc5/MgWbdpK2bPRq8coBEFVzTVOEPp1ktWkSDLjSNE6Zm73aHHgNRNVc8wRtn02AQc+52avNwVdBVM212Fw7Mw73aTP0uU2+0xp53mITc1rXMs5VN3u1OfQyiKq5tiRLbTastX2dw9/j7AQFTutkPzd7tXn7JRBVcx1JcFJ1AR0TFGx07WZ6tTlcCaJqrnMMnPx6jFjHCAVOa+R55xjD/7b2QoaXoNurzZH9IKrmvhkFV02weHGUfaZ6tal5EUTV3PcJcNvvEvxpqlebEy+AqJr7MQ7Z0FSvNh/sBVE1FxmBbGiqV5v650FUzUWHIRua6tXmo+dAVM0NxSAbmurV5uQeEFVz8SFw8tIgQ7GY/o8ymY0PEltvP1O92pzaDaJqLjkITtoZHP4eE70UrLefqV5tmneBqJqbHGBpagDWutELcNpLXsNUrzYtz4KompvpZ362H+6zj9gvvc6/CTohs7P9DDvtNdOn/gNJt1eb1mdAVM3N9dE61wdu+muUM6Z6tfnyKRBVc5ejlF+JsnolCq7Yy8pv/ZSa6tXmqydB1Jm93kv79V5ww2s9tJru1eLCThB1Zuc62XKjh/jvPWDSG91ckr1N92px8QkQ9ab/uYSFbtoWIqwsdMOmjLDyR4RW3cNvpFfJt4+DaGXIrZ8pX+zi3M0uri5GWL4ZAR3vzsqaLs7e6sn8H6Mb7V2XHx4F0fIIxnt/2gGi5RGM93Y/AqLlEYz3Rh8G0fIIxnsHQyBaHsF473ApyyNlEA/m3sfj1jJQwlZpHSnjL2ObJgIkR4OQCNBg5TiJUhrvtgYNfkzOLqZiPAB2CXfsAA2pHHwnjJaw1S6hURqlNVnCfqMvMFXM6VQxeMLtnLLcIF1IxXQhYzOFLM8UQU5ZyLK0zRYZ/s77+Pj4+Pj4+Fj/U/4GNo+NxmWzqa4AAAAASUVORK5CYII=" alt="blogger">
        <p class="Login-top-table-box-title">BOLG</p>
      </div>
    </router-link>
  </div>
</div>
</template>

<style scoped>
.link-style{
  text-decoration: none;
}
.custom-link{
  display: flex;
  color: #00adb5;
  border: 0;
  outline: none;
}
.custom-link:active{
  color: #00adb5;
}
.Blog-Login-component-LoginTopTable-class{
  --Blog-Login-component-LoginTopTable-var-width: 100vw;
  --Blog-Login-component-LoginTopTable-var-height: 8vh;
  --Blog-Login-component-LoginTopTable-var-font-size: 30px;
  --Blog-Login-component-LoginTopTable-var-color: #00adb5;
  --Blog-Login-component-LoginTopTable-var-background-color: #303841;
}
.Login-top-table-box{
  width: var(--Blog-Login-component-LoginTopTable-var-width);
  height: var(--Blog-Login-component-LoginTopTable-var-height);
  background-color: var(--Blog-Login-component-LoginTopTable-var-background-color);
  color: var(--Blog-Login-component-LoginTopTable-var-color);
  font-size: var(--Blog-Login-component-LoginTopTable-var-font-size);
  display:flex;
}
.Login-top-table-box-img{
  margin: 0.5em 0.1em 0 7em;
  width: 2em;
  height: 2em;
}
.Login-top-table-box-title{
  text-decoration: none;
  text-align: left;
  margin: 0.8em 0 0 0;
  text-shadow: 0 0 15px #00adb5;
}
</style>
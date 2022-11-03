<template>
    <main class="bg">
      <StaffMembers />
    </main>
</template>
  
  <script>
import StaffMembers from '@/components/StaffMembers'

  export default {
    name: 'StaffView',
    components: {
      StaffMembers
    }
    
  
  }
  </script>
  
  <style lang="scss" scoped>

.bg{
  background-image: url('https://res.cloudinary.com/codingsquirrel/image/upload/v1477927345/Blue-polygonal-backgrounds_ijtuux.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center; 
  min-height: 100vh;
  min-width: 80%;
  // background-image: url('https://res.cloudinary.com/codingsquirrel/image/upload/v1477942751/%D0%91%D0%B5%D0%B7_%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8_yumofp.jpg');
}
  </style>
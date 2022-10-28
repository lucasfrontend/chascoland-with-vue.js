<template>
    <main class="about">
      <div class="container">
        <StaffMembers />
      </div>
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
  
  <style lang="scss" src="../scss/main.scss">
  
  </style>
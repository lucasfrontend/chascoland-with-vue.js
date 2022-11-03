<template>
  <div class="container">
    <div class="row">
      <h3>Staff</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam fugit eveniet, ullam quae rerum iusto dolores alias sequi magni quasi quaerat nemo. Architecto, quo illo id reiciendis aperiam voluptatem veniam.</p>
      <div class="col"
              v-for="member in members"
              :key="member.id">            
              <v-card-member class="row"
                  :name="member.name"
                  :position="member.position"
                  :img="member.img"
                  :alt ="member.name"
              />
          </div>
    </div> 

  </div>
</template>

<script>
import VCardMember from '@/components/items/VCardMember'
import dataLocal from '@/assets/dataLocal.json'
console.log(dataLocal)

export default {
    name: 'StaffMembers',
    components: {
        VCardMember
    },
    data(){
      return {
        members: dataLocal
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="container">
        <div class="row">
            <div class="col"
                v-for="member in members"
                :key="member.id">            
                <v-card-member 
                    :name="member.name"
                    :position="member.position"
                    :img="member.img"
                    :phone="member.phone"
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

<style lang="scss" scoped></style>
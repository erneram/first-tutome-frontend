<template>
     <forAllPanel>
          <div class="flex flex-col items-center justify-center">
               <tutorTierList />
               <tutorTable />
          </div>
     </forAllPanel>
</template>
<script setup>
import tutorTierList from './TutorsTierList.vue'
import tutorTable from './TutorsTable.vue'
import forAllPanel from '../forms/forAllPanel.vue';
</script>
<template>
     <forAllPanel>
          <TemporalUserProfile :isTutor="tutor" />
     </forAllPanel>
</template>
<script setup>
import TemporalUserProfile from '@/components/userComponents/temporalUserProfile.vue'
import forAllPanel from '@/components/forms/forAllPanel.vue';
const tutor = false
</script>
<template>
     <forAllPanel>
          <TemporalUserProfile :isTutor="tutor" :visitorView="visitorView" />
     </forAllPanel>
</template>
<script setup>
import TemporalUserProfile from '@/components/userComponents/temporalUserProfile.vue'
import forAllPanel from '@/components/forms/forAllPanel.vue';
const tutor = false
const visitorView = true
</script>
<template>

     <div class="flex flex-col lg:flex-row justify-between lg:space-x-4 space-y-4 lg:space-y-0">
          <div class="flex-1 space-y-4">
               <MyCourses />
               <MyTutors />
          </div>
          <div class="lg:flex-2 w-full lg:w-2/3">
               <forAllPanel>
                    <div class="max-h-64 md:max-h-96 lg:max-h-[calc(100vh-200px)] overflow-y-auto">
                         <MySchedule />
                    </div>
               </forAllPanel>
          </div>
     </div>
</template>

<script setup>
import MyCourses from './MyCourses.vue';
import MySchedule from './MySchedule.vue';
import MyTutors from './MyTutors.vue';
import forAllPanel from '../forms/forAllPanel.vue';

</script>
<template>
    <div class="bg-[#F0F2F5]">
        <router-view></router-view>
    </div>
</template>

<script>
import { ref, watch , onMounted } from 'vue';
import router from '@/router/router';

import useDoctor from "@/services/apiListDoctor"

export default {
    setup() {
      onMounted(() => {
            // Navigate to "/system/dashboard" when the component is mounted
            router.push('/system/dashboard');
        });

      return {
  
      }
    },
    components: {
        

    },
};
</script>

<style>
</style>

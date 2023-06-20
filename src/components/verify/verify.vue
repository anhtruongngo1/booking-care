<template>
    <div
        class="w-[100vw] h-[100vh] bg-center bg-[url(https://res.cloudinary.com/dl0wt2mgx/image/upload/v1687162269/project_booking/bao-ve-moi-tr%C6%B0%C6%A1ng_rjoath.jpg)]"
    >
        <div v-if="isPageReload" class="pt-28">
            <h1   class="text-center font-bold text-black text-3xl">{{ isPageReload }}</h1>
        </div>
        <div v-else class="pt-28">
              <h1  class="text-center font-bold text-red-500 text-xl ">ĐƯỜNG DẪN QUÁ HẠN HOẶC KHÔNG CÓ VUI LÒNG KIỂM TRA LẠI</h1>
             </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import {onMounted , ref} from "vue"
import useVerify from "@/services/apiVerify"
export default {
    setup() {
        const route = useRoute();
        const isError = ref(false);
        const isPageReload = ref("")
        const token = route.query.token;
        const {handleVerify , messege} = useVerify()
        onMounted(() => {
            handleConfirmToken()
        });
        const handleConfirmToken = async()  =>{
            const res = await handleVerify({ token: token })
            if (res && res.infor.errCode === 0) {
                isPageReload.value = "XÁC NHẬN ĐẶT LỊCH THÀNH CÔNG"
            } else {
           }
        }
        
        return {
            isPageReload
        };
    },
};
</script>

<style></style>

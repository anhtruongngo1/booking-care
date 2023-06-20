<template>
    <div v-if="dataDetail">

        <div :key="routeName" class="bg-[#F6F6F6] px-[10%] flex items-center cursor-pointer">
            <font-awesome-icon :icon="['fas', 'house']" @click="handleHome" />
            <p v-if="dataDetail" class="text-[#45C3D5]">/ Cẩm nang / {{ dataDetail.topic }}</p>
        </div>
        <div class="px-[10%]">
            <h1  class="text-3xl font-bold my-4 text-[#333]">{{ dataDetail.title }}</h1>
            <div>Sản phẩm của <span class="text-[#45C3D5]">BookingCare</span></div>
            <div>
                Tác giả <span class="text-[#45C3D5]">{{ dataDetail.User.firstName }} {{ dataDetail.User.lastName }}</span>
            </div>
            <div>
                Xuất bản : <span class="">{{ formatDate(dataDetail.createdAt) }}</span> , Cập nhật lần cuối :
                {{ formatDate(dataDetail.updatedAt) }}
            </div>
        </div>
        <div v-html="convertedMarkdown" class="bg-[#FCFAF6] px-[10%] mx-[10%] mt-20 comment-doctor list-disc pt-8">
       
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { format } from 'date-fns';
import {watch , watchEffect , ref} from "vue"
import MarkdownIt from 'markdown-it';

import useBlog from '@/services/apiDetailBlog';



export default {
    setup() {
        const { fetchDetailBlog } = useBlog();
        const route = useRoute();
        const routeName = route.name;
        const dataDetail = ref({
            content: '',
            User: {
                firstName: '',
                lastName : ''
            }
        })
        
        const handleData = async () => {
            const res = await fetchDetailBlog(route.params.id);;
            if (res && res.errCode === 0) {
                dataDetail.value = res.blog;
            }
        };
        handleData();
        const formatDate = (date) => {
            return format(new Date(date), 'dd/MM/yyyy HH:mm:ss');
        };
        const handleHome = () => {
            window.history.back();
        };
        watch(
            () => route,
            (to, from) => {
            },
        );
        const md = new MarkdownIt();
        const convertedMarkdown = ref(md.render(''));
        watchEffect(() => {
            if (dataDetail.value) {
                convertedMarkdown.value = md.render(dataDetail.value.content);
            }
        });
        return {
            dataDetail,
            convertedMarkdown ,
            formatDate,
            handleHome,
            routeName,
        };
    },
};
</script>

<style>
li {
  list-style-type: disc;
}</style>

<template>
    <div class="h-[50px] bg-[#45C3D2] text-white">
        <div class="flex items-center shadow-lg h-full gap-x-2 px-[5%]">
            <font-awesome-icon @click="handleHome" :icon="['fass', 'arrow-left']" class="text-xl cursor-pointer" />
            <p class="text-2xl">Bác sĩ</p>
        </div>
    </div>
    <div className="h-[500px] pb-[100px] mx-[15%]">
        <div className="mx-[10%] flex pt-[50px]">
            <div className="">
                <img className="w-[120px] h-[120px] rounded-[50%] object-cover object-center" :src="listData.image" />
            </div>
            <div className="w-[90%] flex flex-col pl-[45px] pt-[15px]">
                <div className="text-xl font-semibold ">{{ listData.firstName }} {{ listData.lastName }}</div>
                <div className="pt-2">
                    <span>
                        {{ listData.Markdown.description }}
                    </span>
                </div>
            </div>
        </div>
        <div className=" flex  justify-center min-h-[200px] mx-[10%] mt-[100px]">
            <div className="w-[50%]">
                <DoctorSchedule v-bind:idDoctor="listData.id" />
            </div>
            <div className="w-[50%]">
                <DoctorExtraInfor v-bind:idDoctor="listData.id" />
            </div>
        </div>
    </div>
    <div className="bg-[#F9F9F9] pt-[50px] px-[22%] mt-[50px] ">
        <div v-html="convertedMarkdown" className="comment-doctor list-disc"></div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import { ref, watchEffect } from 'vue';

import DoctorSchedule from './DoctorSchedule.vue';
import DoctorExtraInfor from './DoctorExtraInfor.vue';
import useDoctor from '@/services/apiDetailDoctor';
import profileDoctor from './profileDoctor.vue';
export default {
    setup() {
        const route = useRoute();
        const { getDetailsDoctor } = useDoctor();
        const listData = ref({
            Markdown: {
                description: '',
                contentHTML: '',
            },
        });
        const handleHome = () => {
            window.history.back();
        };

        const handleData = async () => {
            const res = await getDetailsDoctor(route.params.id);
            if (res && res.errCode === 0) {
                listData.value = res.data;
            }
        };
        handleData();

        const md = new MarkdownIt();
        const convertedMarkdown = ref(md.render(''));

        watchEffect(() => {
            if (listData.value.Markdown) {
                convertedMarkdown.value = md.render(listData.value.Markdown.contentHTML);
            }
        });

        return {
            listData,
            convertedMarkdown,
            handleHome,
        };
    },
    components: {
        DoctorSchedule,
        DoctorExtraInfor,
        profileDoctor,
    },
};
</script>

<style>
li {
    list-style-type: disc;
}
</style>

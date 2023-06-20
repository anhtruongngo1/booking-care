<template>
    <div className="">
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
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import { ref, watchEffect, watch } from 'vue';
import useDoctor from '@/services/apiDetailDoctor';
export default {
    props: {
        userId: String,
    },
    setup(props) {
        const route = useRoute();
        const doctorId = ref('');
        watch(
            () => props.userId,
            (pa, pb) => {
                handleData(pa);
            },
        );
        const { getDetailsDoctor } = useDoctor();
        const listData = ref({
            Markdown: {
                description: '',
                contentHTML: '',
            },
        });
        const handleData = async (id) => {
            const res = await getDetailsDoctor(id);
            if (res && res.errCode === 0) {
                listData.value = res.data;
            }
        };
        handleData(props.userId);

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
        };
    },
    components: {},
};
</script>

<style>
li {
    list-style-type: disc;
}
</style>

<template>
    <div class="h-[70px]">
        <div class="flex items-center shadow-lg h-full gap-x-2 pr-[5%] pl-[2%]">
            <font-awesome-icon @click="handleHome" :icon="['fass', 'arrow-left']" class="text-2xl cursor-pointer" />
            <p class="text-2xl">Chuyên khoa</p>
        </div>
    </div>
    <div class="pr-[5%] pl-[2%] font-bold">
        <router-link
            :to="`/special/${item.id}`"
            class="border-b-[1px] border-gray-200 cursor-pointer py-4 block"
            v-for="item in listData"
            :key="item.id"
        >
            <div class="flex gap-x-4 my-4">
                <img class="w-[100px] h-[67px]" :src="item.image" />
                <div>
                    <div class="font-normal"></div>
                    <div class="font-light">{{ item.name }}</div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import useSpecial from '@/services/apiListSpecial';
export default {
    setup() {
        const { fetchListSpecial, listData } = useSpecial();
        const handleHome = () => {
            window.history.back();
        };
        fetchListSpecial({ pageIndex: '0', size: '9' });

        return {
            listData,
            handleHome,
        };
    },
};
</script>

<style></style>

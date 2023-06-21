<template>
    <header class="flex justify-between bg-mainColor text-white h-[40px] relative">
        <Menulist v-bind:items="allowedMenuItems" />
        <div class="header-tabs-container"></div>
        <div class="flex items-center gap-2 mr-[5%]">
            <span class="mr-[10px]" v-if="local === 'en'"> {{ profile.lastName }} {{ profile.firstName }}</span>
            <span class="mr-[10px]" v-else-if="local === 'vn'">  {{ profile.firstName }} {{ profile.lastName }}</span>
            <span></span>
            <span :class="{ 'text-red-700 cursor-pointer': local === 'vn' }" class="cursor-pointer">
                <span value="vn" @click.prevent="callSetLangActions('vn')">VN</span>
            </span>
            <span class="cursor-pointer" :class="{ 'text-red-700 cursor-pointer': local === 'en' }">
                <span value="en" @click.prevent="callSetLangActions('en')">EN</span>
            </span>
            <div class="text-white px-[10px] hover:bg-mainColor" title="Profile">
                <font-awesome-icon @click="toggleProfileMenu" :icon="['fas', 'user']" style="color: #ffffff" />
            </div>
        </div>
        <div
            v-if="showProfileMenu"
            id="profile-menu"
            class="absolute rounded-b-lg w-[200px] bg-white right-[3%] top-[40px] shadow-lg z-50"
        >
            <div class="flex items-center justify-center mt-3">
                <img class="w-14 h-14 rounded-[50%]" :src="profile.image" />
            </div>
            <ul class="text-black">
                <li class="text-center py-3 mt-2 cursor-pointer relative hover:opacity-50">
                    Profile
                    <font-awesome-icon class="absolute top-[37%] left-[5%]" :icon="['fas', 'address-card']" />
                </li>
                <li @click="handleLogout" class="text-center py-3 mt-2 cursor-pointer relative hover:opacity-50">
                    Đăng Xuất
                    <font-awesome-icon class="absolute top-[37%] left-[5%]" :icon="['fas', 'sign-out-alt']" />
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import i18n from '@/language/i18n';
import { useI18n } from 'vue-i18n';
import Menulist from '@/layout/Menu/MenuList.vue';
export default {
    setup() {
        const { t } = useI18n();
        const MENU_ITEMS = [
            {
                title: 'menu.admin.user',
                children: {
                    title: 'user',
                    data: [
                        {
                            type: 'user',
                            to: '/system/manager-user',
                            title: 'menu.admin.manage-user',
                        },
                        {
                            type: 'user',
                            to: '/system/manager-account',
                            title: 'menu.admin.manage-account',
                        },
                        {
                            type: 'user',
                            to: '/system/manager-doctor',
                            title: 'menu.admin.manage-doctor',
                        },
                        {
                            type: 'user',
                            to: '/system/manager-schedule',
                            title: 'menu.doctor.manage-schedule',
                        },
                        {
                            type: 'user',
                            to: '/system/manager-patient',
                            title: 'menu.admin.manage-apointments',
                        },
                    ],
                },
            },
            {
                title: 'menu.admin.clinic',
                children: {
                    title: 'clinic',
                    data: [
                        {
                            type: 'clinic',
                            to: '/system/manager-clinic',
                            title: 'menu.admin.manage-clinic',
                        },
                    ],
                },
            },
            {
                title: 'menu.admin.specialty',
                children: {
                    title: 'special',
                    data: [
                        {
                            type: 'special',
                            to: '/system/manager-special',
                            title: 'menu.admin.manage-specialty',
                        },
                    ],
                },
            },
            {
                title: 'menu.admin.handbook',
                children: {
                    title: 'Handbook',
                    data: [
                        {
                            type: 'Handbook',
                            to: '/system/manager-handbook',
                            title: 'menu.admin.manage-handbook',
                        },
                    ],
                },
            },
        ];
        const MENU_DOCTOR = [
            {
                title: 'menu.doctor.titleHeader',
                children: {
                    title: 'Doctor',
                    data: [
                        {
                            type: 'Schedule',
                            to: '/doctor/manager/manager-schedule',
                            title: 'menu.doctor.manage-schedule',
                        },
                        {
                            type: 'Schedule',
                            to: '/doctor/manager/manager-patient',
                            title: 'menu.doctor.manage-patient',
                        },
                        {
                            type: 'Schedule',
                            to: '/doctor/manager/manager-history',
                            title: 'menu.doctor.manage-history',
                        },
                    ],
                },
            },
            {
                title: 'menu.doctor.blog',
                children: {
                    title: 'clinic',
                    data: [
                        {
                            type: 'clinic',
                            to: '/doctor/manager/manager-posts',
                            title: 'menu.doctor.manage-handbook',
                        },
                    ],
                },
            },
        ];
        const showProfileMenu = ref(false);
        const store = useStore();
        const local = computed(() => i18n.global.locale);
        const profile = computed(() => store.state.profile);

        function callSetLangActions(lang) {
            store.dispatch('setLang', lang);
        }
        const toggleProfileMenu = () => {
            showProfileMenu.value = !showProfileMenu.value;
        };

        const allowedMenuItems = computed(() => {
            if (profile.value.roleId === 'R1') {
                return MENU_ITEMS;
            } else {
                return MENU_DOCTOR;
            }
        });
        const handleLogout = () => {
            localStorage.clear();
            window.location.reload();
        };
        return {
            MENU_ITEMS,
            MENU_DOCTOR,
            profile,
            local,
            callSetLangActions,
            allowedMenuItems,
            showProfileMenu,
            toggleProfileMenu,
            handleLogout
        };
    },
    components: {
        Menulist,
    },
};
</script>

<style></style>

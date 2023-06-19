<template>
 <main className="bg-[#F1FCF2] h-[100vh]">
        <div className="text-center uppercase font-bold text-xl text-[#0071ba]"> {{ $t('home.manager-appointments')}}</div>
        <div className="user-redux-body">
            <div className="mx-auto md:max-w-full ">
                <tablePatient />
            </div>
            <router-link to="/system/manager-patient/history" class="p-2 absolute right-[10%] top-[5%]  cursor-pointer hover:text-red-400"> 
                {{ $t('label.historyExam')}}
            </router-link>
        </div>

      
    </main></template>

<script>
import tablePatient from './table/tablePatient.vue';
export default {
    setup() {


        return {}
    },
    components: {
        tablePatient
        }
}
</script>

<style>

</style>
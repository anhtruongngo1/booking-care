<template>
    <div class="w-full  bg-center h-[100vh] bg-[url(https://res.cloudinary.com/dl0wt2mgx/image/upload/v1687081770/project_booking/Be%CC%A3%CC%82nh-vie%CC%A3%CC%82n-Pho%CC%80ng-kha%CC%81m_1920x772-e1633608427676_wlzro4.png)]">

        <div className="manage-schedule-container">
            <div className="uppercase mb-[15px] text-[17px] text-center font-semibold">
                {{ $t('home.plan-your') }}
            </div>
            <div className="flex px-[10%]  ">
                <div className="w-full">
                </div>
                <div class="w-full ">
                    <label for="datepicker" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >{{ $t('label.choosen-date') }}</label
                    >
                    <VueDatePicker
                        v-model="date"
                        :highlight="highlightedDates"
                        :min-date="minDate"
                        highlight-disabled-days
                        :format="dateFormat"
                        :timepicker-options="{ enableTime: false }"
                    />
    
                </div>
            </div>
            <div class="flex mt-[5%] max-w-[80%] mx-auto">
                <div  v-for="item in rangTime" :key="item.id">
                    <button
                    @click="handleClickBtnTime(item)"
                    :class="{'bg-yellow-400' : item.isSelected}"
                     type="button" class="text py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        {{ item.valueVi }}
                    </button>
                     </div>
                 </div>
        </div>
        <div class="mt-[5%]">
            <button
            @click="handleSave"
             type="button" class="float-right mr-[5%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
             {{ $t('button.addnew') }}
            </button>
        </div>
        <ScheduleListVue />
    </div>
</template>

<script>
import { ref, computed, watch , inject } from 'vue';
import moment from 'moment';
import addDays from 'date-fns/addDays';
import i18n from "@/language/i18n"

import useAllcode from "@/services/allCodeService"
import useSchedule from "@/services/apiSaveSchedule"
import useDoctorSchedule from "@/services/apiDoctorSchedule"
import ScheduleListVue from './ScheduleList.vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const emitter = inject('emitter'); 
        const profile = computed(() => store.state.profile);
        const { dataAllcode, fetchAllcode, errorAllcode } = useAllcode()
        const { saveSchedule } = useSchedule()
        const { dataScheduleDoctor , fetchScheduleDoctor} = useDoctorSchedule()
        const date = ref(moment(new Date()).add(0, 'days').startOf('day').valueOf());
        const today = new Date();
        const dateFormat = ref('yyyy-MM-dd')
        const rangTime = ref('')
        const doctorId = ref('');
        const minDate = computed(() => {
      return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    });
        const handel = async() => {
            const res = await fetchAllcode('TIME')
            if (res && res.errCode === 0) {
                rangTime.value = res.data 
                rangTime.value = rangTime.value.map(item=>({...item , isSelected:false}))

          }
        }
        const swal = inject('$swal');
        const Toast = swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                  toast.addEventListener('mouseenter', swal.stopTimer);
                  toast.addEventListener('mouseleave', swal.resumeTimer);
              },
          });

        const handleClickBtnTime = (time) => {
            rangTime.value = rangTime.value.map(item => {
                if (item.id === time.id) item.isSelected = !item.isSelected;
                return item;
           })
        }
        const handleSave = async() => {
            let result = []
            let formattedDate =moment(new Date(date.value)).add(0, 'days').startOf('day').valueOf()
            
            let selectedTime = rangTime.value.filter(item => item.isSelected === true)
            if (selectedTime && selectedTime.length > 0) {
                selectedTime.map(time => {
                    let object = {}
                    object.doctorId = profile.value.id;
                    object.date = formattedDate;
                    object.timeType = time.keyMap
                    result.push(object)

                })
            } else {
                Toast.fire({
                    icon: 'error',
                    title: "Invalid selected time"
                });
            }
            let res = await saveSchedule({
            arrSchedule: result,
            doctorId: profile.value.id,
            date :formattedDate
            })
            if (res && res.infor.errCode === 0) {
                emitter.emit('doctorSaveSchedule', 100);
                Toast.fire({
                    icon: 'success',
                    title:'SUCCESSFULY',
                });
        } else {
            Toast.fire({
                    icon: 'error',
                    title: 'FAIL',
                });
        }

        }
        handel()
        return {
            date,
            minDate,
            rangTime,
            handleClickBtnTime,
            doctorId,
            handleSave,
            dateFormat
        };
    },
    components: {
        ScheduleListVue
    },
};
</script>

<style></style>

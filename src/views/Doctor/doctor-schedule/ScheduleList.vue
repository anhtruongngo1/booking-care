<template>
    <div className="pl-36 mt-32 border-r-[1px] border-solid border-red-500">
        <div className="all-schedule">
            <select
                v-model="date"
                class="px-3 rounded-xl py-3 text-[#45c3d2] font-semibold underline outline-none"
                @change="onChange"
            >
                <option class="cursor-pointer" v-for="item in allDays" :key="item.id" :value="item.value">
                    {{ item.label }}
                </option>
            </select>
        </div>
        <div className="mt-5">
            <div className="flex items-center">
                <font-awesome-icon class="text-xl mr-1" :icon="['fas', 'calendar-days']" />
                <span class="text-xl"> Lịch khám </span>
            </div>
            <div className="mt-3">
                <div v-if="filteredAppointments.length > 0">
                    <div className="flex gap-4 flex-wrap">
                        <button
                            v-for="item in filteredAppointments"
                            :key="item.id"
                            :disabled="item.currentNumber == '1'"
                            class="disabled:bg-slate-500 min-w-[120px] px-3 py-[6px] bg-[#fff04b] rounded font-semibold text-[#333] hover:bg-[#45c3d2]"
                        >
                            <p v-if="local === 'vn'">{{ item.timeTypeData.valueVi }}</p>
                            <p v-else>{{ item.timeTypeData.valueVi }} AM</p>
                        </button>
                    </div>
                </div>
                <div v-else className="mt-3">
                    <span> Lịch của bạn đang trống <font-awesome-icon :icon="['far', 'hand-point-up']" /> </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/language/i18n';
import moment from 'moment';
import { ref, computed, watch, inject, onMounted } from 'vue';
import useDoctorSchedule from '@/services/apiDoctorSchedule';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default {
    props: {
        idDoctor: String,
    },

    setup(props) {
        const idDoctor = ref('');
        const store = useStore();
        const profile = computed(() => store.state.profile);
        const emitter = inject('emitter');

        onMounted(() => {
            getData({ doctorId: profile.value.id, date: date.value });
        });

        const isShowModal = ref(false);
        const local = computed(() => i18n.global.locale);
        const date = ref(moment(new Date()).add(0, 'days').startOf('day').valueOf());
        const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        const chosseDate = ref('');
        const getArrDays = (language) => {
            let allDays = [];
            for (let i = 0; i < 7; i++) {
                let object = {};
                if (language === 'vn') {
                    if (i === 0) {
                        let DDMM = moment(new Date()).format('DD/MM');
                        let today = `hôm nay-${DDMM}`;
                        object.label = today;
                    } else {
                        let labelVi = (object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM'));
                        object.label = capitalizeFirstLetter(labelVi);
                    }
                } else {
                    if (i === 0) {
                        let DDMM = moment(new Date()).format('DD/MM');
                        let today = `Today-${DDMM}`;
                        object.label = today;
                    } else {
                        object.label = moment(new Date()).add(i, 'days').locale('en').format('dddd - DD/MM');
                    }
                }
                object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();

                allDays.push(object);
            }
            return allDays;
        };
        const allDays = ref([]);
        const updateDays = () => {
            allDays.value = getArrDays(local.value);
        };
        watch(local, () => {
            updateDays();
        });

        updateDays();

        // /////////////////
        const { fetchScheduleDoctor } = useDoctorSchedule();
        const dataScheduleDoctor = ref([]);
        async function onChange(event) {
            // Do something with the selected value
            getData({ doctorId: profile.value.id, date: date.value });
        }
        const getData = async ({ doctorId, date }) => {
            const res = await fetchScheduleDoctor({ doctorId: doctorId, date: date });
            if (res && res.infor.errCode === 0) {
                dataScheduleDoctor.value = res.infor.data;
            }
        };
        const currentTime = new Date();

        const filteredAppointments = computed(() => {
            const currentTimeValue = currentTime.getTime();
            return dataScheduleDoctor.value.filter((appointment) => {
                if (appointment.date > currentTime) {
                    return true;
                } else {
                    const appointmentTime = moment(appointment.timeTypeData.valueVi, 'hh:mm A').toDate();
                    return appointmentTime > currentTimeValue;
                }
            });
        });
        emitter.on('doctorSaveSchedule', (value) => {
            // *Listen* for event
            if (value === 100) {
                getData({ doctorId: profile.value.id, date: date.value });
            }
        });
        return {
            local,
            allDays,
            isShowModal,
            date,
            onChange,
            dataScheduleDoctor,
            chosseDate,
            idDoctor,
            filteredAppointments,
        };
    },
    components: {},
};
</script>

<style></style>

<template>
    <div class="h-[100vh] pt-12 w-full bg-[url(https://res.cloudinary.com/dl0wt2mgx/image/upload/v1687081770/project_booking/Be%CC%A3%CC%82nh-vie%CC%A3%CC%82n-Pho%CC%80ng-kha%CC%81m_1920x772-e1633608427676_wlzro4.png)]">
        <div className="flex px-[10%] mb-10 ">
            <div className="w-full">
            </div>
            <div class="w-full">
                <label for="datepicker" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >{{ $t('label.choosen-date') }}</label
                >
                <VueDatePicker
                    v-model="date"
                    :highlight="highlightedDates"
                    highlight-disabled-days
                    :format="dateFormat"
                    :timepicker-options="{ enableTime: false }"
                />
            </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg min-h-[56vh]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">STT</th>
                        <th scope="col" className="px-6 py-3">{{ $t('label.time') }}</th>
                        <th scope="col" className="px-6 py-3">{{ $t('label.fullName') }}</th>
                        <th scope="col" className="px-6 py-3">{{ $t('label.gender') }}</th>
                        <th scope="col" className="px-6 py-3">{{ $t('label.address') }}</th>
                        <th scope="col" className="px-6 py-3">EMAIL</th>
    
                        <th scope="col" className="px-6 py-3">{{ $t('label.actions') }}</th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(item , index ) in listData"
                        :key="item.id"
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ index + 1 }}
                        </th>
                        <td className="px-6 py-4"> {{ item.timeTypeDataPatient.valueVi }}</td>
                        <td className="px-6 py-4">{{ item.patientData.lastName }} {{ item.patientData.firstName }}</td>
                        <td className="px-6 py-4">{{ item.patientData.genderData.valueVi }}</td>
                        <td className="px-6 py-4">{{ item.patientData.address }}</td>
                        <td className="px-6 py-4">{{ item.patientData.email }}</td>
    
                        <td className="px-6 py-4">
                      {{ item.statusId }}
                        </td>
                        <td className="px-0 py-4 text-right flex gap-2">
                            <button
                                @click="handleConfirm(item)"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline bg-orange-400 px-2 py-1 rounded-xl "
                            >
                                Hoàn thành
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="text-center mt-2">
            <button
                :disabled="pageIndex <= 0"
                @click="prevPage"
                type="button"
                className="disabled:opacity-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                <font-awesome-icon :icon="['fas', 'arrow-left-long']" />
                <span className="sr-only">Icon description</span>
            </button>
            <button
                :disabled="pageIndex + 1 >= totalPage"
                @click="nextPage"
                type="button"
                className="disabled:opacity-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                <font-awesome-icon :icon="['fass', 'arrow-right-long']" />
                <span className="sr-only">Icon description</span>
            </button>
        </div>
        <confirmVue />
    </div>

</template>

<script>
import usePatient from '@/services/apiPatient';
import { ref , watch , inject , computed , onMounted } from "vue"
import moment from 'moment';
import confirmVue from '../../system/manager-patient/modal/confirm.vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const profile = computed(() => store.state.profile);
        const { fetchListPatient, listData  , totalPage} = usePatient();
        const maxDate = ref(new Date()); // Ngày tối đa
        const dateFormat = ref('yyyy-MM-dd')
        const date = ref(moment(new Date()).add(0, 'days').startOf('day').valueOf());
        const doctorId = ref('');
        const emitter = inject('emitter');
        const pageIndex = ref(0);
        watch(date, async (pa, pb) => {
            const res = await fetchListPatient({
                doctorId: profile.value.id,
                date: new Date(pa).getTime(),
                pageIndex : pageIndex.value ,

            });

        });
        onMounted(() => {
            fetchListPatient({
                    pageIndex : pageIndex.value ,
                    doctorId: profile.value.id,
                    date : new Date(date.value).getTime()
                });
        });
        const handleConfirm = (email) => {
            emitter.emit('eventShowModalConfirm' , email);

        }
        emitter.on('handleListPatient', (value) => {
            // *Listen* for event
            if (value === 100) {
            
                fetchListPatient({
                    pageIndex : pageIndex.value ,
                    doctorId: profile.value.id,
                    date : new Date(date.value).getTime()
                });
           }
            
            
        });
        function nextPage() {
            pageIndex.value = pageIndex.value + 1;
            fetchListPatient({
                pageIndex : pageIndex.value ,
                doctorId: profile.value.id,
                date : new Date(date.value).getTime()
            });

        }
        function prevPage() {
            pageIndex.value = pageIndex.value - 1;
            fetchListPatient({
                pageIndex : pageIndex.value ,
                doctorId: profile.value.id,
                date : new Date(date.value).getTime()
            });
        }



        return {
            listData,
            maxDate,
            date,
            dateFormat,
            doctorId,
            moment,
            handleConfirm,
            totalPage,
            pageIndex,
            nextPage,
            prevPage
            
        };
    },
    components: {
        confirmVue
    }
};
</script>

<style></style>

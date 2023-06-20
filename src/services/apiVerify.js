import axios from '../../axios';
import { ref } from 'vue';
export default function () {
    const messege = ref(null);
    const handleVerify = async (data) => {
        try {
            const res = await axios.post(`/api/verify-book-appointment`, data);
            if (res && res.errCode === 0) {

            } else {
                messege.value = res.errMessage;
            }
            return res;
        } catch (err) {
            messege.value = err;
        }
    };
    return { messege , handleVerify};
}

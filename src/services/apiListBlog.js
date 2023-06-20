import axios from '../../axios';
import { ref } from 'vue';
export default function () {
    const listData = ref({});
    let errorData = ref('');
    let totalPage = ref(null)

    const fetchListBlog = async ({pageIndex, userId, q}) => {
        try {
            if (!pageIndex) {
                pageIndex = 0
            }
            let check = q === undefined ? '' : `&q=${q}` 
            let id = userId === undefined ? '' : `&userId=${userId}`
            const res = await axios.get(`/api/get-list-blog?page=${pageIndex}&size=6${check}${id}`);

            if (res && res.errCode === 0) {
          
                listData.value = res.blog.data;
                totalPage.value = res.blog.totalPages

   
            } else {
                errorData.value = res.errMessage;
            }
            return res;
        } catch (err) {
            errorData.value = err;
        }
    };
    return { listData, errorData, fetchListBlog , totalPage  };
}

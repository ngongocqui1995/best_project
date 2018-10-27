import axios from 'axios'
import { url } from '../Variables/General'

export default class {
    static async __get_Data_Carousel_Home(data) {
        const res = await axios.post(`${url}v1/collection/image`, { data: data })
        const data1 = res.data 

        return data1
    }

    static async __get_Data_List_Image_Update_Home(data) {
        const res = await axios.post(`${url}v1/collection/imageUpdate`, { data: data })
        const data1 = res.data 

        return data1
    }
}
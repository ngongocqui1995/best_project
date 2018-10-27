import axios from 'axios'


export default class {
    static async __get_Data_Carousel_Home() {
        const res = await axios.get(`http://www.petalia.org/Funpage/girlxinh.htm`)
        const data = res.data

        return data
    }

    static async __get_Data_List_Image_Update_Home() {
        const res = await axios.get(`http://www.petalia.org/Funpage/girlxinh.htm`)
        const data = res.data

        return data
    }
}

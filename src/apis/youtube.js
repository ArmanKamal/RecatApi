
import axios from 'axios'

const KEY = 'AIzaSyDJzSXOT6K0boxtHNIwK9lU2Tvpuxq4G3k'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})
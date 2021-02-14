import axios from "axios"

export const getNotes = async () => {
    try {
        const { data } = await axios.get("http://localhost:3003/notes")
        console.log(data)
        return data
    } catch (e) {
        console.error(e)
        return null
    }
}

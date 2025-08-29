import axiosInstance  from "./axiosInstance";
async function getPodcasts() {
    try {
        const response = await axiosInstance.get("/podcasts")
        return response.data;
    }
    catch (error) {
        console.error("Invalid Podcast", error)
    }
}
export default getPodcasts;
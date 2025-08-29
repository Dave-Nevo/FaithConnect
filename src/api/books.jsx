import axiosInstance  from "./axiosInstance";
async function getBooks() {
    try {
        const response = await axiosInstance.get("/books")
        return response.data;
    }
    catch (error) {
        console.error("Invalid Book", error)
    }
}
export default getBooks;
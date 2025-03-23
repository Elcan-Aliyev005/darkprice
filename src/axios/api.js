import axios from "axios"

// Api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem("token"); // Token'i al
//         if (token) {
//             config.headers["x-Access-Token"] = token; // Header'a ekle
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export { Api };

const Api = axios.create({
    baseURL: import.meta.env.VITE_API_URL_DEVELOPMENT,
    withCredentials: true,
    // baseURL: "https://dark-price-backend.onrender.com/"
})





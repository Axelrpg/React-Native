import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const baseUrl = "http://localhost:3000";

const api = axios.create({
    baseURL: baseUrl,
});

api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers["x-token"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
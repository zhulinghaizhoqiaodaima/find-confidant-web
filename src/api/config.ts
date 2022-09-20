import { createAxiosByinterceptors } from "../utils/axios";

const request = createAxiosByinterceptors({
    baseURL: 'http://localhost:3000/api',
});

export default request;


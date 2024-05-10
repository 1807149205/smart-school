import { useEffect } from "react";
import HttpClient from "../../../utils/HttpClient";

const UserManager: React.FC = () => {

    useEffect(() => {
        const fetchData = async () => {
            const { code,msg, data } = await HttpClient.get('/page/1/5');
            console.log(code,msg,data);
            
        };

        fetchData();
    }, [])

    return (
        <h1>用户管理</h1>
    )
}

export default UserManager;
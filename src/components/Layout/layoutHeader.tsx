import Avatar from "antd/es/avatar";
import { useEffect, useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Spin } from "antd";
import HttpClient from "../../utils/HttpClient";

interface UserModel {
    avatar: null;
    createDate: string;
    id: number;
    name: string;
    password: string;
    updateDate: string;
    userType: string;
    username: string;
}

const LayoutHeader: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<UserModel>();

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            const { code, data, msg } = await HttpClient.get<UserModel>('/user/getCurrentUser');
            console.log(code,data, msg);
            setUser(data);
            setLoading(false);
        }

        fetchData();

    }, []);

    return (
        <div style={{ width: '100%', padding: '20px', backgroundColor: 'rgb(0,21,41)', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '1350px' }}>
                <div>
                    <h1 style={{ color: '#fff' }}>智慧校园系统</h1>
                </div>
                <div style={{ color: '#fff' }}>
                    {
                        loading 
                            ? <Spin />
                            : 
                            <>
                                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                <span style={{lineHeight: '36px', marginLeft: '10px'}}>{user?.name}</span>
                            </>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default LayoutHeader;
import { useEffect } from "react";
import AppLayout from "../../components/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useNavigate, useLocation } from "react-router-dom";

const Index: React.FC = () => {

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.token.token);

    useEffect(() => {
        
        const currentPath = window.location.pathname;
        console.log(currentPath);
        
        // const whihtUrl = ['/login','/register']

        // if (!token) {
        //     navigate('/login')
        // }
        
    }, []);

    return (
        <AppLayout></AppLayout>
    )
}

export default Index;
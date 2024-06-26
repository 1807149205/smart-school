import { useEffect } from "react";
import AppLayout from "../components/Layout";
import { useAppSelector } from "../hooks/store";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {

    const navigate = useNavigate();

    const token = useAppSelector((state) => state.token.token);

    useEffect(() => {
        
        const appInitfilter = async () => {
            const currentPath = window.location.pathname;
        
            const whihtUrl = ['/login','/register']
    
            if (!token && whihtUrl.indexOf(currentPath) === -1) {
                navigate('/login')
            }
        }
        
        appInitfilter();
        
    });

    return (
        <AppLayout></AppLayout>
    )
}

export default Index;
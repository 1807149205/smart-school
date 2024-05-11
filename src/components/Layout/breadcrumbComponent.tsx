import Breadcrumb from "antd/es/breadcrumb"

const BreadcrumbComponent: React.FC = () => {

    

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default BreadcrumbComponent;
import {Table,Popconfirm,Button} from 'antd'
import UserModal from './UserModal'

const ProductList = ({onDelete,products,confirmEdit})=>{
    const columns = [
        {
            title:'Name',
            dataIndex:'name',
            key:'name'
        },
        {
            title:'Actions',
            key:'action',
            render:(text,record,index)=>{
                console.log('text',text)
                console.log('record',record)
                console.log('index',index)
              return (
                    <div>
                        <UserModal title="Edit" inputVal={record.name} onOk={confirmEdit.bind(null,record.id)}>
                            <Button>Edit</Button>
                        </UserModal>
                        <Popconfirm title="Delete?" onConfirm={()=>onDelete(record.id)}>
                            <Button>Delete</Button>
                        </Popconfirm>
                    </div>
                ) 
            }
            
            
            }
        
    ]

    return (
        <div>
            <Table rowKey="id" dataSource={products} columns={columns}></Table>
        </div>  
    )
}

export default ProductList
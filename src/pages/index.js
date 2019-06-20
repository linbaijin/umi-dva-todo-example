import { connect } from 'dva'
import ProductList from '../components/ProductList'
import UserModal from '@/components/UserModal'
import { Button } from 'antd';


const Products = ({dispatch,products,inputs})=>{
  function handleDelete(id){
    dispatch({
      type:'products/delete',
      payload:id
    })
  }

  function handleAdd(val){
    dispatch({
      type:'products/add',
      payload:val
    })
  }

  function confirmEdit(id,val){
    dispatch({
      type:'products/edit',
      payload:{id:id,name:val}
    })
  }

  return (
    <div>
      <h2>List of Products</h2>
      <UserModal title="Add" onOk={handleAdd}>
        <Button>Add</Button>
      </UserModal>
      <ProductList onDelete={handleDelete} confirmEdit={confirmEdit} products={products}>

      </ProductList>
    </div>
  )
}

export default connect(({products})=>{
  return {products}
})(Products)

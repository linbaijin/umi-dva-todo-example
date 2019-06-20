export default {
    namespace:'products',
    state:[],
    reducers:{
        delete(state,{payload:id}){
            return state.filter(item=>item.id!==id)
        },
        add(state,action){
            return [...state,{name:action.payload,id:state.length+1}]
        },
        edit(state,{payload:updateProduct}){
            console.log('state',updateProduct)
            return state.map(product=>{
                if(product.id===updateProduct.id){
                    console.log(updateProduct.id)
                    return {...updateProduct}
                }else{
                    return product
                }
            })
        }
    }
}
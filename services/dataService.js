// import db
const db  = require('./db')

//   get all products from database
const getAllproducts = () =>{
    //to fetch all products from mongodb
  return  db.Product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode : 200,
                    Products : result
                }
            }else{
                return{
                    status : false,
                    statusCode : 402,
                    message :  'Product Not Found'
                }
            }

    }
    )
}


//add Wishlist
const addtowishlist=(id,title,price,description,image)=>{
    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:false,
                    statusCode:401,
                    message:'Product Already Exists'
                }
            }else{
                const newProduct = new db.Wishlist({
                    id,
                    title,
                    price,
                    description,
                    image
                })
            newProduct.save()
                return{
                    status:true,
                    statusCode:200,
                    message:'Product Added Successfully'
                }
            }
        }
    )
}



//Get wishlist Product
const getwishlist = () =>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Your Wishlist Is Empty'
                }
            }
        }
    )
}



const deleteitem=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:'Product Deleted Successfully'
                }
            }else{
                return{
                    status:false,
                    statusCode:401,
                    message:'Product Not Found'
                }
            }
        }
    )
}



module.exports={
    getAllproducts,
    addtowishlist,
    getwishlist,
    deleteitem
}
const express = require('express')
const Product = require('../models/Product')

const renderProduct = async (req, res) =>{

    const products = await Product.find().lean();
 
     res.render('productIndex', { products: products});
 }

 const createProduct = async (req, res) =>{

    try {
     const product = Product(req.body)
 
     await product.save()
  
     res.redirect('/');
     
    } catch (error) {
     console.log(error)
     
    }
 
 
 }

const renderProductEdit = async (req, res) =>{
    
    try {
        const product = await Product.findById(req.params.id).lean();

        res.render("editProducts", {product: product});
    } catch (error) {
        console.log(error.message)
    }


}

const editProduct= async (req, res) =>{
    
    const{id} = req.params

    await Product.findByIdAndUpdate(id, req.body)

    res.redirect('/')
}


const deleteProduct = async(req, res) =>{
    const { id } = req.params;
    await Product.findByIdAndDelete(id)
    res.redirect('/')
}




 module.exports = {renderProduct, createProduct, renderProductEdit, editProduct, deleteProduct } 
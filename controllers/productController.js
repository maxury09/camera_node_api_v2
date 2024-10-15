const Product = require('../models/product');
// ฟังก์ชันสําหรับอัปโหลดภาพ
exports.uploadImage = async (req, res) => {
    try {
        const image_data = req.file ? req.file.buffer : null; // รับข้อมูลรูปภาพเป็น buffer
        const product = await Product.create({
            //field name
            image: image_data,
        });
        res.status(200).json({ message: 'Image uploaded successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Failed to upload image', error });
    }
};
// แสดงข้อมูล products ทั้งหมด
exports.getdata = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {

        res.status(500).json({ error: error.message });
    }
};
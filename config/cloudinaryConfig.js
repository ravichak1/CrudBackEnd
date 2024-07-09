const cloudinary = require("cloudinary").v2;
const {
  cloudinaryStorage,
  CloudinaryStorage,
} = require("multer-storage-cloudinary");
const multer = require("multer");
const { width } = require("@fortawesome/free-solid-svg-icons/fa0");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Profile Image",
    transformation: [{ width: 200, crop: "limit" }],
  },
});

module.exports = multer({ storage });

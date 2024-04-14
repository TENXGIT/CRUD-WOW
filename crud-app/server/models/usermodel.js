import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  old_price: {
    type: String,
    required: true,
  },
  new_price: {
    type: String,
    required: true,
  },
});

export default mongoose.model("user", userSchema);

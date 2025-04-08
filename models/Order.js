

// import mongoose from "mongoose";

// const OrderSchema = new mongoose.Schema({
//   fullName: String,
//   email: String,
//   address: String,
//   creditCard: String,
//   total: Number,
//   items: [{ id: String, name: String, price: Number, quantity: Number }],
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.models.Order || mongoose.model("Order", OrderSchema);

import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  cartItems: { type: Array, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        minLength: [ 3, "Username must be at least 3 characters"],
        maxLength: [ 20, "Username must be at most 20 characters"],
        required: [true, "Username is required"],
    },
    password:  {
        type: String,
        selected: false,
        minLength: [ 8, "Password must be at least 8 characters"],
        maxLength: [ 32, "Password must be at most 32 characters"],
        required: [true, "Password is required"],
    },
    email : String,
    address : String,
    phone: {
         type : String,
         minLength: [ 10, "Phone number must be at least 10 characters"],
         maxLength: [ 15, "Phone number must be at most 15 characters"],
         },
         profileImage: {
            public_id: {
                type: String,
                required: true,
            },
         },
         paymentMethods: {
              bankTransfer: {
                bankAccountNumber: String,
                bankAccountName: String,
                bankName: String,
              },
              easypaisa : {
                easypaisaAccountNumber: Number
              },
              paypal: {
                    paypalEmail: String,
              },
    },
    role: {
        type: String,
        enum: ["Auctioner" , " Bidder" , "Super Admin"]
    },
    unpaidCommission: {
        type: Number,
        default: 0,
    },
    auctionsWon: {
        type: Number,
        default: 0,
    },
    moneySpent: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


export const User = mongoose.model('User', userSchema);
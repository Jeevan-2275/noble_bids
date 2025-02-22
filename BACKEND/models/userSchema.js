import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: [3, "Username must caontain at least 3 characters."],
        maxLength: [20, "Username must be at most 20 characters"],
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        selected: false,
        minLength: [8, "Password must be at least 8 characters"],
        maxLength: [32, "Password must be at most 32 characters"],
        required: [true, "Password is required"],
    },
    email: String,
    address: String,
    phone: {
        type: String,
        minLength: [10, "Phone number must be at least 10 characters"],
        maxLength: [15, "Phone number must be at most 15 characters"],
    },
    profileImage: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    paymentMethods: {
        bankTransfer: {
            bankAccountNumber: String,
            bankAccountName: String,
            bankName: String,
        },
        easypaisa: {
            easypaisaAccountNumber: Number
        },
        paypal: {
            paypalEmail: String,
        },
    },
    url: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Auctioneer", "Bidder", "Super Admin"]
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

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.generateJsonWebToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

export const User = mongoose.model("User", userSchema); 

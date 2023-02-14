//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

var CategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"catnm is required"],
    lowercase: true,
    unique: true,
    trim: true
  },
  caticonnm: {
    type: String,
    required: [true,"caticonnm is required"],
    lowercase: true,
    trim: true
  }
});

// Apply the uniqueValidator plugin to UserSchema.
CategorySchema.plugin(uniqueValidator);

// compile schema to model
const CategorySchemaModel = mongoose.model('Category_collection',CategorySchema);

export default CategorySchemaModel
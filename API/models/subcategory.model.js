import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

var subcategorySchema = mongoose.Schema({
    _id: Number,
    subcatnm: {
      type: String,
      required: [true,"SubCategoty Name is required"],
      lowercase: true,
      unique: true,
      trim: true
    },
    catnm: {
        type: String,
        required: [true,"Category Name is required"],
        lowercase: true,
      
        trim: true
      },
    subcaticonnm: {
      type: String,
      required: [true,"subcategory icon is required"],
      lowercase: true,
      trim: true
    }
  });


  subcategorySchema.plugin(uniqueValidator);

// compile schema to model
const subcategorySchemaModel = mongoose.model('subcategory_collection',subcategorySchema);

export default subcategorySchemaModel
import { Schema, model } from 'mongoose';

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
});

export default model('Contact', ContactSchema);

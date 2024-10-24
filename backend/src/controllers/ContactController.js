import Contact from '../models/Contact.js';

export async function list(req, res) {
  try {
    const contacts = await Contact.find();
    return res.send(contacts);
  } catch (err) {
    return res.status(400).send('Error loading contacts');
  }
}

export async function create(req, res) {
  const contact = new Contact({
    name: req.body.name,
    phone: req.body.phone,
  });
  try {
    const savedContact = await contact.save();
    return res.send(savedContact._id);
  } catch (err) {
    return res.status(400).send(err);
  }
}

const contactsUrl = 'http://localhost:8000/contacts';

const form = document.getElementById('form');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const newContact = {
    name: formData.get('name'),
    phone: formData.get('phone'),
  };
  try {
    await fetch(contactsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    });
    form.reset();
    loadContacts();
  } catch (err) {
    console.error(err);
    alert('Ocorreu um erro ao salvar o contato');
  }
});

async function loadContacts() {
  try {
    const response = await fetch(contactsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const contacts = await response.json();
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    contacts.forEach((contact) => {
      const row = createContactRow(contact);
      tableBody.appendChild(row);
    });
  } catch (err) {
    console.error(err);
    alert('Ocorreu um erro ao carregar os contatos');
  }
}
loadContacts();

function createContactRow(contact) {
  const row = document.createElement('tr');
  row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>
                <button class="btn btn-primary btn-sm">
                    <i class="bi bi-chat-left"></i>
                </button>
            </td>
        `;

  const messageButton = row.querySelector('button');
  messageButton.addEventListener('click', function () {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=55${contact.phone}`;
    window.open(whatsappUrl, '_blank');
  });
  return row;
}

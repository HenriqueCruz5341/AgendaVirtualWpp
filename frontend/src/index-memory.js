const inMemoryContacts = [];

const form = document.getElementById('form');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const newContact = {
    name: formData.get('name'),
    phone: formData.get('phone'),
  };
  inMemoryContacts.push(newContact);
  form.reset();
  loadContacts();
});

async function loadContacts() {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';
  inMemoryContacts.forEach((contact) => {
    const row = createContactRow(contact);
    tableBody.appendChild(row);
  });
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

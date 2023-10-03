class Contact {
    constructor(name, surname, phone, address){
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.address = address
    }

}

function newContact(event){
    //create an object from user input
    const name = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    //Validate all fields are filled with at least something
    if(name === "" || surname === "" || phone ==="" || address ==="") {
        return error
    }

    const contact = new Contact(name, surname, phone, address);    

    //create the table entry

    const tableInside= document.querySelector("#phoneBookContact tbody");
    const createRow = tableInside.insertRow();
    

    const nameEntry = createRow.insertCell(0);
    console.log("this should be the contact name" + contact.name)
    nameEntry.textContent = contact.name;

    const surnameEntry = createRow.insertCell(1);
    surnameEntry.textContent = contact.surname;

    const phoneEntry = createRow.insertCell(2);
    phoneEntry.textContent = contact.phone;

    const addressEntry = createRow.insertCell(3);
    addressEntry.textContent = contact.address;

  
    //create button functionality for delete button
    const deleteButtonEntry = createRow.insertCell(4);
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-secondary");
    deleteButton.textContent ="Delete";
    const deleteFun= function(){
        createRow.remove();
    }
    deleteButton.addEventListener("click", deleteFun)

    deleteButtonEntry.appendChild(deleteButton);

}

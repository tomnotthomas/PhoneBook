//Create contact class 
class Contact {
    constructor(name, surname, phone, address){
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.address = address
    }

}


//Create function that is creating table entries
function newContact(event){
    const name = $("#firstName").val();
    const surname = $("#surname").val();
    const phone = $("#phone").val();
    const address = $("#address").val();


    //Validate all fields are filled with at least something
    if(name === "" || surname === "" || phone ==="" || address ==="") {
        return;
    }


    //create an object from user input
    const contact = new Contact(name, surname, phone, address);    


    //create the table elements
    const tableInside= $("#phoneBookContact tbody");
    const createRow = $("<tr>");
    

    createRow.append($("<td>").text(contact.name));
    createRow.append($("<td>").text(contact.surname));
    createRow.append($("<td>").text(contact.phone));
    createRow.append($("<td>").text(contact.address));


    //create delete button
    const deleteButton = $("<button>").addClass("btn firstButton").text("Delete").click(function() {
        createRow.remove();
    })
    const deleteButtonInTable= $("<td>").append(deleteButton);
    createRow.append(deleteButtonInTable)


    //add some empty rows to stretch table entries across full size
    createRow.append($("<td>").text(""));
    createRow.append($("<td>").text(""));

    
    //now I put the created entries into the table
    tableInside.append(createRow);
}

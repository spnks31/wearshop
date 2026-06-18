// ==========================
// ENQUIRY FORM VALIDATION
// ==========================

function validateEnquiryForm() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;

    if (name.length < 3) {
        alert("Name must contain at least 3 characters.");
        return false;
    }

    if (phone.length < 10) {
        alert("Enter a valid phone number.");
        return false;
    }

    let response = "";

    switch(service) {

        case "House Wiring":
            response = "Estimated cost starts from R2,500.";
            break;

        case "Fault Finding":
            response = "Estimated cost starts from R800.";
            break;

        case "Lighting Installation":
            response = "Estimated cost starts from R1,200.";
            break;

        default:
            response = "Thank you for your enquiry.";
    }

    alert(response);
    return true;
}
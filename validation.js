var val_name = d3.select("#name_validation");
var val_email = d3.select("#email_validation");
var val_Company = d3.select("#companyName_validation");
var val_textarea = d3.select("#textarea_validation");

var btn_submit = d3.select("#btn-submit")

var btn_reset = d3.select("#btn-reset")

function getdetails()
{
    val_name.property("value");
    val_email.property("value");
    val_Company.property("value");
    val_textarea.value;

    if (val_name.property("value")=="")
    {
        alert("Name is required");
    }

    if (val_email.property("value")=="")
    {
        alert("Email is required");
    }

    if (val_Company.property("value")=="")
    {
        alert("Company name is required");
    }

    if (val_textarea.value ==" ")
    {
        alert("Message is required");
    } 
}


btn_reset = d3.select("#btn-reset")

function cleardetails()
{
    val_name.property("value")==" ";
    val_email.property("value")==" ";
    val_Company.property("value")==" ";
    val_textarea.text==" ";
}


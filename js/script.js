// Helper function to return dom elements
const $ = (id) => document.getElementById(id)

// Get dom elements
let id = $('id')
console.log(id.value)
let empName = $('name')
let extension = $('ext')
let email = $('email')
let department = $('department')
let form = $('empForm')

// Event listener for form
form.addEventListener('submit', (e) => {
    e.preventDefault()
    empToConsole(id.value, empName.value, ext.value, email.value, department.value)
})
// Function for event listener, prints form inputs to console
const empToConsole = (id, name, ext, email, department) =>
    console.log(`ID: ${id}\nName: ${name}\nExtension: ${ext}\nEmail: ${email}\nDepartment: ${department}`)

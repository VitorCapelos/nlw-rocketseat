document.querySelector("#add-time")
.addEventListener('click', cloneField)
var day = 1
function cloneField() {
    day += 1
    if (day >=8) {
        return alert('Máximo de 7 dias')
    }
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = "" 
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
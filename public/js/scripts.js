const color_palette = ["indigo", "red", "pink", "purple", "green", "orange"]
i = 0
function changeColor() {
    const navbar = document.getElementById("navbar")
    const footer = document.getElementById("foot")
    if (i >= color_palette.length - 1)
    {
        //console.log(i)
        navbar.classList.replace(color_palette[i], color_palette[i % (color_palette.length - 1)])
        footer.classList.replace(color_palette[i], color_palette[i % (color_palette.length - 1)])
        i = 0
    }
    else
    {
        //console.log(i)
        navbar.classList.replace(color_palette[i], color_palette[i % color_palette.length + 1])
        footer.classList.replace(color_palette[i], color_palette[i % color_palette.length + 1])
        i++
    }
}

function limitCharacters(element)
{
    const maxLength = 8
    var numValue = element.value
    if (numValue.length > maxLength)
    {
        element.value = numValue.substr(0, maxLength)
    }
}

function checkEmptyInput()
{
    const num1 = document.getElementById("num1")
    const num2 = document.getElementById("num2")
    const dialog = document.getElementById("dialog")
    if (num1.value.length == 0 || num2.value.length == 0)
    {
        var instance = M.Modal.init(dialog)
        instance.open()
        return false
    }
    return true
}
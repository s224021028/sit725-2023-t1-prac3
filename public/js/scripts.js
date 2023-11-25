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
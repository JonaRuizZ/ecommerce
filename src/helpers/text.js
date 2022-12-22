export const formatText = text =>{
    return `${text ? text[0].toUpperCase() + text.slice(1).toLowerCase(): "Sin texto"}`
};
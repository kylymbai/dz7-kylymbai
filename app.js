let num = prompt("Оцените наш сервис от 1 до 10");

if(num < 1){
    alert("оценка должна быть от 1 до 10")
}else if(num > 10){
    alert("оценка должна быть от 1 до 10")
}else if(num <= 5){
    alert("мы работаем над улучшением нашего сервиса")
}else if(num <= 10){
    alert("Спасибо за высокую оценку!")
}else{
    alert("ERROR! Write a number!")
}
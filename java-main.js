var val=0;
function checkAnswer1() {
    const userAnswer = document.getElementById("answer1").value;
    if (userAnswer.toLowerCase() === "русия") {
        document.getElementById("result1").innerText = "Верен отговор!"; val+=1;
    } else {
        document.getElementById("result1").innerText =
            "Грешен отговор! Отговорът е 'Русия'";
    }
}

function checkAnswer2() {
    const userAnswer = document.getElementById("answer2").value;
    if (userAnswer.toLowerCase() === "Тихият океан" || "Тихият") {
        document.getElementById("result2").innerText = "Верен отговор!"; val+=1;
        val+=1;
    } else {
        document.getElementById("result2").innerText = "Грешен отговор! Отговорът е 'Тихият океан'";
    }
}

function checkAnswer3() {
    const userAnswer = document.getElementById("answer3").value;
    if (userAnswer.toLowerCase() === "еверест") {
        document.getElementById("result3").innerText = "Верен отговор!"; val+=1;
        val+=1;
    } else {
        document.getElementById("result3").innerText =
            "Грешен отговор! Отговорът е 'Еверест'";
    }
}

function checkAnswer4() {
    const userAnswer = document.getElementById("answer4").value;
    if (userAnswer.toLowerCase() === "Нил") {
        document.getElementById("result4").innerText = "Верен отговор!"; val+=1;
        val+=1;
    } else {
        document.getElementById("result4").innerText =
            "Грешен отговор! Отговорът е 'Нил'";
    }
}

function checkAnswer5() {
    const userAnswer = document.getElementById("answer5").value;
    if (userAnswer.toLowerCase() === "сахара") {
        document.getElementById("result5").innerText = "Верен отговор!"; val+=1;
        val+=1;
    } else {
        document.getElementById("result5").innerText =
            "Грешен отговор! Отговорът е 'Сахара'";
    }
}

function checkAnswer6() {
    const userAnswer = document.getElementById("answer6").value;
    if (userAnswer.toLowerCase() === "бразилия") {
        document.getElementById("result6").innerText = "Верен отговор!"; val+=1;
        val+=1;
    } else {
        document.getElementById("result6").innerText =
            "Грешен отговор! Отговорът е 'Бразилия'";
    }
}

function checkAnswer7() {
    const userAnswer = document.getElementById("answer7").value;
    if (
        userAnswer.toLowerCase() === "северна и южна америка" ||
        userAnswer.toLowerCase() === "европа и азия"
    ) {
        document.getElementById("result7").innerText = "Верен отговор!"; val+=1;
    } else {
        document.getElementById("result7").innerText =
            "Грешен отговор! Отговорът е 'Северна и Южна Америка' или 'Европа и Азия'";
    }
}

function checkAnswer8() {
    const userAnswer = document.getElementById("answer8").value;
    if (
        userAnswer.toLowerCase() === "индийският и атлантическият океан"
    ) {
        document.getElementById("result8").innerText = "Верен отговор!"; val+=1;
    } else {
        document.getElementById("result8").innerText =
            "Грешен отговор! Отговорът е 'Индийският и Атлантическият океан'";
    }
}

function checkAnswer9() {
    const userAnswer = document.getElementById("answer9").value;
    if (userAnswer.toLowerCase() === "магелановият пролив") {
        document.getElementById("result9").innerText = "Верен отговор!"; val+=1;
    } else {
        document.getElementById("result9").innerText =
            "Грешен отговор! Отговорът е 'Магелановият пролив'";
    }
}

function checkAnswer10() {
    const userAnswer = document.getElementById("answer10").value;
    if (userAnswer.toLowerCase() === "гренландия") {
        document.getElementById("result10").innerText = "Верен отговор!"; val+=1;
    } else {
        document.getElementById("result10").innerText =
            "Грешен отговор! Отговорът е 'Гренландия'";
    }
}

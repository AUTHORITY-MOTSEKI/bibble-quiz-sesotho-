let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById(".start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

const quizArray = [
    {
        id: "0",
        question: "Pesaleme ya 23 ke_______?",
        options: [
            "Thapelo e kgolo",
            "Thapelo ya ho kopa thuso",
            "Dithoko tsa modisa ya molemo",
        ],
        correct: "Dithoko tsa modisa ya molemo",
    },

    {
        id: "1",
        question: "Tshenolo kgaolo ya 12 e bua ka_______?",
        options: [
            "Mosadi le drakone",
            "Thuto ya mahlohonolo",
            "Dikereke tse 7 tsa Asia",
        ],
        correct: "Mosadi le drakone",
    },

    {
        id: "2",
        question: "Satane o tlanngwa ka dilemo tse________?",
        options: [
            "Lekgolo",
            "Diketse tse dikete",
            "Sekete",
        ],
        correct: "Sekete",
    },


    {
        id: "3",
        question: "Ya hlalefileng a bale palo ya sebata;hobane ke palo ya________?",
        options: [
            "Diphoofolo",
            "Motho",
            "Dinaledi",   
        ],
        correct: "Motho",
    },

    {
        id: "4",
        question: "Buka ya Moekelesia e ngotswe ke_________?",
        options: [
            "Ezekiele",
            "Esaia",
            "Salomone",
        ],
        correct: "Salomone",
    },

    {
        id: "5",
        question: "Ha re re harena sebe re a ithetsa mme nnete haeyo horona,lengolo ke_________?",
        options: [
        "Bagalata 5:1",
        "1-Johanne 1:8",
        "2-Petrose 3:1",
        ],
        correct: "1-Johanne 1:8",
    },

    {
        id: "6",
        question: "qetellong, bana beso tiyang moreneng le matleng a hae a sa sitweng ke letho,lengolo ke__________?",
        options: [
        "Baefese 6:10",
        "Baroma 2:2",
        "baheberu 12:1",
        ],
        correct: "Baefese 6:10",
        
    },

    {
        id: "7",
        question: "Tshimolohong Modimo o ne a hlole__________?",
        options: [
        "Adama le Eva",
        "Mahodimo le Lefatshe",
        "Lesedi le lefifi",
        ],
        correct: "Mahodimo le Lefatshe",
    },

    {
        id: "8",
        question: "Bara ba bararo ba Nohe ba tswileng arekeng ke___________?",
        options: [
        "Sema,Kama le Jafete",
        "Ashkenase,Rifate le Torgama",
        "Henoke,Irade le Mehujaele",
        ],
        correct: "Sema,Kama le Jafete",
    },

    {
        id: "9",
        question: "Lebitso la ngwana wa pele wa Lea ke___________?",
        options: [
        "Sarah",
        "Rebeka",
        "Dina",
        ],
        correct: "Dina",
    },

    {
        id: "10",
        question: "Moshe o ne a alosa mehlape ya_________?",
        options: [
        "Jakobo",
        "Faro",
        "Jethro",
        ], 
        correct: "Jethro",
    },

    {
        id: "11",
        question: "Dikotlo tsa batho ba Egepeta tse tswang ho Modimo dine di le kae ka palo_________?",
        options: [
        "Hlano",
        "Leshome",
        "Tsheletseng",
        ],
        correct: "Leshome",
    },

    {
        id: "12",
        question: "Lebitso la Massa le Meriba ke________?",
        options:[
        "Teko le Tseko",
        "Thato le Pholoso",
        "Lerato le Hlompho",
        ],
        correct: "Teko le Tseko",
    },

    {
        id: "13",
        question: "Jehova a re ho Moshe?",
        options:[
        "Nka Arone le bara ba hae",
        "Balehela Egepeta",
        "Bolaya Faro",
        ],
        correct: "Nka Arone le bara ba hae",
    },

    {
        id: "14",
        question: "Phoofolo enngwe le enngwe e nang le dikgola tse pedi le tlhako e arohaneng e be_________?",
        options: [
        "Sehlabelo sa lona",
        "Ditshila ho lona",
        "Dijo ho lona",
        ],
        correct: "Ditshila ho lona",
    },

    {
        id: "15",
        question: "Modimo a re motho a seke aja________?",
        options:[
        "Ditholwana",
        "Ntho e harotsweng",
        "Manna le dikwekwe",
        ],
        correct: "Ntho e harotsweng",
    },

    {
        id: "16",
        question: "Jehova a o hlohonolofatse mme a_________?",
        options:[
        "O tsamaise",
        "O shebe",
        "O boloke",
        ],
        correct: "O boloke",
    },

    {
        id: "17",
        question: "Ditrompeta tse pedi tsa__________?",
        options: [
        "Gauta",
        "Silifera",
        "Mmira",
        ],
        correct: "Silifera",
    },

    {
        id: "18",
        question: "Setjhaba sa Iseraele se ne se tsamaya le Moshe hoya_________?",
        options: [
        "Egepeta",
        "Kanana",
        "Jheriko",
        ],
        correct: "Kanana",
    },

    {
        id: "19",
        question: "Le bana ba Jehova Modimo wa lona, le seke la________?",
        options: [
        "Hlora",
        "Tsamaya",
        "Iphatsa",
        ],
        correct: "Iphatsa",
    },

    {
        id: "20",
        question: "Selemo sa bosupa se seng le se seng o tla etsa________?",
        options: [
        "Paseka",
        "Teselo",
        "Mokete",
        ],
        correct: "Teselo",
    },

    {
        id: "21",
        question: "Jehova re ho Joshua________?",
        options: [
        "Iphe matla, o etse ka senna",
        "Batlana le Moshe",
        "Etsa sehlabelo",
        ],
        correct: "Iphe matla, o etse ka senna",
    },

    {
        id: "22",
        question: "Joshua oile a teana le________?",
        options: [
        "Molaodi wa makgotla a Jehova",
        "Lengeloi la Modimo",
        "Ba Amaleke",
        ],
        correct: "Molaodi wa makgotla a Jehova",
    },

    {
        id: "23",
        question: "Kalebe ke mora wa_________?",
        options: [
        "Efraime",
        "Jefunne",
        "Hermone",
        ],
        correct: "Jefunne",
    },

    {
        id: "24",
        question: "Bibbele e na le mangolo a makae ka palo?",
        options: [
        "Mashome a supileng a metso e supileng",
        "Mashome a tsheletseng a metso e tsheletseng",
        "Mashome a robedi a metso e mene",
        ],
        correct: "Mashome a tsheletseng a metso e tsheletseng",
    },

    {
        id: "25",
        question: "Nebukadnesare e ne e le morena wa________?",
        options: [
        "Juda",
        "Israele",
        "Babilona",
        ],
        correct: "Babilona",
    },

    {
        id: "26",
        question: "Jesu kreste ke mora wa________?",
        options: [
        "Maria",
        "Modimo",
        "josefa",
        ],
        correct: "Modimo",
    },

    {
        id: "27",
        question: "Jesu Kreste ke wa ha leloko la________?",
        options: [
        "Dane",
        "Rubene",
        "Juda",
        ],
        correct: "Juda",
    },

    {
        id: "28",
        question: "Morena Jesu o ne a re:nka sefapano sa hao mme o_______?",
        options: [
        "Thakgiswe",
        "Tsamaye",
        "Ntatele",
        ],
        correct: "Ntatele",
    },

    {
        id: "29",
        question: "Morena Jesu a re: Ke nna sefate sa nnete sa morara,lengolo ke_______?",
        options: [
        "Luka 13:9",
        "Mattheu 6:3",
        "Johanne 15:1",
        ],
        correct: "Johanne 15:1",
    },

    {
        id: "30",
        question: "Letsatsi le hora eo,ha ho ya tsebang; esita le Mangeloi a lehodimo ha a tsebe, le haele mora; empa hotseba Ntate a nnotshi,lengolo ke________?",
        options: [
        "Mattheu 24:36",
        "Mareka 2:1",
        "Diketso 3:5",
        ],
        correct: "Mattheu 24:36",
    },

    {
        id: "31",
        question: "mesebetsi ya nama e pepeneneng, lengolo ke________?",
        options: [
        "Johanne 2:8",
        "Bagalata 5:19",
        "Jakobo 1:5",
        ],
        correct: "Bagalata 5:19",
    },

    {
        id: "32",
        question: "Bophelo bo ne bo le ho lona, mmwe bophelo e ne e le lesedi la batho, lengolo ke_________?",
        options: [
        "Johanne 1:4",
        "Mattheu 3:7",
        "Baheberu 12:5",
        ],
        correct: "Johanne 1:4",
    },

    {
        id: "33",
        question: "Barutuwa ba Morena Jesu ba ne le bakae?",
        options: [
        "Mashome a mabedi a metso e mmedi",
        "Leshome le metso e mmedi",
        "Mashome a mabedi a mesto e mene",
        ],
        correct: "Leshome le metso e mmedi",
    },

    {
        id: "34",
        question: "Morena Jesu oile a hlaha ho barutuwa ba hae pela lewatle lefeng?",
        options: [
        "Le lefubedu",
        "Le leholo",
        "La Tiberiase",
        ],
        correct: "La Tiberiase",
    },

    {
        id: "35",
        question: "Morena Jesu ha a nyolohela Lehodimong, yaba barutuwa ba hae ba kgutlela hokae?",
        options: [
        "Kanana",
        "Kapernauma",
        "Jerusalema",
        ],
        correct: "Jerusalema",
    },

    {
        id: "36",
        question: "Yaba lentswe le re Saule! Saule!________?",
        options: [
        "Oya hokae?",
        "O ntlhorisetsang na...?",
        "Kgutlela Damaseka",
        ],
        correct: "O ntlhorisetsang na...?",
    },

    {
        id: "37",
        question: "Johanne o ne a apere kobo ya boya ba________?",
        options: [
        "Kamele",
        "Nku",
        "Phiri",
        ],
        correct: "Kamele",
    },

    {
        id: "38",
        question: "Akabe le Josafate ba futuhela________?",
        options: [
        "Amaleke",
        "Baamore",
        "Basiria",
        ],
        correct: "Basiria",
    },

    {
        id: "39",
        question: "Johanne o ne a kolobetsa nokeng ya________?",
        options: [
        "Euphrate",
        "Jordane",
        "Lewatle le lefubedu",
        ],
        correct: "Jordane",
    },

    {
        id: "40",
        question: "Bara ba Jakobo ba ne ba le________?",
        options: [
        "Leshome le metso e mmedi",
        "Mashome a mabedi",
        "Leshome le metso e mehlano",
        ],
        correct: "Leshome le metso e mmedi",
    },

    {
        id: "41",
        question: "Ditholwana tsa moya ke_________?",
        options: [
        "Lerato le Thabo",
        "Bofebe le Botahwa",
        "Tshepiso le Tumelo",
        ], 
        correct: "Lerato le Thabo",
    },

    {
        id: "42",
        question: "Morena Jesu oile a rohaka sefate sa________?",
        options: [
        "Mohlware",
        "Feiye",
        "Morara",
        ],
        correct: "Feiye",
    },

    {
        id: "43",
        question: "Lengolo le qetellang testamente ya kgale ke________?",
        options: [
        "Ezekiele",
        "Nehemia",
        "Malakia",
        ],
        correct: "Malakia",
    },

    {
        id: "44",
        question: "mesebetsi ya nama e pepeneneng, lengolo ke_______?",
        options: [
        "Johanne 2:8",
        "Bagalata 5:19",
        "Jakobo 1:5",
        ],
        correct: "Bagalata 5:19",
    },

    {
        id: "45",
        question: "Sehlooho sa Pesaleme ya mashome a mabedi a mesto e mene ke_______?",
        options: [
        "Dithoko tsa Modisa ya molemo",
        "Teboho ya Morena mohlang a kgutlang ntweng",
        "Tsa Areka ha e isitswa sione, mohla e latwang ha Obed-Edomo",
        ],
        correct: "Tsa Areka ha e isitswa sione, mohla e latwang ha Obed-Edomo",
    }

];

restart.addEventListener("click",()=>{
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = () =>{
    questionCount += 1;

    if (questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = " Sepheto sa hao ke " + 
        scoreCount + " Hotswa dipotsong tse " + questionCount;   
    }
    else{
        countOfQuestion.innerHTML = 
        questionCount + 1 + " Ya " + quizArray.length + " Dipotso";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
    }
})
);
const timerDisplay = () =>{
        countdown = setInterval(() =>{
            count--;
            timeLeft.innerHTML = `${count}s`;
            if(count == 0){
                clearInterval(countdown);
                displayNext();

            }
        }, 700); 
};

const quizDisplay = (questionCount) =>{
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card)=>{
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater(){
    quizArray.sort(()=>Math.random() - 0.5);

    for(let i of quizArray){
        i.options.sort(()=>Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");


        countOfQuestion.innerHTML = 1 + " <b>Ya</b> " + quizArray.length + " <b>Dipotso</b>";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("Questions");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        `;
        quizContainer.appendChild(div);
    }
}
function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let option = question.querySelectorAll(".option-div");

    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else {
        userOption.classList.add("incorrect");

        option.forEach((element) => {
            if(element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    clearInterval(countdown);
    options.forEach((element)=>{
        element.disabled = true;

    });
} 
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", ()=> {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

Window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
    
    
};


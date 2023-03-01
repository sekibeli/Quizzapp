let questions = [
    {
        "question": "Toms Mutter hat drei Kinder: Tick, Trick und ...?",
        "answer_1": "Track",
        "answer_2": "Trak",
        "answer_3": "Tom",
        "answer_4": "Kann man nicht sagen",
        "right_answer": 3
    },
    {
        "question": "Einige Monate haben 31 Tage, andere 30. Wie viele Monate haben 28 Tage??",
        "answer_1": "Ein Monat",
        "answer_2": "Alle Monate",
        "answer_3": "Keiner",
        "answer_4": "Nur im Schaltjahr einer",
        "right_answer": 2
    },
    {
        "question": "Wieviele Exemplare pro Tierart nahm Moses mit auf die Arche?",
        "answer_1": "4",
        "answer_2": "2",
        "answer_3": "3",
        "answer_4": "Er ging nicht auf die Arche",
        "right_answer": 4
    },
    {
        "question": "Ein Obsthändler hat einen BMI von 25. Was wiegt er?",
        "answer_1": "80kg",
        "answer_2": "100kg",
        "answer_3": "Obst",
        "answer_4": "Er hat keine Waage",
        "right_answer": 3
    },
    {
        "question": "Du hast eine Schachtel mit Streichhölzern und kommst in einen kalten Raum. Dort findest du eine Petroleumlampe, etwas Holz und einen Kamin. Was zündest du zuerst an?",
        "answer_1": "Die Petroliumlampe",
        "answer_2": "Das Holz",
        "answer_3": "Den Kamin",
        "answer_4": "Das Streichholz",
        "right_answer": 4
    }
];

let index = ['question','answer_1','answer_2','answer_3','answer_4'];
let currentQuestion = 0;
let correct = 0;
let progressBar = 0

let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');
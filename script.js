
const questions = [
    {
        question:"What is a Union Type in TypeScript?",
        answers: [
            {text: "A function that can return multiple types", correct: false},
            {text: "A type that allows a variable to have multiple possible types", correct: true},
            {text: "A method to merge two objects", correct: false},
            {text: "A way to define a variable without a type", correct: false}

        ]
    },
    {
        question:"What is the difference between Explicit and Implicit types in TypeScript?",
        answers: [
            {text: "Explicit types require manual declaration, while implicit types are inferred by TypeScript", correct: true},
            {text: "Implicit types are stricter than explicit types", correct: false},
            {text: "Explicit types are only used in JavaScript, while implicit types are used in TypeScript", correct: false},
            {text: "Implicit types do not work with TypeScript", correct: false}

        ]
    },
    {
        question:" What does the 'type' keyword do in TypeScript?",
        answers: [
            {text: "Declares a function", correct: false},
            {text: "Defines a new type alias", correct: true},
            {text: "Creates an interface", correct: false},
            {text: "Declares a variable", correct: false}

        ]
    },

    {
        question:" Which of the following is a Utility Type in TypeScript?",
        answers: [
            {text: "type&ltT&gt", correct: false},
            {text: "Pick&ltT, K&gt", correct: true},
            {text: "const&ltT&gt", correct: false},
            {text: "map&ltT&gt", correct: false}

        ]
    },

    {
        question:"What is a Template Literal Type in TypeScript?",
        answers: [
            {text: "A type that only works with string values", correct: false},
            {text: "A way to define string-based types using backticks and placeholders", correct: true},
            {text: "A type that allows functions to return strings", correct: false},
            {text: " A type that only allows template literals as values", correct: false}

        ]
    },
    {
        question:"What is a Type Guard in TypeScript? ",
        answers: [
            {text:"A way to prevent variables from changing their type", correct:false },
            {text:"A security feature in TypeScript", correct: false},
            {text:"A method to enforce strict type-checking at compile time", correct: false},
            {text:"A function that ensures a value matches a specific type at runtime", correct: true}
        ]

    },
    {
        question:"What is a Discriminated Union in TypeScript? ",
        answers: [
            {text:`A type that only allows null and undefined values`, correct: false},
            {text:`A union type with a common property to distinguish between different cases `, correct: true},
            {text:`A function that differentiates between multiple types`, correct: false},
            {text:`A method for defining a class`, correct: false}
        ]

    },
    {
        question:"What does Extract &ltT, U&gt do in TypeScript?",
        answers: [
            {text:" Removes U from T", correct: false},
            {text:"Extracts common types between T and U", correct: true },
            {text:"Converts T into U", correct: false},
            {text:"Creates a new object from T", correct: false}
        ]

    },

    {
        question:"What is an Index Access Type in TypeScript?",
        answers: [
            {text:"A method to loop through an object’s keys", correct: false },
            {text:"A way to get the type of a property inside an object type", correct: true },
            {text:"A function that retrieves a property value", correct: false},
            {text:"A feature to access arrays", correct: false}
        ]

    },
    {
        question:"What does Type Assertion (as keyword) do in TypeScript?",
        answers: [
            {text:"Changes a variable’s value", correct: false },
            {text:"Creates a new type", correct: false },
            {text:"Forces TypeScript to treat a value as a specific type", correct: true},
            {text:"Prevents type inference", correct: false}
        ]

    },
    {
        question:"What is a Generic Function in TypeScript?",
        answers: [
            {text:" A function that is limited to predefined types", correct: false},
            {text:" A function that accepts only string types", correct: false},
            {text:"A function that does not use type parameters", correct:false },
            {text:"A function that can accept and return different types dynamically", correct: true}
        ]

    },
    {
        question:"How do you define a Generic Function in TypeScript?",
        answers: [
            {text:" function generic(value: T): T { return value; }", correct: false},
            {text:" function generic(value) { return value; }", correct: false },
            {text:"generic function'&ltT&gt'(value: T) { return value; }", correct:false },
            {text:"function generic'&ltT&gt'(value: T): T { return value; }", correct: true}
        ]

    },
    {
        question:`What is the purpose of "&lt;T&gt;" in a Generic Function? `,
        answers: [
            {text:" It restricts the function to use only number types", correct: false},
            {text:" It defines a placeholder for a type that will be determined at function call", correct: true},
            {text:"It makes the function return a tuple", correct:false },
            {text:"It forces TypeScript to infer a string type", correct: false}
        ]

    },
    {
        question:"How do you call a Generic Function with an explicit type?",
        answers: [
            {text:" generic[42];", correct: false},
            {text:" generic.&ltnumber&gt(42);", correct: false},
            {text:"generic(42, number);", correct:false },
            {text:"generic&ltnumber&gt(42);", correct: true}
        ]

    },
    {
        question:"What is a Mapped Type in TypeScript?",
        answers: [
            {text:" A type that maps over the properties of another type and transforms them", correct: true},
            {text:" A function that maps an array of objects", correct: false},
            {text:"A way to merge two types", correct:false },
            {text:"A method to convert an object into an array", correct: false}
        ]

    },
    {
        question:"Which utility type is commonly used with Mapped Types?",
        answers: [
            {text:"Extract&ltT, U&gt", correct:false },
            {text:"Pick&ltT, K&gt", correct: false},
            {text:"Readonly&ltT&gt", correct:true },
            {text:"Array&ltT&gt", correct: false}
        ]

    },
    {
        question:"What does the following Mapped Type do?",
        code:` type Optional&ltT&gt = {
                [K in keyof T]?: T[K];
                };`,
        answers: [
            {text:" Forces all properties of T to be required", correct: false},
            {text:"Converts all properties of T to readonly", correct: false},
            {text:"Removes all properties of T", correct:false },
            {text:"Makes all properties of T optional", correct: true}
        ]

    },
    
    {
        question:"What does the following Mapped Type do?",
        code:`  type ReadOnly&ltT&gt = {
                    readonly [K in keyof T]: T[K];
                };`,
        answers: [
            {text:"Makes all properties of T writable", correct: false},
            {text:"Converts all properties of T to optional", correct: false},
            {text:"Removes all properties of T", correct:false },
            {text:"Prevents properties of T from being modified", correct: true}
        ]

    },
    
    {
        question:"Which of the following is an example of using a Mapped Type?",
        answers: [
            {text:` type MyMappedType&ltT&gt = T & { id: number };`, correct: false},
            {text:` type MyMappedType&ltT&gt = (T) => number;}`, correct: false},
            {text:` type MyMappedType<&ltT&gt = T extends number ? string : boolean;}`, correct:false },
            {text:` type MyMappedType&ltT&gt = {
                        [K in keyof T]: number;
                    };`, correct: true}
        ]

    },

    {
        question: "What will be the output of the following code?",
        code: `type User = {
                    name: string;
                    age: number;
                };
                type ReadOnlyUser = Readonly<User>;

                const user: ReadOnlyUser = { name: "Alice", age: 25 };
                user.age = 26; // What happens here?`,
        answers: [
            {text:"age is updated to 26", correct: false},
            {text:"age becomes undefined", correct: false},
            {text:"Runtime error: Cannot modify read-only object", correct: false },
            {text:"Compilation error: Cannot assign to 'age' because it is a read-only property", correct: true}
        ]

    },
   
    {
        question: "What does the following mapped type do?",
        code: ` type Nullable&ltT&gt = {
                    [K in keyof T]: T[K] | null;
                };

                type User = {
                    name: string;
                    age: number;
                };

                type NullableUser = Nullable<User>;`,
        answers: [
            {text:" Converts all properties of User to optional", correct: false},
            {text:"Allows properties of User to be null.", correct: true},
            {text:"Converts all properties of User to null.", correct:false },
            {text:"Prevents null values in User", correct: false}
        ]

    },
    
    {
        question: "What does the following TypeScript code do?",
        code: ` type User = {
                    id: number;
                    role: "admin" | "user";
                };

                type RoleType = User["role"];`,
        answers: [
            {text:"Returns string", correct: false},
            {text:" Returns Usertype", correct: false},
            {text:"Returns string", correct: false},
            {text:"Extracts the type 'admin' | 'user'", correct: true}
        ]

    },
    {
        question: "What is the output of the following code?",
        code: ` type Status = "success" | "failure";
                type Response&ltT&gt = T extends Status ? "Valid" : "Invalid";

                type Test = Response&lt"success"&gt;`,
        answers: [
            {text:"Invalid", correct: false},
            {text:" undefined", correct: false},
            {text:"Compilation error", correct: false},
            {text:"Valid", correct: true}
        ]

    },
    {
        question: "What will be the result of this function call?",
        code: ` type Size = "small" | "medium" | "large";

                function getSize(size: Size) {
                    return 'Selected size: '$'{'size'}';
                }

                console.log(getSize("extra-large"));`,
        answers: [
            {text:"Selected size: extra-large", correct: false},
            {text:"Runtime error: Undefined function behavior", correct: false},
            {text:"undefined", correct: false},
            {text:"Compilation error: Argument of type 'extra-large' is not assignable to 'small' | 'medium' | 'large'", correct: true}
        ]

    },
    {
        question: "What does the following Mapped Type do?",
        code: ` type UpperCaseKeys&ltT&gt = {
                    [K in keyof T as Uppercase &ltK & string&gt]: T[K];
                };

                type User = {
                    name: string;
                    age: number;
                };

                type UpperCaseUser = UpperCaseKeys<User>;`,
        answers: [
            {text:"Converts all property values to uppercase", correct: false},
            {text:"Removes properties from User", correct: false},
            {text:"Converts all properties to string", correct: false},
            {text:"Converts all property names to uppercase", correct: true}
        ]

    },
    {
        question: "What will happen in the following TypeScript code?",
        code: ` type Animal = {
                    name: string;
                    type: "mammal" | "bird";
                };

                type Bird = Extract&ltAnimal&gt, { type: "bird" };`,
        answers: [
            {text:"Bird will be an empty object", correct: false},
            {text:"Bird will have only the type property", correct: false},
            {text:"Compilation error", correct: false},
            {text:"Bird will have all properties from Animal where type is 'bird'", correct: true}
        ]

    }

];


const codeElement = document.getElementById("code-snippet"); // Kodblock deklareras

const questionElement = document.getElementById("question"); //frågan deklareras
const answerButtons = document.getElementById("answer-btn");//svarsalternativ deklareras

const nextBtn = document.getElementById("next-btn"); //next button deklareras

//skapa fråge-index
let currentQuestionIndex = 0; //startas från 0
let score = 0;

//funktion för starta quizzet
function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion(); //när ovan principer är OK, då kallas denna funktionen
}


function showQuestion(){
    //ta bort tidigare frågor o svar
    resetState();

    let currentQuestion = questions[currentQuestionIndex];// Hämtar den aktuella frågan
    let questionNumber = currentQuestionIndex + 1; //uppdatera frågans nr
    questionElement.innerHTML = questionNumber + ". "+ currentQuestion.question;

    // Om frågan innehåller en kodsnutt
    if (currentQuestion.code) { // Om det finns kod i frågan
        codeElement.style.display = "block"; // Visa kodblocket
        codeElement.innerText = currentQuestion.code; // Lägg in kod
    } else {
        codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
    }

     //visa svaren
     currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        //vid rätt svar
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        //eventlisten to select answer
        button.addEventListener("click", selectAnswer);
    });
}

function  resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
//välja svar
function selectAnswer(x){
    const selectedBtn = x.target; //valda svarsalternativ
    const isCorrect = selectedBtn.dataset.correct === "true";//kontroll= om svaret är korrekt
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    //efter rätt svar vad som sker...
   Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";//vida "next" button!

}


//score function
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again!";
    nextBtn.style.display = "block";
    codeElement.style.display = "none"; // Dölj kodblocket om det saknas kod
}

//visa nästa fråga eller invoke showscore funtion
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

//...gå till nästa=klicka på nästa button
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

//invoke start quiz!
startQuiz();
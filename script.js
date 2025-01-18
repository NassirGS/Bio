const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-btn');
const resetButton = document.getElementById('reset-btn');
const scoreDisplay = document.getElementById('score');

const questions = [
    {
        question: "What is the process of grouping organisms based on shared characteristics called?",
        options: ["Evolution", "Classification", "Natural selection", "Mutation"],
        answer: "b"
    },
    {
        question: "Which of the following is NOT a criteria used by taxonomists for classifying organisms?",
        options: ["Morphology", "Genetics", "Behavior", "Weather"],
        answer: "d"
    },
     {
         question: "How many levels are there in the classification of living things, according to the text?",
         options: ["5", "6", "7", "8"],
         answer: "d"
     },
     {
         question: "What is the highest level of classification?",
         options: ["Kingdom", "Phylum", "Domain", "Class"],
         answer: "c"
     },
     {
         question: "Which of these is NOT a domain?",
         options: ["Bacteria", "Archaea", "Monera", "Eukarya"],
         answer: "c"
     },
     {
        question: "What level of classification follows the Kingdom?",
        options: ["Class", "Phylum", "Order", "Family"],
        answer: "b"
    },
    {
        question: "Humans belong to which Class?",
        options: ["Reptile", "Amphibian", "Mammal", "Bird"],
        answer: "c"
    },
    {
        question: "What do orders consist of?",
        options: ["Species", "Families", "Phyla", "Classes"],
        answer: "b"
    },
    {
        question: "What does the genus classification help determine in taxonomy?",
        options: ["The second part of the name", "The first part of the name", "The location", "The kingdom"],
        answer: "b"
     },
     {
        question: "What is the most specific level of classification?",
        options: ["Genus", "Family", "Species", "Class"],
        answer: "c"
    },
    {
        question: "According to the text, how many Kingdoms are in the Five-Kingdom classification scheme?",
        options: ["3", "4", "5", "6"],
        answer: "c"
    },
    {
        question: "Which of these is a kingdom where prokaryotic organisms are primarily found?",
        options: ["Protista", "Monera", "Fungi", "Plantae"],
        answer: "b"
    },
    {
        question: "What do Monera lack?",
        options: ["DNA", "Ribosomes", "Cell membrane", "A true nucleus"],
        answer: "d"
    },
    {
        question: "Which of these kingdoms consists of diverse eukaryotic organisms?",
        options: ["Monera", "Fungi", "Protista", "Plantae"],
        answer: "c"
    },
    {
        question: "Are Protists primarily unicellular or multicellular?",
        options: ["Only unicellular", "Only multicellular", "Primarily unicellular but can be multicellular", "Neither unicellular nor multicellular"],
        answer: "c"
    },
    {
        question: "Which kingdom contains organisms that are primarily multicellular and heterotrophic?",
        options: ["Protista", "Plantae", "Fungi", "Animalia"],
         answer: "c"
    },
    {
        question: "How do Fungi absorb their nutrients?",
        options: ["Photosynthesis", "Chemo synthesis", "Absorption from their surroundings", "Ingestion"],
        answer: "c"
    },
    {
        question: "What do plants produce through photosynthesis?",
        options: ["Nutrients", "Energy", "Their own food", "Spore"],
         answer: "c"
    },
    {
        question: "Which of these are NOT part of the plant body parts?",
         options: ["Leaves", "Stems", "Roots", "Flagella"],
         answer: "d"
    },
    {
        question: "Which of these is NOT encompassed by the Animalia kingdom?",
        options: ["Mammals", "Birds", "Reptiles", "Viruses"],
        answer: "d"
    },
    {
        question: "What is a key characteristic of prokaryotic cells?",
        options: ["They have a true nucleus", "They have membrane-bound organelles", "They lack a distinct nucleus", "They are multicellular"],
        answer: "c"
    },
   {
        question: "Which kingdom is a synonym for Prokaryotae?",
        options: ["Protista", "Monera", "Fungi", "Animalia"],
        answer: "b"
    },
    {
        question: "What are the two domains that prokaryotes are classified into?",
        options: ["Monera and Protista", "Fungi and Plantae", "Bacteria and Archaea", "Eukarya and Animalia"],
        answer: "c"
    },
    {
        question: "What do prokaryotic cells lack internally?",
        options: ["DNA", "Ribosomes", "Internal cellular bodies (organelles)", "Cell membrane"],
        answer: "c"
    },
    {
        question: "Which of the following is NOT a common component of a prokaryotic cell?",
        options: ["Plasma membrane", "Cytoplasm", "Nucleus", "Ribosomes"],
        answer: "c"
    },
     {
        question: "What is the genetic material of a cell?",
        options: ["Ribosome", "Plasmid", "DNA", "Capsule"],
        answer: "c"
    },
    {
        question: "What are ribosomes responsible for in cells?",
        options: ["Digesting food", "Building proteins", "Controlling the cell", "Storing energy"],
        answer: "b"
    },
    {
        question: "What are pili used for in prokaryotic cells?",
        options: ["Movement", "Sticking to things", "Building proteins", "Storing genetic material"],
        answer: "b"
    },
     {
         question: "What is a smaller piece of DNA called in prokaryotes?",
         options: ["Chromosome", "Ribosome", "Plasmid", "Capsule"],
         answer: "c"
    },
    {
        question: "What is the shape of a Coccus bacteria?",
        options: ["Rod", "Spiral", "Round", "Curved rod"],
        answer: "c"
    },
    {
        question: "What is the name of a bacteria that has a spiral shape?",
         options: ["Vibrio", "Bacillus", "Spirillum", "Spirochete"],
         answer: "c"
    },
    {
        question: "What does the term 'unicellular' mean in terms of the lifestyle of prokaryotes?",
        options: ["They form a film", "They form a chain of cells", "They live all alone", "They are multicellular"],
        answer: "c"
    },
     {
        question: "Which feeding style does not describe prokaryotes?",
        options: ["Photosynthetic", "Disease-causing", "Decomposers", "Ingestion"],
        answer: "d"
    },
     {
         question: "What is a binary fission?",
        options: ["The sexual reproduction of prokaryotes", "The asexual reproduction of prokaryotes", "A type of eating process", "The movement of flagella"],
        answer: "b"
    },
     {
        question: "What is a key characteristic of eukaryotic cells?",
        options: ["They lack a nucleus", "They have a true nucleus", "They lack membrane-bound organelles", "They are always unicellular"],
         answer: "b"
     },
     {
         question: "What are examples of specialized eukaryotic cells given in the text?",
         options: ["Skin cells, Bone cells, Fat cells", "Blood cells, Nerve cells, Muscle cells", "Hair cells, Nail cells, Teeth cells", "Stomach cells, Liver cells, Lung cells"],
         answer: "b"
     },
     {
        question: "Which eukaryotic cell moves using pseudopods?",
        options: ["Euglena", "Amoeba", "Paramecium", "Diatom"],
        answer: "b"
     },
    {
        question: "Which eukaryotic cell moves using flagella?",
        options: ["Amoeba", "Paramecium", "Euglena", "Diatom"],
        answer: "c"
    },
     {
        question: "Which eukaryotic cell moves using cilia?",
        options: ["Amoeba", "Euglena", "Paramecium", "Diatom"],
        answer: "c"
     },
     {
        question: "Which is NOT in the category of Eukaryotes?",
        options: ["Bacteria", "Human", "Plant", "Protists"],
        answer: "a"
    },
   {
        question: "Classification is based on shared characteristics of organisms.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Weather is a key criteria in classifying organisms.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "There are 7 levels of classification of living things.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Kingdom is the highest level of classification.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Bacteria is a domain.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Phylum is above the kingdom level.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Humans belong to the Class of Reptile.",
        options: ["True", "False"],
         answer: "False"
    },
   {
        question: "An order is made up of one or more families.",
        options: ["True", "False"],
        answer: "True"
    },
    {
        question: "Genus is the second part of an organism's name.",
        options: ["True", "False"],
         answer: "False"
    },
     {
        question: "Species is the most general level of classification.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "The five-kingdom classification is a standard in use.",
         options: ["True", "False"],
        answer: "True"
    },
   {
        question: "Monera has Eukaryotic organism.",
        options: ["True", "False"],
        answer: "False"
   },
   {
        question: "Monera lack membrane-bound organelles.",
         options: ["True", "False"],
        answer: "True"
   },
   {
       question: "Protists are all multicellular organisms.",
        options: ["True", "False"],
        answer: "False"
   },
   {
        question: "Protists are primarily unicellular.",
        options: ["True", "False"],
        answer: "True"
   },
   {
        question: "Fungi are mainly autotrophic.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Fungi use absorption to gain nutrients.",
        options: ["True", "False"],
        answer: "True"
    },
   {
        question: "Plants produce food using spores.",
        options: ["True", "False"],
        answer: "False"
    },
   {
        question: "Plants use chlorophyll in photosynthesis.",
        options: ["True", "False"],
        answer: "True"
   },
   {
        question: "Animalia encompasses plants.",
         options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Prokaryotic cells have a true nucleus.",
        options: ["True", "False"],
        answer: "False"
   },
    {
        question: "Monera is the same as Prokaryotae.",
         options: ["True", "False"],
         answer: "True"
    },
    {
         question: "Bacteria and Archaea are Kingdoms.",
         options: ["True", "False"],
        answer: "False"
    },
    {
        question: "Prokaryotic cells have internal organelles.",
        options: ["True", "False"],
        answer: "False"
    },
    {
         question: "Nucleus is a common component of a prokaryotic cell.",
         options: ["True", "False"],
        answer: "False"
   },
    {
        question: "Ribosomes are part of the genetic material of a cell.",
        options: ["True", "False"],
        answer: "False"
   },
   {
        question: "Ribosomes help build protein.",
        options: ["True", "False"],
        answer: "True"
   },
   {
        question: "Pili help prokaryotes move around.",
        options: ["True", "False"],
        answer: "False"
   },
   {
        question: "A plasmid is a large piece of DNA.",
        options: ["True", "False"],
        answer: "False"
    },
   {
         question: "A Bacillus bacteria is round.",
         options: ["True", "False"],
         answer: "False"
    },
    {
         question: "A Spirochete has a curved shape.",
        options: ["True", "False"],
        answer: "False"
   },
   {
        question: "Prokaryotes can only be unicellular.",
        options: ["True", "False"],
        answer: "False"
    },
    {
       question: "Prokaryotes feed using photosynthesis, disease-causing, and decomposition.",
        options: ["True", "False"],
        answer: "True"
    },
   {
        question: "Prokaryotes reproduce sexually using binary fission.",
         options: ["True", "False"],
        answer: "False"
   },
    {
        question: "Eukaryotic cells lack a nucleus.",
         options: ["True", "False"],
        answer: "False"
    },
   {
         question: "Blood cells are examples of specialized Eukaryotic cells.",
        options: ["True", "False"],
         answer: "True"
    },
   {
        question: "Amoeba moves using flagella.",
        options: ["True", "False"],
        answer: "False"
   },
   {
       question: "Euglena moves using flagella.",
       options: ["True", "False"],
       answer: "True"
    },
   {
       question: "Paramecium uses cilia to move.",
       options: ["True", "False"],
       answer: "True"
    },
    {
       question: "Bacteria are Eukaryotes.",
       options: ["True", "False"],
       answer: "False"
    },

];


function buildQuiz() {
    const output = [];

    questions.forEach((question, index) => {
        let options = '';
        if (question.options[0] === "True" || question.options[0] === "False"){
          options = `<ul class="options">
                        <li>
                        <input type="radio" name="question${index}" value="True" id="q${index}a">
                        <label for="q${index}a">${question.options[0]}</label>
                        </li>
                        <li>
                        <input type="radio" name="question${index}" value="False" id="q${index}b">
                        <label for="q${index}b">${question.options[1]}</label>
                        </li>
                    </ul>`
        }
        else{
          options = `<ul class="options">
                        <li>
                            <input type="radio" name="question${index}" value="a" id="q${index}a">
                            <label for="q${index}a">${question.options[0]}</label>
                        </li>
                        <li>
                            <input type="radio" name="question${index}" value="b" id="q${index}b">
                            <label for="q${index}b">${question.options[1]}</label>
                         </li>
                         <li>
                            <input type="radio" name="question${index}" value="c" id="q${index}c">
                            <label for="q${index}c">${question.options[2]}</label>
                        </li>
                        <li>
                           <input type="radio" name="question${index}" value="d" id="q${index}d">
                            <label for="q${index}d">${question.options[3]}</label>
                        </li>
                    </ul>`;
        }
       

        output.push(
            `<div class="question">
                <h3>${index+1}. ${question.question}</h3>
                 ${options}
             </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                score++;
            }
        }
    });
    scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
}

function resetQuiz() {
    buildQuiz();
    scoreDisplay.textContent = "";
}


buildQuiz();

submitButton.addEventListener('click', calculateScore);
resetButton.addEventListener('click', resetQuiz);
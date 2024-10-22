const questions = [
    {
        // Topic
        topic: "Cornwall",
        questions: [
            {
                // Question 1
                question: "What is the name of the capital city of Cornwall?",
                options: ["Penzance", "Truro", "St Ives"],
                answer: 2,      // refers to the index of the correct option
            },
            {
                // Question 2
                question: "Which of the following beaches is located near Falmouth, Cornwall?",
                options: ["Perranporth Beach", "Watergate Bay", "Gyllyngvase Beach"],
                answer: 2,
            },
            {
                // Question 3
                question: "Who was a famous pirate from Cornwall?",
                options: ["Blackbeard", "Sir Francis Drake", "John Hawkins"],
                answer: 1,
            },
            {
                // Question 4
                question: "What is the name of the largest prehistoric monument in Cornwall?",
                options: ["The Hurlers", "The Merry Maidens", "Stonehenge"],
                answer: 0,
            },
            {
                // Question 5
                question: "Which of the following Cornwall towns is known for its Eden Project?",
                options: ["St Austell", "Truro", "Newquay"],
                answer: 0,
            },
            {
                // Question 6
                question: "Who was a famous artist from Newlyn, Cornwall?",
                options: ["Jogn Singer Sargent", "Walter Sickert", "Laura Knight"],
                answer: 2,
            },
            {
                // Question 7
                question: "What is the name of the highest point in Cornwall?",
                options: ["Brown Willy", "Carn Menellis", "The Hurlers"],
                answer: 0,
            },
            {
                // Question 8
                question: "Which of the following harbours is located near St Ives, Cornwall?",
                options: ["Falmouth Harbour", "Mousehole Harbour", "St Ives Harbour"],
                answer: 2,
            },
            {
                // Question 9
                question: "Who was a famous author from Cornwall?",
                options: ["Daphne du Maurier", "Rosamunde Pilcher", "Helen Dunmore"],
                answer: 0,
            },
            {
                // Question 10
                question: "What is the name of the River that flows through Truro, Cornwall?",
                options: ["Fowey River", "Tamar River", "Kenwyn River"],
                answer: 0
            }
        ]
    },
    {
        // Topic
        topic: "Pop-music trivia",
        questions: [
            {
                // Question 1
                question: 'Which British singer-songwriter released the album "21" in 2011?',
                options: ["Taylor Swift", "Katy Perry", "Adele"],
                answer: 2,
            },
            {
                // Question 2
                question: "Who was the lead vocalist of the rock band Queen?",
                options: ["Brian May", "Freddie Mercury", "Roger Taylor"],
                answer: 1,
            },
            {
                // Question 3
                question: 'Which British singer-songwriter released the album "19" in 2007?',
                options: ["Amy Winehouse", "Lily Allen", "Leona Lewis"],
                answer: 1,
            },
            {
                // Question 4
                question: "Who is the lead vocalist of the rock band Guns N' Roses?",
                options: ["Slash", "Duff McKagan", "Axl Rose"],
                answer: 2,
            },
            {
                // Question 5
                question: 'Which American singer-songwriter released the album "True Blue" in 1986?',
                options: ["Madonna", "Mariah Carey", "Whitney Houston"],
                answer: 0,
            },
            {
                // Question 6
                question: "Who is the lead vocalist of the rock band Imagine Dragons?",
                options: ["Dan Reynolds", "Ben Mckee", "Wayne Sermon"],
                answer: 0,
            },
            {
                // Question 7
                question: 'Which British singer-songwriter released the album "Back to Black" in 2006?',
                options: ["Amy Winehouse", "Lily Allen", "Paloma Faith"],
                answer: 0,
            },
            {
                // Question 8
                question: "Who is the load vocalist of the rock ban Coldplay?",
                options: ["Jonny Buckland", "Will Champion", "Chris Martin"],
                answer: 2,
            },
            {
                // Question 9
                question: 'Which American singer-songwriter released the album "1989" in 2014?',
                options: ["Taylor Swift", "Katy Perry", "Lady Gaga"],
                answer: 0,
            },
            {
                // Question 10
                question: "Who is the lead vocalist of the rock band The Killers?",
                options: ["Brandon Flowers", "Dave Keuning", "Ronnie Vannucci Jr."],
                answer: 0,
            }
        ]
    },
    {
        // Topic
        topic: "Art",
        questions: [
            {
                // Question 1
                question: 'Which artist painted the famous painting "The Starry Night"?',
                options: ["Leonardo da Vinci", "Vincent van Gogh", "Claude Monet"],
                answer: 1,
            },
            {
                // Question 2
                question: "Who was a prominent figure in the Impressionist movement?",
                options: ["Pierre-Auguste Renoir", "Paul Cezanne", "Mary Cassatt"],
                answer: 0,
            },
            {
                // Question 3
                question: 'Which artist created the famous sculpture "David"?',
                options: ["Raphael", "Bernini", "Michelangelo"],
                answer: 2,
            },
            {
                // Question 4
                question: "Who was a leading figure in the Pop Art movement?",
                options: ["Roy Lichtenstein", "Andy Warhol", "Jasper Johns"],
                answer: 1,
            },
            {
                // Question 5
                question: 'Which artist painted the famous painting "The Scream"?',
                options: ["Edvard Munch", "Vincent Van Gogh", "Pablo Picasso"],
                answer: 0, 
            },
            {
                // Question 6
                question: "Who was a prominent figure in the Surrealist movement?",
                options: ["Salvador Dali", "Rene Magritte", "Max Ernst"],
                answer: 0,
            },
            {
                // Question 7
                question: 'Which artist created the famous painting "The Night Cafe"?',
                options: ["Paul Cezanne", "Edgar Degas", "Vincent Van Gogh"],
                answer: 2,
            },
            {
                // Question 8
                question: "Who was a leading figure in the Abstract Expressionist movement?",
                options: ["Jackson Pollock", "Willem de Kooning", "Mark Rothko"],
                answer: 0,
            },
            {
                // Question 9
                question: 'Which artist painted the famous painting "Girl with a Pearl Earring"?',
                options: ["Rembrandt van Rijn", "Johannes Vermeer", "Frans Hals"],
                answer: 1,
            },
            {
                // Question 10
                question: "Who was a prominenet figure in the Cubist movement?",
                options: ["Georges Braque", "Fernand Leger", "Pable Picasso"],
                answer: 2,
            },
            {
                // Question 11
                question: 'Which artist created the famous sculpture "The Thinker"?',
                options: ["Michelangelo", "Donatello", "Auguste Rodin"],
                answer: 2,
            },
            {
                // Question 12
                question: "Who was a leading figre in the Fauvist movement?",
                options: ["Henri Matisse", "Andre Derain", "Maurice de Vlaminck"],
                answer: 0,
            },
            {
                // Question 13
                question: 'Which artist painted the famous painting "The Weeping Woman"?',
                options: ["Pablo Picasso", "Salvador Dali", "Gorges Braque"],
                answer: 0,
            },
            {
                // Question 14
                question: "Who was a prominent figure in the Expressionist movement?",
                options: ["Egon Schiele", "Edvard Munch", "Oskar Kokoschka"],
                answer: 1,
            },
            {
                // Question 15
                question: 'Which artist created the famous painting "The Persistence of Memory"?',
                options: ["Salvador Dali", "Rene Magritte", "Max Ernst"],
                answer: 0,
            }
        ]
    },
    {
        // Topic
        topic: "Literature",
        questions: [
            {
                // Question 1
                question: 'Who wrote the classic novel "Pride and Prejudice"?',
                options: ["Charles Dickens", "Jane Austen", "Emily Brontë"],
                answer: 1,
            },
            {
                // Question 2
                question: 'Which author wrote the dystopian novel "1984"?',
                options: ["George Orwell", "Aldous Huxley", "Ray Bradbury"],
                answer: 0,
            },
            {
                // Question 3
                question: 'Who wrote the classic novel "To Kill a Mockingbird"?',
                options: ["F. Scott Fitzgerald", "Jane Austen", "Harper Lee"],
                answer: 2,
            },
            {
                // Question 4
                question: 'Which author wrote the fantasy novel "The Lord of the Rings"?',
                options: ["J.R.R. Tolkien", "C.S. Lewis", "George R.R. Martin"],
                answer: 0,
            },
            {
                // Question 5
                question: 'Who wrote the classic novel "Jane Eyre"?',
                options: ["Emily Brontë", "Charlotte Brontë", "Anne Brontë"],
                answer: 1,
            },
            {
                // Question 6
                question: 'Which author wrote the science fiction novel "Do Androids Dream of Electric Sheep?"',
                options: ["Isaac Asimov", "Philip K. Dick", "Arthur C. Clarke"],
                answer: 1,
            },
            {
                // Question 7
                question: 'Who wrote the classic novel "Wuthering Heights"?',
                options: ["Anne Brontë", "Charlotte Brontë", "Emily Brontë"],
                answer: 2,
            },
            {
                // Question 8
                question: 'Which author wrote the horror novel "Dracula"?',
                options: ["Bram Stoker", "Mary Shelley", "Edgar Allan Poe"],
                answer: 0,
            },
            {
                // Question 9
                question: 'Who wrote the classic novel "The Great Gatsby"?',
                options: ["Ernest Hemingway", "F. Scott Fitzgerald", "William Faulkner"],
                answer: 1,
            },
            {
                // Question 10
                question: 'Which author wrote the fantasy novel "Alice\'s Adventures in Wonderland"?',
                options: ["Lewis Carroll", "C.S. Lewis", "J.R.R. Tolkien"],
                answer: 0,
            },
            {
                // Question 11
                question: 'Who wrote the classic novel "The Count of Monte Cristo"?',
                options: ["Gustave Flaubert", "Victor Hugo", "Alexandre Dumas"],
                answer: 2,
            },
            {
                // Question 12
                question: 'Which author wrote the science fiction novel "Fahrenheit 451"?',
                options: ["Ray Bradbury", "Isaac Asimov", "Arthur C. Clarke"],
                answer: 0,
            },
            {
                // Question 13
                question: 'Who wrote the classic novel "The Scarlet Letter"?',
                options: ["Herman Melville", "Nathaniel Hawthorne", "Edgar Allan Poe"],
                answer: 1,
            },
            {
                // Question 14
                question: 'Which author wrote the horror novel "Frankenstein"?',
                options: ["Edgar Allan Poe", "Bram Stoker", "Mary Shelley"],
                answer: 2,
            },
            {
                // Question 15
                question: 'Who wrote the classic novel "The Adventures of Huckleberry Finn"?',
                options: ["Mark Twain", "Ernest Hemingway", "William Faulkner"],
                answer: 0,
            },
        ]
    },
    {
        // Topic
        topic: "Video games",
        questions: [
            {
                // Question 1
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 2
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 3
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 4
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 5
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 6
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 7
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 8
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 9
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 10
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 11
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 12
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 13
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 14
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 15
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 16
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 17
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 18
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 19
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 20
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 21
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 22
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 23
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 24
                question: ,
                options: ["", "", ""],
                answer: ,
            },
            {
                // Question 25
                question: ,
                options: ["", "", ""],
                answer: ,
            }
        ]
    }
]
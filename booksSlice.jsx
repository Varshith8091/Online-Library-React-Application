import { createSlice } from "@reduxjs/toolkit";
const booksSlice=createSlice({
    name:"books",
    initialState: [
      {
        id:"1",
        title: "The Diary of a Young Girl",
        author: "Anne Frank",
        description: "The Diary of a Young Girl is the story of Anne Frank, a Jewish teenager who lived in hiding in Amsterdam during the Holocaust. Though she and six of the seven others would die after being discovered and captured, Anne's father, Otto, received his daughter's writings and published them as a historical memoir.",
        rating: 4.1,
        image: "/Images/autobiography.jpg",
        genre: "Autobiography"
      },
      {
        id:"2",
        title: "Long Walk to Freedom",
        author: "Nelson Mandela",
        description: "Long Walk to Freedom is an autobiography by South Africa's first democratically elected President Nelson Mandela, and it was first published in 1994 by Little Brown & Co. The book profiles his early life, coming of age, education and 27 years spent in prison. ",
        rating: 4.5,
        image: "/Images/LWTF.jpg",
        genre: "Autobiography"
      },
      {
        id:"3",
        title: "I Know Why the Caged Bird Sings",
        author: "Maya Angelou",
        description: "I Know Why the Caged Bird Sings is a 1969 autobiography describing the young and early years of American writer and poet Maya Angelou. The first in a seven-volume series, it is a coming-of-age story that illustrates how strength of character and a love of literature can help overcome racism and trauma.",
        rating: 4.3,
        image :"/Images/IKWCBS.jpg",
        genre: "Autobiography"
      },
        {
        id:"4",
        title: "Born a Crime: Stories From a South African Childhood",
        author: "Trevor Noah",
        description: "Born a Crime: Stories from a South African Childhood is an autobiographical comedy book written by South African comedian Trevor Noah, published in 2016. The book focuses on Noah's childhood growing up in his native South Africa after he was born of an illegal interracial relationship during the apartheid era.",
        rating: 4.6,
        image :"/Images/BAC.jpg",
        genre: "Autobiography"
      },
      {
        id:"5",
        title: "Becoming",
        author: "Michelle Obama",
        description: "Becoming is the memoir by former First Lady of the United States Michelle Obama, published on November 13, 2018.",
        rating: 4.5,
        image: "/Images/becoming.jpg",
        genre: "Autobiography"
      },
      {
        id:"6",
        title: "The Autobiography of Malcolm X",
        author: "Malcolm X, Alex Haley",
        description: "The Autobiography of Malcolm X is an autobiography written by American minister Malcolm X, who collaborated with American journalist Alex Haley. It was released posthumously on October 29, 1965, nine months after his assassination.",
        rating: 4.4,
        image: "/Images/TABMX.jpg",
        genre: "Autobiography"
      },
      { 
        id:"7",
        title: "Night",
        author: "Elie Wiesel",
        description: "Night is a 1960 memoir by Elie Wiesel based on his Holocaust experiences with his father in the Nazi German concentration camps at Auschwitz and Buchenwald in 1944–1945, toward the end of the Second World War in Europe. ",
        rating: 4.3,
        image: "/Images/night.jpg",
        genre: "Autobiography"
      },
      {
        id:"8",
        title: "Hamlet",
        author: "William Shakespeare",
        description: "The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play.",
        rating: 4.4,
        image: "/Images/drama.jpg",
        genre: "Drama"
      },
      {
        id:"9",
        title: "A Streetcar Named Desire",
        author: "Tennessee Williams",
        description: "A Streetcar Named Desire is a play written by Tennessee Williams and first performed on Broadway on December 3.",
        rating: 4.3,
        image: "/Images/drama2.jpg",
        genre: "Drama"
      },
      {
        id:"10",
        title: "Death of a Salesman",
        author: "Arthur Miller",
        description: "Death of a Salesman, one of Arthur Miller's Pulitzer Prize-winning plays, narrates the last 24 hours in the life of 63-year-old Willy Loman, a failed salesman who had a distorted idea of the American Dream and work ethic. The play also explores his relationship with his wife, his sons, and his acquaintances.",
        rating: 4.2,
        image: "/Images/drama3.jpg",
        genre: "Drama"
      },
      {
        id:"11",
        title: "Othello",
        author: "William Shakespeare",
        description: "The Tragedy of Othello, the Moor of Venice, often shortened to Othello, is a tragedy written by William Shakespeare around 1603. Set in Venice and Cyprus, the play depicts the Moorish military commander Othello as he is manipulated by his ensign, Iago, into suspecting his wife Desdemona of infidelity. ",
        rating: 4.3,
        image: "/Images/drama4.jpg",
        genre: "Drama"
      },
      {
        id:"12",
        title: "Macbeth",
        author: "William Shakespeare",
        rating: 4.2,
        description: "Macbeth is one of Shakespeare's finest plays, and presents a man's conscience and the effect of guilt on his mind. A dark and bloody play, Macbeth explores reality and illusion; witchcraft and the supernatural; ambition and kingship; the natural order; light and life, darkness and death; blood and dead babies. ",
        image: "/Images/drama5.jpg",
        genre: "Drama"
      },
      {
        id:"13",
        title: "King Lear",
        author: "William Shakespeare",
        rating: 4.1,
        description: "The Tragedy of King Lear, often shortened to King Lear, is a tragedy written by William Shakespeare. It is loosely based on the mythological Leir of Britain. King Lear, in preparation for his old age, divides his power and land between his daughters Goneril and Regan, who pay homage to gain favour, feigning love.",
        image: "/Images/drama6.jpg",
        genre: "Drama"
      },
      {
        id:"14",
        title: "And Then There Were None",
        author: "Agatha Christie",
        rating: 4.5,
        description: "Considered one of the greatest mysteries of all times, ten strangers, each with a dark secret, are gathered together on an isolated island by a mysterious host. One by one, they die, and before the weekend is out, there will be none.",
        image: "/Images/mystery2.jpg",
        genre: "Mystery"
      },
      {
        id:"15",
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        rating: 4.3,
        description: "The Girl with the Dragon Tattoo is a psychological thriller novel by Swedish author Stieg Larsson. It was published posthumously in 2005, translated into English in 2008, and became an international bestseller. The Girl with the Dragon Tattoo is the first book of the Millennium series. ",
        image: "/Images/Mystery.jpg",
        genre: "Mystery"
      },
      {
        id:"16",
        title: "The Hound of the Baskervilles",
        author: "Arthur Conan Doyle",
        rating: 4.2,
        description: "The Hound of the Baskervilles is a novel written by Arthur Conan Doyle and published serially from 1901 to 1902. It is set in England, and it follows the story of the Baskerville family's superstition that there is a demonic hound that stalks and murders them.",
        image: "/Images/mystery3.jpg",
        genre: "Mystery"
      },
      {
        id:"17",
        title: "Gone Girl",
        author: "Gillian Flynn",
        rating: 4.1,
        description: "The novel Gone Girl tells the story of Nick and Amy Elliot Dunne, a married couple whose marriage is in trouble. Amy disappears on the morning of their fifth anniversary; it appears foul play is the cause and Nick is the culprit.",
        image: "/Images/mystery4.jpg",
        genre: "Mystery"
      },
      {
        id:"18",
        title: "The Silent Patient",
        author: "Alex Michaelides",
        rating: 4.2,
        description: "The Silent Patient is a shocking psychological thriller of a woman's act of violence against her husband―and of the therapist obsessed with uncovering her motive.",
        image: "/Images/mystery5.jpg",
        genre: "Mystery"
      },
      {
        id:"19",
        title: "The Da Vinci Code",
        author: "Dan Brown",
        rating: 4.0,
        description: "The Da Vinci Code follows symbologist Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris entangles them in a dispute between the Priory of Sion and Opus Dei over the possibility of Jesus and Mary Magdalene having had a child together.",
        image: "/Images/mystery6.jpg",
        genre: "Mystery"
      },
      {
        id:"20",
        title: "The Woman in Cabin 10",
        author: "Ruth Ware",
        rating: 4.0,
        description: "From New York Times bestselling author of the “twisty-mystery” (Vulture) novel In a Dark, Dark Wood, comes The Woman in Cabin 10, an equally suspenseful and haunting novel from Ruth Ware—this time, set at sea.",
        image: "/Images/mystery7.jpg",
        genre: "Mystery"
      },
      {
        id:"21", 
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        rating: 4.4,
        description: "The book focuses on Homo sapiens, and surveys the history of humankind, starting from the Stone Age and going up to the 21st century.",
        image: "/Images/history2.jpg",
        genre: "History"
      },
      {
        id:"22",
        title: "A People's History of the United States",
        author: "Howard Zinn",
        rating: 4.3,
        description: `A People's History of the United States is a 1980 nonfiction book (updated in 2003) by American historian and political scientist Howard Zinn. In the book, Zinn presented what he considered to be a different side of history from the more traditional "fundamental nationalist glorification of country".`,
        image: "/Images/history3.jpg",
        genre: "History"
      },
      {
        id:"23",
        title: "SPQR: A History of Ancient Rome",
        author: "Mary Beard",
        rating: 4.5,
        description: "SPQR: A History of Ancient Rome by Mary Beard is a single-volume history of Ancient Rome. The book covers Roman history from its semi-mythical origins in roughly 753 BC, to the decision by the Emperor Caracalla in 212 CE to make all free adult males born within the empire Roman citizens.",
        image: "/Images/History.jpg",
        genre: "History"
      },
        {
        id:"24",
        title: "The Rise and Fall of the Third Reich",
        author: "William L. Shirer",
        rating: 4.4,
        description: "The Rise and Fall of the Third Reich is Shirer's comprehensive historical interpretation of the Nazi era, positing that German history logically proceeded from Martin Luther to Adolf Hitler; and that Hitler's accession to power was an expression of German national character.",
        image: "/Images/history4.jpg",
        genre: "History"
      },
      {
        id:"25",
        title: "The History of the Peloponnesian War",
        author: "Thucydides",
        rating: 4.3,
        description: "The History of the Peloponnesian War was fought between Athens and Sparta. Both of these city-states were the heads of large leagues of allied cities. Athens' Delian League controlled the sea with a powerful navy. Sparta's Peloponnesian League controlled the mainland of Greece with a powerful army.",
        image: "/Images/history5.jpg",
        genre: "History"
      },
      {
        id:"26",
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        rating: 4.2,
        description: "A nineteenth-century boy from a Mississippi River town recounts his adventures as he travels down the river with a runaway slave, encountering a family involved in a feud, two scoundrels pretending to be royalty, and Tom Sawyer's aunt who mistakes him for Tom.",
        image: "/Images/adventure2.jpg",
        genre: "Adventure"
      },
      {
        id:"27",
        title: "Treasure Island",
        author: "Robert Louis Stevenson",
        rating: 4.1,
        description: "Treasure Island is the story of a twelve-year-old boy, Jim Hawkins, who finds a treasure map that belonged to a pirate, Captain Flint. Jim and his friends travel to a faraway island and meet ex-crew members of Captain Flint, who were also looking for the treasure and take Jim as a hostage.",
        image: "/Images/adventure3.jpg",
        genre: "Adventure"
      },
      {
        id:"28",
        title: "Moby-Dick",
        author: "Herman Melville",
        rating: 3.8,
        description: "Herman Melville's Moby Dick is the story of Captain Ahab's self-destructive obsession with the white whale called Moby Dick. It is told through the narration of Ishmael, a sailor new to Ahab's ship, the Pequod. The plot of the novel follows Ahab's manic drive to kill the whale, even as it endangers his crew.",
        image: "/Images/adventure4.jpg",
        genre: "Adventure"
      },
      {
        id:"29",
        title: "The Call of the Wild",
        author: "Jack London",
        rating: 4.3,
        description: "The Call of the Wild Book Summary. The Call of the Wild is a short adventure novel divided into seven chapters. It follows the story of Buck, who is removed from his pampered life and sold as a sled dog. As Buck learns to survive in his new surroundings, his primitive instincts begin to stir.",
        image: "/Images/adventure.jpg",
        genre: "Adventure"
      },
      {
        id:"30",
        title: "Life of Pi",
        author: "Yann Martel",
        rating: 4.2,
        description: `Life of Pi is a Canadian philosophical novel by Yann Martel published in 2001. The protagonist is Piscine Molitor "Pi" Patel, an Indian boy from Pondicherry, who explores issues of spirituality and metaphysics from an early age.`,
        image: "/Images/adventure5.jpg",
        genre: "Adventure"
      },
      {
        id:"31",
        title: "The Immortals of Meluha (Shiva Trilogy, #1)",
        author: "Amish Tripathi",
        rating: 4.13,
        description: "The Immortals of Meluha is a fantasy novel by Indian writer Amish Tripathi, his first book and the first in both the Amishverse and of Shiva Trilogy. The story is set in the land of Meluha and starts with the arrival of the Shiva. The Meluhans believe that Shiva is their fabled saviour Neelkanth. ",
        image: "/Images/mythology2.jpg",
        genre: "Mythology"
      },
      {
        id:"32",
        title: "The Secret of the Nagas (Shiva Trilogy, #2)",
        author: "Amish Tripathi",
        rating: 4.10,
        description: "The story takes place in the imaginary land of Meluha and narrates how the inhabitants of that land are saved from their wars by a nomad named Shiva. It begins from where its predecessor, The Immortals of Meluha, left off, with Shiva trying to save Sati from the invading Naga.",
        image: "/Images/Mythology.jpg",
        genre: "Mythology"
      },
      {
        id:"33",
        title: "The Oath of the Vayuputras (Shiva Trilogy, #3)",
        author: "Amish Tripathi",
        rating: 3.84,
        description: "The battle rages on and Shiva travels to the land of Pariha to consult with Vayuputras, a legendary tribe. By the time he returns, the war has ended with Sati, his wife, being murdered. An enraged Shiva destroys the capital of Meluha and Somras is wiped out of history.",
        image: "/Images/mythology3.jpg",
        genre: "Mythology"
      },
      {
        id:"34",
        title: "Mahabharata",
        author: "Vyasa",
        rating: 4.32,
        description: "The Mahābhārata is one of the two major Sanskrit epics of ancient India revered as Smriti texts in Hinduism, the other being the Rāmāyaṇa. It narrates the events and aftermath of the Kurukshetra War, a war of succession between two groups of princely cousins, the Kauravas and the Pāṇḍavas.",
        image: "/Images/mythology4.jpg",
        genre: "Mythology"
      },
      {
         id:"35",
         title: "Ramayana",
        author: "Valmiki",
        rating: 4.20,
        description: "The epic begins with the sage Vālmīki asking Nārada if there is a righteous man still left in the world, to which Nārada replies that such a man is Rāma. After seeing two birds being shot, Vālmīki creates a new form of metre called śloka, in which he is granted the ability to compose an epic poem about Rāma. He teaches his poem to the boys Lava and Kuśa, who recite it throughout the land and eventually at the court of King Rāma. Then the main narrative begins.",
        image: "/Images/mythology5.jpg",
        genre: "Mythology"
      }
      ],
    reducers:{
        addBook: (state, action) => {
            state.push(action.payload);
          }
    }
})
export const { addBook }=booksSlice.actions;
export default booksSlice.reducer;
import React from 'react'

const Preloader = () => {
    const quotes = [
        { quote: "Life is what happens when you're busy making other plans.", author: "Allen Sanders" },
        { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
        { quote: "Life is too important to be taken seriously.", author: "Oscar Wilde" },
        { quote: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.", author: "Sholom Aleichem" },
        { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
        { quote: "Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it.", author: "Sai Baba" },
        { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D.Roosevelt"},
        { quote: "Wisdom begins in wonder.", author: "Socrates"},
        { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu"},
        { quote: "To know how to wonder and question is the first step of the mind toward discovery.", author: "Louis Pasteur"},
        { quote: "The more I read, the more I acquire, the more certain I am that I know nothing.", author: "Voltaire" },
        { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
        { quote: "It is not that I'm so smart. But I stay with the questions much longer.", author: "Albert Einstein" },
        { quote: "The more you know, the more you realize you don't know.", author: " Aristotle" },
        { quote: "A wise man learns more from his enemies than a fool from his friends.", author: "Baltasar Gracián"},
        { quote: "The greatest deception men suffer is from their own opinions.", author: "Leonardo da Vinci"},
        { quote: "The quieter you become, the more you can hear.", author: "Ram Dass"}]


    return (
        <div id="loader-wrapper">
            <div id="loader" />
        </div>

    )
}

export default Preloader
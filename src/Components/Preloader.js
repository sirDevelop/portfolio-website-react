import { useState, useEffect } from 'react'

const Preloader = ({ preloaderStage, loadingDelay }) => {
    const [preloaderShown, setPreloaderShown] = useState(true)
    const quotes = [
        { quote: "I haven't failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
        { quote: "I'm not lazy, I'm just on energy-saving mode.", author: "Anonymous Developer" },
        { quote: "There are only 10 types of people: those who understand binary and those who don't.", author: "Programming Wisdom" },
        { quote: "I would debug this, but it's not a bug, it's a feature.", author: "Every Developer Ever" },
        { quote: "Coffee: because adulting is hard.", author: "Caffeine Enthusiast" },
        { quote: "I put the 'pro' in procrastination.", author: "Master of Delays" },
        { quote: "404: Quote not found. Please try refreshing.", author: "Internet Explorer" },
        { quote: "My code doesn't work, I have no idea why. My code works, I have no idea why.", author: "Anonymous Coder" },
        { quote: "Keep calm and clear cache.", author: "Tech Support" },
        { quote: "Debugging is like being a detective in a crime movie where you're also the murderer.", author: "Programming Truth" },
        { quote: "I don't always test my code, but when I do, I do it in production.", author: "The Most Interesting Dev" },
        { quote: "To err is human, to blame it on a computer is even more so.", author: "Tech Philosophy" },
        { quote: "I'm not arguing, I'm just explaining why I'm right.", author: "Stack Overflow User" },
        { quote: "Roses are red, violets are blue, unexpected token on line 32.", author: "Coding Poetry" },
        { quote: "The best thing about a boolean is that even if you're wrong, you're only off by a bit.", author: "Programmer Humor" },
        { quote: "A user interface is like a joke. If you have to explain it, it's not that good.", author: "UX Designer" },
        { quote: "I love deadlines. I love the whooshing noise they make as they go by.", author: "Douglas Adams" },
        { quote: "It's not a bug, it's an undocumented feature.", author: "Quality Assurance" },
        { quote: "99 little bugs in the code, 99 little bugs. Take one down, patch it around, 117 little bugs in the code.", author: "Developer's Lament" },
        { quote: "I'm not great at the advice. Can I interest you in a sarcastic comment?", author: "Chandler Bing" },
        { quote: "Loading... Please wait. Or don't. I'm a loading screen, not a cop.", author: "Sassy Computer" },
        { quote: "Ctrl+Z: the digital equivalent of a time machine.", author: "Undo Enthusiast" },
        { quote: "I speak fluent sarcasm and intermediate eye-roll.", author: "Modern Communication" },
        { quote: "My brain has too many tabs open.", author: "Overthinker" },
        { quote: "I'm not weird, I'm limited edition.", author: "Self-Affirmation" },
        { quote: "Exercise? I thought you said extra fries!", author: "Fitness Guru" },
        { quote: "I'm on a seafood diet. I see food and I eat it.", author: "Honest Dieter" },
        { quote: "I need a six month vacation, twice a year.", author: "Work-Life Balance Expert" }
    ]

    const index = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[index];
    
    return (
            <div id="loader-wrapper">
            {preloaderStage !== 1 ? 
            <>
            <div id="loader"/>
            <div id="loader-quote">{selectedQuote.quote} <br /> - {selectedQuote.author}</div>
                </> : <div id="loader2" />
             }
            </div>
    )
    
}

export default Preloader
import { Memory, Note, FunnyMoment, FuturePromise, CandidPhoto } from './types';

export const APP_CONFIG = {
  particleCount: 20,
  transitionDuration: 1.5,
  startDate: '2025-01-01', // YYYY-MM-DD format
};



export const DATE_IDEAS = [
  "Midnight ice cream run in pajamas",
  "Build a pillow fort and watch childhood movies",
  "Cook a 3-course meal together from scratch",
  "Go stargazing with a thick blanket",
  "Recreate our very first date",
  "Write letters to our future selves",
  "A 'no-tech' evening with board games and wine",
  "Go for a long drive with no destination",
  "Make a scrapbook of our favorite receipts and tickets",
  "Sunrise breakfast picnic",
  "Paint each other's portraits (badly)",
  "Karaoke night in the living room"
];

export const RELATIONSHIP_TRIVIA = [
  {
    question: "Where did we first meet?",
    options: ["Coffee Shop", "At Work", "Through Friends", "Online"],
    correctIndex: 0,
    successMessage: "Yes! That coffee was terrible but you were cute."
  },
  {
    question: "Who said 'I love you' first?",
    options: ["Me", "You", "We said it together", "Still waiting..."],
    correctIndex: 1,
    successMessage: "And I'm so glad you did."
  },
  {
    question: "What is my favorite food?",
    options: ["Pizza", "Sushi", "Tacos", "Pasta"],
    correctIndex: 1,
    successMessage: "Correct! You know the way to my heart."
  },
  {
    question: "What is our anniversary?",
    options: ["Jan 1st", "Feb 14th", "Dec 25th", "July 4th"],
    correctIndex: 0,
    successMessage: "A day I will never forget."
  },
  {
    question: "What is my dream travel destination?",
    options: ["Paris", "Tokyo", "New York", "Bali"],
    correctIndex: 1,
    successMessage: "Pack your bags, we're going one day!"
  }
];

export const FUTURE_PROMISES: FuturePromise[] = [
  { id: 1, text: "We will travel to Japan together one day.", color: "bg-pink-100" },
  { id: 2, text: "I promise to always make you coffee in the morning.", color: "bg-amber-100" },
  { id: 3, text: "We will adopt a puppy and name it something silly.", color: "bg-blue-100" },
  { id: 4, text: "I promise to hold your hand when you're scared.", color: "bg-rose-100" },
  { id: 5, text: "We will learn a new language together.", color: "bg-green-100" },
  { id: 6, text: "I promise to kiss you goodnight, every single night.", color: "bg-purple-100" },
  { id: 7, text: "We will build our dream house with a big garden.", color: "bg-emerald-100" },
  { id: 8, text: "I promise to listen when you need to vent.", color: "bg-teal-100" }
];

export const CANDIDS: CandidPhoto[] = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    // localPath: `/photos/candids/${i + 1}.jpg`,
    url: `https://picsum.photos/seed/candid${i + 1}/600/${Math.random() > 0.5 ? 800 : 450}`, // Mix of portrait/landscape
    caption: i % 5 === 0 ? "Pure Magic ✨" : "" 
}));

export const FUNNY_MOMENTS: FunnyMoment[] = [
  { id: 1, url: "https://picsum.photos/seed/funny1/600/800", caption: "Masterchef", sticker: "🔥", rotation: -5, comment: "Burnt toast again" },
  { id: 2, url: "https://picsum.photos/seed/funny2/600/450", caption: "Lost", sticker: "🗺️", rotation: 6, comment: "No GPS signal" },
  { id: 3, url: "https://picsum.photos/seed/funny3/600/800", caption: "Nap Time", sticker: "💤", rotation: -3, comment: "Drooling..." },
  { id: 4, url: "https://picsum.photos/seed/funny4/600/800", caption: "Serious Mode", sticker: "🤪", rotation: 4, comment: "Lasted 1 sec" },
  { id: 5, url: "https://picsum.photos/seed/funny5/600/500", caption: "Dance Queen", sticker: "💃", rotation: -6, comment: "Groovy" },
  { id: 6, url: "https://picsum.photos/seed/funny6/600/800", caption: "Bad Hair Day", sticker: "🎨", rotation: 3, comment: "Help!" },
  { id: 7, url: "https://picsum.photos/seed/funny7/600/450", caption: "Spa Night", sticker: "👻", rotation: -4, comment: "Scary!" },
  { id: 8, url: "https://picsum.photos/seed/funny8/600/800", caption: "Gamer Rage", sticker: "🎮", rotation: 5, comment: "I let you win" },
  { id: 9, url: "https://picsum.photos/seed/funny9/600/800", caption: "Ice Cream", sticker: "🍦", rotation: -2, comment: "Brain freeze" },
  { id: 10, url: "https://picsum.photos/seed/funny10/600/450", caption: "Karaoke", sticker: "🎤", rotation: 4, comment: "My ears hurt" },
  { id: 11, url: "https://picsum.photos/seed/funny11/600/800", caption: "Shopping", sticker: "🛍️", rotation: -3, comment: "Bag holder" },
  { id: 12, url: "https://picsum.photos/seed/funny12/600/500", caption: "Gym?", sticker: "💪", rotation: 2, comment: "More like nap" },
];

export const MEMORIES: Memory[] = [
  {
    id: 1,
    url: "https://picsum.photos/seed/love1/800/1000",
    caption: "The Spark",
    poetry: "Hazaron chehron mein ek tum hi the,\nJisne dil ko bina kuch kahe chu liya.",
    date: "The Beginning",
    rotation: -2
  },
  {
    id: 2,
    url: "https://picsum.photos/seed/love2/800/600",
    caption: "First Coffee",
    poetry: "Woh chai ki pyaali aur tumhari baatein,\nKaash wahin ruk jaati woh raatein.",
    date: "First Date",
    rotation: 3
  },
  {
    id: 3,
    url: "https://picsum.photos/seed/love3/800/1000",
    caption: "Sunset Hues",
    poetry: "Suraj dhal raha tha, par roshni tum thi,\nMeri zindagi ki sabse haseen shaam tum thi.",
    date: "Summer Evening",
    rotation: -1.5
  },
  {
    id: 4,
    url: "https://picsum.photos/seed/love4/800/1000",
    caption: "Unstoppable Laughter",
    poetry: "Itna hasna ke aankhon mein paani aa jaaye,\nBas tumhare saath hi yeh pagalpan bhaaye.",
    date: "Good Times",
    rotation: 4
  },
  {
    id: 5,
    url: "https://picsum.photos/seed/love5/1000/600",
    caption: "Quiet Comfort",
    poetry: "Khamoshi mein bhi guftagu ho gayi,\nJab tumhari dhadkan meri ho gayi.",
    date: "Lazy Sunday",
    rotation: -3
  },
  {
    id: 6,
    url: "https://picsum.photos/seed/love6/800/1000",
    caption: "City Lights",
    poetry: "Sheher ki bheed mein haath thama jo tera,\nLaga ke ab yahi hai basera mera.",
    date: "Night Out",
    rotation: 2
  },
  {
    id: 7,
    url: "https://picsum.photos/seed/love7/800/1000",
    caption: "Your Smile",
    poetry: "Tumhari ek muskurahat pe hum haar gaye,\nSaare gile shikwe wahin vaar gaye.",
    date: "Just Because",
    rotation: -4
  },
  {
    id: 8,
    url: "https://picsum.photos/seed/love8/1000/700",
    caption: "Intertwined",
    poetry: "Ungliyan ulajh gayin kuch iss tarah,\nJaise rooh mil gayi ho jis tarah.",
    date: "Walking",
    rotation: 1
  },
  {
    id: 9,
    url: "https://picsum.photos/seed/love9/800/1000",
    caption: "The Gaze",
    poetry: "Tum jab dekhte ho aise pyaar se,\nLagta hai hum hain sabse khaas re.",
    date: "Dinner Date",
    rotation: -2.5
  },
  {
    id: 10,
    url: "https://picsum.photos/seed/love10/800/1000",
    caption: "Favorite Spot",
    poetry: "Yeh jagah khaas hai kyunki tum saath the,\nWoh lamhe, woh pal, jo humne baante.",
    date: "Anniversary",
    rotation: 3.5
  },
  {
    id: 11,
    url: "https://picsum.photos/seed/love11/800/1000",
    caption: "Surprise",
    poetry: "Tohfe mein dil diya hai sambhaal rakhna,\nMeri dhadkano ka tum khayal rakhna.",
    date: "Birthday",
    rotation: -1
  },
  {
    id: 12,
    url: "https://picsum.photos/seed/love12/800/600",
    caption: "In The Rain",
    poetry: "Baarish ki boondein aur tumhara saath,\nBheegi hui sadak aur haathon mein haath.",
    date: "Stormy Day",
    rotation: 2.5
  },
  {
    id: 13,
    url: "https://picsum.photos/seed/love13/800/1000",
    caption: "Movie Night",
    poetry: "Parde pe kahani chal rahi thi,\nPar meri nazar tum pe dhal rahi thi.",
    date: "Cozy Night",
    rotation: -3.5
  },
  {
    id: 14,
    url: "https://picsum.photos/seed/love14/800/1000",
    caption: "Celebration",
    poetry: "Har saal tumhare saath naya lagta hai,\nPurana rishta bhi taaza lagta hai.",
    date: "New Years",
    rotation: 1.5
  },
  {
    id: 15,
    url: "https://picsum.photos/seed/love15/1000/600",
    caption: "Getaway",
    poetry: "Safar lamba tha par tum saath the,\nManzil se khoobsurat woh raaste.",
    date: "Road Trip",
    rotation: -2
  },
  {
    id: 16,
    url: "https://picsum.photos/seed/love16/800/1000",
    caption: "Messy Kitchen",
    poetry: "Thoda jalaa, thoda kaccha tha khana,\nPar sabse pyaara tha woh manzar suhana.",
    date: "Cooking",
    rotation: 4
  },
  {
    id: 17,
    url: "https://picsum.photos/seed/love17/800/1000",
    caption: "The Melody",
    poetry: "Sangeet ke shor mein ek sukoon tum ho,\nMere dil ki sabse pyaari dhun tum ho.",
    date: "Concert",
    rotation: -1.5
  },
  {
    id: 18,
    url: "https://picsum.photos/seed/love18/800/600",
    caption: "Silly Us",
    poetry: "Duniya ke liye hum shayad ajeeb hain,\nPar hum ek doosre ke sabse kareeb hain.",
    date: "Fun Day",
    rotation: 3
  },
  {
    id: 19,
    url: "https://picsum.photos/seed/love19/800/1000",
    caption: "Dreaming",
    poetry: "Aane wala kal kaisa bhi ho,\nBas usme shaamil tum hi ho.",
    date: "Future Talk",
    rotation: -3
  },
  {
    id: 20,
    url: "https://picsum.photos/seed/love20/1000/800",
    caption: "Forever",
    poetry: "Bees lamhe toh bas shuruaat hain,\nAbhi toh puri zindagi baaki hai.",
    date: "Today",
    rotation: 2
  }
];

export const NOTES: Note[] = [
  {
    id: 1,
    title: "Open when you're sad",
    content: "Jab dil udaas ho, toh bas aankhein band karna. Main wahin hoon, tumhare paas. Tumhari muskurahat meri taaqat hai, please don't lose it.",
    color: "bg-rose-50"
  },
  {
    id: 2,
    title: "Open when you miss me",
    content: "Dooriyan sirf nakshe par hoti hain, dil mein nahi. Main har pal tumhare saath hoon. Just a call away, my love.",
    color: "bg-blue-50"
  },
  {
    id: 3,
    title: "Open for a smile",
    content: "Yaad hai woh din jab humne cooking ki thi aur pura kitchen mess ho gaya tha? You looked so cute confused. Keep smiling!",
    color: "bg-yellow-50"
  },
  {
    id: 4,
    title: "Why I love you",
    content: "Tumhari sadgi, tumhari hansi, aur jis tarah tum sabka khayal rakhte ho. You make this world a better place just by being in it.",
    color: "bg-purple-50"
  },
  {
    id: 5,
    title: "A promise",
    content: "Main vaada karta hoon, chahe dhoop ho ya chaav, main hamesha tumhara haath thame rahunga. You are my forever.",
    color: "bg-green-50"
  },
  {
    id: 6,
    title: "My Favorite Memory",
    content: "Thinking back to that one night under the stars, just talking about everything and nothing. That was when I knew.",
    color: "bg-indigo-50"
  },
  {
    id: 7,
    title: "For a Rainy Day",
    content: "Rainy days are just excuses for extra cuddles. Imagine I'm there wrapping you in a warm blanket right now.",
    color: "bg-slate-50"
  },
  {
    id: 8,
    title: "You are capable",
    content: "Whatever challenge you are facing right now, you can handle it. I believe in you more than anyone.",
    color: "bg-orange-50"
  },
  {
    id: 9,
    title: "Good Morning",
    content: "Just wanted to be the first thing to make you smile today. I hope your day is as beautiful as you are.",
    color: "bg-teal-50"
  },
  {
    id: 10,
    title: "Goodnight",
    content: "Close your eyes and meet me in our dreams. Sleep well, my love.",
    color: "bg-sky-50"
  },
  {
    id: 11,
    title: "The Little Things",
    content: "Like how you scrunch your nose when you laugh, or how you take your coffee. I notice it all, and I love it all.",
    color: "bg-red-50"
  },
  {
    id: 12,
    title: "My Best Friend",
    content: "Before anything else, you are my best friend. The one I want to tell everything to, first thing in the morning and last thing at night.",
    color: "bg-cyan-50"
  },
  {
    id: 13,
    title: "Gratitude",
    content: "Thank you for being patient with me, for understanding me when I don't even understand myself.",
    color: "bg-lime-50"
  },
  {
    id: 14,
    title: "Adventure Awaits",
    content: "I can't wait for all the places we'll go and the things we'll see. But the best adventure is just being with you.",
    color: "bg-fuchsia-50"
  },
  {
    id: 15,
    title: "Just Because",
    content: "I don't need a reason to say I love you, but here is one anyway: You exist, and that is enough.",
    color: "bg-violet-50"
  },
  {
    id: 16,
    title: "When we fight",
    content: "Remember that we are on the same team. It's us against the problem, not me against you.",
    color: "bg-stone-50"
  },
  {
    id: 17,
    title: "Your Laugh",
    content: "It is literally my favorite sound in the entire universe. Do it more often, please?",
    color: "bg-amber-50"
  },
  {
    id: 18,
    title: "Safe Haven",
    content: "In your arms is the only place where the world stops spinning and I feel completely at peace.",
    color: "bg-emerald-50"
  },
  {
    id: 19,
    title: "Proud of You",
    content: "I see how hard you work and how kind you are. I am so incredibly proud to be yours.",
    color: "bg-rose-50"
  },
  {
    id: 20,
    title: "To The Future",
    content: "Growing old with you is my biggest goal. Let's make every year better than the last.",
    color: "bg-blue-50"
  }
];
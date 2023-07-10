import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
// import mock4 from "../img/mock4.png";
// import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Peter",
  lastName: "Ng",
  initials: "PN", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by jasmine tea",
    },
    {
      emoji: "🌎",
      text: "based in the US",
    },

    {
      emoji: "📧",
      text: "peterjcng@gmail.com",
    },
  ],
  socials: [
    // {
    //   link: "https://facebook.com",
    //   icon: "fa fa-facebook",
    //   label: "facebook",
    // },
    // {
    //   link: "https://instagram.com",
    //   icon: "fa fa-instagram",
    //   label: "instagram",
    // },
    {
      link: "https://github.com/petn5026",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/peterjng",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // {
    //   link: "https://twitter.com",
    //   icon: "fa fa-twitter",
    //   label: "twitter",
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Peter. As a software engineer I love a good challenge.",
  bio2: "Whenever I encounter a challenge, I'm always thinking about the solution. ",
  bio3: "Whether I'm going for a run, making dinner, or stuck in traffic. Have a challenge that needs a solution? Get in touch and let's figure it out together!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Sticky Sheet",
      live: "https://reminders-yt4i.onrender.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/PetN5026/Reminder", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
      tech: "ejs, express.js",
      description:
        "-Ran out of room on your monitor for notes? Make more virtually!",
    },
    {
      title: "Foodie",
      live: "https://hilarious-beijinho-a0bf49.netlify.app/",
      source: "https://github.com/FFT-Food-for-Thought/Foodie",
      image: mock2,
      tech: "React.js, firebase",
      description: "-Connect with liked minded peers through food.",
    },
    {
      title: "Melper",
      live: "https://next-movies-ten.vercel.app/",
      source: "https://github.com/PetN5026/nextMovies",
      image: mock3,
      tech: "Next.js, MongoDB, Tailwind.css",
      description:
        "-Let your friends know what you thought about movies you've seen.",
    },
    // {
    //   title: "Project 4",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock4,
    // },
    // {
    //   title: "Project 5",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock5,
    // },
  ],
};

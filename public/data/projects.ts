interface projectData {
  name: string
  blurb: string
  contribution: string
  link: string
  repoLink: string
  image: string
}

const projects: projectData[] = [
  {
    name: 'Beat-Blocks',
    blurb:
      'This was my a final group project at Dev Academy Aotearoa. Produced in under a week by myself and 4 other students, we utilised a JS library called Tone.js to produce a beat sequencer and 2 other musical toys. This was a complex project that relied completely on a tech-stack that none of the group had used prior, and that none of our facilitators had knowledge of. I pitched this idea and was the product owner of the project. I am incredibly proud of what we accomplished as a team. The version of the app linked here was modified by me after the conclusion of the project to make it more suitable for deployment.',
    contribution:
      'My contributions to this project were: all code for the Free-form Synth feature, all aspects of the Save/Load functionality, the animated bouncing lego blocks, debugged Play/Pause/Reset features, built the lego header, assisted in tracking "lights" feature, and helped to debug the beat sequencer component',
    link: 'http://gabriel-beat-blocks.pushed.nz/',
    repoLink: 'https://github.com/gabriel-rawcliffe/sequencer',
    image: '/images/beatblocks.png',
  },
  {
    name: 'CliffTop',
    blurb:
      'A personal project that I worked on during my time at Dev Academy Aotearoa. This is the skeleton of a rock climbing guidebook, that I will transition into a React Native mobile app before adding some more key functionality. With a complex database structure and Auth0 user registration, this was the first full-stack project I worked on independently. I used the project as a sandbox to test solutions to issues I had never come across before, and to try new aspects of React data management, such as useContext, and it was my first experience with the component library Chakra UI. THis is an on-going project and by no means a polished product',
    contribution: 'All aspects of this project were built by me.',
    link: 'https://gabriel-clifftop.pushed.nz/',
    repoLink: 'https://github.com/gabriel-rawcliffe/rock-guide',
    image: '/images/clifftop.png',
  },
  {
    name: 'Wish Connect',
    blurb:
      'This was a facilitator lead project undertaken towards the end of Dev Academy bootcamp. The project as a whole was worked on by 10 students, with planning undertaken by 2 facilitators. I worked as a pair with another student, doing pair coding for all features we undertook. This was a great opportunity to work as a part of a larger team, working on distinct features that were required to fit together to form a functional product. This project is not deployed. Please view the video for a demonstration of features I worked on. ',
    contribution:
      'In conjuction with another student I worked on the "all-wishlists.tsx", "wishlist.tsx", and "calculator.tsx" features, including front-end, API functions, DB routes, DB-functions, and testing.',
    link: 'https://vimeo.com/870865386/c36bf3e500?share=copy',
    repoLink: 'https://github.com/gabriel-rawcliffe/wish-connect-copy',
    image: '/images/wishconnect.png',
  },
  {
    name: 'Learning Blog',
    blurb: `This blog was my first experience using HTML, CSS, and JS. Made throughout the first 6 weeks of Dev Academy Aotearoa's "Foundations" course, the blog was a place to record learning plans, self reflections and well-being plans; as well as an opportunity to build something using the skills I was acquiring.`,
    contribution: '',
    link: 'https://gabriel-rawcliffe.github.io/index.html',
    repoLink: 'All aspects of this project were built by me.',
    image: '/images/blog.png',
  },
  {
    name: 'Cloudy with a chance of cocktails',
    blurb:
      'This is one of the five 24 hour group project that I built as part of Dev Academy. For this project our team of four focussed on practicing consuming external APIs to build a fun interactive web App. The point of difference for this project is that a user input gets data from one API, then transforms the resulting data and gets data from a second API. While not ground breaking, this was our first real expereince working with external APIs and was a good challenge given the timeframe. I was the product owner for this challenge',
    contribution:
      'I built the feature that consumes the weather API, from user input to data retrieval. I also built the cocktail recipe display, along with input and collaboration on other elements.',
    link: 'https://vimeo.com/870895310/741c2d4572?share=copy',
    repoLink: 'https://github.com/gabriel-rawcliffe/cloudy-cocktails',
    image: '/images/cloudy.png',
  },
]

export default projects

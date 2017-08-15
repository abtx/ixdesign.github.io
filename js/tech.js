  // Based loosely from this D3 bubble graph https://bl.ocks.org/mbostock/4063269
  // And this Forced directed diagram https://bl.ocks.org/mbostock/4062045
  let data = [{
    cat: 'Design', name: 'Sketch', value: 30,
    icon: 'public/images/logos/sketch.svg',
    desc: `
      Sketch is a modern design and wireframing tool of choice for many designers these days.
    `
  },
  {
    cat: 'Frontend', name: 'Angular', value: 25,
    icon: 'public/images/logos/angular.svg',
    desc: `
      AngularJS is a structural framework for dynamic web apps
    `
  },
  {
    cat: 'Tools', name: 'Atom', value: 2,
    icon: 'public/images/logos/atom.svg',
    desc: `
      IDE of choice.
    `
  },
  {
    cat: 'Frameworks', name: 'Bootstrap', value: 5,
    icon: 'public/images/logos/bootstrap.svg',
    desc: `
    A framework of frontend and design solutions ready to use.
    `
  },
  {
    cat: 'Tools', name: 'Google Chrome & Devtool', value: 12,
    icon: 'public/images/logos/chrome-devtools.svg',
    desc: `
    For analysing and debugging apps and websites.
    `
  },
  {
    cat: 'Libraries', name: 'D3', value: 8,
    icon: 'public/images/logos/d3.svg',
    desc: `
    Interactive data visualisation library. This very presentation of skills is built using D3.
    `
  },
  {
    cat: 'Tools', name: 'Grunt', value: 3,
    icon: 'public/images/logos/grunt.svg',
    desc: `
    Task automation tool, used only in legacy projects.
    `
  },
  {
    cat: 'Tools', name: 'Git', value: 17,
    icon: 'public/images/logos/git.svg',
    desc: `
    Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.
    `
  },
  {
    cat: 'Tools', name: 'Gulp', value: 10,
    icon: 'public/images/logos/gulp.svg',
    desc: `
    GulpJS is a task automation tools written for Node.js. It is among the most popular
    Front End and Node project automation tools nowadays.
    `
  },
  {
    cat: 'Languages', name: 'JavaScript', value: 10,
    icon: 'public/images/logos/javascript.svg',
    desc: `
    The most common use of JavaScript is to add client-side behavior to HTML pages, also known as Dynamic HTML (DHTML).
    `
  },
  {
    cat: 'Preprocessors', name: 'Less', value: 3,
    icon: 'public/images/logos/less.svg',
    desc: `
    A preprocessor language to be compiled to CSS. Not used as often anymore.
    `
  },
  {
    cat: 'Preprocessors', name: 'Sass', value: 18,
    icon: 'public/images/logos/sass.svg',
    desc: `
    Sass is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). The preprocessor of choice!
    `
  },
  {
    cat: 'Libraries', name: 'Lodash', value: 10,
    icon: 'public/images/logos/lodash.svg',
    desc: `
    Lodash is a JavaScript library which provides utility functions for
    common programming tasks using the functional programming paradigm.
    `
  },
  {
    cat: 'Platforms', name: 'Meteor', value: 20,
    icon: 'public/images/logos/meteor.svg',
    desc: `
    MeteorJS is a free and open-source JavaScript web framework written using Node.js.
    `
  },
  {
    cat: 'Design', name: 'Invision', value: 13,
    icon: 'public/images/logos/invision.svg',
    desc: `
    Invision is an online collaborative tool for creating user journeys and interactive mockups.
    `
  },
  {
    cat: 'Design', name: 'Figma', value: 7,
    icon: 'public/images/logos/figma.svg',
    desc: `
    Figma is a modern online collaborative interface design tool with interactive mockup capabilities.
    `
  },
  {
    cat: 'Tools', name: 'Yeoman', value: 10,
    icon: 'public/images/logos/yeoman.svg',
    desc: `
    Yeoman is an open source, command-line interface set of tools mainly used to generate
    structure and scaffolding for new projects, especially in JavaScript and Node.js.
    `
  },
  {
    cat: 'Design', name: 'Illustrator', value: 7,
    icon: 'public/images/logos/illustrator.svg',
    desc: `
    A vector graphics editor, useful for complex illustrations.
    `
  },
  {
    cat: 'Frameworks', name: 'Materialize', value: 6,
    icon: 'public/images/logos/materialize.svg',
    desc: `
    A modern responsive front-end framework based on Material Design.
    `
  }
];

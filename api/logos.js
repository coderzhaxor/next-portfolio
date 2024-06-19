import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router"

const logos = [
    {
        id: 1,
        name: 'HTML',
        abbr: 'HTML',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        invert: false,
        type: 'Frontend'
    },{
        id: 2,
        name: 'CSS',
        abbr: 'CSS',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        invert: false,
        type: 'Frontend'
    },{
        id: 3,
        name: 'Sass',
        abbr: 'Sass',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
        invert: false,
        type: 'Frontend'
    },{
        id: 4,
        name: 'Bootstrap',
        abbr: 'BS',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
        invert: false,
        type: 'Frontend'
    },{
        id: 5,
        name: 'Tailwind',
        abbr: 'Tailwind',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        invert: false,
        type: 'Frontend'
    },{
        id: 6,
        name: 'Javascript',
        abbr: 'JS',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        invert: false,
        type: 'Frontend'
    },{
        id: 7,
        name: 'React',
        abbr: 'React',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        invert: false,
        type: 'Frontend'
    },{
        id: 8,
        name: 'Node JS',
        abbr: 'Node JS',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
        invert: false,
        type: 'Backend'
    },{
        id: 9,
        name: 'Express JS',
        abbr: 'Express',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
        invert: urlToUrlWithoutFlightMarker,
        type: 'Backend'
    },{
        id: 10,
        name: 'Next JS',
        abbr: 'next',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        invert: true,
        type: 'Framework'
    },{
        id: 11,
        name: 'Git',
        abbr: 'Git',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        invert: false,
        type: 'Tools'
    },{
        id: 12,
        name: 'GitHub',
        abbr: 'GitHub',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        invert: true,
        type: 'Tools'
    },{
        id: 13,
        name: 'Netlify',
        abbr: 'Netlify',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
        invert: false,
        type: 'Tools'
    },{
        id: 14,
        name: 'Figma',
        abbr: 'Figma',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        invert: false,
        type: 'Tools'
    },
    {
        id: 15,
        name: 'Adobe Illustrator',
        abbr: 'AI',
        path: 'https://www.svgrepo.com/show/452147/adobe-illustrator.svg',
        invert: false,
        type: 'Tools'
    },
    {
        id: 16,
        name: 'Vercel',
        abbr: 'Vercel',
        path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
        invert: true,
        type: 'Tools'
    },
]

export default logos
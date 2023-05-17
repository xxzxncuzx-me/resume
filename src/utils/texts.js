import Gmail from '../icons/gmail.svg'; 
import Phone from '../icons/phone-solid.svg'
import Git from '../icons/github.svg'
import LinkedIn from '../icons/linkedin-in.svg'
import Telegram from '../icons/telegram.svg'
import Facebook from '../icons/facebook.svg'

import FashionBlog from '../icons/fashion-blog.jpg'
import FashionBlog2 from '../icons/fashion-blog-2.jpg'
import ItSchool from '../icons/it-school.jpg'
import ItSchool2 from '../icons/it-school-2.jpg'
import ItSchool3 from '../icons/it-school-3.jpg'

export default{
    name: "Iryna Fedorova",
    title: "Junior Frontend developer",
    about: "Junior Frontend Developer skilled in JavaScript and React. Seeking an entry-level position to apply knowledge gained through self-learning and academic coursework to contribute to a team-oriented environment. Eager to collaborate with professionals and continue growing skills in web development while contributing to meaningful projects.",

    projects: [
        { 
            id: '1', 
            name: 'IT School', 
            description: "The website created using HTML, CSS, and Bootstrap. Also includes various interactive elements such as contact forms, social media links, and animations.",
            link: 'https://github.com/xxzxncuzx-me/IT-School',
            images: [{
                    src: ItSchool
                },
                {
                    src: ItSchool2
                },
                {
                    src: ItSchool3
                }]
        },
        { 
            id: '2', 
            name: 'Fashion Blog', 
            description: "A fashion blog website created using HTML and SCSS. The website also includes various interactive elements such as social media links, buttons, and links to articles.",
            link: 'https://github.com/xxzxncuzx-me/Fashion-Blog',
            images: [{
                src: FashionBlog
            },
            {
                src: FashionBlog2
            }]
        }
    ],

    contacts: {
        caption: 'Contact me!',
        list1: [ 
            {
              img: Gmail ,
              url: 'mailto:i.fedorova4321@gmail.com',
              caption: 'i.fedorova4321@gmail.com'   
            },
            {
                img: Phone ,
                url: 'tel:+380995691633',
                caption: '+380 99 569 16 33' 
            },
            {
                img: Git ,
                url: 'https://github.com/xxzxncuzx-me',
                caption: 'xxzxncuzx_me' 
            }
        ],
        list2: [ 
            {
                img: LinkedIn ,
                url: 'https://www.linkedin.com/in/iryna-fedorova-075978272',
                caption: 'xxzxncuzx_me' 
            },
            {
                img: Telegram ,
                url: 'https://t.me/xxzxncuzx_me',
                caption: 'xxzxncuzx_me' 
            },
            {
                img: Facebook ,
                url: 'https://www.facebook.com/profile.php?id=100042738470027',
                caption: 'xxzxncuzx_me' 
            }
        ]
    }
}

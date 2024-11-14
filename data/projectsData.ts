interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Search Engine',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'ML Fundamentals',
    description: `Welcome to ML Fundamentals! Here, we break down the basics of Machine Learning in a way that’s easy to follow and ready to use. Get a handle on core ideas, from algorithms to model building, so you can confidently dive into the world of ML. Perfect for anyone looking to get started or brush up on the essentials.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/projects/ml-fundamentals',
  },
]

export default projectsData

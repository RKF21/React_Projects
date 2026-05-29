import React from 'react'
import Card from './components/card'
const App = () => {
  const jobs = [
  { id: 1, company: "Amazon", days: "5 days ago", title: "Senior UI/UX Designer", type: "Part Time", level: "Senior Level", salary: "$120/hr", location: "Dhaka, Bangladesh", img: "https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg" },
  { id: 2, company: "Google", days: "2 days ago", title: "Frontend Developer", type: "Full Time", level: "Mid Level", salary: "$95/hr", location: "New York, USA", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png" },
  { id: 3, company: "Meta", days: "1 day ago", title: "React Engineer", type: "Remote", level: "Senior Level", salary: "$140/hr", location: "London, UK", img: "https://pngimg.com/uploads/meta/meta_PNG12.png" },
  { id: 4, company: "Netflix", days: "3 days ago", title: "Product Designer", type: "Full Time", level: "Junior Level", salary: "$60/hr", location: "Toronto, Canada", img: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456" },
  { id: 5, company: "Apple", days: "7 days ago", title: "iOS Developer", type: "Part Time", level: "Senior Level", salary: "$150/hr", location: "Sydney, Australia", img: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg" },
  { id: 6, company: "Microsoft", days: "4 days ago", title: "Backend Engineer", type: "Full Time", level: "Mid Level", salary: "$110/hr", location: "Berlin, Germany", img: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png" },
  { id: 7, company: "Spotify", days: "6 days ago", title: "Data Scientist", type: "Remote", level: "Senior Level", salary: "$130/hr", location: "Stockholm, Sweden", img: "https://w7.pngwing.com/pngs/67/313/png-transparent-spotify-podcast-spotify-logo-text-logo-music-download-thumbnail.png" },
  { id: 8, company: "Airbnb", days: "8 days ago", title: "Full Stack Developer", type: "Full Time", level: "Junior Level", salary: "$75/hr", location: "Dubai, UAE", img: "https://1000logos.net/wp-content/uploads/2017/08/Color-Airbnb-Logo-768x544.jpg" },
  { id: 9, company: "Twitter", days: "10 days ago", title: "DevOps Engineer", type: "Part Time", level: "Mid Level", salary: "$85/hr", location: "Singapore", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD-q_gOndvYi44UnIQlJ2UeTkss48piNyoQw&s" },
  { id: 10, company: "Uber", days: "9 days ago", title: "Mobile Developer", type: "Remote", level: "Senior Level", salary: "$125/hr", location: "Mumbai, India", img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/uber-icon.png" },
]
  return (
    <div className='parent'>
      {jobs.map(job => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  )
}

export default App
      

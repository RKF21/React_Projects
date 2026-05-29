import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = ({ job }) => {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <img src={job.img} alt={job.company} />
                    <button>Save<Bookmark /></button>
                </div>
                <div className="center">
                    <h3>{job.company} <span>{job.days}</span></h3>
                    <h2>{job.title}</h2>
                    <div className="info">
                        <span>{job.type}</span>
                        <span>{job.level}</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                    <h3>{job.salary}</h3>
                    <p>{job.location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card
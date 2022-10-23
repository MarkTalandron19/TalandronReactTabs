import { useState, useEffect } from 'react'
import data from './data.js'

function App() {
  const [job, setJob] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  
  const getJobs = async () => {
    await setJob(data);
    setLoading(false);
  }

  useEffect(() => {
    getJobs()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const {work, date, desc, company} = job[index];

  return (
    <div className="root">
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
          <button className={index === 0? "job-btn active-btn": "job-btn false"} onClick={() => setIndex(0)}>TOMMY</button>
          <button className={index === 1? "job-btn active-btn": "job-btn false"} onClick={() => setIndex(1)}>BIGDROP</button>
          <button className={index === 2? "job-btn active-btn": "job-btn false"} onClick={() => setIndex(2)}>CUKER</button>
          </div>
        <article className="job-info">  
            <h3>{work}</h3>
            <h4>{company}</h4>
            <p>{date}</p>
            {desc.map((desc, id) => {
              return(
                <div key={id} className="job-desc">
                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="job-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
                  <p>{desc}</p>
                </div>
              );
            })}
          </article>
          </div>
        <button type="button" className="btn">More Info</button>
      </section>
    </div>
  )
}

export default App

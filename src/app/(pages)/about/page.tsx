import Image from 'next/image'

export default function About() {
  return (
    <div className="about-container" id='about-sec'>
      <h1>About Me</h1>
      <div className="content-wrapper">
        <div className="image-container">
          <Image 
            src="/AI_about_3-removebg-preview.png"
            alt="AI Circuit"
            width={400}
            height={400}
            className="ai-image"
          />
        </div>
        <div className="text-content" >
          <p>
            I am an aspiring Artificial Intelligence expert with a strong foundation in web development and a passion for emerging technologies like Generative AI, Web3, and the Metaverse. Proficient in tools like HTML, CSS, Tailwind CSS, TypeScript, Next.js, and Python. I combine technical skills with hands-on experience in sales, marketing, and client relations. Currently, I am developing my expertise in AI technologies, including OpenAI, LangChain, and Transformers, to create innovative solutions for global challenges. My goal is to leverage my skills to drive impactful change in the tech industry while continuously growing as a professional.
          </p>
          <p className='para-2'>
          Aspiring AI expert with expertise in web development and a passion for Generative AI, Web3, and the Metaverse. Skilled in HTML, CSS, Tailwind, TypeScript, Next.js, and Python. Currently exploring OpenAI, LangChain, and Transformers to build innovative solutions. Committed to driving change in tech while growing professionally.

          </p>
          <button className="download-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download CV
          </button>
        </div>
      </div>
    </div>
  )
}
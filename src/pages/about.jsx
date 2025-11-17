import Resume from '../components/Resume'; 
import AboutImg from '/About.jpg'
import BookList from '../components/BookList';
export default function About(){
    return(
        <div id="about">
            <div className="text-left">
                <div className="hero-content flex-col lg:flex-row px-35">
                    <img
                    src={AboutImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="A picture of Parvathi sitting on the beach in Chicago with the skyline in the background"
                    />
                    <div>
                    <h2 className="text-5xl font-bold">About Parvathi</h2>
                    </div>
                </div>
            </div>
            <BookList/> 

            <div id="bio-container">
                <p className="py-6">
                    My story as a developer is rooted in curiosity and a genuine desire to make technology feel effortless and accessible. What initially sparked my interest in code was the way it reminded me of  
                    the puzzles I love cracking in my spare time,  The NYT Crossword, Sudoku, Connections, Wordle etc. 
                </p>
                <p className="py-6">
                    What makes my work special is not just my proficiency with React or Java, 
                    but also a genuine desire to solve problems that matter. I believe technology should serve people first, which drives me to pay close attention to user experience and collaboration. 
                    I've always enjoyed connecting with others, sharing ideas, and building solutions that make a difference.
                </p>
                <p className="py-6">
                    Throughout my years of hands-on experience, I've moved between modernizing legacy systems and crafting sleek, scalable applications, always with an eye on clarity and function. 
                    For me, development isn't just a job. It's a continuous journey of growth, creativity, and meaningful impact.
                </p>
            </div>
        </div>
    )
}
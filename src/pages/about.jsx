import Resume from '../components/Resume'; 
import AboutImg from '/About.jpg'
import BookList from '../components/BookList';
export default function About(){
    return(
        <div id="about">
                <div className=" hero-content flex-col md:flex-row px-35 items-start">
                    <div id="about-header" className="justify-end">
                        <h1 className="text-left mb-2">About Parvathi</h1>
                        <div id="skills-section">
                        <div className="badge badge-lg badge-outline bg-[var(--mustard)] font-semibold">JavaScript</div>
                        <div className="badge badge-lg  badge-outline bg-[var(--mustard)] font-semibold">React</div>
                        <div className="badge badge-lg  badge-outline bg-[var(--mustard)] font-semibold">Angular</div>
                        <div className="badge badge-lg  badge-outline bg-[var(--mustard)] font-semibold">Java</div>
                        <div className="badge badge-lg  badge-outline bg-[var(--mustard)] font-semibold">Python</div>
                        <div className="badge badge-lg badge-outline bg-[var(--mustard)] font-semibold">HTML/CSS</div>
                        <div className="badge badge-lg badge-outline bg-[var(--mustard)] font-semibold">GIT</div>
                        <div className="badge badge-lg badge-outline bg-[var(--mustard)] font-semibold">SQL</div>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-left">
                    <img
                    src={AboutImg}
                    className="w-1/2 rounded-lg"
                    alt="A picture of Parvathi sitting on the beach in Chicago with the skyline in the background"
                    />
                    </div>
                </div>

            <div id="bio-container" className="py-6">
                <p className="py-6">
                    My story as a developer is rooted in curiosity. What initially sparked my interest in code was the way it reminded me of  
                    the puzzles I've always loved solving - word searches, unscrambles, sudoku, most recently crosswords (solved up to Saturday's puzzle one time with no hints, extremely proud of it). 
                </p>
                <p className="py-6">
                    However, unlike the puzzles I grew up with, coding allowed me an opportunity to scratch that same itch, that same unrelenting desire to find the solution, with problems that had more than "one right answer". 
                    The leaps and bounds in creative problem-solving when it comes to development makes it feel like exactly the path I'm meant to be on. 
                </p>
                <p className="py-6">
                    Throughout my years of hands-on experience, I've moved between modernizing legacy systems and crafting sleek, scalable applications, always with an eye on clarity and function. 
                    I'm looking forward to a continuous journey of growth, creativity, and meaningful impact.
                </p>
            </div>
              <div>
                <BookList/> 
                </div>
        </div>
    )
}
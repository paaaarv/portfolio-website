
import AboutImg from '/About.jpg'
export default function About(){
    return(
        <div id="about">
            <div id="bio-container" className="h-[80vh] hero-content flex-col md:flex-row py-6">
                <h2 className="w-full">Bio</h2>
                 <div className="max-w-[200px]">
                        <img
                        src={AboutImg}
                        className="rounded-lg r"
                        alt="A picture of Parvathi sitting on the beach in Chicago with the skyline in the background"
                        />
                          <div id="skills-section" className="pt-3">
                            <div className="badge">JavaScript</div>
                            <div className="badge">React</div>
                            <div className="badge">Angular</div>
                            <div className="badge">HTML/CSS</div>
                            <div className="badge">Java</div>
                            <div className="badge">Python</div>
                        </div>
                    </div>
                <div id="about-content-div">
                    <p>
                        My story as a developer is rooted in curiosity. What initially sparked my interest in code was the way it reminded me of  
                        the puzzles I've always loved solving - word searches, unscrambles, sudoku, most recently crosswords (solved up to Saturday's puzzle one time with no hints, extremely proud of it). 
                    </p>
                    <p className="py-3">
                        However, unlike the puzzles I grew up with, coding allowed me an opportunity to scratch that same itch, that same unrelenting desire to find the solution, with problems that had more than "one right answer". 
                        The leaps and bounds in creative problem-solving when it comes to development makes it feel like exactly the path I'm meant to be on. 
                    </p>
                    <p>
                        Throughout my years of hands-on experience, I've moved between modernizing legacy systems and crafting sleek, scalable applications, always with an eye on clarity and function. 
                        I'm looking forward to a continuous journey of growth, creativity, and meaningful impact.
                    </p>
                </div>
            </div>
        </div>
    )
}
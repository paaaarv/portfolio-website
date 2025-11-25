import Resume from '../components/Resume'; 
import AboutImg from '/About.jpg'
import BookList from '../components/BookList';
export default function About(){
    return(
        <div id="about">
            <h1 className="text-2xl font-bold">About Parvathi</h1>
                <div className=" hero-content flex-col md:flex-row px-35">
                    <div className="md:w-1/2 text-left">
                    <img
                    src={AboutImg}
                    className="w-3/4 rounded-lg"
                    alt="A picture of Parvathi sitting on the beach in Chicago with the skyline in the background"
                    />
                    </div>
                     <div>
                        <BookList/> 
                    </div>
                </div>

            <div id="bio-container">
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
        </div>
    )
}
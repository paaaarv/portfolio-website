import Resume from '../components/Resume'; 
import AboutImg from '../../public/About-2.jpeg'
export default function About(){
    return(
        <div id="about">
            <div className="text-left">
                <div className="hero-content flex-col lg:flex-row px-35">
                    <img
                    src={AboutImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                    <h2 className="text-5xl font-bold">About Parvathi</h2>
                    </div>
                </div>
            </div>
            <div id="bio-container">
                <p className="py-6">
                My story as a developer is rooted in curiosity and a genuine desire to make technology feel effortless and accessible. What initially sparked my interest in code was the way it reminded me of working 
                through the puzzles I love in my spare time, the crossword, sudoku, etc. My story as a developer is rooted in curiosity and a genuine desire to make technology feel effortless and accessible. What initially sparked my interest in code was the way it reminded me of working 
                through the puzzles I love in my spare time, the crossword, sudoku, etc. </p>
                <p>
                    My story as a developer is rooted in curiosity and a genuine desire to make technology feel effortless and accessible. What initially sparked my interest in code was the way it reminded me of working 
                through the puzzles I love in my spare time, the crossword, sudoku, etc. My story as a developer is rooted in curiosity and a genuine desire to make technology feel effortless and accessible. What initially sparked my interest in code was the way it reminded me of working 
                through the puzzles I love in my spare time, the crossword, sudoku, etc. 
                </p>
                 <p>
                    My story as a developer is rooted in curiosity and a genuine desire to make technology feel effortless and accessible. What initially sparked my interest in code was the way it reminded me of working 
                through the puzzles I love in my spare time, the crossword, sudoku, etc. My story as a developer is rooted in curiosity and a genuine desire to make technology feel effortless and accessible. What initially sparked my interest in code was the way it reminded me of working 
                through the puzzles I love in my spare time, the crossword, sudoku, etc. 
                </p>
            </div>
            <div className="divider"> <h2> My Experience </h2> </div>
            <Resume/> 
        </div>
    )
}
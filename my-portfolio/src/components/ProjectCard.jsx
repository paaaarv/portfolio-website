
export default function ProjectCard(){
    return(
        <div className="card w-96 bg-base-300 card-lg shadow-sm">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> Saga V - A Mocktail Brand </h2>
                <div id="tags-container">
                    <div className="mx-1 badge badge-primary outline">HTML/CSS</div>
                    <div className="mx-1 badge badge-secondary outline">jQuery</div>
                    <div className="mx-1 badge badge-tertiary outline">Github</div>
                </div>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="my-2 card-actions justify-end">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    )
}


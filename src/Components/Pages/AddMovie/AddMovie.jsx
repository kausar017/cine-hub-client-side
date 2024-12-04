
const AddMovie = () => {

    const handalSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const url = form.url.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const Release = form.Release.value;
        const rating = form.rating.value;
        const Summary = form.Summary.value;
        const movieData = { url, title, genre, duration, Release, rating, Summary }
        console.log(movieData);
        // validation

        if (!url || !url.startsWith('http')) {
            return alert("Please enter a valid URL.")
        }
        if (!title) {
            return alert("Day cannot be empty.")
        }
        if (!genre) {
            return alert("Please select a genre.")
        }
        if (!duration || duration < 60) {
            return alert("Duration must be 60 minutes.")
        }
        if (!Release) {
            return alert("Please select a release year.")
        }
        if (!rating) {
            return alert('please provaide a rating')
        }
        if (!Summary || Summary.length < 10) {
            return alert("Summary must be at least 10 characters long.")
        }

        fetch('http://localhost:5000/movies', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("Movie added successfully!")
                }
            })
            .catch(error => {
                console.log(error);
                alert("Failed to add movie. Please try again.")
            })
    }


    return (
        <div>
            <div className="flex flex-col justify-center pt-24 items-center min-h-screen container mx-auto p-3">
                <div className="card border-2 rounded-xl  w-full py-10 backdrop-blur-md">
                    <form onSubmit={handalSubmit} className="card-body">
                        <h1 className="text-center text-4xl font-bold text-white">Add Movie </h1>
                        <div className="form-control grid md:grid-cols-2 md:space-x-2">
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Movie Poster (URL)</span>
                                </label>
                                <input type="url" name="url" placeholder="Movie Poster" className="input input-bordered text-white border-white w-full bg-white/10" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Movie Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Enter movie title" className="input input-bordered  text-white border-white w-full bg-white/10" />
                            </div>
                        </div>

                        <div className="form-control grid md:grid-cols-2 items-center md:space-x-2">
                            <div>
                                <label className=" text-white">Genre</label>
                                <select id="dayInput" name="genre" className="input input-bordered  text-white border-white w-full bg-white/10">
                                    <option className="text-black" value="">Select a genre</option>
                                    <option className="text-black" value="Comedy">Comedy</option>
                                    <option className="text-black" value="Drama">Drama</option>
                                    <option className="text-black" value="Horror">Horror</option>
                                    <option className="text-black" value="Action">Action</option>
                                    <option className="text-black" value="Romance">Romance</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Duration (in minutes)</span>
                                </label>
                                <input type="number" name="duration" placeholder="Enter duration in minutes" className="input input-bordered  text-white border-white w-full bg-white/10" />
                            </div>
                        </div>

                        <div className="form-control grid md:grid-cols-2 items-center md:space-x-2">
                            <div>
                                <label className=" text-white">Release Year</label>
                                <select id="dayInput" name="Release" className="input input-bordered  text-white border-white w-full bg-white/10">
                                    <option className="text-black" value="">Select release year</option>
                                    <option className="text-black" value="2024">2024</option>
                                    <option className="text-black" value="2023">2023</option>
                                    <option className="text-black" value="2022">2022</option>
                                    <option className="text-black" value="2021">2021</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Rating</span>
                                </label>
                                <input type="number" name="rating" placeholder="Enter rating (0 to 10)" min="0" max="10" step="0.1" className="input input-bordered  text-white border-white w-full bg-white/10" />
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-white">Summary</span>
                            </label>
                            <textarea name="Summary" id="" rows="5" className=" text-white border-white w-full bg-white/10 p-3 rounded-xl outline-none" placeholder="Enter a short summary of the movie"></textarea>
                            {/* <textarea name="" id="" rows="10"></textarea> */}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add schedule</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMovie;
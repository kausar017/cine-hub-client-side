
const AboutePage = () => {
    return (
        <div id="about" className="pt-[10px]">
            <section className="p-6 container mx-auto min-h-[800px]">
                <h2 className="text-5xl font-bold mb-4 text-center text-white">About Us</h2>
                <div className="border-b-2 w-full max-w-60 mx-auto"></div>
                <br />
                <p className="text-lg mb-6 text-center max-w-[800px] mx-auto text-white">
                    Welcome to Cine Hub, your go-to platform for discovering, rating, and managing your favorite movies. Our goal is to make movie selection fun and hassle-free.
                </p>


                <div className="md:flex  justify-center items-center gap-6 max-sm:space-y-5">
                    <div className="card bg-base-200 md:w-96 shadow-xl">
                        <div className="card-body text-purple-600">
                            <h2 className="card-title"><li>Our Mission</li></h2>
                            <p> To provide a seamless platform for movie lovers, enabling them to find, rate, and enjoy their favorite movies with ease.</p>
                        </div>
                        <figure>
                            <img
                                className="transition hover:scale-150 overflow-hidden w-full"
                                src="https://media.licdn.com/dms/image/v2/C5612AQHfI0Ebq2jeRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520096082790?e=2147483647&v=beta&t=hCnrvEDPeeK1SgtIzlHD28avbyJlWSMTjmz_F5CWLZY"
                                alt="Shoes" />
                        </figure>
                    </div>

                    <div className="card bg-base-200 md:w-96 shadow-xl">
                        <div className="card-body text-purple-600">
                            <h2 className="card-title"><li>Our Vision</li></h2>
                            <p> To become the most user-friendly and trusted movie platform globally, connecting audiences with their cinematic favorites.</p>
                        </div>
                        <figure>
                            <img
                                className="transition hover:scale-150 overflow-hidden w-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2MYeeHCS2x8dFYWVbwStKyOPJGfMduTPhA&s"
                                alt="Shoes" />
                        </figure>
                    </div>

                </div>
                <div className="mt-6 text-center flex flex-col justify-center items-center">

                    <div className="card bg-base-100 image-full max-sm:w-80 shadow-xl">
                        <figure>
                            <img
                                className="transition hover:scale-150 overflow-hidden"
                                src="https://assets.roar.media/Bangla/2018/02/Imitated-Art-2.jpg?w=679"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body transition hover:scale-110 overflow-hidden">
                            <h2 className="card-title text-left text-white"># Key Features</h2>
                            <ul className="list-disc list-inside text-left max-w-md mx-auto text-white">
                                <li>Discover movies by genre and rating.</li>
                                <li>Personalized favorite movie management.</li>
                                <li>High-quality movie posters and trailers.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default AboutePage;
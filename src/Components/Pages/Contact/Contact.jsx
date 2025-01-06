import Lottie from "lottie-react";
import emailLottie from '../../../assets/Lottie/Email.json';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_poi9mb2',
            'template_5qjyxhg',
            form.current,
            'HOOv23gvgWuoj_vpZ'
        )
            .then((result) => {
                console.log('Email sent:', result.text);
                Swal.fire('Your message has been sent successfully!');
                form.current.reset();
            }, (error) => {
                console.error('Error sending email:', error.text);
                Swal.fire('Failed to send the message. Please try again.');
            });
    };

    return (
        <div className=" bg-black/20 py-8">
            <div className="container mx-auto">
                <div>
                    <h1 className='text-center text-white text-4xl font-semibold'>Contact Me</h1>
                    <div className="border-b-2 w-full max-w-60 mx-auto"></div>
                </div>
                <div className="flex justify-around items-center p-2 my-10">
                    <div className="text-center">
          
                            <Lottie className="w-full max-w-96" animationData={emailLottie}></Lottie>
              
                    </div>
                    <div className="card w-full max-w-xl shrink-0">

                 

                            <div >
                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                    className="card-body bg-black/20 rounded-md border backdrop-blur-lg shadow-lg"
                                >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            placeholder="Your name"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            placeholder="Your email"
                                            className="input input-bordered"
                                            required
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Message</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            className="textarea textarea-bordered h-24"
                                            placeholder="Please type your message"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-outline text-white hover:bg-white/30">Send</button>
                                   
                                    </div>
                                </form>

                            </div>
                 

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <div className='grid md:grid-cols-4 px-6 md:px-12 gap-5 bg-black py-10'>
                <section>
                <h5 className='text-white font-bold text-2xl uppercase pb-5'>About Us</h5>
                <div className='bg-primary h-1 w-24 mb-5'></div>
                <p className='text-xl text-gray-400'>The key to more success is to get a massage once a week, very important, major key, cloth talk. Lion! Lion! Give thanks to the most high. Look at the sunset, life is amazing</p>
                <ul className='text-2xl text-gray-400 mt-5 flex gap-5'>
                    <li className='hover:text-white'>
                        <BsFacebook></BsFacebook>
                    </li>
                    <li className='hover:text-white'>
                        <BsYoutube></BsYoutube>
                    </li>
                    <li className='hover:text-white'>
                        <BsTwitter></BsTwitter>
                    </li>
                    <li className='hover:text-white'>
                        <BsInstagram></BsInstagram>
                    </li>
                </ul>
            </section>
            {/* useful link section */}
            <section className='grid grid-cols-1 gap-2'>
                <h5 className='text-white font-bold text-2xl uppercase'>Our Service</h5>
                <div className='bg-primary h-1 w-28 mt-3 '></div>
                <Link to={'/service'} className='text-xl text-gray-400 text-decoration-none hover:text-primary pt-2'>Customer Service</Link>
                <Link to={'/service'} className='text-xl text-gray-400 text-decoration-none hover:text-primary'>Private Policy</Link>
                <Link to={'/contact'} className='text-xl text-gray-400 text-decoration-none hover:text-primary'>Contact</Link>
                <Link to={'/shop'} className='text-xl text-gray-400 text-decoration-none hover:text-primary'>Shop</Link>
                <Link to={'/aboutUs'} className='text-xl text-gray-400 text-decoration-none hover:text-primary'>About us</Link>
            </section>

            {/* opening hour section */}
            <section>
                <h5 className='text-white font-bold text-2xl uppercase'>Opening Hour</h5>
                <div className='bg-primary h-1 w-36 mt-5'></div>
                <ul className='text-xl text-gray-400 pl-0 grid grid-cols-1 gap-2 pt-5'>
                    <li>
                        <p className='text-xl text-gray-400'>Sat-Mon : 9am-8pm</p>
                    </li>
                    <li>
                        <p className='text-xl text-gray-400'>Tus-Wed : 10am-8pm</p>
                    </li>
                    <li>
                        <p className='text-xl text-gray-400'>Thus : 8am-10pm</p>
                    </li>
                    <li>
                        <p className='text-xl text-gray-400'>Fri : Off Day</p>
                    </li>
                </ul>
            </section>

            {/* store location section */}
            <section>
                <h5 className='text-white font-bold text-2xl uppercase'>Our Location</h5>
                <div className='bg-primary h-1 w-36  mt-5'></div>
                <ul className='text-xl text-gray-400 pl-0 grid grid-cols-1 gap-2 pt-5'>
                    <li className='li flex gap-3 items-center text-xl text-gray-400'><MdOutlineLocationOn></MdOutlineLocationOn> H45-483, Uttara, Dhaka, Bangladesh </li>
                    <li className='li flex gap-3 items-center text-xl text-gray-400'><MdEmail></MdEmail> carbro4747@gmail.com</li>
                    <li className='li flex gap-3 items-center text-xl text-gray-400'><BsFillTelephoneFill></BsFillTelephoneFill> +0212555216</li>
                </ul>
            </section>
        </div>
    );
};

export default Footer;
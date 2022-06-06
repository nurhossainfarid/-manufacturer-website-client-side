import React from 'react';

const Banner = () => {
    const handleControl = () => {
        
    }
    return (
        <div>
            <div className="carousel w-full relative">
                    <div id="item1" className="carousel-item w-full">
                        <img style={{height: '700px'}} src="https://img.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg?size=626&ext=jpg&uid=R62982774&ga=GA1.2.1043722416.1642986635" className="w-full relative" />
                    </div> 
                    <div id="item2" className="carousel-item w-full">
                        <img style={{height: '700px'}} src="https://img.freepik.com/free-vector/lightened-luxury-sedan-car-darkness-with-headlamps-rear-lights-lit-realistic-image-reflection_1284-28803.jpg?size=626&ext=jpg&uid=R62982774&ga=GA1.2.1043722416.1642986635" className="w-full" />
                    </div> 
                    <div id="item3" className="carousel-item w-full">
                        <img style={{height: '700px'}} src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" className="w-full" />
                    </div> 
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs relative mt-[-150px]">1</a> 
                <a href="#item2" className="btn btn-xs relative mt-[-150px]">2</a> 
                <a href="#item3" className="btn btn-xs relative mt-[-150px]">3</a> 
            </div>
        </div>
    );
};

export default Banner;
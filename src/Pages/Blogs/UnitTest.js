import React from 'react';

const UnitTest = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-1/2' src="https://uploads.toptal.io/blog/image/91299/toptal-blog-image-1434577722896-66635fe9efe5898fa701037c0da6c0f4.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">What is a unit test? Why should write unit tests?</h2>
                    <p className='text-xl'>Unit testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness <br /><br />

                    Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs.
                        
                    <br /> <br />
                    
                    Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                        
                    </p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><a href="https://www.guru99.com/unit-testing-guide.html" target='_blank'>Read More</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnitTest;
import React from 'react';

const PrototypicalInheritance = () => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure><img className='w-1/2' src="https://cdn-media-1.freecodecamp.org/images/1*cR8HEE-toHzj9rXVXbJ_ng.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">How does prototypical inheritance work?</h2>
                    <p className='text-xl'>The Prototypal Inheritance is a feature in javascript used to add methods and properties to objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. <br />
                    We said another ways, Prototype-based programming is a style of object-oriented programming in which behavior reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.  
                    </p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://en.wikipedia.org/wiki/Prototype-based_programming" target='_blank'>Read More</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrototypicalInheritance;
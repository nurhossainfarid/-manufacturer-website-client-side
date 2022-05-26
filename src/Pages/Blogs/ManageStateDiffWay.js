import React from 'react';

const ManageStateDiffWay = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-1/2' src="https://miro.medium.com/max/596/1*7CnRgjqeM8lLTNeyvpJTgg.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">What are the different ways to manage a state in a React Application?</h2>
                    <p className='text-xl'>React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. For example, if we update the state of any component like the following the webpage will not re-render itself because React State will not be able to detect the changes made. <br />
                    Basically there are 4 or 5 types of ways manage a state in a React Application. <br />
                    <ul className='px-10'>
                        <li className='list-disc text-xl font-semibold'>Local state</li>
                        <li className='list-disc text-xl font-semibold'>Global state</li>
                        <li className='list-disc text-xl font-semibold'>Server state</li>
                        <li className='list-disc text-xl font-semibold'>URL state</li>
                    </ul>
                    <h2>How we know those in details: </h2>
                    <p>
                        <span className='font-semibold'>Local (UI) state –</span>  Local state is data we manage in one or another component. The local state is most often managed in React using the useState hook. For example, a local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. 
                        <br />
                        <span className='font-semibold'>Global (UI) state –</span> Global state is data we manage across multiple components. A global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        A common example of a global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes states we think should be local might become global.
                        <br />
                        <span className='font-semibold'>Server state –</span> Data that comes from an external server must be integrated with our UI state. Server state is a simple concept but can be hard to manage alongside all of our local and global UI states.
                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error states. Fortunately, there are tools such as SWR and React Query that makes managing server state much easier.
                        <br />
                        <span className='font-semibold'>URL state –</span> Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! 0T0here are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                    </p>    
                    </p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><a href="https://www.freecodecamp.org/news/how-to-manage-state-in-your-react-apps#:~:text=The%20Four%20Kinds%20of%20React%20State%20to%20Manage&text=Local%20state,URL%20state" target='_blank'>Read More</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageStateDiffWay;
import React from 'react';

const NotStateDirectly = () => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure><img className='w-1/2' src="https://freecontent.manning.com/wp-content/uploads/managing-component-state_03.png" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">Why you do not set the state directly in React?</h2>
                    <p className='text-xl'>When you directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components. <br />
                    And we say, React compares the previous state with the updated state to decide if the component needs to be re-rendered. Modifying the state directly will disturb this process. As a result the component will behave unexpectedly. <br />
                        
                    For example, we need some data on ui, so we call const [data, setData] = useState([]). In there we can not assign data directly. Because , it can not update data.
                        
                    </p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://www.bestinterviewquestion.com/question/why-should-we-not-update-the-state-directly-in-react-qxzqu5592op" target='_blank'>Read More</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotStateDirectly;
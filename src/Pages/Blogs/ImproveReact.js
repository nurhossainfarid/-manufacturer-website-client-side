import React from 'react';

const ImproveReact = () => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <figure><img className='w-1/2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3DKIujnz89WMJykoD_aXN8tKMLGqNfQxqsDUKABxpzTb0wUch5COOJpY5MZEy_H-E3U&usqp=CAU" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">How will you improve the performance of a React Application?</h2>
                    <p className='text-xl'>There are many ways improve the performance of a React Application. But best focused option is Optimizing performance. Now, we know that what is optimizing performance and how to it improve the performance of a React Application.... <br />
                    To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components. <br />
                    Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.
                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.
                    In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.
                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:</p>
                    <ul className='px-10'>
                        <li className='list-disc text-xl font-semibold'>Keeping component state local where necessary</li>
                        <li className='list-disc text-xl font-semibold'>Memoizing React components to prevent unnecessary re-renders</li>
                        <li className='list-disc text-xl font-semibold'>Code-splitting in React using dynamic import()</li>
                        <li className='list-disc text-xl font-semibold'>Windowing or list virtualization in React</li>
                        <li className='list-disc text-xl font-semibold'>Lazy loading images in React</li>
                    </ul>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a href="https://blog.logrocket.com/optimizing-performance-react-application/" target='_blank'>Read More</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImproveReact;
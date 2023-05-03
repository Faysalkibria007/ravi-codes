import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mt-20 mb-20'>
                <h2 className='flex justify-center text-gray-400 font-semibold text-7xl mb-10 mt-5'>Question  <span className='text-black'> & </span>  Answer</h2>

                <div className='text-left'>
                    <h2 className='font-semibold text-black text-2xl'>
                        1.What is the differences between uncontrolled and controlled components?
                    </h2>
                    <p className=' mt-4 font-semibold  text-2xl text-gray-600'>
                        Uncontrolled components refer to components where the state is managed internally by the component itself, rather than by the parent component or application. <br />
                        Controlled components are components where the state is managed externally by the parent component or application.
                    </p>

                    <br />

                    <h2 className='font-semibold text-black text-2xl'>
                        2.How to validate React props using PropTypes?
                    </h2>
                    <p className='mt-4 font-semibold  text-2xl text-gray-600'>
                        To validate React props using PropTypes it need to import the PropTypes module from the prop-types package first, then define the PropTypes for your component by adding a propTypes property to component class or function.and also we can use PropTypes to validate complex props, such as objects or arrays.
                    </p>

                    <br />

                    <h2 className='font-semibold text-black text-2xl'>
                        3.What is the difference between nodejs and express js?
                    </h2>
                    <p className='mt-4 font-semibold  text-2xl text-gray-600'>
                       Node.js is a runtime environment, and provides the foundation for building server-side applications, <br />
                        Express.js is a web application framework built on top of Node.js , and provides a set of tools and features to make building web applications and APIs easier and more efficient.
                         
                    </p>

                    <br />

                    <h2 className='font-semibold text-black text-2xl'>
                        4.What is a custom hook, and why will you create a custom hook?
                    </h2>
                    <p className='mt-4 font-semibold  text-2xl text-gray-600'>
                        Custom hook is a JavaScript function that uses one or more React hooks to implement a specific behavior, which can be reused across different components in a React application. <br />
                        we can use custom hook because it can be a powerful tool for improving the quality, reusability, and maintainability of your React code. By encapsulating and abstracting away complex logic, it can also help simplify your codebase and make it easier to work with over time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
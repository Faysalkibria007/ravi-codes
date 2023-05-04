import React from "react";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
const Blog = () => {
  const ref = useRef();
  return (
    <div>
      <div className="mt-10  p-5">
        <div className="flex justify-center mb-3">
          <h1 className="font-semibold">Download Your PDF File</h1>
        </div>
        <div className="flex justify-center">
          <ReactToPrint
            trigger={() => (
              <button className="btn glass text-green-800">Print</button>
            )}
            content={() => ref.current}
          ></ReactToPrint>
        </div>
      </div>
      <div ref={ref} className="mt-20 mb-20">
        <h2 className="flex justify-center text-green-400 font-semibold text-7xl mb-10 mt-5">
          Question <span className="text-black">and</span> Answer
        </h2>

        <div className="text-left">
          <h2 className="font-semibold text-blue-500 text-2xl">
            1.What is the differences between uncontrolled and controlled
            components?
          </h2>
          <p className="font-semibold  text-2xl text-red-600">
            A:Uncontrolled components refer to components where the state is
            managed internally by the component itself, rather than by the
            parent component or application. <br />
            Controlled components are components where the state is managed
            externally by the parent component or application.
          </p>

          <br />

          <h2 className="font-semibold text-blue-500 text-2xl">
            2.How to validate React props using PropTypes?
          </h2>
          <p className="font-semibold  text-2xl text-red-600">
            A: to validate React props using PropTypes it need to import the
            PropTypes module from the prop-types package first, then define the
            PropTypes for your component by adding a propTypes property to
            component class or function.and also we can use PropTypes to
            validate complex props, such as objects or arrays.
          </p>

          <br />

          <h2 className="font-semibold text-blue-500 text-2xl">
            3.What is the difference between nodejs and express js?
          </h2>
          <p className="font-semibold  text-2xl text-red-600">
            A:Node.js is a runtime environment, and provides the foundation for
            building server-side applications, <br />
            Express.js is a web application framework built on top of Node.js ,
            and provides a set of tools and features to make building web
            applications and APIs easier and more efficient.
          </p>

          <br />

          <h2 className="font-semibold text-blue-500 text-2xl">
            4.What is a custom hook, and why will you create a custom hook?
          </h2>
          <p className="font-semibold  text-2xl text-red-600">
            A: custom hook is a JavaScript function that uses one or more React
            hooks to implement a specific behavior, which can be reused across
            different components in a React application. <br />
            we can use custom hook because it can be a powerful tool for
            improving the quality, reusability, and maintainability of your
            React code. By encapsulating and abstracting away complex logic, it
            can also help simplify your codebase and make it easier to work with
            over time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

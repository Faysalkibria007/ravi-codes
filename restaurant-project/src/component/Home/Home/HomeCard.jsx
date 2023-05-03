import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';


const HomeCard = ({chef}) => {
    
    const {picture ,name, years_of_experience, num_recipes, likes} = chef;
    return (

        <div>
            <div className="card lg:card-side bg-gray-300 shadow-xl mb-10 line-height-1 ">
                <figure><img style={{width:'300px'}} src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }} className="card-title text-3xl">{name}</h2>
                    <p className='text-2xl '>Years of Experience: {years_of_experience} years</p>
                    <p className='font-semibold'>Numbers of Recipes: {num_recipes}</p>
                    <p className='font-semibold'>Likes: {likes} <FontAwesomeIcon icon={faThumbsUp} style={{ color: "black" }} /></p>
                    <div className="card-actions justify-end">
                    <Link to="/chefinfo"><button className="btn btn-active btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default HomeCard;
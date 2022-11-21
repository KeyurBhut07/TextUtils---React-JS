import React from "react";
import pics from "../images/keyur.png";

export default function About() {
  return (
    <>
      <div className="container">
        <div className="media">
          <div className="media-body">
            <h2 className="mt-0 mb-1 text-justify">About</h2>
            <br />
            <p>
              Learner, Goal oriented, Analytic, and Hardworking student pursuing
              Master of Computer Application.
            </p>
            <p>
              What has helped me most in my life journey is my creative mindset
              and discipline. I rely on my learning to improve and channelize
              myself to be a better professional and create a difference in the
              most practical and simple manner.
            </p>
            <p>
              I want to work with a progressive organization where I could
              utilize my knowledge & skills for growth.
            </p>
            <div>
              <ul>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <strong>Birthday:</strong> 13 September 2001
                </li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <strong>Phone:</strong> +91 6353435399
                </li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <strong>Age:</strong> 20
                </li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <strong>Email:</strong> kbhut865@rku.ac.in
                </li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <strong>Address:</strong> Meta Khambhaliya , Derdi Khumbhaji ,
                  Rajkot , Gujarat , 364465;
                </li>
                <li>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  <strong>Country:</strong> Indain
                </li>
              </ul>
            </div>
          </div>
          <img className="rounded-circle ml-3" src={pics} alt="..." />
        </div>
      </div>
    </>
  );
}

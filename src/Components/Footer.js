import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
function Footer(props) {
  return (
    <div style={{backgroundColor:"#6c839a"}}>
    <div className="footer" style={{paddingTop:"0.5%"}} >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/news/create">Create</Link>
              </li>

            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>My Adress</h5>
            <address>
              46, News Road
              <br />
               News Center, Laprake , Tirane
              <br />
              Albania
              <br />
           
              <i className="fa fa-phone fa-lg" />: +355 68 88 51 965
              <br />
              <i className="fa fa-envelope fa-lg" />:{" "}
              <a href="mailto:news@email.com">news@email.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+news"
              >
                <i className="fa fa-google-plus" />
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id=news"
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/news"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/news"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/news"
              >
                <i className="fa fa-youtube" />
              </a>
              <a className="btn btn-social-icon" href="mailto:news@email.com">
                <i className="fa fa-envelope-o" />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2020 Arber Gjonaj </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
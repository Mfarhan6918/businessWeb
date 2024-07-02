import React from "react";
import "./blog.css";
import BlogImage from "../../assets/blog/blog.jpg";

const Blog = () => {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="blog_wrapper">
            <div className="blog_col">
              <h3>WE HELP BUSINESS LAUNCH, GROW AND SUCCEED</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                fugiat quasi nesciunt ullam praesentium illo consequatur minus
                dolorem reprehenderit voluptas culpa, aliquid saepe repellat?
                Ipsam debitis libero error saepe quasi nulla voluptas
                perferendis optio itaque iure blanditiis, eveniet
                isteaccusantium praesentium amet sed.
              </p>
              <div className="btn_wrapper">
                <a href="/" className="btn">
                  Get Started
                </a>
              </div>
            </div>
            <div className="blog_col">
              <div className="blog_image">
                <img src={BlogImage} alt="Blog" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;

import React from 'react';


const BlogPage: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container size1 flex-col-c-m p-l-15 p-r-15 p-t-50 p-b-50">
        <h3 className="l1-txt1 txt-center p-b-25">Coming Soon</h3>
        <p className="m2-txt1 txt-center p-b-48">Our website is under construction, follow us for update now!</p>
        <form className="w-full flex-w flex-c-m validate-form">
          <div className="wrap-input100 validate-input where1" data-validate="Valid email is required: ex@abc.xyz">
            <input className="input100 placeholder0 s2-txt2" type="text" name="email" placeholder="Enter Email Address" />
            <span className="focus-input100"></span>
          </div>
          <button className="flex-c-m size3 s2-txt3 how-btn1 trans-04 where1">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default BlogPage;

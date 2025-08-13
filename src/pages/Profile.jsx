import React from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <>
      {/* Profile Section */}
      <section className="profile-container">
        {/* Profile Header Card */}
        <div className="profile-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
            alt="Profile"
            className="profile-img"
          />
          <div className="profile-info">
            <h2>Muhammad Zeeshan</h2>
            <p className="role">User</p>
          </div>
        </div>
        {/* Personal Information */}
        <div className="info-card">
          <div className="info-header">
            <h3>Personal Information</h3>
            <NavLink to="/designer-edit">
              <button className="edit-btn">
                <i className="fa fa-pen" /> Edit
              </button>
            </NavLink>
          </div>
          <div className="info-grid">
            <div>
              <label>Full Name</label>
              <p>Muhammad Zeeshan</p>
            </div>
            <div>
              <label>Email Address</label>
              <p>abc@gmail.com</p>
            </div>
            <div>
              <label>User Role</label>
              <p>User</p>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className="info-card">
          <div className="info-header">
            <h3>Address</h3>
            <NavLink to="/designer-edit">
              <button className="edit-btn">
                <i className="fa fa-pen" /> Edit
              </button>
            </NavLink>
          </div>
          <div className="info-grid">
            <div>
              <label>Country</label>
              <p>United Kingdom</p>
            </div>
            <div>
              <label>City</label>
              <p>Leeds, East London</p>
            </div>
            <div>
              <label>Postal Code</label>
              <p>ERT 1254</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

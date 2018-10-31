/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
// Components

// Styles
import './profile.scss';

/**
 * Code
 */
const Profile = () => (
  <section className="profile">
    <h1 className="profile-title">Technical skills</h1>
    <div className="profile-div">
      <article className="profile-article">
        <h2 className="profile-article-subtitle">Front</h2>
      </article>
      <article className="profile-article">
        <h2 className="profile-article-subtitle">Back</h2>
      </article>
    </div>
  </section>
);

/**
 * Export
 */
export default Profile;

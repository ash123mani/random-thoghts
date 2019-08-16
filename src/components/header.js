import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import headerStyles from "./header.module.scss";
import idea from "../../static/idea.svg";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={headerStyles.header}>
      <p>
        <img src={idea} alt="Random Thoughts" className={headerStyles.ideaLogo} />
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </p>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import Footer from "./footer";
import Header from "./header";

import layoutStyles from "./layout.module.scss";
import "./layout.module.scss";
import RightContentBox from "./rightContentBox";

import "../styles/index.scss";

const FilterContext = React.createContext("");

export const FilterConsumer = FilterContext.Consumer;

const Layout = ({ children, pageName }) => {
  const [filterOption, setFilterOption] = useState("");
  // const option = filterOption

  const selectedFilterOption = filter => {
    console.log("button is", filter);
    setFilterOption(filter);
  };

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <div className={layoutStyles.contentContainer}>
          <RightContentBox
            onFilterSelect={selectedFilterOption}
            pageName={pageName}
          />
          <div
            className={`${layoutStyles.children} ${
              layoutStyles[`${pageName}`]
            }`}
          >
            <FilterContext.Provider value={{ option: filterOption }}>
              {children}
            </FilterContext.Provider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

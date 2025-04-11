import React from "react";
import sideBarRowCss from "./SideBarRow.module.css";

function SideBarRow({ selected, icon: Icon, title }) {
  return (
    <>
      <div
        className={`${sideBarRowCss.sideBarRow} ${
          selected && sideBarRowCss.selected
        }`}
      >
        {Icon && <Icon className={sideBarRowCss.sideBarRow__icon} />}
        <h1 className={sideBarRowCss.sideBarRow__title}>{title}</h1>
     
      </div>
    </>
  );
}

export default SideBarRow;

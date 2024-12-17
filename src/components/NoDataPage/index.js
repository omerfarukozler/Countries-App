import React from "react";
import "./NoDataPage.css"; // CSS dosyasını ekleyin
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NoDataPage = () => {
  return (
    <div className="nodata-container">
      <ErrorOutlineIcon className="nodata-icon" />

      <h1 className="nodata-title">No Data Found</h1>

      <p className="nodata-description">
        Sorry, we couldn’t find any data to display here.
      </p>
    </div>
  );
};

export default NoDataPage;

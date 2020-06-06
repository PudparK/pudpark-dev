import React from "react";

function ContentBody({ children }) {
  return (
    <div className="pk-container h-screen flex flex-col justify-center">
      {children}
    </div>
  );
}

export default ContentBody;

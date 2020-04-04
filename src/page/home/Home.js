import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="h-screen flex flex-col justify-center">
          <h3 className="text-xl">Hello World!</h3>
          <h1 className="header-text text-red">Paul Barrón</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius harum
            illo dicta adipisci, error, nam reiciendis dolores ut asperiores
            excepturi quia voluptatibus laudantium voluptatum, impedit
            doloremque. Officiis ab deleniti ipsa.
          </p>
        </div>
      </>
    );
  }
}

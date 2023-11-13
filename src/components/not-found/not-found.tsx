import React from "react";
import nomFoundImage from "../../assets/icons/not-found/not-found-image.png";

import "./_not-found.scss";

const NotFoundBlock: React.FC = () => {
  return (
    <div className="notfound">
      <h1>Упс... Страница не найдена</h1>
      <img src={nomFoundImage} alt="" />
    </div>
  );
};

export default NotFoundBlock;

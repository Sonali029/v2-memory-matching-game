import { Link } from "react-router-dom";

const BottomMenu = ({ restartGameHandler, category }) => {
  const options = [
    { link: '/category', content: '🖼 Category' },
    { link: `/category/${category}/size`, content: 'Size' }
  ];

  return (
    <div className="bottom-heading display">
      <div className="bottom-menu" onClick={restartGameHandler}>
        Restart
      </div>
      {options.map((option, index) => (
        <div className="bottom-menu" key={index}>
          <Link to={option.link}>{option.content}</Link>
        </div>
      ))}
    </div>
  );
};

export default BottomMenu;

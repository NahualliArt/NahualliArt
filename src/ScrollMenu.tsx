import React from 'react';
import Slider from 'react-slick';

interface MenuItem {
  text: string;
}

interface ScrollMenuProps {
  items: MenuItem[];
}

const ScrollMenu: React.FC<ScrollMenuProps> = ({ items }) => {
  const menuItems = items.map((item) => (
    <div key={item.text}>{item.text}</div>
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {menuItems}
      </Slider>
    </div>
  );
};

export default ScrollMenu;





import React from 'react';
import './index.css';
import FoodCourt from './icons/foodcourt.jsx';
import Tweeter from './icons/tweeter.jsx';
import VK from './icons/vk';
import Messenger from './icons/messenger';
import Heart from './icons/heart';
import Instagram from './icons/instagram';
import Facebook from './icons/facebook';
import CheckBoxActive from './icons/checkbox-active';
import Checkbox from './icons/checkbox';
import MenuToggler from './icons/menu-toggler';
import ScrollUp from './icons/scroll-up';
import ScrollDown from './icons/scroll-down';
const Icon = (props) => {
  switch (props.name) {
    case 'menu-toggler':
      return <MenuToggler {...props} />;
    case 'foodcourt':
      return <FoodCourt {...props} />;
    case 'tweeter':
      return <Tweeter {...props} />;
    case 'vk':
      return <VK {...props} />;
    case 'messenger':
      return <Messenger {...props} />;
    case 'heart':
      return <Heart {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'checkbox-active':
      return <CheckBoxActive {...props} />;
    case 'checkbox':
      return <Checkbox {...props} />;
    case 'scroll-up':
      return <ScrollUp {...props} />;
    case 'scroll-down':
      return <ScrollDown {...props} />;
    default:
      return;
  }
};
export default Icon;

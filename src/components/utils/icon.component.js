import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Icon = ({ type, name, color }) => {
  if (type === 'fontawesome') return <FontAwesome name={name} size={24} color={color} />;
  else if (type === 'foundation') return <Foundation name={name} size={24} color={color} />;
  else if (type === 'simpleLineIcons')
    return <SimpleLineIcons name={name} size={24} color={color} />;
  else if (type === 'feather') return <Feather name={name} size={24} color={color} />;
  else return <Ionicons name={name} size={24} color={color} />;
};

export default Icon;

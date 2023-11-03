import React, {PropsWithChildren} from 'react';
import {View, Text, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  Switch(name) {
    case 'circle':
      return <Icon name="circle-thin" size={12} />
      break;
    default:
      return <></>
      break;
  };
  return <></>
};

export default Icons;

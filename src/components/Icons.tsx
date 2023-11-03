import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="red" />;
    case 'cross':
      return <Icon name="times" size={38} color="blue" />;
    default:
      return <Icon name="pencil" size={38} color="#0D0D0D" />;
  }
};

export default Icons;

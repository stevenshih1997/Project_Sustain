import React from 'react';
import { Image } from 'react-bootstrap';
import LogoImage from '../../img/UBCLogo.png';

function Logo() {
  return (
    <Image src={LogoImage} responsive />
  );
}

export default Logo;

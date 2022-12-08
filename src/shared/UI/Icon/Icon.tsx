import classNames from 'classnames';
import React from 'react';
import { EIcons } from '../../enums/EIcons';
import styles from './icon.css';
import {
  MenuIcon,
  BlockIcon,
  WarningIcon,
  CommentsIcon,
  ArrowKarmaIcon,
  ShareIcon,
  SaveIcon,
  AnonIcon
} from '../../Components/icons';

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;
interface IIconProps {
  name: EIcons;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
}

export function Icon(props: IIconProps) {
  const { name = EIcons.block, size, mobileSize, tabletSize, desktopSize } = props;

  const classes = classNames(
    styles.icon,
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize }
  );

  return <div className={classes}> {switchEIcon(name)}</div>;
}

function switchEIcon(name: EIcons) {
  switch (name) {
    case EIcons.block: {
      return <BlockIcon />;
    }
    case EIcons.save: {
      return <SaveIcon />;
    }
    case EIcons.share: {
      return <ShareIcon />;
    }
    case EIcons.arrowKarma: {
      return <ArrowKarmaIcon />;
    }
    case EIcons.comments: {
      return <CommentsIcon />;
    }
    case EIcons.menu: {
      return <MenuIcon />;
    }
    case EIcons.anon: {
      return <AnonIcon />;
    }
    default: {
      return <WarningIcon />;
    }
  }
}

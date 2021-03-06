import React, { FC } from 'react';
import { Link, PageRendererProps, withPrefix } from 'gatsby';

import { rhythm, scale } from '../../utils/typography';
import styles from './nav.module.css';

export interface NavProps {
  title: string;
}

const Nav: FC<PageRendererProps & NavProps> = ({ location, title }) => {
  const rootPath = withPrefix('/');
  const atHome = location.pathname === rootPath

  const homeLink =
    atHome ? (
      <h1 style={{ ...scale(1.5), marginBottom: rhythm(1.5), marginTop: 0 }}>
        <Link style={{ boxShadow: `none`, color: `inherit` }} to={`/`}>
          {title}
        </Link>
      </h1>
    ) : (
      <h3 style={{ marginTop: 0 }}>
        <Link style={{ boxShadow: `none`, color: `inherit` }} to={`/`}>
          {title}
        </Link>
      </h3>
    );

  return <nav className={!atHome ? styles.nav : undefined}>{homeLink}</nav>;
};

export default Nav;

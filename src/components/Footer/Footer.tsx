import companyLogo from '../../img/company-logo.svg';
import gitHub from '../../img/git-hub.svg';
import twitter from '../../img/twitter.svg';
import heart from '../../img/heart.svg';

const footerLinks = [
  {
    id: 1,
    img: gitHub,
    alt: 'gitHub logo',
    link: '/',
  },
  {
    id: 2,
    img: twitter,
    alt: 'twitter logo',
    link: '/',
  },
  {
    id: 3,
    img: heart,
    alt: 'heart logo',
    link: '/',
  }
];

export const Footer = () => (
  <footer className='footer'>
    <p className='footer__text'>
      performed as part of a test
      <br />
      case for the company
    </p>

    <img
      className='footer__logo'
      src={companyLogo}
      alt='company logo'
    />

    <article className='footer__items'>
      {footerLinks.map(({ id, img, alt, link }) => (
        <a
          className='footer__link'
          key={id}
          href={link}
        >
          <img
            className='footer__img'
            src={img}
            alt={alt}
          />
        </a>
      ))}
    </article>

    <p className='footer__year'>2023</p>
  </footer>
);
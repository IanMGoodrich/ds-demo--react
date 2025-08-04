import * as React from 'react';
import { useEffect, useRef } from 'react';
import './img-basic-card.css';
import type { Theme } from '../../utilities/types';

interface IImgBasicCardProps {
  theme: Theme,
  eyebrow: string,
  heading: string,
  imgSrc: string,
  description: string,
  linkUrl?: string,
  linkText?: string, 
  buttonOnClick?: () => void
}


const ImgBasicCard: React.FunctionComponent<IImgBasicCardProps> = (props) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  
  // if linkUrl and no linkText will make entire card clickable
  const setSilentLink = (props:IImgBasicCardProps) => {    
    if (props.linkUrl && !props.linkText) {
      const anchor = anchorRef.current;
      anchor?.classList.add('silent')
    }
  }
  
  const generateLinkButtonMarkup = (props: IImgBasicCardProps) => {
    if (props.linkUrl) {
      return (
        <a className="primary-link" ref={anchorRef} href={props.linkUrl} aria-label={props.linkText ? props.linkText : props.heading}>
          { props?.linkText}
        </a>
      )
    }
    if (props.linkText && props.buttonOnClick) {
      return (
        <button className="primary-button" 
          onClick={props.buttonOnClick}>
          {props.linkText}
        </button>
      )
    }
  }
  
  useEffect(() => setSilentLink(props), [props]);

  return (
    <section className="img-basic-card" element-theme={props.theme}>
      <div className="img-basic-card--top-content">
        <p className="eyebrow">{props.eyebrow}</p>
        <h3 className="heading">{props.heading}</h3>
        <img className="image" src={props.imgSrc} />
      </div>
      <div className="img-basic-card--main-content">
        <p className="description">{props.description}</p>
        {generateLinkButtonMarkup(props)}
      </div>
    </section>
  ) ;
};


export default ImgBasicCard;

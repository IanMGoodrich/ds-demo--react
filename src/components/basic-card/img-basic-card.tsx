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
  useEffect(() => setSilentLink(props), []);
  const anchorRef = useRef(null);

  // if linkUrl and no linkText will make entire card clickable
  const setSilentLink = (props:IImgBasicCardProps) => {    
    if (props.linkUrl && !props.linkText) {
      const anchor = anchorRef.current as unknown as HTMLAnchorElement;
      anchor?.classList.add('silent')
    }
  }
  return (
    <section className="img-basic-card" element-theme={props.theme}>
      <div className="img-basic-card--top-content">
        <p className="eyebrow">{props.eyebrow}</p>
        <h3 className="heading">{props.heading}</h3>
        <img className="image" src={props.imgSrc} />
      </div>
      <div className="img-basic-card--main-content">
        <p className="description">{props.description}</p>
        { props.linkUrl && (
          <a className="primary-link" ref={anchorRef} href={props.linkUrl}>
            { props?.linkText}
          </a>
        )}
        {
          props.linkText && props.buttonOnClick && !props.linkUrl && (
            <button className="primary-button" 
              onClick={props.buttonOnClick}>
              {props.linkText}
            </button>
          )
        }
      </div>
    </section>
  ) ;
};


export default ImgBasicCard;

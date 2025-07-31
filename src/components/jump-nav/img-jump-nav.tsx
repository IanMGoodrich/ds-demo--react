import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import './img-jump-nav.css';
import { useMediaQuery } from '../../utilities/mediaQuery';
import { seed } from '../../utilities/methods';
import type { Theme } from '../../utilities/types';
export interface JumpNavJump {
  id: string;
  label: string;
}

export interface JumpNavProps {
  slug: string;
  headerId?: string;
  theme: Theme;
}

interface InfoState {
  topOffset: number;
  navHeightOffset: number;
  activeEl: string;
  mobileLabel: string;
}

const ImgJumpNav: React.FC<JumpNavProps> = ({ slug, headerId, theme }) => {
  const isMobile = !useMediaQuery('(min-width: 768px)');
  const headerRef = useRef<HTMLElement | null>(null);
  const selfRef   = useRef<HTMLElement | null>(null);
  const targetsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  const infoRef = useRef<InfoState>({
    topOffset: 0,
    navHeightOffset: 0,
    activeEl: '',
    mobileLabel: 'Scroll to',
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [info, setInfo] = useState<InfoState>(infoRef.current);
  const [jumps, setJumps] = useState<JumpNavJump[]>([]);

  useEffect(() => {
    if (isMobile && mobileOpen) {
      return selfRef.current?.setAttribute('mobile-open', 'mobile-open')
    } return selfRef.current?.removeAttribute('mobile-open')
  }, [mobileOpen, isMobile])

  useEffect(() => {
    infoRef.current = info;
  }, [info]);

  useEffect(() => {
    headerRef.current = headerId
      ? document.getElementById(headerId)
      : null;
    
    selfRef.current = document.getElementById(`jump-nav-${seed}`);
    targetsRef.current = document.querySelectorAll<HTMLElement>(
      `[id^=${slug}]`
    );

    const list: JumpNavJump[] = [];
    targetsRef.current.forEach(el => {
      const label = el.dataset.link?.trim();
      const id    = el.id.trim();
      if (label && id) list.push({ id: `#${id}`, label });
    });
    setJumps(list);
  }, [slug, headerId]);

  useEffect(() => {
    const updateOffset = () => {
      const topOffset =
        headerRef.current?.getBoundingClientRect().height ?? 0;
      const navHeightOffset =
        selfRef.current?.getBoundingClientRect().height ?? 0;

      setInfo(prev =>
        prev.topOffset === topOffset &&
        prev.navHeightOffset === navHeightOffset
          ? prev
          : { ...prev, topOffset, navHeightOffset }
      );
    };

  updateOffset();
    const ro = new ResizeObserver(updateOffset);
    if (headerRef.current) ro.observe(headerRef.current);
    if (selfRef.current) ro.observe(selfRef.current);
    return () => ro.disconnect();
  }, [slug, headerId]);

  const toggleMobileMenu = () => {
    return setMobileOpen(!mobileOpen)
  }

  const updateActiveTab = useCallback(() => {
    const { topOffset, navHeightOffset, activeEl } = infoRef.current;
    const threshold = topOffset + navHeightOffset + 32;
    let newActive = '';
    let newMobileLabel = ''
    
    const targets = targetsRef.current;
    if (targets && targets.length) {
      // pick the last section whose top is above the threshold
      targets.forEach(el => {        
        if (el.getBoundingClientRect().top < threshold + (el.offsetHeight * .1)) {
          newActive = `#${el.id}`;          
          newMobileLabel = el.getAttribute('data-link') ?? '';
        }
      });

      // if first section has scrolled past 50% down screen, clear
      const firstTop = targets[0].getBoundingClientRect().top;
      if (firstTop > window.innerHeight * 0.5) {
        newActive = '';
      }
    }

    if (newActive !== activeEl) {
      setInfo(prev => ({ ...prev, activeEl: newActive }));
      if (newMobileLabel !== '') {
        setInfo(prev => ({ ...prev, mobileLabel: newMobileLabel }));
      }
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          updateActiveTab();
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [updateActiveTab]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (!href) return;

      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;

      const targetPos =
        target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top:
          targetPos -
          infoRef.current.navHeightOffset -
          infoRef.current.topOffset -
          8,
        behavior: 'smooth',
      });

      if (isMobile) {
        setMobileOpen(false);
      }
    },
    []
  );
  
  return (
    <nav
      ref={selfRef}
      id={`jump-nav-${seed}`}
      className="img-jump-nav"
      aria-label="jump navigation"
      element-theme={theme}
      style={
        { ['--top-offset' as string]: `${info.topOffset}px` } as React.CSSProperties
      }
    >
      { isMobile && 
        <button
          className={`img-jump-nav--mobile-button primary-button ${theme}`}
          onClick={toggleMobileMenu}
        >
          {info.mobileLabel}
        </button> 
      }
      <ul className="img-jump-nav--list">
        {jumps.map(({ id, label }) => (
          <li key={`${id}-${seed}`} className="img-jump-nav--item">
            <a
              aria-current={info.activeEl === id ? 'page' : undefined}
              href={id}
              onClick={handleClick}
              className="img-jump-nav--link"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ImgJumpNav;

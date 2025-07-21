import { useState, useEffect } from 'react';

/**
 * useMediaQuery
 * React hook that returns `true` when the given CSS media query matches.
 *
 * @param query A valid CSS media query string, e.g. '(min-width: 640px)'
 * @returns `true` if the query currently matches, otherwise `false`
 */
export function useMediaQuery(query: string): boolean {
  // On SSR, window is undefined — assume no match
  const isClient = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  // Initialize state: if client do a real matchMedia call, else false
  const [matches, setMatches] = useState<boolean>(() =>
    isClient ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    if (!isClient) {
      // Nothing to do on the server
      return;
    }

    const mql = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // Listen for changes
    mql.addEventListener('change', handler);

    // Update state in case it changed since first render
    if (mql.matches !== matches) {
      setMatches(mql.matches);
    }

    // Cleanup
    return () => {
      mql.removeEventListener('change', handler);
    };
  }, [query, isClient]);

  return matches;
}
import {useState, useEffect} from 'react'

// Provides a boolean after scrolled 100px by default

export default function useHideAfterScroll() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scollListener = window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener(scollListener);
    };
  }, []);
   return [show, setShow]
}
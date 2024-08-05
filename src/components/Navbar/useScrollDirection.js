// this is new custoem hook for nav bar scroll direction
import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevOffset, setPrevOffset] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentOffset = window.pageYOffset;
      const direction = currentOffset > prevOffset ? "down" : "up";
      const visible = direction === "up" || currentOffset < 10;
      
      setScrollDirection(direction);
      setVisible(visible);
      setPrevOffset(currentOffset);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [prevOffset]);

  return visible;
};

export default useScrollDirection;
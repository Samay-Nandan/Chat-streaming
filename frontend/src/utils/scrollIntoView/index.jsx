import { useRef, useEffect } from "react";

export const ScrollIntoView = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());
  return <div ref={elementRef} />;
};

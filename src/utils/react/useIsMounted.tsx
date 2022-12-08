import React, { useEffect } from 'react';

export function useIsMounted(): Array<boolean> {
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return [isMounted];
}

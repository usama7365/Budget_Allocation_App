import React, { useMemo } from 'react';

function Timer({ data }) {
  const processedData = useMemo(() => {
    if (Array.isArray(data)) {
      return data.map((item) => item * 2);
    } else {
      return [];
    }
  }, [data]);

  return <div>{processedData}</div>;
}

export default Timer;

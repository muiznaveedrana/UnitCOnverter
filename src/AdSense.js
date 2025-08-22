import React, { useEffect } from 'react';

const AdSense = ({ 
  client = 'ca-pub-XXXXXXXXXXXXXXXX', 
  slot = 'XXXXXXXXXX', 
  format = 'auto',
  responsive = true,
  style = {}
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
  );
};

export default AdSense;
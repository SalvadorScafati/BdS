import React from 'react';

const Issu = () => {
  return (
    <div style={{ position: 'relative', paddingTop: 'max(60%, 326px)', height: 0, width: '100%' }}>
      <iframe
        allow="clipboard-write"
        sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
        allowFullScreen={true}
        style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, right: 0, top: 0, bottom: 0 }}
        src="https://e.issuu.com/embed.html?d=bds_final_37&u=bocadesapo"
        title="Embedded Issuu Document"
      />
    </div>
  );
};

export default Issu;

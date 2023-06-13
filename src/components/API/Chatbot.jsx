import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    const kommunicateSettings = {
      appId: "38ae269df635042ac82144f809395d805",
      popupWidget: true,
      automaticChatOpenOnNavigation: true
    };

    if (!window.kommunicate) {
      (function(d, m) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    }
  }, []);

  return <div></div>;
};

export default Chat;
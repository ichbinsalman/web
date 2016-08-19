import React from 'react';
import styles from './Footer.css';

export default () => (
  <small className={styles.links}>
    An&nbsp;<a href="https://github.com/yasp-dota/yasp">open source</a>&nbsp;volunteer project
    &bull; Follow on&nbsp;<a href="https://twitter.com/yasp_dota">Twitter</a>&nbsp;
    &bull; Join us on&nbsp;<a href="https://discord.gg/0o5SQGbXuWALMIGQ" target="_blank">Discord</a>&nbsp;
    &bull; Dota 2 API powered by&nbsp;<a href="http://store.steampowered.com/">Steam</a>&nbsp;
    &bull; Parsing by&nbsp;<a href="https://github.com/skadistats/clarity">clarity</a>&nbsp;
    &bull; Cheese icon by&nbsp;<a href="http://www.belcu.com">Belc</a>&nbsp;on&nbsp;<a href="http://www.flaticon.com">flaticon</a>&nbsp;
  </small>
);

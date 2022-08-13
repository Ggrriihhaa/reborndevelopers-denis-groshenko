import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass(),
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
    },
  ]
};

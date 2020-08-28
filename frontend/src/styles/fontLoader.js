import WebFont from 'webfontloader';

export const fontLoader = () => {
  WebFont.load({
    google: {
      families: [
        'Roboto:300,400,500,600,700,800,900',
      ],
    },
  });
}

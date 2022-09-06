import breakpoints from './breakpoints';

const query = {
  MEDIA_QUERY_SM: `@media only screen and (max-width: ${breakpoints.sm})`,
  MEDIA_QUERY_MD: `@media only screen and (max-width: ${breakpoints.md})`,
  MEDIA_QUERY_LG: `@media only screen and (max-width: ${breakpoints.lg})`,
  MEDIA_QUERY_XL: `@media only screen and (max-width: ${breakpoints.xl})`,
  MEDIA_QUERY_2XL: `@media only screen and (max-width: ${breakpoints['2xl']})`,
};

export default query

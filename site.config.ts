import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '4ccb5c8b285c4eee8e385711f51bc204',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'wiley blog',
  domain: 'wileyzhang.com',
  author: 'wiley',

  // open graph metadata (optional)
  description: 'wiley blog - AI/LLM developer blog',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: '2skydev',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d2daa37-61d0-45b6-b333-9a2bd0bdc3ee%2Fprofile_%25E1%2584%2580%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AA%25E1%2584%258C%25E1%2585%25B5%25E1%2586%25AF_circle.png?table=block&id=d1e89e9e-42eb-4ebf-9486-ae0374039efc&spaceId=2eb5336b-2edb-42d0-bc6c-95d72d4d1b74&width=250&userId=bef10e95-202b-4b6b-9626-7af866b6f9ba&cache=v2',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '废话集',
      pageId: 'c348401bdd5f4b1d951654f14ae16ae9',
    },
    {
      title: '书单',
      pageId: '10f1cc1541124841aa5fdeccaa83782c',
    },
    {
      title: '片单',
      pageId: '5fe8e8734712467899f539cf7f5f6faf',
    },
    {
      title: '照片',
      pageId: 'b959adb427fe426da843e9013e682ddd',
    },
    {
      title: '归档',
      pageId: '74b8534d1365499e8abf30b195aaed31',
    },
    {
      title: '留言',
      pageId: 'b90aa6f8013742c9a37e3fe396a92932',
    },
    {
      title: '关于',
      pageId: '5a8e5c19c85646058d2bad8dbc13308e',
    },
  ],

  // -------- custom configs (2skydev) -------------
  // date-fns format string
  dateformat: 'yyyy/MM/dd',

  // post page - hidden properties
  hiddenPostProperties: [],
  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: false,
});

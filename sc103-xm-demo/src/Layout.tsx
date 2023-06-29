/**
 * This Layout is needed for Starter Kit.
 */
import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  getPublicUrl,
  LayoutServiceData,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';


// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;
  const fields = route?.fields as RouteFields;
  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';

  return (
    <>
    
      <Head>
     
    
        <title>{fields?.Title?.value?.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <link rel="stylesheet" type="text/css" href={`${publicUrl}/css/bootstrap.min.css`} />

      <link rel="stylesheet" type="text/css" href={`${publicUrl}/css/style.css`} />
 
      <link rel="stylesheet" href={`${publicUrl}/css/responsive.css`}/>
 


      <link rel="stylesheet" href={`${publicUrl}/css/jquery.mCustomScrollbar.min.css`} />
     
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
     
      <link rel="stylesheet" href={`${publicUrl}/css/owl.carousel.min.css`} />
      <link rel="stylesoeet" href={`${publicUrl}/css/owl.theme.default.min.css`} />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />

 

   
     
      <script src={`${publicUrl}/js/jquery.min.js`} type="text/javascript"></script>
      <script src={`${publicUrl}/js/popper.min.js`} type="text/javascript"></script>
      <script src={`${publicUrl}/js/bootstrap.bundle.min.js`} type="text/javascript"></script>
      
      <script src={`${publicUrl}/js/plugin.js`} type="text/javascript"></script>
    
      <script src={`${publicUrl}/js/jquery.mCustomScrollbar.concat.min.js`} type="text/javascript"></script>
      <script src={`${publicUrl}/js/owl.carousel.js`} type="text/javascript"></script>
      <script src={`${publicUrl}/js/custom.js`} type="text/javascript"></script>
 

     
      <script type="text/javascript">
var $= jQuery.noConflict();
</script>
     
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header>
          <div id="header">{route && <Placeholder name="headless-header" rendering={route} />}</div>
        </header>
        <main>
          <div id="content">{route && <Placeholder name="headless-main" rendering={route} />}</div>
        </main>
        <footer>
          <div id="footer">{route && <Placeholder name="headless-footer" rendering={route} />}</div>
        </footer>
      </div>
    </>
  );
};

export default Layout;

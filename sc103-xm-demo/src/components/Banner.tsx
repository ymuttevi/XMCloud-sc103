import { LinkField,Text,Link, Image, Field, withDatasourceCheck, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import { ComponentProps } from 'lib/component-props';


type BannerSlideList = ComponentProps &{
 fields:{
    BannerID:number;
    BannerImage: ImageField;
    BannerTitle:Field<string>;
    BannerLink:LinkField;
    SlideIndex: string;
}
};

type BannerProps = ComponentProps & {
  fields: {
    BannerText: Field<string>;
    BannerSlides: BannerSlideList[];
   
  };
};

const Banner = ({ fields }: BannerProps): JSX.Element => (
  
   <div className="container-fluid">
            <div className="banner_section layout_padding">
               <h1 className="banner_taital"><Text field={fields.BannerText}/> </h1>
               <div id="my_slider" className="carousel slide" data-ride="carousel">
               
                  <div className="carousel-inner">
 
                    {fields.BannerSlides.map((banner,index) =>
                       <li key={index} >
                      
                     <div className={`carousel-item ${index == 0 ? 'active' : ''}`}>
                        <div className="image_main">
                           <div className="container">
                             <Image field={banner.fields.BannerImage} height="80%"  className="image_1"  />
                              <div className="contact_bt"><Link  field={banner.fields.BannerLink}><Text  field={banner.fields.BannerTitle}/></Link></div>
                           </div>
                        </div>
                     </div>
               </li>
                    )}
                  </div>
                  <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                  <i className="fa fa-angle-left"></i>
                  </a>
                  <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                  <i className="fa fa-angle-right"></i>
                  </a>
               </div>
            </div>
         </div>
   
  );
                    
  export default withDatasourceCheck()<BannerProps>(Banner);
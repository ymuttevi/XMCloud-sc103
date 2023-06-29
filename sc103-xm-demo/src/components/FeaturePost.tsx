import { LinkField,Text,Link, Image, Field, withDatasourceCheck, ImageField} from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type SocialIconList = ComponentProps &{
 fields:{
    SocialID:number;
    SocialIcon:ImageField;
    SocialLink:LinkField;
}
};
type RecentPostsList = ComponentProps &{
fields:{
    
    PostImage: ImageField;
    PostTitle:Field<string>;
    PostDescription:Field<string>;
    PostLink:LinkField;
}
};
type FeaturePostProps = ComponentProps & {
  fields: {
    FeatureImage:ImageField;
    FeatureIcon:ImageField;
    FeatureDate:Date;
    FeatureTitle:Field<string>;
    FeatureDescription:Field<string>;
    FeatureLink:LinkField;
    SocialIconsList:SocialIconList[]; 
    Heading:Field<string>;
    Posts:RecentPostsList[];
  };
};

const FeaturePost = ({ fields }: FeaturePostProps): JSX.Element => (
    <>
    <div className="about_section layout_padding">
    <div className="container">
      <div className="row col-12">
        
          <div className="col-lg-8 col-md-8 col-sm-12">
             <div className="about_img"><Image  field={fields.FeatureImage}/></div>
             <div className="like_icon"><Image field={fields.FeatureIcon}/></div>
           
             <h2 className="most_text"><Text field={fields.FeatureTitle}/></h2>
             <p className="lorem_text"><Text field={fields.FeatureDescription} /></p>
             <div className="social_icon_main">
                <div className="social_icon">

                   <ul>
          {fields.SocialIconsList.map((social,index) =>       
                <li >
            <Link key={index} field={social.fields.SocialLink}>
            <Image field={social.fields.SocialIcon}/>
            </Link>
            </li>
          )}
            </ul>
                </div>
                
                <div className="read_bt"><Link field={fields.FeatureLink}>Read More</Link></div>
             </div>
             </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="newsletter_main">
                     <h1 className="recent_taital"><Text field={fields.Heading} /></h1>
                     {fields.Posts.map((post,index)=>
                   
                     <div className="recent_box" key={index}>
                        <div className="recent_left">
                           <div className="image_6"><Image field={post.fields.PostImage}/></div>
                        </div>
                        <div className="recent_right">
                           <h3 className="consectetur_text"><Text field={post.fields.PostTitle}/></h3>
                           <p className="dolor_text"><Text field={post.fields.PostDescription}/></p>
                           <h6 className=""><Link field={post.fields.PostLink}>Read more </Link> </h6>
                        </div>
                     </div>
                       
                       )
                    }
                  </div>
               </div>
            </div>
         </div>
    </div>
</>
  );
  
  export default withDatasourceCheck()<FeaturePostProps>(FeaturePost);
  
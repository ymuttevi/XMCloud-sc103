import { LinkField,Text,Link, Image, Field, withDatasourceCheck, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type MenuList = ComponentProps &{
 fields:{
    ID:number;
    MenuTitle:Field<string>;
    MenuLink:LinkField;
}
};
type ContactMenuList = ComponentProps&{
fields:{
MenuIcon:ImageField;
MenuLink:LinkField;
MenuText:Field<string>;

}

};
type FooterProps = ComponentProps & {
  fields: {
    
    Logo:ImageField;
    LogoLink:LinkField;
    MenuList:MenuList[]; 
    ContactMenuList:ContactMenuList[];
    CopyRightText:Field<string>;
  };
};
const Footer = ({ fields }: FooterProps): JSX.Element => (
    <>
    <div className="footer_section layout_padding">
         <div className="container">
            <div className="footer_logo">    <Link field={fields.LogoLink}><Image field ={fields.Logo}  /> </Link>
            </div>
            <div className="footer_menu">
               <ul>
               {fields.MenuList.map(( menu,index) =>
                 
              <li>
                 <Link  key={index} field={menu.fields.MenuLink}><Text field={menu.fields.MenuTitle}/></Link>
               </li>
                )}
                
               </ul>
            </div>
            <div className="contact_menu">
               <ul>
               {fields.ContactMenuList.map(( menu,index) =>
                 
                 <li>
                 <Image field={menu.fields.MenuIcon}></Image>   <Link  key={index} field={menu.fields.MenuLink}><Text field={menu.fields.MenuText}/></Link>
                  </li>
                   )}
               </ul>
            </div>
         </div>
      </div>
   
     
      <div className="copyright_section">
         <div className="container">
            <p className="copyright_text"><Text field={fields.CopyRightText}></Text></p>
         </div>
      </div>
               
    </>
      

  );
  
  export default withDatasourceCheck()<FooterProps>(Footer);
  
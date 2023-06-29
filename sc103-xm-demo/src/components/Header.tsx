import { LinkField,Text,Link, Image, Field, withDatasourceCheck, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

import { ComponentProps } from 'lib/component-props';

type MenuList = ComponentProps &{
 fields:{
    ID:number;
    MenuTitle:Field<string>;
    MenuLink:LinkField;
}
};

type HeaderProps = ComponentProps & {
  fields: {
    Bannerbg:ImageField;
    Logo:ImageField;
    LogoLink:LinkField;
    MenuItemsList:MenuList[]; 
  };
};
const Header = ({ fields }: HeaderProps): JSX.Element => (
    <div className="header_section">
    <div className="container-fluid header_main">
    <div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/banner-bg.png'})` 
}}>
    
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link  className="logo" field={fields.LogoLink}><Image className="lg-space" field ={fields.Logo}  /> </Link>
  
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
               {fields.MenuItemsList.map(( menu,index) =>
                 
              
                <Link className="nav-item nav-link" key={index} field={menu.fields.MenuLink}><Text field={menu.fields.MenuTitle}/></Link>
              
               )}
               
             </ul>
             </div>
             </nav>
          </div>
        
      
      
    </div>

    </div>
  );
  
  export default withDatasourceCheck()<HeaderProps>(Header);
  
import {  faHouse, faUser,faStore,
  faLayerGroup, faFolder,faRecycle
} from '@fortawesome/free-solid-svg-icons'
import plastics from '../images/plastics.png'
import cardboards from '../images/cardboards.png'
import clothing from '../images/clothing.png'
import metal from '../images/metal.png'
import organic from '../images/organic.png'
import paper from '../images/paper.png'
import glass from '../images/glass.png'
import wood from '../images/wood.png'
import profilePic from '../images/profilePic.jpeg'

/* form content */

export const sidebarContent = [[faHouse,"Dashboard"],[faUser,"Customers"],[faStore,"Vendors"],[faLayerGroup,"Categories"],[faFolder,"Subscriptions"],[faRecycle,"Orders"],[faRecycle,"CMS"]];
export const addNewVendorContent = [["Shop Name",4,"Shop_Name"],["GST Number",4,"GST_Number"],[" Mobile Number",4,"Mobile_Number"],["Alternate Mobile Number",4,"Alt_Mobile_Number"],["Email ID",4,"Email_id"]];
export const SubDetailsDropdown = [["Subscription Package",4,"Subscription_Package"],["Subscription Type",4,"Subscription_Type"],["Discount Type",4,"Discount_Type"]];
export const subDetailstext = [["Actual Price",8,"Actual_Price"],["Discount",4,"Discount"],["Discounted price",4,"Discounted_Price"]];
export const addressDetailstext = [["Address",8,"Address"],["Pincode",4,"Pincode"]];
export const addressDetailsDropdown = [["Country",4,"Country"],["State/Province",4,"State"],["City/Town",4,"City"]];
export const addressDetailstext2 = [["LandMark",4,"LandMark"],["About the Company",8,"About"]];
export const categoryCards = [[plastics,"plastics",2],[glass,"glass",2],[paper,"paper",2],[organic,"organic",2],[metal,"metal",2],[clothing,"clothing",2],[cardboards,"cardboards",2],[wood,"woods",2]];
export const topBarUser = [profilePic,"sample User"];

/* dashboard content */

export const dashboarCards = [["Subscription Rate","721K",11.01,true],["Total Earning","367K",0.03,false],["New Users","1,156",15.03,true],["New Vendor","239K",6.08,false]];
export const dashboardCategories = [[plastics,"plastics"],[glass,"glass"],[paper,"paper"],[organic,"organic"]];
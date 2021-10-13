const contentstack=require("contentstack")

const Stack=contentstack.Stack(process.env.CS_API_KEY, process.env.CS_DELIVERY_TOKEN ,process.env.ENV)

// Footer variables
const FOOTER_CONTENT_TYPE_UID="pawan_contentstack_footer";

// Navbar variables
const NAVBAR_CONTENT_TYPE_UID="pawan_contentstack_navbar";

// homepage variables
const HOMEPAGE_CONTENT_TYPE_UID="pawan_contentstack_homepage";


module.exports={
    Stack,
    FOOTER_CONTENT_TYPE_UID,
    NAVBAR_CONTENT_TYPE_UID,
    HOMEPAGE_CONTENT_TYPE_UID
}
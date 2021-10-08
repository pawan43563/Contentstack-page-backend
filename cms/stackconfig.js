const contentstack=require("contentstack")

const Stack=contentstack.Stack(process.env.CS_API_KEY, process.env.CS_DELIVERY_TOKEN ,process.env.ENV)

// Footer variables
const FOOTER_CONTENT_TYPE_UID="pawan_contentstack_footer";
const FOOTER_ENTRY_UID="bltaddaf2cfffc122b9";

// Navbar variables
const NAVBAR_CONTENT_TYPE_UID="pawan_contentstack_navbar";
const NAVBAR_ENTRY_UID="bltfbed538ff96ab384";

// homepage variables
const HOMEPAGE_CONTENT_TYPE_UID="pawan_contentstack_homepage";
const HOMEPAGE_ENTRY_UID="blt4c8dc4b379c4db1a";


module.exports={
    Stack,
    FOOTER_CONTENT_TYPE_UID,
    FOOTER_ENTRY_UID,
    NAVBAR_CONTENT_TYPE_UID,
    NAVBAR_ENTRY_UID,
    HOMEPAGE_CONTENT_TYPE_UID,
    HOMEPAGE_ENTRY_UID
}
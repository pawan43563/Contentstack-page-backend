const sendResponse = require("../utils/sendResponse");

const { Stack,
    FOOTER_CONTENT_TYPE_UID,FOOTER_ENTRY_UID,
    NAVBAR_CONTENT_TYPE_UID,NAVBAR_ENTRY_UID,
    HOMEPAGE_CONTENT_TYPE_UID,HOMEPAGE_ENTRY_UID 
    } = require('../cms/stackconfig');



const fetchResuableComponentdata=async(req,res)=>{
    let CONTENT_TYPE_UID,ENTRY_UID;
    switch(req.url){
        case '/footer':
            CONTENT_TYPE_UID=FOOTER_CONTENT_TYPE_UID;
            ENTRY_UID=FOOTER_ENTRY_UID;
            break;
        case '/navbar':
            CONTENT_TYPE_UID=NAVBAR_CONTENT_TYPE_UID;
            ENTRY_UID=NAVBAR_ENTRY_UID;
            break;
    }

    try{
        const Query = Stack.ContentType(CONTENT_TYPE_UID).Entry(ENTRY_UID);
        const data=await Query.fetch()
        if(data){
            sendResponse(
                {
                    res,
                    statusCode:200,
                    message:"Data Fetched Successfully",
                    data:data.toJSON()
                }
            )
        }
    }catch(error){
        sendResponse(
            {
                res,
                statusCode:400,
                message:"Error while fetching",
                error:error
            }
        )
    }

}


const gethomepagedata=async(req,res)=>{
    try{
        const Query = Stack.ContentType(HOMEPAGE_CONTENT_TYPE_UID).Entry(HOMEPAGE_ENTRY_UID);
        const data=await Query.includeReference("banner","market_recognition","client_logos").fetch()
        if(data){
            sendResponse(
                {
                    res,
                    statusCode:200,
                    message:"Data Fetched Successfully",
                    data:data.toJSON()
                }
            )
        }
    }catch(error){
        sendResponse(
            {
                res,
                statusCode:400,
                message:"Error while fetching",
                error:error
            }
        )
    }
}   


module.exports={
    fetchResuableComponentdata,
    gethomepagedata
}
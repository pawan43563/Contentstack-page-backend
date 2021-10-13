const sendResponse = require("../utils/sendResponse");

const { Stack,
    FOOTER_CONTENT_TYPE_UID,
    NAVBAR_CONTENT_TYPE_UID,
    HOMEPAGE_CONTENT_TYPE_UID
    } = require('../cms/stackconfig');



const fetchResuableComponentdata=async(req,res)=>{
    let CONTENT_TYPE_UID;
    switch(req.url){
        case '/footer':
            CONTENT_TYPE_UID=FOOTER_CONTENT_TYPE_UID;
            break;
        case '/navbar':
            CONTENT_TYPE_UID=NAVBAR_CONTENT_TYPE_UID;
            break;
    }

    try{
        const Query = Stack.ContentType(CONTENT_TYPE_UID).Query();
        let data=await Query.toJSON().find()
        if(data){
            sendResponse(
                {
                    res,
                    statusCode:200,
                    message:"Data Fetched Successfully",
                    data:data
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
        const Query = Stack.ContentType(HOMEPAGE_CONTENT_TYPE_UID).Query();
        const data=await Query
                            .includeReference("banner","market_recognition","client_logos")
                            .toJSON().find()
        if(data){
            sendResponse(
                {
                    res,
                    statusCode:200,
                    message:"Data Fetched Successfully",
                    data:data
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
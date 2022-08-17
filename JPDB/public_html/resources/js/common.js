var myStatus;
function checkToken()
{
   
    var token = localStorage.getItem("connection_token");
    if(token === null){
        if(myStatus === "in")
        {
            window.location.href = "index.html";
        }else{
            return;
        }
    } else 
    {
        if(myStatus === "out"){
            window.location.href = "table.html";
        }else{
            return;
        }

    }
}
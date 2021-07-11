function remove12days(){
    var x = document.getElementsByClassName("js-incentive not-in-print forecast-table__incentive");
    if(x.length>0){
        x[0].remove();
        console.log("--------> Removed 12 days")
    }
}

function removedAds(){
    var x = document.getElementsByClassName("row not_in_print centered");
    if(x.length>0){
        x[0].remove();
        console.log("--------> Top Ad")
    }

    var x = document.getElementsByClassName("not_in_print t-shirt-comp");
    if(x.length>0){
        x[0].remove();
        console.log("--------> Removed T-shit Ad")
    }

    var x = document.getElementById("cont_bn_desk_lhs_vert_1");
    if(x != null){
        x.remove();
        console.log("--------> Removed Left Ad(1)")
    }

    var x = document.getElementById("cont_bn_desk_lhs_vert_2");
    if(x != null){
        x.remove();
        console.log("--------> Removed Left Ad(2)")
    }
    
}

remove12days();
removedAds();

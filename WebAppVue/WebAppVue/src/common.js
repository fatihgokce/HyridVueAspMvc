import $ from "jquery";
export var  portalApp = {  
    getDataFromRemote: function (url, data) {
        return $.ajax({
            url: url,
            method: "get",
            data: data,
            dataType: "json",
            cache: false
        });
    }

}
$(document).ready(function(){
   $("#toggle_button").click(function(){

        let country_name = $("#u_name").val();
        console.log(country_name);

        $.get("http://universities.hipolabs.com/search?country="+country_name, function(data, status){
            console.log(data);
            $("#names_Container").empty();
            //  #This is the error message that will be displayed if the user leaves the search bar empty.   
            if(data.length === 0){
                var errorMessage = "Error! You have entered an invalid country name.";
                alert(errorMessage);
                return; 
             }   
            else {
                data.sort((a, b) => a.name.localeCompare(b.name));
                jQuery(data).each(function(i, item){
                    console.log(item.id, item.name)
                    $("#name").text(item.name);
                    $("#names_Container").append("<p>" + item.name + "</p>");
                });            
            }
        });
    });

});
function one(){
    var date;
    let CurrentDate = document.getElementById("date");
    oldDate = new Date (CurrentDate.value)
    var newDate = new Date()

    if(oldDate < newDate){
        console.log('Past Event')
    }else if(oldDate == newDate){
        console.log('Today\'s Event')
    }else{
        console.log("Upcoming Event");
    }
    var months =[0 + 1, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
    console.log(months[oldDate.getMonth()]);
    
      console.log(newDate.toLocaleTimeString());

}
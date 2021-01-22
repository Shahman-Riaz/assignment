// FIRST problem START

function kilometerToMeter(kilometerInput) {
      var meterOutput;
    if(kilometerInput >= 0){
       meterOutput = 1000 * kilometerInput;
    }
    else if (kilometerInput < 0){
        meterOutput = "Distance cannot be negative";
    }
    else {
        meterOutput = "Your inputted value is not a number.";
    }
    return meterOutput;
}
var meterValue = kilometerToMeter(2);
console.log(meterValue);


// FIRST problem END


// SECOND problem START


function budgetCalculator(watch, phone, laptop) {

    if ((watch >= 0) && (phone >= 0) && (laptop >= 0)){

        if ((Number.isInteger(watch)) && (Number.isInteger(phone)) && (Number.isInteger(laptop))) {
            var totalBudget = (watch * 50) + (phone * 100) + (laptop * 500);
             
        }  
        else {
            totalBudget = "Product amount cannot be fraction.";
        }
    }

    else if((watch < 0) || (phone < 0) || (laptop < 0)) 
    {
        totalBudget = "Product amount cannot be negative.";
    }

    else {
        totalBudget = "Your inputted value is not a number or not fullfill.";
    }
    return totalBudget;
}
var totalPrice = budgetCalculator(3, 3, 1);
console.log(totalPrice)


// SECOND problem END

// THIRD problem START


function hotelCost(totalDays) {
    var totalLivingCost = 0;
    if ((Number.isInteger(totalDays)) && (totalDays >= 0)) {
        if ( totalDays <= 10) {
            totalLivingCost = totalDays * 100;
      }
      else if ( totalDays <= 20) {
            var first10DaysCost = 10 * 100;
            var remainingDays = totalDays - 10;
            var second10DaysCost = 80 * remainingDays;
            totalLivingCost = first10DaysCost + second10DaysCost;
      }
      else {
          var first10DaysCost = 10 * 100;
          var second10DaysCost = 10 * 80;
          var remainingDays = totalDays - 20;
          var up20DaysCost = remainingDays * 50;
          totalLivingCost = first10DaysCost + second10DaysCost + up20DaysCost;
      }
    }
    else if (totalDays > 0) {
      totalLivingCost = "Days can't be fraction";
    }
    else if (totalDays < 0){
      totalLivingCost = "Days can't be negative";
    }
    else {
      totalLivingCost = "Your inputted value is not a number";
    }
      return totalLivingCost;
  
    }
  var totalAmount = hotelCost(24);
  console.log(totalAmount)
  
  

// THIRD problem END

// FOURTH problem START


function megaFriend(friendsName) {
    var humanName = "";
  if (friendsName.length > 0) {
    for( var i = 0; i < friendsName.length; i++) {
        var singleName = friendsName[i];
        
         if (singleName.length > humanName.length) {
             humanName = singleName;
       }
         else if (typeof(friendsName[i]) != 'string') {
         humanName = "Your inputted value can't be human name";
       
       }
             
    }
  }
  else if (friendsName.length == 0) {
      humanName = "Your inputted nothing";
  }
   return humanName;
}
var friendsName = ['Akib','Rakib','John','Alauddin','Salauddin'];
var largestName = megaFriend(friendsName);
console.log(largestName);


// FOURTH problem END
//Beginning of Exercise One - Basketball Score

function totalBasketballScore(freeThrows, midRange, threePointer){
               if(typeof(freeThrows) != 'number' || typeof(midRange) != 'number' || typeof(threePointer) != 'number'){
                   console.log("Your all entries must be number");
               }
          
               totalScore = 1*freeThrows + 2*midRange + 3*threePointer;
              
               return totalScore;
           }
           var sum = totalBasketballScore(2,3,4);
           console.log(sum);

           document.getElementById("p1").innerHTML = "The Total Basketball Score is: " + sum;
//end of exercise One



//Beggining of exercise two - Computer Store


    function itemPrice(item) {
      if(typeof (item) === 'string') {
      switch (item) {
      case "computer":
      console.log("$500"); break; 
      case "mouse":
      console.log("$10"); break; 
      case "tablet":
      console.log("$250"); break;        
      case "case":
      console.log("$25"); break;           
      case "router":
      console.log("$100"); break;
      default:
      console.log("This item is not available in the store");
            }
        }
        else {
            console.log("All entries must be of type string");
        }
    }

    itemPrice("computer");
    itemPrice("case");
    itemPrice("computer123");
    itemPrice(123);
    itemPrice("123");

//Ending of exercise Two



//Beginning of exercise Three - What's for dinner

function randomRestaurant(numOfRestaurants) {
const restraunts = ["Applebees","Panera Bread","Popeyes","Chopt","Chick-fil-A","Cheesecake Factory","Five Guys"];
const randomRestaurantList = [];
for (var i = 0; i < numOfRestaurants; i++) {
const randomIndex = Math.floor(Math.random() * restraunts.length + 1);
randomRestaurantList.push(restraunts(randomIndex - 1));
}
return randomRestaurantList;
}
const randomRestaurantList = randomRestaurant(3);
console.log(randomRestaurantList);

//Ending of exercise Three



//Start of exercise Four - Leap Year

function isLeapYear('Year'){
  return(year % 100 ===0) ? (year % 400 === 0 ) : (year % 4 === 0);
}
console.log(isLeapYear(2016));
console.log(isLeapYear(2000));
console.log(isLeapYear(1700));
console.log(isLeapYear(1800));
console.log(isLeapYear(1900));


//Ending of exercise Four

function changePossibilities(amt, denoms) {
    let count = 0;
   //what is the largest coin that is less than the remaining sum amount
   //choose that and subtract it from your target amount
   function chooseLargest(myamt, newdenoms, startPlace) {
       //we want to loop through all the numbers
       for (let i = startPlace; i < newdenoms.length; i++) {
           let remain = myamt - newdenoms[i]
           ////if the remaining amount is greater than zero, we still need more coins
           if (remain > 0) {
               //we want to do this again, except we want to start at the current place, so that it doesn't count, say, 3 + 2 and 2 + 3 as separate combinations of coins
               chooseLargest(remain, newdenoms, i)
           } else if (remain === 0) {
               //if the remaining amount is exactly equal to zero we'll increment the count, because that is a total of our amount!
               count++
           }
       }
   }
   //we call the function we defined above
   chooseLargest(amt, denoms, 0);
   //then return it!
   return count;
}

console.log(changePossibilities(4, [3, 2, 1]))

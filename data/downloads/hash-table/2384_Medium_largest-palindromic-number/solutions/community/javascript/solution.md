# Easy to understand ✅ || Highly Commented ✅ || O(n) ✅ || Efficient ✅

**Author:** omrocks
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/3400462/](https://leetcode.com/problems/largest-palindromic-number/solutions/3400462/)

---

# Please upvote if you like the solution

# Code
```
/**
 * @param {string} num
 * @return {string}
 */

function largestPalindromic (num) {
   let counter = Array(10).fill(0), array = [], result = "";

   // create counter for every numeric digit and increment it. 
   for(let n of num) {
       counter[parseInt(n)]++;
   }

   // traverse counter in reverse direction so that we do have maximum 
   // digit in the begining of the result

   // We also calculating mid digit in case odd number of numeric digits present
   for(let i = 9; i >= 0; i--) {
       if(counter[i] & 1) {
           result = Math.max(result, i);
       }

       while(counter[i] >= 2) {
           array.push(i);
           counter[i] -= 2;
       }
   }

   // convert result numeric to string
   result = result.toString();

   // if either array is empty Or 1st digit is 0 return result Or zero if no result 
   // digit present
   if(!array.length || array[0] === 0) return result || "0";

   // finally adding digits end to result to end 
   for(let i = array.length - 1; i >= 0; i--) {
       result = array[i] + result + array[i];
   }

   // return the resultant required string 
   return result;
}
```
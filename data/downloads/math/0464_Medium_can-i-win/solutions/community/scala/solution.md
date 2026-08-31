# Scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-i-win/solutions/4269219/](https://leetcode.com/problems/can-i-win/solutions/4269219/)

---



# Code
```
// This object defines a solution for a game where the player can choose numbers from 1 to maxChoosableInteger
object Solution {
   // This function checks if the player can win the game with the given desiredTotal
   def canIWin(maxChoosableInteger: Int, desiredTotal: Int): Boolean = 
     // If the desiredTotal is greater than the sum of numbers from 1 to maxChoosableInteger, return false
     if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) false
     // If desiredTotal is less than or equal to 0, return true
     else if (desiredTotal <= 0) true
     // Otherwise, call the helper function with initial values
     else canIWinHelper(0, maxChoosableInteger, desiredTotal, Array.fill(1 << maxChoosableInteger)(-1))

   // This is a helper function that uses a recursive approach to determine if the player can win the game
   def canIWinHelper(used: Int, max: Int, total: Int, memo: Array[Int]): Boolean = 
     // If total is less than or equal to 0, return false
     if (total <= 0) false
     // If the result for the current used numbers is already calculated, return the calculated result
     else if (memo(used) != -1) memo(used) == 1
     else {
       var i = max
       var result = false
       // Loop through all numbers from max to 1
       while (i > 0 && !result) {
         val curr = 1 << (i-1)
         // If the current number has not been used, recursively call the helper function
         if ((used & curr) == 0) result = !canIWinHelper(used | curr, max, total-i, memo)
         i -= 1
       }
       // Store the result in the memo array for future use
       memo(used) = if (result) 1 else 0
       result
     }
}

```
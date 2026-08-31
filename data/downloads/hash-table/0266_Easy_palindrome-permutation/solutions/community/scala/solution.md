# scala solution with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/4339490/](https://leetcode.com/problems/palindrome-permutation/solutions/4339490/)

---

# Complexity
- Time complexity:
 $$O(n)$$ 

- Space complexity:
 $$O(n)$$ 

# Code
```
import scala.collection.mutable

object Solution {
   def canPermutePalindrome(s: String): Boolean = {
       val d = mutable.Map[Char, Int]() // Create a mutable map to store the count of each character
       var oddCount = 0 // Initialize a variable to keep track of the count of characters with odd counts
       for (ch <- s) { // Iterate over each character in the string
           d(ch) = d.getOrElse(ch, 0) + 1 // Increment the count of the current character
           if (d(ch) % 2 == 1) { // If the count of the current character is odd
               oddCount += 1 // Increment the odd count
           } else { // If the count of the current character is even
               oddCount -= 1 // Decrement the odd count
           }
       }
       oddCount <= 1 // Return true if the odd count is less than or equal to 1, else return false
   }
}

```
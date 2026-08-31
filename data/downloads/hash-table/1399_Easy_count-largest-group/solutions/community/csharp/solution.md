# C# short easy solution using Array and LINQ

**Author:** GeniusMi
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/2800992/](https://leetcode.com/problems/count-largest-group/solutions/2800992/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Parse through from integer 1 to n

# Approach
<!-- Describe your approach to solving the problem. -->
n < 10000, therefore the biggest sum is 36 (9999).
Create an array with length of 36 to record the number of numbers of each sum.
In the end count the number of max sum using LINQ
# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
  public int CountLargestGroup(int n)
  {
   var tra = new int[36];
   for (var i = 1; i <= n; i++)
   {
     var curr = i;
     var j = curr % 10;     
     while (curr / 10 > 0)
     {
       curr /= 10;
       j += (curr % 10);
     }
     tra[j - 1]++;
   }
   return tra.Where(x => x == tra.Max()).Count();
  }
}
```
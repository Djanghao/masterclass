# Runtime 339 ms Beats🔥99.45%🚀Dart

**Author:** Mahmoud_Zakaria
**Votes:** 6
**Link:** [https://leetcode.com/problems/contains-duplicate/solutions/2929063/](https://leetcode.com/problems/contains-duplicate/solutions/2929063/)

---


If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool containsDuplicate(List<int> nums) {
      Set<int> s = {} ;
      for(int n in nums){
          if(s.contains(n))return true ;
          s.add(n);
      }
      return false ;
  }
}
```
Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)
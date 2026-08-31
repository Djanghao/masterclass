# Scala simple tail recursive solution

**Author:** Thevic16
**Votes:** 3
**Link:** [https://leetcode.com/problems/is-subsequence/solutions/3280653/](https://leetcode.com/problems/is-subsequence/solutions/3280653/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Traverse "t" in search of "s" head, if I find it, I take "s" tail. Make this process until s or t is empty.

# Approach
<!-- Describe your approach to solving the problem. -->
Scala simple tail recursive approach

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)

# Code
```
import scala.collection.mutable

object Solution {
  def isSubsequence(s: String, t: String): Boolean = {
    if(s.isEmpty){
      true
    }
    else if(t.isEmpty){
      false
    }
    else if(s.head == t.head){
      isSubsequence(s.tail, t.tail)
    }
    else{
      isSubsequence(s, t.tail)
    }
  }

}
```
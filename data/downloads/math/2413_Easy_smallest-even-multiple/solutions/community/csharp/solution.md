# C# easy solution.

**Author:** aloneguy
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/3280382/](https://leetcode.com/problems/smallest-even-multiple/solutions/3280382/)

---


# Complexity
- Time complexity: 33 ms.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 26.6 Mb.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int SmallestEvenMultiple(int n) {
      return n%2==0? n:n*2;  
    }
}
```
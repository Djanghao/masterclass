# Easy Scala Tail Recursion Solution

**Author:** gajawadavarshith
**Votes:** 0
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/5197877/](https://leetcode.com/problems/arranging-coins/solutions/5197877/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def arrangeCoins(n: Int): Int = {
        def solve(n: Int,i: Int,acc: Int): Int = {
            if(n==i) return acc+1
            if(n<i) return acc
            solve(n-i,i+1,acc+1)
        }
        solve(n,1,0)
    }
}
```
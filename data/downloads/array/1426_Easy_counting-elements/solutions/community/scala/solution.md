# Scala solution

**Author:** Niliya
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-elements/solutions/3750836/](https://leetcode.com/problems/counting-elements/solutions/3750836/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
HashSet contains

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
object Solution {
    def countElements(arr: Array[Int]): Int = {
        var seen =  Set[Int]()
        for (x<-arr) seen += x
        var sum = 0
        for (x<-arr) {
            if (seen.contains(x+1)) sum=sum+1
        }
        sum
    }
}
```
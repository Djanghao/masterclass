# Scala Beats 100% Runtime & Memory

**Author:** _nemesis
**Votes:** 0
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/5117372/](https://leetcode.com/problems/boats-to-save-people/solutions/5117372/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n *log n)$$

- Space complexity:
$$O(1)$$

# Code
```
object Solution {
    def numRescueBoats(people: Array[Int], limit: Int): Int = {
        var (res, l, r) = (0, 0, people.length - 1)
        var p = people.sorted

        while (l <= r) {
            if (p(l) + p(r) <= limit) l += 1
            r -= 1
            res += 1
        }
        res
    }
} 
```
# Scala oneliner

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/3608605/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/3608605/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(sqrt(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def consecutiveNumbersSum(n: Int): Int = {
        (1 to math.sqrt(2 * n).toInt).count(k => (2 * n) % k == 0 && ((2 * n) / k - k + 1) % 2 == 0)
    }
}
```
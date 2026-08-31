# Beats 100%

**Author:** dibya56
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/5198393/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/5198393/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func differenceOfSums(_ n: Int, _ m: Int) -> Int {
        var sum = 0
        for i in 1...n {
            if i % m == 0 {
                sum -= i
            }
            else {
                sum += i
            }
        }
        return sum
    }
}
```
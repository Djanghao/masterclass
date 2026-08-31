# Simple Set-based solution. O(n)

**Author:** liampronan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3968087/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3968087/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach


# Complexity
- Time complexity: $$O(n)$$


- Space complexity: $$O(n)$$

# Code
```
class Solution {
    func minimumPossibleSum(_ n: Int, _ target: Int) -> Int {
        var seen = Set<Int>()

        var ans = 0

        var i = 1

        while seen.count < n {

            if !seen.contains(target-i) {
                seen.insert(i)
                ans += i

            }

            i += 1
        }

        return ans
    }
}
```
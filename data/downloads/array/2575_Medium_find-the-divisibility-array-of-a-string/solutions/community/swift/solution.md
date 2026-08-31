# Simple solution

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3238466/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/3238466/)

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
    func divisibilityArray(_ word: String, _ m: Int) -> [Int] {
        let n = word.count
        var ans = Array(repeating: 0, count: n)
        var remain = 0
        for (i, c) in word.enumerated() {
            let digit = Int(String(c))!
            remain = (remain * 10 + digit) % m
            ans[i] = remain == 0 ? 1 : 0
        }
        return ans
    }
}
```
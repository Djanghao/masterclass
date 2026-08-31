# Simple solution

**Author:** Ksenia-Ksu
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/4745746/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/4745746/)

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
class Solution {
    func canConstruct(_ s: String, _ k: Int) -> Bool {
        guard s.count >= k else  { return false }
        let countOdd =  Dictionary(s.map{($0, 1)},uniquingKeysWith: +).filter { $0.value % 2 != 0 }.count
        return countOdd <= k
    }
}
```
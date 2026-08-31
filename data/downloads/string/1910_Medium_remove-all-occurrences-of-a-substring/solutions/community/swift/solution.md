# ✅ [Swift] Fast solution (0 ms, 100% Beats)

**Author:** IlnurZayn
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/3673224/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/3673224/)

---

# Intuition
![\u0421\u043D\u0438\u043C\u043E\u043A \u044D\u043A\u0440\u0430\u043D\u0430 2023-06-23 \u0432 15.51.17.png](./images/0.png)
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
    func removeOccurrences(_ s: String, _ part: String) -> String {
        
        var str = s

        while let range = str.range(of: part) {
            str.removeSubrange(range)
        }

        return str
    }
}
```
# [Swift] Reverse-Whole-String-Reverse-Each-Word

**Author:** nytfury47
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/3879233/](https://leetcode.com/problems/reverse-words-in-a-string-ii/solutions/3879233/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Reverse the whole string
2. Reverse each word in string

# Complexity
- Time complexity: O(N), it's two passes along the string.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1), it's a constant space solution.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func reverseWords(_ s: inout [Character]) {
        // reverse whole string
        s.reverse()

        // reverse each word using 2 pointers
        var left = 0

        for right in 0...s.count {
            if right == s.count || s[right] == " " {
                s[left..<right].reverse()
                left = right + 1
            }
        }
    }
}
```
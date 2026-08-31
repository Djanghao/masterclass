# Swift (using contains)

**Author:** pingv1n
**Votes:** 0
**Link:** [https://leetcode.com/problems/repeated-string-match/solutions/5346806/](https://leetcode.com/problems/repeated-string-match/solutions/5346806/)

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
    func repeatedStringMatch(_ a: String, _ b: String) -> Int {
        var count = b.count/a.count
        var aTotal = String(repeating: a, count: count)

        if (aTotal.contains(b)){
            return count
        }
        // prefix
        aTotal = aTotal + a
        count += 1
        if (aTotal.contains(b)){
            return count
        }
        // postfix 
        aTotal = aTotal + a
        count += 1
        if (aTotal.contains(b)){
            return count
        }

        return -1
    }
}
```
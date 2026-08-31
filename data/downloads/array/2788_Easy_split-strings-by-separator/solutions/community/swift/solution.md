# ✅ SIMPLE SOLUTION, BEATS 90%

**Author:** AbduraxmonDavurov
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/4078893/](https://leetcode.com/problems/split-strings-by-separator/solutions/4078893/)

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
func splitWordsBySeparator(_ words: [String], _ separator: Character) -> [String] {
    var arr = [String]()
    
    for i in words {
        let word = i.split(separator:separator).map(String.init)
        arr += word
    }
    return arr
}
}
```
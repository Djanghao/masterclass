# Swift Solution

**Author:** laurayang321
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/5093244/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/5093244/)

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
    func minimumBuckets(_ hamsters: String) -> Int {
        var hamsters = Array(hamsters)
        
        for (i, char) in hamsters.enumerated() {
            if hamsters[i] == "H" {
                if (i-1) >= 0, hamsters[i-1] == "B" {
                    continue
                } else if (i+1) < hamsters.count, hamsters[i+1] == "." {
                    hamsters[i+1] = "B"
                } else if (i-1) >= 0, hamsters[i-1] == "." {
                    hamsters[i-1] = "B"
                } else {
                    return -1
                }
            }
        }
        
        let buskets = hamsters.filter { $0 == "B" }
        return buskets.count
    }
}
```
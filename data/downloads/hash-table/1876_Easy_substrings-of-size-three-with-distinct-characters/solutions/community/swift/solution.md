# ✅SIMPLE SOLUTION

**Author:** AbduraxmonDavurov
**Votes:** 2
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/4412585/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/4412585/)

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
func countGoodSubstrings(_ s: String) -> Int {
    guard s.count >= 3 else {return 0}
    let str = Array(s)
    var count = 0
    
    for i in 0...str.count - 3 {
        let dif = Set([str[i],str[i + 1],str[i + 2]]).count
        
        if dif == 3 {
            count += 1
        }
    }
    
    return count
}
}
```
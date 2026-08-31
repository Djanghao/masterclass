# swift 0(N)

**Author:** ilyaKizzz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3963370/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3963370/)

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
    func findPrefixScore(_ nums: [Int]) -> [Int] {
    var maxVal = 0
    var result = [Int]()
    
    for num in nums {
        maxVal = max(maxVal, num)
        result.append(num + maxVal)
    }
    var arr = [Int]()
    var cur = 0
    for i in result {
        cur += i
        arr.append(cur)
    }
    return arr
}
}
```
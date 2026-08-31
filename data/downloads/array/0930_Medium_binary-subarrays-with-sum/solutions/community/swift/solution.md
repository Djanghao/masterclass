# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-subarrays-with-sum/solutions/4873011/](https://leetcode.com/problems/binary-subarrays-with-sum/solutions/4873011/)

---

# Code
```
class Solution {
    func numSubarraysWithSum(_ nums: [Int], _ goal: Int) -> Int {
        var (ans, prefix, count) = (0, 0, [0: 1])

        for num in nums {
            prefix += num
            ans += count[prefix - goal, default: 0]
            count[prefix, default: 0] += 1
        }
        
        return ans
    }
}
```
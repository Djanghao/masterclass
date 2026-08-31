# Swift sub arrays

**Author:** venkatasaipulipati_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/5210047/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/5210047/)

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
    func minimumSubarrayLength(_ nums: [Int], _ k: Int) -> Int {
        var minLen = Int.max
        for i in 0..<nums.count{
            for j in i..<nums.count{
                if(nums[i...j].reduce(0,|) >= k){
                     if(minLen > nums[i...j].count){
                        minLen = nums[i...j].count
                     }
                }
            }
        }
        if(minLen == Int.max){
            return -1
        }
        return minLen
    }
}
```
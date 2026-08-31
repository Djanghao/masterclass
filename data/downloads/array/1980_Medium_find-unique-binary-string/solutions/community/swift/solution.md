# ✅ Swift: Easy to Understand and Simple Solutions

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4293909/](https://leetcode.com/problems/find-unique-binary-string/solutions/4293909/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findDifferentBinaryString(_ nums: [String]) -> String {
        var ans = ""
        for i in 0..<nums.count {
            ans += nums[i][nums[i].index(nums[i].startIndex, offsetBy: i)] == "0" ? "1" : "0"
        }
        return ans
    }
}
```
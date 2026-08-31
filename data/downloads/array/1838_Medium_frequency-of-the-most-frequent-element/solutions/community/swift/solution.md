# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4303494/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4303494/)

---

# Complexity
- Time complexity: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxFrequency(_ nums: [Int], _ k: Int) -> Int {
        let nums = nums.sorted()
        var l = 0
        var r = 1
        var balance = k
        var level = nums[0]
        var result = 1
        while l < nums.count {
            while r < nums.count && (nums[r] - level) * (r - l) <= balance {
                balance -= (nums[r] - level) * (r - l)
                level = nums[r]
                r += 1
                result = max(result, r - l)
            }
            balance += level - nums[l]
            l += 1
        }
        return result
    }
}

```
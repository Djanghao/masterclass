# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4383722/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4383722/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxSubarrayLength(_ nums: [Int], _ k: Int) -> Int {
        var l = 0
        var r = 0
        var counts = [Int: Int]()
        var result = 1
        while r < nums.count {
            counts[nums[r], default: .zero] += 1
            while counts[nums[r]]! > k {
                counts[nums[l]]! -= 1
                l += 1
            }
            r += 1
            result = max(result, r - l)
        }
        return result
    }
}
```
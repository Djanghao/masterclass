# Swift || Sliding Window ||  O(n) Solution

**Author:** Admiralk
**Votes:** 2
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3592730/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3592730/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ --> 


- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func getAverages(_ nums: [Int], _ k: Int) -> [Int] {
        guard k != 0 else { return nums }
        let diameter = k * 2 + 1
        var result = Array(repeating: -1, count: nums.count)
        var left = 0
        var sum = nums[0]
        for right in 1..<nums.count {
            sum += nums[right]
            if right - left + 1 >= diameter {
                result[left + k] = sum / diameter
                sum-=nums[left]
                left+=1
            }
        }
        return result
    }
}

```
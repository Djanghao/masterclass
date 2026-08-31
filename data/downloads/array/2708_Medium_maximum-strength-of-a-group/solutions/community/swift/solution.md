# Fastest, O(n), beats 100%

**Author:** elite_code_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/5520584/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/5520584/)

---

# Intuition
Intution is we need to find product of all elements except zeros and if total of negative numbers is odd, we exclude it from this calculation.

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
    func maxStrength(_ nums: [Int]) -> Int {
        if nums.isEmpty {
            return 0
        }
        var nums = nums
        var idx = 0
        var minNegativeIdx = -1
        var minNegativeVal = Int.min
        var negatives = 0
        // Edge cases
        var maxZero = true
        var hasZero = false
        while idx < nums.count {
            if nums[idx] == 0 {
                hasZero = true
            }
            if nums[idx] > 0 {
                maxZero = false
            }
            if nums[idx] == 0 {
                nums.remove(at:idx)
            }else {
                if nums[idx] < 0 {
                    negatives += 1
                    let neg = nums[idx]
                    // Find most unuseful negative
                    // Has smallest abs(val) In multiplication doesn't increase overall much
                    if neg > minNegativeVal {
                        minNegativeVal = neg
                        minNegativeIdx = idx
                    }
                }
                idx += 1
            }
        }
        
        // In case only 1 number left in array
        if nums.count == 1 {
            // Did we see Zero and max number was 0 ? (item in array is negative?)
            if maxZero, hasZero {
                return 0
            }
            return nums[0]
        // Is it because After removing all zeros? lets return zero
        }else if nums.isEmpty, maxZero, hasZero {
            return 0
        }
        // If number of negatives is odd, that means we need to remove the 
        // most unuseful one (biggest negative)
        if negatives % 2 == 1 {
            nums.remove(at:minNegativeIdx)
        }
        // Biggest value equals to multiplication of all elements
        // We know number of negatives is even, so the result is always positive
        var res = nums.reduce(1, *)
        return res
        
        
    }
}
```
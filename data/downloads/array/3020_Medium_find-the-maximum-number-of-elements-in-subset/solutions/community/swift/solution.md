# Simple and Clean - Swift

**Author:** R-Chandru
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/5907644/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/5907644/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Create a Frequency Map**: I then count how often each number appears in the input using a frequency map. This helps me track how many times I can use each number when forming subsets.
2. **Handle the Special Case for 1**: Since 1 * 1 is still 1, I handle 1 separately. If it appears an odd number of times, I can use all occurrences. If it's even, I leave one out to ensure an odd-length subset.
3. **Forming Power Subsets**: For each number in the array, I try to form subsets by multiplying the number by itself (e.g., x, x^2, x^4, etc.). I track how many numbers I can include in this sequence, ensuring the subset is valid.
4. **Check for Odd-Length Subsets**: Finally, I check that the subset size is odd (as required) and update the maximum subset size accordingly, ensuring I\u2019m always tracking the largest valid subset.


# Complexity
- Time complexity: $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func maximumLength(_ nums: [Int]) -> Int {
        guard !nums.isEmpty else {
            return -1
        }

        var maxSubset = 1
        let numsFreq = nums.reduce(into: [Int: Int]()) { dict, num in 
            dict[num, default: 0] += 1
        }

        for num in numsFreq.keys {
            // Special case needed to be handled for '1' as 1 * 1 = 1
            if num == 1, let numCount = numsFreq[num] {
                maxSubset = max(maxSubset, numCount % 2 == 0 ? numCount-1 : numCount )
                continue
            }

            var num = num
            var subsets = 0
            var numsFreq = numsFreq

            while let count = numsFreq[num], count > 0 {
                num *= num
                if count == 1 || numsFreq[num] == nil {
                    subsets += 1
                    break
                } else {
                    subsets += 2
                }
            }

            // Extra check -> Subsets are only valid if subset count is ODD
            if subsets % 2 == 1 {
                maxSubset = max(maxSubset, subsets)
            }
        }

        return maxSubset
    }
}
```
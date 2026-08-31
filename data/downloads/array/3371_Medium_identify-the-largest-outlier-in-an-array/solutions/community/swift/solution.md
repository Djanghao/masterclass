# Best Swift solution, beats 93%. Easy to understand.

**Author:** FmCK4bkz0Z
**Votes:** 0
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6110575/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6110575/)

---

# Intuition
- Given an array $$[A, B, C, D, E]$$ where $$A + B + C = D $$ and $$E$$ is the outlier, it stands that $$A + B + C + D / 2 = D$$ so $$A+B+C+D+E-E=2D$$, here we leverage these perceptions to pass only three times through the array, once to calculate the sum of all elements and another to find the outlier.
- A third pass is done between the two others mentioned and it counts how many times each element appears accounting for the edge case of the sum of the special numbers and the outlier being the same value.

# Approach
- Calculate the total sum of the array
- Counts how many times each element appears
- Consider if the sum without each element can be on the nums array
- If it can, look up if sum element is actually in the array
- It it is, the current n is an outlier, so updates the maxOutlier accordingly

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func getLargestOutlier(_ nums: [Int]) -> Int {
        var total = nums.reduce(0, +)
        let numCounts = nums.reduce(into: [:]) { counts, num in
            counts[num, default: 0] += 1
        }
        var maxOutlier: Int = Int.min
        // test if n is an outlier
        for n in nums { 
            if (total - n) % 2 == 0 {
                let sum = (total - n) / 2
                
                // test if nums contains sum of total except n
                // consider also if the sum and the outlier are the same, 
                // so it must appear twice on nums
                if let count = numCounts[sum] {
                    if sum != n || (sum == n && count >= 2) {
                        maxOutlier = max(maxOutlier, n)
                    }
                }
            }
        }
        return maxOutlier ?? 0
    }
}
```
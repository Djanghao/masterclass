# Double Binary Search using Powerful Binary Search template

**Author:** krishnamurthyb
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5822187/](https://leetcode.com/problems/minimum-number-of-seconds-to-make-mountain-height-zero/solutions/5822187/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Whenever you see minimum or a maximum value that satisfies a given constraint, think of binary search. Highly recommend going through: https://leetcode.com/discuss/study-guide/786126/Python-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems for getting the perfect template of Binary Search.

# Approach
<!-- Describe your approach to solving the problem. -->
Important observations in the approach:
1. Work can definitely be completed, if the fastest worker decides, he is going to finish it all by himself. Other workers contributions can only reduce time.
2. We can use the binary search again to calculate a worker's contribution.

# Complexity
- Time complexity: log(m * m * minWT) * n * log(m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func minNumberOfSeconds(_ mountainHeight: Int, _ workerTimes: [Int]) -> Int {
        func contribution(_ workerTime: Int, _ givenTime: Int) -> Int {     // log(m)
            var left = 0, right = mountainHeight
            while left < right {
                let mid = right - (right - left)/2
                if workerTime * mid * (mid + 1) / 2 <= givenTime {
                    left = mid
                } else {
                    right = mid - 1
                }
            }
            return left
        }

        func isFeasible(_ givenTime: Int) -> Bool {
            var heightReduced = 0
            for workerTime in workerTimes {                                 // n * log(m)
                heightReduced += contribution(workerTime, givenTime)
            }
            return heightReduced >= mountainHeight
        }

        var left = 1, right = workerTimes.min()! * (mountainHeight * (mountainHeight+1) / 2)
        while left < right {                                                // log(m * m * minWT) * n * log(m)
            let mid = left + (right - left)/2
            if isFeasible(mid) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    }
}
```
# 3376. Minimum Time to Break Locks | Swift

**Author:** rokimkar
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6124168/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6124168/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since we can not take a predefined order we need to iterate over all permutations, trick here is to not use greedy approach as solving through that approach requires sorting the array which can miss the best order to minimise the time.

# Approach
<!-- Describe your approach to solving the problem. -->
Use Brute force to iterate over all the permutations of the lock then for each permutaion keep updating the minimum time.

# Complexity
- Time complexity: O(N!*N),  where n! comes from generating permutations and n from processing each permutation.

# Code
```swift []
import Algorithms
class Solution {
    func findMinimumTime(_ strength: [Int], _ K: Int) -> Int {
        var totalTime = Int.max
        for var permutation in strength.permutations() {
            var currentFactor = 1
            var swordEnergy = 0
            var time = 0
            while !permutation.isEmpty {
                let lock = permutation.first!
                if lock > swordEnergy {
                    let factor = (lock%currentFactor == 0) ? (lock/currentFactor) : (lock/currentFactor) + 1
                    time += factor
                    swordEnergy += (currentFactor*factor)
                } else {
                    swordEnergy = 0
                    currentFactor += K
                    permutation.removeFirst()
                }
            }
            totalTime = min(totalTime, time)
        }
        return totalTime
    }
}
```
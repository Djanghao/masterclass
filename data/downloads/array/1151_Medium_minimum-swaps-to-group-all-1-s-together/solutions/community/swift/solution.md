# Swift (Beats 100%, O(N)) with explanation

**Author:** jisanson
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/4577392/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/4577392/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Scan the array with a fixed size sliding window and find the max number of 1s covered by the window. The result will be the least number of 0s covered by the window.

# Approach
<!-- Describe your approach to solving the problem. -->
Sliding window with a fixed size

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minSwaps(_ data: [Int]) -> Int {
        var totalOnes = data.filter({ $0 == 1 }).count
        var maxOnes = 0, currentOnes = 0

        for right in 0..<data.count {
            if right >= totalOnes {
                currentOnes -= data[right-totalOnes]
            }
            currentOnes += data[right]
            maxOnes = max(maxOnes, currentOnes)
        }

        return totalOnes - maxOnes
    }
}

/*

goal: return the minimum number of swaps required to group all 1\u2019s present in the array together in any place in the array

plan:
slding window with a fixed size
count the number of 1s -> use this as a sliding window size
find the max number of 1s covered by the fixed size window
the result should be total 1s minus the max number of 1s covered

*/
```
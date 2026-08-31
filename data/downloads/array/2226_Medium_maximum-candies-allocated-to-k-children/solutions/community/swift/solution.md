# Swift binary search/solution space

**Author:** ivanlesko
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/3683524/](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/solutions/3683524/)

---

# Intuition
 Define a solution space to perform a binary search to find the max # of candies per pile
 
 # Approach
 Define a solution space of possible values.
 The minimum pile count has to be 1 since a pile cannot contain 0 candies.
 The maximum pile count is `max(candies)` since piles cannot be merged.
 Use a binary search to find the max pile count that satisfies `checkPiles`.
 
 # Complexity
 - Time complexity:
 O(n log n) where `n` is `candies.count`.
 O(n)(find max) * O(log n)(binary search) * O(n)(checkPiles)
 
 - Space complexity:
 O(1) only a few integers are stored.
 
 This problem is similar to to [875. Koko eating bananas](https://leetcode.com/problems/koko-eating-bananas/)

```
class Solution {

    func checkPiles(_ candies: [Int], _ k: Int, _ size: Int) -> Bool {
        var piles = 0
        for c in candies {
            piles += c / size
        }

        return piles >= k
    }

    func maximumCandies(_ candies: [Int], _ k: Int) -> Int {
        // Define the solution space
        var l = 1, r = Int.min, sum = 0 
        for c in candies {
            r = max(r, c)
            sum += c
        }

        // The sum of all the piles has to be at least greater than the number of kids.
        guard sum >= k else { return 0 }

        while l <= r {
            let mid = (l + r) / 2
            if checkPiles(candies, k, mid) {
                // Max number of candies satisfies the condition.
                // Try a bigger pile.
                l = mid + 1
            } else {
                // Num of candies per pile did not satisfy the condition.
                // Try a smaller pile.
                r = mid - 1
            }
        }

        return r
    }
}
```
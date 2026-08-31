# Swift Solution With Explanations.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/3352085/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/3352085/)

---

# Approach
1. First, we declare a few variables. The first two are self-explanatory, the third is a store for the current best result. The fourth is a copy of the store for the current result.
2. We create a helper function. The first three parameters are self-explanatory. The fourth is the array of arrow counts, the fifth is the store for the current result.
3. We check if we are either out of arrows or out of targets. If so, we check if the score of the current result is better than the best score. If so, we update the best score and best store accordingly.
4. Otherwise, we check how many arrows we have left. If we have enough to reach the next target, we add the next target to the store and call the helper function again with the new parameters. We do this by creating a copy of the store and adding the next target to it.
5. We also call the helper function again without adding the next target to the store.
6. Finally, we return the best store. 

# Complexity
- Time complexity: O(2^n)
- Space complexity: O(n)

# Code
```
class Solution
{
    var maxScore = 0
    var maxStore: [Int]?
    
    func maximumBobPoints(_ numArrows: Int, _ aliceArrows: [Int]) -> [Int]
    {
        helper(numArrows, 0, 0, aliceArrows, Array(repeating: 0, count: 12))
        return maxStore!
    }
    
    func helper(_ numArrows: Int, _ i: Int, _ score: Int, _ arr: [Int], _ store: [Int])
    {
        if i == 12 || numArrows == 0
        {
            if score > maxScore
            {
                maxScore = score
                maxStore = store
                maxStore![0] += numArrows
            }
            return
        }
        
        let val = arr[i]
        if numArrows - (val + 1) >= 0
        {
            var store = store
            store[i] = val + 1
            helper(numArrows - (val + 1), i + 1, score + i, arr, store)
        }
        helper(numArrows, i + 1, score, arr, store)
    }
}
```
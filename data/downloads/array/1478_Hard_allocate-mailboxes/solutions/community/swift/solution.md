# Swift Solution | beats 100%

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/allocate-mailboxes/solutions/2777900/](https://leetcode.com/problems/allocate-mailboxes/solutions/2777900/)

---

## Code 

```
// Allocate mailboxes
// https://leetcode.com/problems/allocate-mailboxes/

class Solution {
    func minDistance(_ houses: [Int], _ k: Int) -> Int {
        let houses = houses.sorted()
        var dp = Array(repeating: Array(repeating: Int.max, count: houses.count), count: k)
        for i in 0..<houses.count {
            dp[0][i] = cost(houses, 0, i)
        }
        for i in 1..<k {
            for j in i..<houses.count {
                for m in i-1..<j {
                    dp[i][j] = min(dp[i][j], dp[i-1][m] + cost(houses, m+1, j))
                }
            }
        }
        return dp[k-1][houses.count-1]
    }
    
    func cost(_ houses: [Int], _ start: Int, _ end: Int) -> Int {
        var cost = 0
        let mid = houses[(start+end)/2]
        for i in start...end {
            cost += abs(houses[i] - mid)
        }
        return cost
    }
}
```

## Explanation

. Sort the houses in ascending order.
. For each mailbox 1 to k, for each house, find the "average" distance to all the houses after it. This is done by filling dp[k][i] with the lowest cost of putting a mailbox at the midpoint between the houses at index i and j, where i < j. The cost is the sum of the distances to all the houses between i and j.
. Return the lowest cost of putting k mailboxes after sorting the houses.
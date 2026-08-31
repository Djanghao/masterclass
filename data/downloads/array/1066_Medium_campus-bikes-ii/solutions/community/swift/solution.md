# ✅ [Solution][Swift] Backtracking

**Author:** adanilyak
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/4572295/](https://leetcode.com/problems/campus-bikes-ii/solutions/4572295/)

---

**TC:** $$O(_mP_n) = O(m! / (m - n)!)$$
**SC:** $$O(n)$$, because the maximum depth of call stack is $$n$$
```
class Solution {
    func assignBikes(_ workers: [[Int]], _ bikes: [[Int]]) -> Int {
        let n = workers.count, m = bikes.count
        var result = Int.max

        func rec(_ i: Int, _ availableBikes: Int, _ current: Int) {
            // Check if we have spare workers
            guard i < n else { 
                result = min(result, current)
                return
            }
            // Stop working if this option is worse than some that we discovered before
            guard current < result else { return }
            
            for j in 0..<m {
                // Trying to take current bike if it's free
                if availableBikes & (1 << j) > 0 {
                    rec(
                        i + 1,
                        // Creating mask for current bike (e.g. 111011 is a mask for 3rd bike out of 6)
                        // And applying that mask to use current bike
                        ((1 << m - 1) ^ (1 << j)) & availableBikes,
                        current + abs(workers[i][0] - bikes[j][0]) + abs(workers[i][1] - bikes[j][1])
                    )
                }
            }
        }

        rec(0, 1 << m - 1, 0)
        return result
    }
}
```
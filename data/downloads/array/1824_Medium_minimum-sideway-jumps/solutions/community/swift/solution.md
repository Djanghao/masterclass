# Swift | DP with O(n) time and O(1) space

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sideway-jumps/solutions/5343777/](https://leetcode.com/problems/minimum-sideway-jumps/solutions/5343777/)

---

# Code
```
class Solution {
    func minSideJumps(_ obstacles: [Int]) -> Int {
        let n = obstacles.count

        // Computes the number of jumps needed to go from point to point + 1,
        // starting at origLane and ending at destLane.
        func jumpsToNextPoint(_ point: Int, _ origLane: Int, _ destLane: Int) -> Int{
            if obstacles[point + 1] - 1 == destLane { return 100_000 }  // Inaccessible
            if origLane == destLane { return 0 }                        // Keep Straight
            if obstacles[point] - 1 == destLane && obstacles[point + 1] - 1 == origLane {
                return 2
            } else {
                return 1
            }
        }

        var jumps = [1, 0, 1]

        // Update the number of jumps at every step.
        for i in 0..<n - 1 {
            jumps = (0..<3).map { destLane in
                min(jumps[0] + jumpsToNextPoint(i, 0, destLane), 
                    jumps[1] + jumpsToNextPoint(i, 1, destLane), 
                    jumps[2] + jumpsToNextPoint(i, 2, destLane))
            }
        }

        return jumps.min()!
    }
}
```
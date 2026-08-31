# Hash map

**Author:** ms0686714
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4070480/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4070480/)

---

# Intuition
Idea is the same as 
https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4054659/o-n-code-youtube-solution-and-explanation/

https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4052113/java-c-python-one-pass-hash-map/

# Code
```
class Solution {
    func countPairs(_ coordinates: [[Int]], _ k: Int) -> Int {
        struct Coordinate: Hashable {
            let x: Int
            let y: Int
        }
        var hash = [Coordinate: Int]()
        var cnt: Int = 0
        for i in 0 ..< coordinates.count {
            let currentCoordinate = Coordinate(x: coordinates[i][0], y: coordinates[i][1])
            for j in 0 ... k {
                let complementCoordinate = Coordinate(x: coordinates[i][0] ^ j, y: coordinates[i][1] ^ (k - j))
                cnt += hash[complementCoordinate] ?? 0
            }
            hash[currentCoordinate, default: 0] += 1
        }
        return cnt
    }
}

```
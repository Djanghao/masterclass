# Smooove McGooze (Beats 100% in Time and Space 🪐)

**Author:** zoHouse
**Votes:** 0
**Link:** [https://leetcode.com/problems/furthest-point-from-origin/solutions/5140871/](https://leetcode.com/problems/furthest-point-from-origin/solutions/5140871/)

---


# Code
```
class Solution {
    func furthestDistanceFromOrigin(_ moves: String) -> Int {
        var moveFrequencies: [String.Element:Int] = ["R":0, "L":0, "_":0]
        
        for move in moves { moveFrequencies[move]! += 1 }
        
        guard let rCount = moveFrequencies["R"],
              let lCount = moveFrequencies["L"],
              let dashCount = moveFrequencies["_"]
        else { fatalError() }
        
        return (rCount >= lCount) ? (rCount + dashCount - lCount) : (lCount + dashCount - rCount)
    }
}
```
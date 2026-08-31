# Swift - optimal solution (100%)

**Author:** a1pamysss
**Votes:** 2
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/498845/](https://leetcode.com/problems/distance-between-bus-stops/solutions/498845/)

---

```
class Solution {
    func distanceBetweenBusStops(_ distance: [Int], _ start: Int, _ destination: Int) -> Int {
        var dist1 = 0
        var dist2 = 0
        
        let stop1 = min(start, destination)
        let stop2 = max(start, destination)
        
        for i in stop1..<stop2 {
            dist1 += distance[i]
        }
        
        for i in 0..<stop1 {
            dist2 += distance[i]
        }
        
        for i in stop2..<distance.count {
            dist2 += distance[i]
        }
        
        return min(dist1, dist2)
        
    }
}
```
# Swift Binary search to pour water

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/5976033/](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/5976033/)

---


# Code
```swift []
class Solution {
    func equalizeWater(_ buckets: [Int], _ loss: Int) -> Double {
        //we need to find a target number that can be filled into all buckets after losses

        func canPour(_ target: Double) -> Bool {
            var requirement: Double = 0
            var extra: Double = 0

            for capacity in buckets {
                let capacity = Double(capacity)
                if capacity < target {
                    //then we need more water
                    requirement += target - capacity
                } else {
                    extra += capacity - target
                }
            }

            extra *= (100 - Double(loss)) / 100 // remaining extra after loss in pouring
            //now we have extra and requirement in some buckets. 
            //if extra after the loss %, then we can fill buckets
            return extra >= requirement
        }

        var left: Double = 0
        var right: Double = Double(buckets.max()!)
        while left <= right {
            let mid: Double = left + (right - left) / 2.0
            if canPour(mid) {
                //search in the right side
                left = mid + 0.000001
            } else {
                right = mid - 0.000001
            }
        }

        return left
    }
}
```
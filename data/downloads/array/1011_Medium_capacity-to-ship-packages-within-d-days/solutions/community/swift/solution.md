# Swift | Binary Search

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3216542/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3216542/)

---

**Binary Search (accepted answer)**
```
class Solution {
    func shipWithinDays(_ weights: [Int], _ days: Int) -> Int {
        var (left, right) = (weights.max()!, weights.reduce(0,+))
        while left < right {
            let mid = (left + right) / 2
            (left, right) = weights.reduce(into: (days:1, sum:0)) { data, weight in
                                data.sum += weight
                                if data.sum > mid {
                                    data.sum = weight 
                                    data.days += 1
                                }
                            }.days <= days ? (left, mid) : (mid+1, right)
        }
        return left
    }
}
```
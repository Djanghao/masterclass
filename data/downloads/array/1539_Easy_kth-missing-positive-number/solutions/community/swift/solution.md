# [swift] Solution

**Author:** sairamkotha
**Votes:** 5
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/1209867/](https://leetcode.com/problems/kth-missing-positive-number/solutions/1209867/)

---

```
final class Solution {
    func findKthPositive(_ arr: [Int], _ k: Int) -> Int {
        var l = 0 
        var r = arr.count - 1
        while (l <= r) {
            let mid = l + (r-l)/2
            if (arr[mid] - mid - 1 < k) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return l + k
    }
}
```
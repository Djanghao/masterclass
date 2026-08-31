# Swift | Binary Search

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/fixed-point/solutions/4107357/](https://leetcode.com/problems/fixed-point/solutions/4107357/)

---

**Binary Search (accepted answer)**
```
class Solution {
    func fixedPoint(_ arr: [Int]) -> Int {
        var (l,r) = (0, arr.count)
        var result = -1
        while l < r {
            let mid = (l+r) / 2
            result = arr[mid] == mid ? mid : result 
            (l,r) = arr[mid] >= mid ? (l, mid) : (mid+1, r)
        }
        return result
    }
}
```
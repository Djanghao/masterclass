# Swift, Dict, count +-

**Author:** Victor-SMK
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5578019/](https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/5578019/)

---


```
class Solution {
    func canBeEqual(_ target: [Int], _ arr: [Int]) -> Bool {
        var dict = [Int: Int]()

        for i in 0..<arr.count{
            dict[arr[i], default: 0] += 1
            dict[target[i], default: 0] -= 1
        }

        for (_, value) in dict{
            if value != 0 { return false}
        }

        return true
    }
}
```
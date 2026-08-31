# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/4731546/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/4731546/)

---

```
class Solution {
    func minOperations(_ nums1: [Int], _ nums2: [Int]) -> Int {
        
        var s1 = 0
        var s2 = 0

        var n1 = Array(repeating: 0, count: 7)
        var n2 = Array(repeating: 0, count: 7)

        for n in nums1 {
            s1 += n
            n1[n] += 1
        }

        for n in nums2 {
            s2 += n
            n2[n] += 1
        }

        if s1 > s2 {
            guard nums1.count * 1 <= nums2.count * 6 else { return -1 }
        }
        else if s1 < s2 {
            guard nums2.count * 1 <= nums1.count * 6 else { return -1 }
        }
        else {
            return 0
        }

        var decs = max(s1, s2)
        var incs = min(s1, s2)

        var decn = s1 > s2 ? n1 : n2
        var incn = s1 > s2 ? n2 : n1

        var deci = 6
        var inci = 1

        var res = 0

        while decs > incs {
            while decn[deci] == 0 { deci -= 1 }
            while incn[inci] == 0 { inci += 1 }

            if deci - 1 > 6 - inci {
                decn[deci] -= 1
                decn[1] += 1
                decs -= deci - 1
            }
            else {
                incn[inci] -= 1
                incn[6] += 1
                incs += 6 - inci
            }

            res += 1
        }

        return res
    }
}
```
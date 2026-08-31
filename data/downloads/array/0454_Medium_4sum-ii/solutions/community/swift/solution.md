# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/3418873/](https://leetcode.com/problems/4sum-ii/solutions/3418873/)

---

```
class Solution {
    func fourSumCount(_ nums1: [Int], _ nums2: [Int], _ nums3: [Int], _ nums4: [Int]) -> Int {

        var res = 0
        var d = [Int: Int]()

        for n1 in nums1 {
            for n2 in nums2 {
                d[n1 + n2, default: 0] += 1
            }
        }

        for n3 in nums3 {
            for n4 in nums4 {
                res += d[-n3 - n4, default: 0]
            }
        }

        return res
    }
}
```
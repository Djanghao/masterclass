# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 49
**Link:** [https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/1134918/](https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/1134918/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func findMedianSortedArrays(_ nums1: [Int], _ nums2: [Int]) -> Double {
        let ln1 = nums1.count, ln2 = nums2.count
        var arr = Array(repeating: 0, count: ln1 + ln2), lna = arr.count
        var i = ln1 - 1, t = ln2 - 1, c = lna - 1
        
        while c >= 0 {
            if t < 0 || i >= 0 && nums1[i] > nums2[t] {
                arr[c] = nums1[i]
                c = c - 1
                i = i - 1
            } else {
                arr[c] = nums2[t]
                c = c - 1
                t = t - 1
            }
        }
        let m = lna / 2
        return lna % 2 == 0 ? Double(arr[m-1] + arr[m]) / 2 : Double(arr[m])
    }
}
```

<!--
Updated: 2023-09-21 | ID: c4cd81da-d433-43cb-b773-252966313777
-->
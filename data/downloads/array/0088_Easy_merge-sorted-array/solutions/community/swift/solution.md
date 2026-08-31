# ✔️ 100% Fastest Swift Solution, time: O(m + n), space: O(1).

**Author:** sergeyleschev
**Votes:** 30
**Link:** [https://leetcode.com/problems/merge-sorted-array/solutions/1921923/](https://leetcode.com/problems/merge-sorted-array/solutions/1921923/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(m + n), where m is the number of elements in nums1, and n is the number of elements in nums2.
    //   - space: O(1), only constant space is used.

    func merge(_ nums1: inout [Int], _ m: Int, _ nums2: [Int], _ n: Int) {
        var lastA = m - 1
        var lastB = n - 1
        var curr = nums1.count - 1

        while lastA >= 0, lastB >= 0 {
            if nums1[lastA] >= nums2[lastB] {
                nums1[curr] = nums1[lastA]
                lastA -= 1
            } else {
                nums1[curr] = nums2[lastB]
                lastB -= 1
            }
            curr -= 1
        }

        while lastB >= 0 {
            nums1[curr] = nums2[lastB]
            lastB -= 1
            curr -= 1
        }
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.
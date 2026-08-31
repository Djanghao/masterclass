# ✅ 90% 🥝 brute force & counting || nothing mystery

**Author:** sunnoca
**Votes:** 1
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4390268/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4390268/)

---

# Please Upvote \uD83D\uDD1D Appreciations!
![image.png](./images/0.png)

# Code
``` 
class Solution {
    fun findSpecialInteger(arr: IntArray): Int {
        var prev = arr[0]
        var count = 0
        val max = arr.size / 4

        for (curr in arr) {
            if (curr != prev) {
                count = 0
                prev = curr
            }
            if (++count > max) break
        }

        return prev
    }
}
```
# Complexity
- Time complexity: **O(** n **)**
- Space complexity: **O(** 1 **)**

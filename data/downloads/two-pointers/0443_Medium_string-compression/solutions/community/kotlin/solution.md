# ✅ 38% 📭 no extra space || one loop || brute force

**Author:** sunnoca
**Votes:** 4
**Link:** [https://leetcode.com/problems/string-compression/solutions/4227384/](https://leetcode.com/problems/string-compression/solutions/4227384/)

---

# Please Upvote \uD83D\uDD1D Appreciations!
<!-- Describe your first thoughts on how to solve this problem. -->
![image.png](./images/0.png)
# Complexity
- Time complexity: **O(n)**
- Space complexity: **O(1)**
# Code
```
class Solution {
    fun compress(arr: CharArray): Int {
        var c = 1 // counter
        var j = 0 // index of compressed string

        for (i in arr.indices) {
            if (i == arr.lastIndex || arr[i] != arr[i + 1]) {
                arr[j++] = arr[i]
                if (c > 1) c.toString().forEach { arr[j++] = it }
                c = 1
            } else c++
        }

        return j
    }
}
```
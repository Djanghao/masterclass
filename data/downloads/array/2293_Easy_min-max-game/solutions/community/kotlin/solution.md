# Kotlin O(1) space solution

**Author:** chayangkoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-max-game/solutions/5161337/](https://leetcode.com/problems/min-max-game/solutions/5161337/)

---

![Screenshot 2024-05-15 220249.png](./images/0.png)

# Code
```
class Solution {
    fun minMaxGame(nums: IntArray): Int {
        var n = nums.size
        while (n > 1) {
            n = n / 2
            for (i in 0 until n) {
                if (i % 2 == 0) {
                    nums[i] = min(nums[2 * i], nums[2 * i + 1])
                } else {
                    nums[i] = max(nums[2 * i], nums[2 * i + 1])
                }
            }
        }
        return nums[0]
    }
}
```
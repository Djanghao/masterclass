# Kotlin | O(n) Runtime

**Author:** jschnall
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5862391/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5862391/)

---

Sorry I don't feel like typing this out a second time. LeetCode needs to be fixed so it doesn't fail to save my first submission, and the clear explanation that I spent 10 minutes writing up.

# Complexity
$$O(n)$$

# Space complexity:
$$O(n)$$

# Code
```kotlin []
class Solution {
    fun minOperations(boxes: String): IntArray {
        val arr = IntArray(boxes.length)

        var onesLeft = if (boxes[0] == '1') 1 else 0
        var onesRight = 0

        // Calculate the start point
        for (i in 1 until arr.size) {
            if (boxes[i] == '1') {
                arr[0] += i
                onesRight++
            }
        }

        for (i in 1 until arr.size) {
            arr[i] = arr[i - 1] - onesRight + onesLeft
            if (boxes[i] == '1') {
                onesRight--
                onesLeft++
            }
        }
        
        return arr
    }
}
```
# [Kotlin] Solving the Last Remaining Number Problem

**Author:** teogor
**Votes:** 4
**Link:** [https://leetcode.com/problems/elimination-game/solutions/5058143/](https://leetcode.com/problems/elimination-game/solutions/5058143/)

---

# Intuition
We can observe that at each step, the elements are removed alternatively from the left and right. When removing from left, the head element is updated as `head + step`, and when removing from right, if the remaining count is odd, the head is updated as `head + step`. We repeat this process until only one element remains.

# Approach
We start with the head element, which is initially 1.
1. Initialize variables `remaining` as `n`, `head` as `1`, `step` as `1`, and `leftToRight` as `true`.
2. While `remaining` is greater than 1, do the following:
   - If `leftToRight` is true or `remaining` is odd, update `head` as `head + step`.
   - Divide `remaining` by 2.
   - Double the `step`.
   - Toggle `leftToRight`.
3. Return `head`.

# Complexity
- Time complexity: `O(log n)` - We reduce the size of the remaining elements by half in each iteration.

- Space complexity: `O(1)` - We only use constant extra space for variables.

# Code
```
class Solution {
    fun lastRemaining(n: Int): Int {
        var remaining = n
        var head = 1
        var step = 1
        var leftToRight = true
        
        while (remaining > 1) {
            if (leftToRight || remaining % 2 == 1) {
                head += step
            }
            remaining /= 2
            step *= 2
            leftToRight = !leftToRight
        }
        
        return head
    }
}

```

This approach ensures that we only need \\(O(\\log n)\\) iterations to find the last remaining number.
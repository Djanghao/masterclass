# Solved in o(n) without any DP , simple one iteration of array is all it takes

**Author:** aryanAshish
**Votes:** 5
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/5386741/](https://leetcode.com/problems/jump-game-ii/solutions/5386741/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is very simple, I had already solved Can Jump problem so I was trying to modify that solution.

# Approach
<!-- Describe your approach to solving the problem. -->
My strategy is like playing hopscotch with superpowers. Imagine you can jump really far, and you always aim to land on the farthest safe spot you can see.

Step-by-Step:
Start at the first tile with zero jumps.
Keep track of the farthest tile you can jump to (farthest), and the end of the current jump (currentEnd).
Hop through the array, and for each tile:
Update farthest to the farthest spot you can jump to from your current position.
If you\u2019ve reached the end of your current jump (currentEnd), jump again to the farthest spot, and increase your jump count.
Repeat until you can reach the last tile.
Example:

For nums = [2, 3, 1, 1, 4]:

Start with farthest at 2 and currentEnd at 2.
Jump from tile 1 to tile 4.
Total jumps: 2. Easy peasy!

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
One hop through the array is all it takes.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
Just a few variables to keep track of your jumps.

# Code
```
class Solution {
    fun jump(nums: IntArray): Int {
        if (nums.size <= 1) return 0

        var jumps = 0
        var currentEnd = 0
        var farthest = 0

        for (i in 0 until nums.size - 1) {
            farthest = maxOf(farthest, i + nums[i])
            if (i == currentEnd) {
                jumps++
                currentEnd = farthest
                if (currentEnd >= nums.size - 1) break
            }
        }

        return jumps
    }
}

```
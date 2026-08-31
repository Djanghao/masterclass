# Kotlin solution

**Author:** xemura
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/3185037/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/3185037/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun countGoodRectangles(rectangles: Array<IntArray>): Int {
        var maxSquareSide : Int = 0
        val list = mutableListOf<Int>()
        var countSquare : Int = 0
        for (i in rectangles)
        {
            var minSide = minOf(i[0], i[1])
            list.add(minSide)
            if (minSide > maxSquareSide) maxSquareSide = minSide
        }

        list.forEach { element ->
            if (element == maxSquareSide) countSquare++
        }
        return countSquare
    }
}
```
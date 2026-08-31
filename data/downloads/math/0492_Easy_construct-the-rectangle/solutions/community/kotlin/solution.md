# Simple Kotlin solution

**Author:** Aleksandr_Sh
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/4786659/](https://leetcode.com/problems/construct-the-rectangle/solutions/4786659/)

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
    fun constructRectangle(area: Int): IntArray {
        var w: Int = ceil(sqrt(area.toDouble())).toInt();
        while(area % w != 0){
            w++;
        }
        return intArrayOf(w, area / w);
    }
}
```
# System of 2 linear equations with 2 unknowns.

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/4751608/](https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/solutions/4751608/)

---

# Intuition
System of 2 linear equations with 2 unknowns.
# Approach
System of 2 linear equations with 2 unknowns.
# Complexity
- Time complexity:
O(1)
- Space complexity:
O(1)

# Code
```
class Solution {
    fun numOfBurgers(tomatoSlices: Int, cheeseSlices: Int): List<Int> {
        var small = 4 * cheeseSlices - tomatoSlices
        if (small<0 || small % 2 !=0 || cheeseSlices-small/2<0) return mutableListOf()
        small /= 2
        return mutableListOf(cheeseSlices-small,small)
    }
}
```
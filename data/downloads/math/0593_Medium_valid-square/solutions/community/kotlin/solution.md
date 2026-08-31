# [Kotlin] Pythagorean Persistence: Seeking Squareness in Points (196ms)

**Author:** teogor
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-square/solutions/5100126/](https://leetcode.com/problems/valid-square/solutions/5100126/)

---

# Intuition
To determine whether the given points form a valid square, we need to check if the four points construct a square by satisfying the conditions of having four equal sides with positive length and four equal angles (90-degree angles).

# Approach
1. Calculate the distances between all pairs of points to find the lengths of the sides and diagonals.
2. A square has the following properties:
   - All side lengths are equal.
   - Two of the side lengths are equal to the square root of the sum of the squares of the other two sides (this is because of the Pythagorean theorem).
   - All diagonals have the same length.
3. Sort the distances to simplify the checking process.
4. Check whether the sorted distances satisfy the conditions of a valid square:
   - The smallest distance (the first element after sorting) must be greater than 0.
   - The four smallest distances must be equal to each other (representing the four sides).
   - The fifth and sixth smallest distances must be equal to each other and twice the length of the sides (representing the diagonals).
5. Return true if all conditions are met; otherwise, return false.

# Complexity
- Time complexity: O(1)
  - Calculating distances between points takes constant time since the number of points is fixed.
  - Sorting the distances takes O(1) time.
  - Checking the conditions also takes constant time.

- Space complexity: O(1)
  - The space used by variables and intermediate calculations is constant.

# Code
```
class Solution {
    fun validSquare(p1: IntArray, p2: IntArray, p3: IntArray, p4: IntArray): Boolean {
        val distances = listOf(
            distance(p1, p2),
            distance(p1, p3),
            distance(p1, p4),
            distance(p2, p3),
            distance(p2, p4),
            distance(p3, p4)
        ).sorted()

        return distances[0] > 0 && distances[0] == distances[1] && distances[1] == distances[2] &&
                distances[2] == distances[3] && distances[4] == distances[5] &&
                distances[4] == 2 * distances[0]
    }

    private fun distance(p1: IntArray, p2: IntArray): Int {
        val dx = p1[0] - p2[0]
        val dy = p1[1] - p2[1]
        return dx * dx + dy * dy
    }
}

```
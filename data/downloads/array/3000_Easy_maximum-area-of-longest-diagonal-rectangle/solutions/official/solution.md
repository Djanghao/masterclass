# Official Solution

**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solution/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solution/)

---

### Approach: Enumeration

#### Intuition

We traverse all rectangles:
- Using the Pythagorean theorem, we calculate the square of the diagonal of the rectangle, denoted as $\textit{diaSq}$.
- Using the formula for the area of a rectangle, we calculate its area, denoted as $\textit{area}$.

We then compare the diagonal lengths:
- If the diagonal square is equal to the current largest diagonal square, we compare the area values and update the maximum area.
- If the diagonal square is greater than the current largest diagonal square, we update both the largest diagonal square and the maximum area.

Finally, we return the maximum area value.

#### Implementation

<iframe src="https://leetcode.com/playground/QsjYSgC2/shared" frameBorder="0" width="100%" height="395" name="QsjYSgC2"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array.

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.

---
# Official Solution

**Link:** [https://leetcode.com/problems/count-number-of-trapezoids-ii/solution/](https://leetcode.com/problems/count-number-of-trapezoids-ii/solution/)

---

### Approach: Hash Table + Geometry Mathematics

#### Intuition

This problem differs from 「[3623. Count Number of Trapezoids I](https://leetcode.com/problems/count-number-of-trapezoids-i/description/)」 because there is no restriction on the slope of the line segments, and it does not count parallelograms.

We can adapt the idea from [3623. Count Number of Trapezoids I](https://leetcode.com/problems/count-number-of-trapezoids-i/description/) by counting the number of trapezoids for each slope. However, knowing only the slope is not enough to determine whether two line segments are collinear, so we also need to track the intercept to distinguish non collinear segments. Here, the intercept plays a role similar to the height value used in Problem 3623.

A parallelogram can be determined by two line segments that share the same midpoint but have different slopes. Therefore, we can count the number of segments that share a midpoint but have different slopes to compute the number of parallelograms.

Using a nested map inside a hash table creates many unnecessary map objects, which leads to higher time complexity. To avoid this, we store intercepts of segments with the same slope and slopes of segments with the same midpoint using a hash table of vectors. During the trapezoid and parallelogram counting steps, maps are created only for the segments within a single slope or single midpoint group. This reduces overhead and improves performance.

The structure `slopeToIntercept` stores the intercepts for each slope, and `midToSlope` stores the slopes for each midpoint.

#### Implementation

<iframe src="https://leetcode.com/playground/LmZGeiKs/shared" frameBorder="0" width="100%" height="500" name="LmZGeiKs"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{points}$.

- Time complexity: $O(n ^ 2)$.
  
  During the final counting phase, a $\textit{map}$ is used to count frequencies, and each operation on the map takes $O(\log m)$ time, where $m$ is the number of segments that share the same slope or midpoint. In the worst case, all segments have the same slope or midpoint, which makes the counting phase run in $O(m^2 \log m)$ time, and in that case $m = n$. In practice, however, $n$ is relatively small, $\log n$ behaves almost like a constant, and the distribution of slopes and midpoints is usually sparse, so the number of segments in each group is limited. Therefore, most of the total cost comes from the preprocessing step that constructs all segment pairs, which leads to an overall time complexity of $O(n^2)$.

- Space complexity: $O(n ^ 2)$.
 
 ---
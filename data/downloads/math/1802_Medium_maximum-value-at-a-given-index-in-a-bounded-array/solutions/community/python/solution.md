# Python O(1) Math solution

**Author:** louis925
**Votes:** 55
**Link:** [https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/1119794/](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/solutions/1119794/)

---

The optimal array always have the form `..., amax - 2, amax - 1, amax, amax -1, amax - 2, amax - 3, ...`, where `a_index = amax`. And, if you plot the array in 2D, it is always in a pyramid shape. The area under the curve is the sum of the array. The only tricky thing is the boundaries.

Depending on the `maxSum`, there are 3 cases.
1. The first case is that the maxSum is small enough so that the shape is a perfect symmetric pyramid. In this case, the area of a given pyramid height h is h^2. So given a area = maxSum, the max height is h = sqrt(maxSum).
2. The second case is that the pyramid already hit the right bounday but not the left boundary (or vice versa). The solution requires one to solve a quadratic equation, i.e. `x = (-b + sqrt(b^2 -4ac)) / (2a)`.
3. The third case is that the pyramid is tall enogh to hit both boundaries. In this case, one can just subtract the maximum area computed in case 2. The the remaining height is simply `(remaining_max_sum // n)`.
```
import math
class Solution:
    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        maxSum -= n              # remove the contributions from all the 1 in each element.
		                         # We will add 1 back to the final height later
        if index < n // 2:       # make the index closer to the right boundary
            index = n - index - 1
        n_left = index           # number of element to the left of the index
        n_right = n - 1 - index  # number of element to the right of the index
        tri_left = (n_left * (n_left + 1)) // 2     # the triangle area for the left side if not hitting the boundary
        tri_right = (n_right * (n_right + 1)) // 2  # the triangle area for the right side if not hitting the boundary
		# case 1: perfect pyramid
        if maxSum <= (tri_right * 2 + n_right + 1):
            return int(math.sqrt(maxSum)) + 1
		# case 2: right side hits the boundary
        if maxSum <= (tri_left + tri_right + (n_left - n_right) * n_right + n_left + 1):
            b = 3 + 2 * n_right
            return int((-b + math.sqrt(b * b - 8 * (tri_right + 1 - n_right * n_right - maxSum))) / 2) + 1 + 1
		# case 3: both sides hit boundaries
        maxSum -= (tri_left + tri_right + (n_left - n_right) * n_right + n_left + 1)
        return n_left + 1 + 1 + (maxSum // n)
```
Though I am sure no one expect this to be the answer for such a coding competition here at LeetCode :D

Now, if you are really into this math solution, here is how I get the formula for case 2:
The largest allowed `maxSum` for the second case is when the left side is a perfect triangle (which will take `tri_left` area), and the right side is a triangle on top of a rectangle, which have `tri_right` and  `(n_left - n_right) * n_right` areas, respectively. The center bar at `index` will take `n_left + 1` area. So that gives the largest allowed maxSum to be 
```python
(tri_left + tri_right + (n_left - n_right) * n_right + n_left + 1)
```
If `maxSum` is larger than this, the left side will be a triangle also on top of a rectangle, which becomes the case 3.

To figure out the solution, it is the same formula as the condition equaion. But you want to allow the left triangle to have a unknown width `l` (and height). Let's say the center bar have height `h = l + 1`. The total area (which will be maxSum) will be 
```python
A = left_triangle_area(l) + tri_right + (l - n_right) * n_right + h
```
where `l = h - 1` is the unknown width of the left triangle, and `left_triangle_area(h) = l * (l + 1) / 2` is a function of `l`. So this becomes a quadratic equation on `l`: 
```python
maxSum = (l^2 + l) / 2 + tri_right + (l - n_right) * n_right + l + 1
``` 
Multiplying both sides by 2 and putting it into the standard quadratic equation form `a * x^2 +b * x + c = 0`, we get
```python
l^2 + (3 + 2 * n_right) * l + 2 * (tri_right + 1 - n_right * n_right - maxSum) = 0
```
so
```python
a = 1
b = (3 + 2 * n_right)
c = 2 * (tri_right + 1 - n_right * n_right - maxSum)
```
Then using the [quartic formula](https://en.wikipedia.org/wiki/Quadratic_formula), one get the solution to the height is 
```python
h = l + 1 = (-b + sqrt(b^2 -4ac)) / (2a) + 1
```
We plus another 1 because we subtracted it at the beginning.
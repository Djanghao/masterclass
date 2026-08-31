# Official Solution

**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solution/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solution/)

---

[TOC]

## Solution

--- 

### Approach: Slope Property

**Intuition**

We are given $N$ points `(x, y)`, where `x` and `y` represent the coordinates. We must return `true` if the points make a straight line and `false` otherwise.

To solve this problem, we will use the slope property of a straight line. The slope of a line is defined as the change in Y coordinates with respect to the change in X coordinates of any two points on the line.

> Slope =    $\frac{\Delta Y}{\Delta X}$

The property that can be used to solve this problem is that the slope between any two points on a straight line will be the same. If we choose two points from the given list of points, the value of `Slope` as defined above should be the same. 

We don't actually need to check all pairs of points, but only all slopes relative to one fixed point. We will choose to measure from the point at index $0$ and see if all slopes are the same.

![fig](../Figures/1232/1232A.png)

So if we have three points `p0, p1, p2`, and the slope using `p0 and p1` is $\frac{\Delta Y1}{\Delta X1}$ and the slope between `p0 and p2` is $\frac{\Delta Y2}{\Delta X2}$, we will check if these two slopes are equal or not, i.e. $\frac{\Delta Y1}{\Delta X1}$ = $\frac{\Delta Y2}{\Delta X2}$ . Since $\Delta X$ can be zero as well and in that case dividing by it would cause an issue. We can tweak the previous equality equation to convert division into multiplication to avoid the divide by zero issues. The new equation would be:

>  $\Delta Y1$ * $\Delta X2$ = $\Delta Y2$ * $\Delta X1$

**Algorithm**

1. Find the $\Delta X$ and $\Delta Y$ using the points at index `0` and `1`.
2. Iterate over the indices from `2` to the end of the list, and for each index `i` find the $\Delta X$, $\Delta Y$ for points at index `0` and `i`.
3. Compare the slope calculated in step #1 with that of step #2 using the previous equation.
4. If the equation is not satisfied, return `false`.
5. Otherwise, at the end of the loop return `true`.


**Implementation**

<iframe src="https://leetcode.com/playground/nZywPKA7/shared" frameBorder="0" width="100%" height="497" name="nZywPKA7"></iframe>

**Complexity Analysis**

Here $N$ is the number of points in the list `coordinates`.

* Time complexity: $O(N)$.

  We need to iterate over every point only once, and hence the total time complexity would be equal to $O(N)$.

* Space complexity: $O(1)$.

  We don't require any extra space, and hence the space complexity would be constant.
  <br/>

---
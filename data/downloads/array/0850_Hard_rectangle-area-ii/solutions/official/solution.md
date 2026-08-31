# Official Solution

**Link:** [https://leetcode.com/problems/rectangle-area-ii/solution/](https://leetcode.com/problems/rectangle-area-ii/solution/)

---

[TOC]

## Solution
---

### Approach 1: Coordinate Compression

#### Intuition

<center>
    <img src="../Figures/850/example.png" alt="Image from problem description" style="height: 200px;"/>
</center>

Suppose instead of `rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]`, we had `[[0,0,200,200],[100,0,200,300],[100,0,300,100]]`.  The answer would just be 100 times bigger.

What about if `rectangles = [[0,0,2,2],[1,0,2,3],[1,0,30002,1]]` ?  Only the blue region would have area `30000` instead of `1`.

Our idea is this: we'll take all the `x` and `y` coordinates, and re-map them to `0, 1, 2, ...` etc.  For example, if `rectangles  = [[0,0,200,200],[100,0,200,300],[100,0,300,100]]`, we could re-map it to `[[0,0,2,2],[1,0,2,3],[1,0,3,1]]`.  Then, we can solve the problem with brute force.  However, each region may actually represent some larger area, so we'll need to adjust for that at the end.

#### Algorithm

Re-map each `x` coordinate to `0, 1, 2, ...`.  Independently, re-map all `y` coordinates too.

We then have a problem that can be solved by brute force: for each rectangle with re-mapped coordinates `(rx1, ry1, rx2, ry2)`, we can fill the grid `grid[x][y] = True` for `rx1 <= x < rx2` and `ry1 <= y < ry2`.

Afterwards, each `grid[rx][ry]` represents the area `(imapx(rx+1) - imapx(rx)) * (imapy(ry+1) - imapy(ry))`, where if `x` got remapped to `rx`, then `imapx(rx) = x` ("inverse-map-x of remapped-x equals x"), and similarly for `imapy`.

#### Implementation

<iframe src="https://leetcode.com/playground/KgCoS6sU/shared" frameBorder="0" width="100%" height="500" name="KgCoS6sU"></iframe>

#### Complexity Analysis

* Time Complexity:  $$O(N^3)$$, where $$N$$ is the number of rectangles.

* Space Complexity:  $$O(N^2)$$.
<br />
<br />


---

### Approach 2: Line Sweep

#### Intuition

Imagine we pass a horizontal line from bottom to top over the shape.  We have some active intervals on this horizontal line, which gets updated twice for each rectangle.  In total, there are $$2 * N$$ events, and we can update our (up to $$N$$) active horizontal intervals for each update.

#### Algorithm

For a rectangle like `rec = [1,0,3,1]`, the first update is to add `[1, 3]` to the active set at `y = 0`, and the second update is to remove `[1, 3]` at `y = 1`.  Note that adding and removing respects multiplicity - if we also added `[0, 2]` at `y = 0`, then removing `[1, 3]` at `y = 1` will still leave us with `[0, 2]` active.

This gives us a plan: create these two events for each rectangle, then process all the events in sorted order of `y`.  The issue now is deciding how to process the events `add(x1, x2)` and `remove(x1, x2)` such that we are able to `query()` the total horizontal length of our active intervals.

We can use the fact that our `remove(...)` operation will always be on an interval that was previously added.  Let's store all the `(x1, x2)` intervals in sorted order.  Then, we can `query()` in linear time using a technique similar to a classic LeetCode problem, [Merge Intervals](https://leetcode.com/problems/merge-intervals/).

#### Implementation

<iframe src="https://leetcode.com/playground/BjJWRXSc/shared" frameBorder="0" width="100%" height="500" name="BjJWRXSc"></iframe>

#### Complexity Analysis

* Time Complexity:  $$O(N^2 \log N)$$, where $$N$$ is the number of rectangles.

* Space Complexity:  $$O(N)$$.
<br />
<br />


---

### Approach 3: Segment Tree

#### Intuition and Algorithm

As in *Approach #3*, we want to support `add(x1, x2)`, `remove(x1, x2)`, and `query()`.  While outside the scope of a typical interview, this is the perfect setting for using a *segment tree*.  For completeness, we include the following implementation.

You can learn more about Segment Trees by visiting the articles of these problems: [Falling Squares](https://leetcode.com/problems/falling-squares/), [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/).

#### Implementation

<iframe src="https://leetcode.com/playground/o9SjvQcw/shared" frameBorder="0" width="100%" height="500" name="o9SjvQcw"></iframe>

#### Complexity Analysis

Let $N$ be the number of rectangles.

* Time Complexity: $O(N^2)$

    The update operation takes $O(\log N)$ in the average case and $O(N)$ in the worst case when the segment tree is unbalanced. `update()` is called $N$ times, so the overall time complexity is $O(N \log N)$ in the average case and $O(N^2)$ in the worst case.

* Space Complexity:  $O(N)$.
<br />
<br />
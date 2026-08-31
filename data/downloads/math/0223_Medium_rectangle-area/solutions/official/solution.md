# Official Solution

**Link:** [https://leetcode.com/problems/rectangle-area/solution/](https://leetcode.com/problems/rectangle-area/solution/)

---

[TOC]

## Solution

---

### Overview

In this problem, we are given the coordinates of four points on a 2D plane. Two of them belong to the bottom left, and top right corners of rectangle $A$, and the other two belong to the bottom left and top right corners of rectangle $B$. The sides of the rectangles are parallel to the $x$ and $y$ axes. Using these points, we need to find the total area covered by two rectangles.

Without an indicative diagram, we might think it'll simply be the addition of the individual areas of both rectangles. And that's the most common mistake people make with this question. The two rectangles could potentially overlap with each other. Considering this, let's see how to go about the problem's solution.

---

### Approach: Math and Geometry

#### Intuition

As explained in the overview section above, calculating the individual areas of both rectangles is easy enough. We have the coordinates of top right and bottom left corners - $(x1, y1)$ and $(x2, y2)$. In this case, the area of the rectangle would be $height * width$ or in other words, $(y2 - y1) * (x2 - x1)$. We can calculate the area of both rectangles and sum it together.

But, the rectangles could potentially have an overlap between them. This means we might be counting the overlapping area twice, which should have been added only once. So, to get the final answer, we need to subtract the overlapping area from the total area.

![two rectangles overlapping with each other](../Figures/223/overview.png)

<br />

##### Finding the overlap

To find the overlap, we need to find the width and height of the overlapping area (if there is any). We can get the width by finding the overlap in the horizontal or $x$ direction. $height$ can be calculated by finding the overlap in the $y$ direction.

To find the $x$ overlap, let's think about the projection made by the corners of the rectangles on the x-axis. In other words, draw a line perpendicular to the x-axis from both rectangles' bottom left and top right corners. We mark the points at which these lines meet the x-axis. We can see that these points create two line segments - one formed by $(ax1, 0), (ax2, 0)$, and the other one formed by $(bx1, 0), (bx2, 0)$.

![projection of the rectangles](../Figures/223/projection.png)

Now, finding x overlap is equivalent to finding the intersection of these two line segments.

![cases where lines don't overlap](../Figures/223/not-overlapping-lines.png)

![cases where lines overlap](../Figures/223/overlapping-lines.png)

From the image above, we can see that if there is an overlap, $min(ax2, bx2) - max(ax1, bx1)$ will be a positive quantity equal to the x overlap of the two rectangles. If the amount is negative or $0$, there is no overlap between the two lines (and rectangles).

$$ xOverlap = min(ax2, bx2) - max(ax1, bx1) $$

In a similar way, we can find the y overlap of the two rectangles.

$$ yOverlap = min(ay2, by2) - max(ay1, by1) $$

The area of the overlap $overlap = xOverlap * yOverlap$.

The total area considering the overlap between the two rectangles:

$$ area = areaA + areaB - overlap $$

#### Algorithm

1. We are given four points - ${ax1, ay1}, {ax2, ay2}$ and ${bx1, by1}, {bx2, by2}$.
2. Calculate $areaA$ and $areaB$ by multiplying width and height of the respective rectangles.
3. Calculate the $x$ overlap:

   $$ xOverlap = min(ax2, bx2) - max(ax1, bx1) $$

4. Calculate the $y$ overlap:

   $$ yOverlap = min(ay2, by2) - max(ay1, by1) $$

5. If $xOverlap$ and $yOverlap$, both are positive, multiply $x$ and $y$ overlaps to get the area of the overlap. Otherwise, it is $0$.
6. Calculate the total area as - $areaA + areaB - overlap$.
7. Return the total area.

!?!../Documents/223/calculating-area-slideshow.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/PJcg4rNH/shared" frameBorder="0" width="100%" height="500" name="PJcg4rNH"></iframe>


#### Complexity Analysis

* Time complexity: $O(1)$. Given the coordinates of rectangles' corners, calculating the areas of each individual rectangle and the overlap can be considered a constant time operation. So the final time complexity is $O(1)$.

* Space complexity: $O(1)$. We don't make use of any external data structure for this question. So, space requirements can be considered constant. So the final space complexity is $O(1)$.
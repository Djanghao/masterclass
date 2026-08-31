# Official Solution

**Link:** [https://leetcode.com/problems/best-meeting-point/solution/](https://leetcode.com/problems/best-meeting-point/solution/)

---

[TOC]

## Solution

---
### Approach #1 (Breadth-first Search) [Time Limit Exceeded]

A brute force approach is to evaluate all possible meeting points in the grid. We could apply breadth-first search originating from each of the points.

While inserting a point into the queue, we need to record the distance of that point from the meeting point.  Also, we need an extra `visited` table to record which point had already been visited to avoid being inserted into the queue again.


<iframe src="https://leetcode.com/playground/AM4Nf9Ke/shared" frameBorder="0" width="100%" height="500" name="AM4Nf9Ke"></iframe>

**Complexity analysis**

* Time complexity : $$O(m^2n^2)$$.
For each point in the $$m \times n$$ size grid, the breadth-first search takes at most $$m \times n$$ steps to reach all points. Therefore the time complexity is $$O(m^2n^2)$$.

* Space complexity : $$O(mn)$$.
The `visited` table consists of $$m \times n$$ elements map to each point in the grid. We insert at most $$m \times n$$ points into the queue.

---
### Approach #2 (Manhattan Distance Formula) [Time Limit Exceeded]

You may notice that breadth-first search is unnecessary. You can just calculate the Manhattan distance using the formula:

$$
distance(p1, p2) = \left | p2.x - p1.x \right | + \left | p2.y - p1.y \right |
$$

<iframe src="https://leetcode.com/playground/hkbREMpy/shared" frameBorder="0" width="100%" height="500" name="hkbREMpy"></iframe>

**Complexity analysis**

* Time complexity : $$O(m^2n^2)$$.
Assume that $$k$$ is the total number of houses. For each point in the $$m \times n$$ size grid, we calculate the manhattan distance in $$O(k)$$. Therefore the time complexity is $$O(mnk)$$. But do note that there could be up to $$m \times n$$ houses, making the worst case time complexity to be $$O(m^2n^2)$$.

* Space complexity : $$O(mn)$$.

---
### Approach #3 (Sorting) [Accepted]

Finding the best meeting point in a 2D grid seems difficult. Let us take a step back and solve the 1D case which is much simpler. Notice that the Manhattan distance is the sum of two independent variables. Therefore, once we solve the 1D case, we can solve the 2D case as two independent 1D problems.

Let us look at some 1D examples below:

    Case #1: 1-0-0-0-1

    Case #2: 0-1-0-1-0

We know the best meeting point must be located somewhere between the left-most and right-most point. For the above two cases, we would select the center point at $$x = 2$$ as the best meeting point. How about choosing the mean of all points as the meeting point?

Consider this case:

    Case #3: 1-0-0-0-0-0-0-1-1



Using the mean gives us $$\bar{x} = \frac{0 + 7 + 8}{3} = 5$$ as the meeting point. The total distance is $$10$$.

But the best meeting point should be at $$x = 7$$ and the total distance is $$8$$.

You may argue that the mean is *close* to the optimal point. But imagine a larger case with many 1's congregating on the right side and just a single 1 on the left-most side. Using the mean as the meeting point would be far from optimal.

Besides mean, what is a better way to represent the distribution of points? Would median be a better representation? Indeed. In fact, the median *must* be the optimal meeting point.

    Case #4: 1-1-0-0-1

To see why this is so, let us look at case #4 above and choose the median $$x = 1$$ as our initial meeting point. Assume that the total distance traveled is *d*. Note that we have equal number of points distributed to its left and to its right. Now let us move one step to its right where $$x = 2$$ and notice how the distance changes accordingly.

Since there are two points to the left of $$x = 2$$, we add $$2 * (+1)$$ to *d*. And *d* is offset by –1 since there is one point to the right. This means the distance had overall increased by 1.

Therefore, it is clear that:

>As long as there is equal number of points to the left and right of the meeting point, the total distance is minimized.

    Case #5: 1-1-0-0-1-1

One may think that the optimal meeting point must fall on one of the 1's. This is true for cases with odd number of 1's, but not necessarily true when there are even number of 1's, just like case #5 does. You can choose any of the $$x = 1$$ to $$x = 4$$ points and the total distance is minimized. Why?

The implementation is direct. First we collect both the row and column coordinates, sort them and select their middle elements. Then we calculate the total distance as the sum of two independent 1D problems.


<iframe src="https://leetcode.com/playground/43zgaQfx/shared" frameBorder="0" width="100%" height="497" name="43zgaQfx"></iframe>

Note that in the code above we do not need to sort *rows*, why?

**Complexity analysis**

* Time complexity : $$O(mn + n \log n)$$.
Since there could be at most $$m \times n$$ points, therefore the time complexity is $$O(mn + n \log n)$$ due to sorting. Only the columns are sorted, using collections.sort, which has the time complexity $O(n \log n)$.

* Space complexity : $$O(mn)$$.

---
### Approach #4 (Collect Coordinates in Sorted Order) [Accepted]

We could use the [Selection algorithm](https://en.wikipedia.org/wiki/Selection_algorithm) to select the median in $$O(mn)$$ time, but there is an easier way. Notice that we can collect both the row and column coordinates in sorted order.


<iframe src="https://leetcode.com/playground/Q3Vag83a/shared" frameBorder="0" width="100%" height="500" name="Q3Vag83a"></iframe>

<br>
You can calculate the distance without knowing the median using a two pointer approach. This neat approach is inspired by [@larrywang2014's solution](https://leetcode.com/discuss/65336/14ms-java-solution).


<iframe src="https://leetcode.com/playground/JjHq4B7U/shared" frameBorder="0" width="100%" height="378" name="JjHq4B7U"></iframe>

**Complexity analysis**

* Time complexity : $$O(mn)$$.

* Space complexity : $$O(mn)$$.
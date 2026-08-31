# Official Solution

**Link:** [https://leetcode.com/problems/brick-wall/solution/](https://leetcode.com/problems/brick-wall/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/537500967?texttrack=en" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach #1 Brute Force [Time Limit Exceeded]

In this approach, we consider the given wall as being made up of virtual bricks each of width 1. We traverse over the width of the wall only in terms of these virtual bricks.

Firstly, we need to determine the total number of virtual bricks. For this, we determine the width of the given wall by summing up the widths of the bricks in the first row. This width is stored in $$sum$$. Thus, we need to traverse over the widthe $$sum$$ times now in terms of 1 unit in each iteration.

We traverse over the virtual bricks in a column by column fashion. For keeping a track of the actual position at which we are currently in any row, we make use of a $$pos$$ array. $$pos[i]$$ refers to the index of the brick in the $$i^{th}$$ row, which is being treated as the virtual brick in the current column's traversal. Further, we maintain a $$count$$ variable to keep a track of the number of bricks cut if we draw a line down at the current position.

For every row considered during the column-by-column traversal, we need to check if we've hit an actual brick boundary. This is done by updating the brick's width after the traversal. If we don't hit an actual brick boundary, we need to increment $$count$$ to reflect that drawing a line at this point leads to cutting off 1 more brick. But, if we hit an actual brick boundary, we increment the value of $$pos[i]$$, with $$i$$ referring to the current row's index. But, now if we draw a line down through this boundary, we need not increment the $$count$$.

We repeat the same process for every column of width equal to a virtual brick, and determine the minimum value of $$count$$ obtained from all such traversals.

The following animation makes the process clearer:

<!--![Brick_Wall](../Figures/554_Brick_Wall_1.gif)-->
!?!../Documents/554_Brick_Wall1.json:866,487!?!



<iframe src="https://leetcode.com/playground/fruhzBr8/shared" frameBorder="0" name="fruhzBr8" width="100%" height="428"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n*m)$$. We traverse over the width($$n$$) of the wall $$m$$ times, where $$m$$ is the height of the wall.

* Space complexity : $$O(m)$$. $$pos$$ array of size $$m$$ is used, where $$m$$ is the height of the wall.

---
### Approach #2 Better Brute Force[Time LImit Exceeded]

**Algorithm**

In this approach, instead of traversing over the columns in terms of 1 unit each time, we traverse over the columns in terms of the width of the smallest brick encountered while traversing the current column. Thus, we update $$pos$$ array and $$sums$$ appropriately depending on the width of the smallest brick. Rest of the process remains the same as the first approach.

The optimization achieved can be viewed by considering this example:

```

[[100, 50, 50],
[50, 100],
[150]]

```

In this case, we directly jump over the columns in terms of widths of 50 units each time, rather than making traversals over widths incrementing by 1 unit each time.


<iframe src="https://leetcode.com/playground/e58vTtJR/shared" frameBorder="0" name="e58vTtJR" width="100%" height="496"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n*m)$$. In worst case, we traverse over the length($$n$$) of the wall $$m$$ times, where $$m$$ is the height of the wall.

* Space complexity : $$O(m)$$. $$pos$$ array of size $$m$$ is used, where $$m$$ is the height of the wall.

---

### Approach #3 Using HashMap [Accepted]

**Algorithm**

In this approach, we make use of a HashMap $$map$$ which is used to store entries in the form: $$(sum, count)$$. Here, $$sum$$ refers to the cumulative sum of the bricks' widths encountered in the current row, and $$count$$ refers to the number of times the corresponding sum is obtained. Thus, $$sum$$ in a way, represents the positions of the bricks's boundaries relative to the leftmost boundary.

Let's look at the process first. We traverse over every row of the given wall. For every brick considered, we find the $$sum$$ corresponding to the sum of the bricks' widths encountered so far in the current row. If this $$sum$$'s entry doesn't exist in the $$map$$, we create a corresponding entry with an initial $$count$$ of 1. If the $$sum$$ already exists as a key, we increment its corresponding $$count$$ value.

This is done based on the following observation. We will never obtain the same value of $$sum$$ twice while traversing over a particular row. Thus, if the $$sum$$ value is repeated while traversing over the rows, it means some row's brick boundary coincides with some previous row's brick boundary. This fact is accounted for by incrementing the corresponding $$count$$ value.

But, for every row, we consider the sum only upto the second last brick, since the last boundary isn't a valid boundary for the solution.

At the end, we can obtain the maximum $$count$$ value to determine the minimum number of bricks that need to be cut to draw a vetical line through them.

The following animation makes the process clear:

<!-- ![Brick_Wall](../Figures/554_Brick_Wall_2.gif) -->
!?!../Documents/554_Brick_Wall2.json:866,487!?!

<iframe src="https://leetcode.com/playground/miHSNYBN/shared" frameBorder="0" name="miHSNYBN" width="100%" height="377"></iframe>
**Complexity Analysis**

* Time complexity : $$O(n)$$. We traverse over the complete bricks only once. $$n$$ is the total number of bricks in a wall.

* Space complexity : $$O(m)$$. $$map$$ will contain at most $$m$$ entries, where $$m$$ refers to the width of the wall.
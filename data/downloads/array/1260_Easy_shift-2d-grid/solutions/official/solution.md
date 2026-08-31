# Official Solution

**Link:** [https://leetcode.com/problems/shift-2d-grid/solution/](https://leetcode.com/problems/shift-2d-grid/solution/)

---

[TOC]

## Solution

---

### Approach 1: Simulation

**Intuition**

We are given instructions on how to apply the transformation. Therefore, we could just repeat applying the transformation $$k$$ times.

**Algorithm**

Reading explanations with lots of notation and array indexes can be confusing, and there is a lot of room for misunderstanding. A good first step might be to draw a picture (a rough sketch on a whiteboard would be fine) of each of the 3 cases to be certain that you understand them.

*Element at grid[i][j] moves to grid[i][j + 1].*

![Diagram showing case #1.](../Figures/1260/case1.png)

*Element at grid[i][n - 1] moves to grid[i + 1][0].*

![Diagram showing case #2.](../Figures/1260/case2.png)

*Element at grid[m - 1][n - 1] moves to grid[0][0].*

![Diagram showing case #3.](../Figures/1260/case3.png)

Then, $$k$$ times, we need to create a new 2D array and follow the given rules to move the values. If we're using Java, we'll also need to then convert the output from a 2D Array to a 2D list.

<iframe src="https://leetcode.com/playground/NTAz9bgx/shared" frameBorder="0" width="100%" height="500" name="NTAz9bgx"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n \cdot m \cdot k)$$, where the grid size is $$n \cdot m$$ and we need to apply the transform $$k$$ times.

* Space Complexity: $$O(n \cdot m)$$. We are creating a new array in each iteration of the loop. We only keep track of at most 2 arrays at a time, though. The rest are garbage collected/ free'd.

<br />

---

### Approach 2: Simulation, Recycling Same Array

**Intuition**

The previous approach created `k` new arrays. We can simplify it to do the movements in-place. To do this, let's look at how an individual value moves around the grid. Looking at the movement of a single value is a good strategy for getting started on 2D grid translation problems. The value we're looking at is the yellow square. The numbers show the order in which it moved into each cell.

!?!../Documents/1260.json:960,540!?!

The movement is a straightforward pattern. The value moves in "reading" order, and then when it gets to the bottom right, it wraps around to the top left.

![Arrow diagram showing the movement of the cell.](../Figures/1260/movement_pattern.png)

We can simulate this wrapping in-place by repeatedly moving each value "forward" by one place.

**Algorithm**

For each step, we'll need to keep track of the current value we're moving forward. For Java, we'll need to finish by copying the input into a 2D list. If you were writing this algorithm in your own Java code and wanted it to be in-place, you would choose the same input and output type.

<iframe src="https://leetcode.com/playground/QjTW2CVp/shared" frameBorder="0" width="100%" height="500" name="QjTW2CVp"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n \cdot m \cdot k)$$, where the grid size is $$n \cdot m$$ and we need to apply the transform $$k$$ times.

* Space Complexity: Depends on whether or not the input/ output types are the same. Here on Leetcode, this depends on the language you're using.

    * *If the input and output are the same type* (Python and C++): $$O(1)$$. We aren't creating any new data structures.

    * *If the input and output are different types* (Java): $$O(n \cdot m)$$. We're creating a single `n x m` 2D list.

If you were using this algorithm as part of your own code, you'd choose input and output types based on your requirements.

<br />

---

### Approach 3: Using Modulo Arithmetic

**Intuition**

*Note that a solution that uses modulo arithmetic would probably be considered as "medium" level.*

If you're not familiar with the modulo operator, then think back to when you learned division in school. Before you learned about decimals and fractions, you probably had to determine the *quotient* and the *remainder*. For example, $$127 / 19$$ would be $$6$$, remainder $$13$$ because $$6 * 19 + 13 = 127$$. The modulo operator gives you the *remainder* if you were to do division in this way.

For the problem constraints given here, $$k$$ is never more than $$100$$. For such a low $$k$$, the simulation approach is acceptable. However, an interviewer will probably expect you to further optimize your solution so that it runs in $$O(n * m)$$ time instead of $$O(k * n * m)$$ time.

In addition to the pattern we observed in the previous approach, another good strategy for 2D grid problems that we'll use is calculating the new locations as 2 separate steps.

1. What is the new column?
2. What is the new row?

Let's figure out how to do each of these steps with an example. We'll use a grid with 3 rows and 5 columns, and we'll look at the value located at $$i = 1$$ and $$j = 3$$. We'll also use $$k = 88$$.

![Picture of the example we'll be working through.](../Figures/1260/example.png)

*Step 1: Calculating the new column for the value*

The value's column changes exactly $$k$$ times. Every step, it moves forward by 1 column.

Which *column* will the value be in when it is moved forward $$88$$ times? Well, it starts in column $$3$$, and if the grid had an infinite number of columns, it would be in column $$3 + 88 = 91$$ at the end. However, the grid isn't infinite. We need to take into account the "wrap around".

**The key observation is that** every 5 steps will move the value back to the same column it started in. Therefore, we want to repeatedly subtract $$5$$ from $$91$$ until we have a value less than $$5$$ left. This is exactly what the *modulo operator* does for us. It gives us what is left after these repeated subtractions (it goes about it in a very efficient way though!). $$91 % 5 = 1$$. Therefore, we know that this value's new position is *in column 0*.

*Step 2: Calculating the new row for the value*

Now we need to determine the new *row* that the value is in. The *row* the value is in doesn't change as often as the *column* does. For example, here the column changes but the row stays the same.

![Diagram showing a case where the row does not change.](../Figures/1260/case1.png)

And here, both the row and the column change.

![Diagram showing a case where the row changes.](../Figures/1260/case2.png)

The value only moves down a row when it is moving from the last column to the first column. Therefore, determining the new row will require us to calculate how many times the value moves from the last to first column.

When we calculated the new *column* for our example, we only looked at the ***remainder*** of $$91 / 5$$, which was $$1$$. This time however, we want to look at the ***quotient***, because the ***quotient*** tells us *how many times* we removed $$5$$ from $$91$$.

Doing this calculation, we get $$91 / 5 = 18$$ (This is just division with truncation, like how it's done in programming languages).

If the number of rows was infinite, the final row would be $$1 + 18 = 19$$, as we would simply add the number of row increments to the starting row.

But of course the number of rows is not infinite, so we need to do the same thing we did to the column. Because there are 3 rows, we do $$19 % 3 = 1$$. The value will therefore end in row 1.

We have calculated that for the example above, after 88 increments, the value that started at $$(1, 3)$$ will now be at $$(1, 0)$$. We can do the same calculations for the other $$14 values in the grid$$.

*Coming up with general formulae*

We now need to pull all of this together into some formulae that we can use regardless of the starting position, $$k$$ value, and size of the grid.

For the column, we calculated what column it'd end up in if the grid was infinite, and then we took it modulo the total number of columns. As a general formula, this is:

```
new_col = (j + k) % num_cols
```

Where $$j$$ is the column the value starts in and $$num_cols$$ is the total number of columns in the grid.

The row was a little more complicated; we needed to tackle it in several parts. Firstly, we calculated how many times it would move down by 1 row. Secondly, we calculated what the infinite row would be and then took that modulo the number of rows. This gives us the following formula:

```
number_of_increments = (j + k) / num_cols
new_row = (i + number_of_increments) % num_rows
```


**Algorithm**

<iframe src="https://leetcode.com/playground/adrDuM4L/shared" frameBorder="0" width="100%" height="500" name="adrDuM4L"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n \cdot m)$$, where the grid size is $$n \cdot m$$. This time, we're calculating where each value moves to in $$O(1)$$ time instead of $$O(k)$$ time. We can't do better than this in the average case, because each of the $$n \cdot m$$ values needs to be moved to its new location.

* Space Complexity: $$O(n \cdot m)$$. We are creating a new 2D list to write the output into.
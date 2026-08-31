# Official Solution

**Link:** [https://leetcode.com/problems/triangle/solution/](https://leetcode.com/problems/triangle/solution/)

---

[TOC]

## Solution

---

### Overview

As it's always better to try and solve problems on your own before you read the official solution, here are a couple of related, but easier, problems you might like to try first if you're stuck on this problem.

1. `Triangle` is a variant of the falling path sum problem - a classic dynamic programming problem. If you're not at all familiar with dynamic programming, then we recommend starting with [931. Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/), as the idea is the same, but the solution is a bit simpler due to all rows being the same length.

2. A simpler triangle-related dynamic programming problem is [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/). If you haven't already solved it, then you should do that now.

<br/>

---

### Approach 1: Dynamic Programming (Bottom-up: In-place)

**Intuition**

A good way to get started on a problem like this is to make a very small example, and then figure out how to solve it. After that, make the example a bit bigger, and see if you can still solve it. Try and come up with a general way of solving the problem, regardless of the size.

!?!../Documents/120_animation_1.json:960,540!?!

<br/>

As you hopefully realized from the animation, we can solve the problem by iterating through each row of the triangle, from top to bottom, updating each number to be the sum of itself + the minimum out of the two numbers above it.

!?!../Documents/120_animation_2.json:960,540!?!

<br/>


**Algorithm**

The simplest way of implementing this is to overwrite the input. In other words, as an in-place algorithm. In Approach 2, we'll look at how to modify the algorithm so that it doesn't overwrite the input, but doesn't require more than $$O(n)$$ extra space.

When this algorithm has finished running, each cell, `(row, col)` of the input triangle will be overwritten with the minimal path sum from `(0, 0)` (the triangle tip), down to and including `(row, col)`.

> **Interview Tip: In-place Algorithms**
>
> In-place algorithms overwrite the input to save space, but sometimes this can cause problems. Here are a couple of situations where an in-place algorithm might not be suitable.
> 1. The algorithm needs to run in a *multi-threaded* environment, without exclusive access to the array. Other threads might need to read the array too, and might not expect it to be modified.
> 2. Even if there is only a single thread, or the algorithm has exclusive access to the array while running, the array might need to be reused later or by another thread once the lock has been released.
>
> In an interview, you should always check whether or not the interviewer minds you overwriting the input. Be ready to explain the pros and cons of doing so if asked!

We need to be quite careful designing our algorithm: the rows and columns are all different sizes, greatly increasing the risk of off-by-one errors. The rows are numbered from top to bottom (so the triangle tip is the first row), and the columns are numbered left to right. Here is a diagram showing the `(row, col)` coordinate for a triangle with `4` rows.

![img](../Figures/120/triangle_coordinates.png)

Combining this diagram with what we determined before, we can deduce the following rules for obtaining the cells above a cell with coordinate `(row, col)`.

1. If `row == 0`: This is the top of the triangle: it stays the same.
2. If `col == 0`: There is only one cell above, located at `(row - 1, col)`.
3. If `col == row`: There is only one cell above, located at `(row - 1, col - 1)`.
4. In all other cases: There are two cells above, located at `(row - 1, col - 1`) and `(row - 1, col)` .

We can collapse cases 2, 3, and 4 into two overlapping cases by recognizing that case 4 simply cases 2 and 3 combined.

Putting everything together, we get the following algorithm.

- Iterate through each `row` index between `1` and `n - 1` inclusive (where `n` is the number of rows in triangle):
  - Iterate through each `col` index between `0` and `row` inclusive:
    - Initialize a variable `smallestAbove` to positive infinity:
    - If `col > 0`:
      - Set `smallestAbove` to `triangle[row - 1][col - 1]`.
    - If `col < row`:
      - Set `smallestAbove` to be the `min` out of itself and `triangle[row - 1][col]`.
    - Set `triangle[row][col]` to be itself plus `smallestAbove`.
Return the minimum value in `triangle[n - 1]`.


<iframe src="https://leetcode.com/playground/dRJmFhFF/shared" frameBorder="0" width="100%" height="500" name="dRJmFhFF"></iframe>

**Complexity Analysis**

Let $$n$$ be the number of rows in the triangle.

* Time Complexity: $$O(n^2)$$. 

    A triangle with $$n$$ rows and $$n$$ columns contains $$\dfrac{n (n + 1)}{2} = \dfrac{n^2 + n}{2}$$ cells. Recall that in big O notaton, we ignore the less significant terms. This gives us $$O\bigg(\dfrac{n^2 + n}{2}\bigg) = O(n^2)$$ cells. For each cell, we are performing a constant number of operatons, therefore giving us a total time complexity of $$O(n^2)$$.

* Space Complexity: $$O(1)$$.

    As we're overwriting the input, we don't need any collections to store our calculations.

<br/>

---

### Approach 2: Dynamic Programming (Bottom-up: Auxiliary Space)

**Intuition**

As mentioned in Approach 1, it isn't always desirable to overwrite the input array. It is quite likely, in fact, that your interviewer will expect you to treat it as read-only.

The most obvious solution here is to create a copy of the input, and then run Approach 1's algorithm over it. The downside of this is that it will require $$O(n^2)$$ space, due to there being $$\dfrac{n^2 + n}{2}$$ cells in the triangle. Seeing as the problem description suggests that we use $$O(n)$$ space, we should be trying to do better.

Observe that as we worked our way down the rows of the triangle, we only ever needed to look at the row immediately above. This means that we only need to maintain the current row and the previous row. Because a row contains at most $$n$$ cells, this will meet the $$O(n)$$ space requirement.

**Algorithm**

This approach is almost the same as Approach 1. The only difference is that we need to write the new values for the current row into an extra list (or array), and then keep track of the previous one of these lists.

<iframe src="https://leetcode.com/playground/3z8BKpsf/shared" frameBorder="0" width="100%" height="500" name="3z8BKpsf"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(n^{2})$$.

    Same as Approach 1. We are still performing a constant number of operations for each cell in the input triangle.

* Space Complexity: $$O(n)$$. 

    We're using two arrays of up to size $$n$$ each: `prevRow` and `currRow`. While this is a higher space complexity than Approach 1, the advantage of this approach is that the input triangle remains unmodified.

<br/>

---

### Approach 3: Dynamic Programming (Bottom-up: Flip Triangle Upside Down)

**Intuition**

The problem description tells us that we need to find the minimum path sum from top to bottom. This immediately suggests that we should be working from top to bottom, like what we did in Approaches 1 and 2.

*But is this actually necessary? Could we go from bottom to top instead?*

It turns out, we can! The exact same ideas apply - each cell instead becomes the sum of itself plus the minimum of the two cells below it. The only difference is that we need to do the edge case handling a bit differently. 

![img](../Figures/120/upside_down_triangle_coordinates.png)

There is a big advantage though: the code turns out a **lot** simpler. Some of the cells only had one cell above them. But every cell has two cells below it! 

> **Interview Tip:** Practice Overriding Your Brains "Assume" Mode!
>
> We humans have a habit of making a lot of assumptions - neurobiologists reassure us that this is quite normal! If we didn't make lots of assumptions, our brains would slow to a crawl like a poorly maintained computer, thanks to the overload of additional information they'd have to process. 
> 
> In an interview situation, where most of us are at least a little nervous, we are even less likely to question our assumptions. The moment most of us realize that we can solve the problem using the top-to-bottom approach, we will be frantically coding it up to show our interviewer that we can solve the problem. 
>
> But this isn't ideal! In an interview, and when solving difficult problems in general, you need to learn to identify the assumptions you're making, and question them in your mind. In some problems, this can be things like assuming that input is sorted, that there will be no invalid cases, that they won't mind you overwriting the input, or even that the environment is single-threaded. In this case, the assumption is assuming that the only way of solving this problem is to work from top to bottom.
>
> The only way to get good at challenging your assumptions is lots of practice. Working in a group with other people preparing for code interviews can help too - learning how other people see problems will widen your own way of seeing problems.

**Algorithm**

Like before, we can do this either in place or by overwriting the input. This algorithm will assume that we're overwriting the input, although I've provided the actual code below for both.

When we worked from top to bottom, the cells had only one cell above them. But when we work from bottom to top, all cells, except for those in the bottom row (which are our base case and so don't need to be modified anyway) have exactly two cells below them. Where `(row, col)` is the current cell, the cells below are located at `(row + 1, col)` and `(row + 1, col + 1)`. At the end, the answer will be in `triangle[0][0]`.

Putting everything together, we get the following algorithm.

- Iterate **up** through each `row` index between `n - 2` and `0` inclusive (where `n` is the number of rows in triangle):
  - Iterate through each `col` index between `0` and `row` inclusive:
    - Set `smallestBelow` to be the `min` out of `triangle[row + 1][col]` and `triangle[row + 1][col + 1]`.
    - Set `triangle[row][col]` to be itself plus `smallestBelow`.
- Return `triangle[0][0]`

Here is the in-place implementation. When this algorithm has finished running, each cell, `(row, col)` of the input triangle will be overwritten with the minimal path sum from `(row, col)` to any cell on the bottom `row`.


<iframe src="https://leetcode.com/playground/deMrdq8Q/shared" frameBorder="0" width="100%" height="327" name="deMrdq8Q"></iframe>

And here is the auxiliary space implementation.

<iframe src="https://leetcode.com/playground/mXSoW8D2/shared" frameBorder="0" width="100%" height="463" name="mXSoW8D2"></iframe>

**Complexity Analysis**

The time and space complexity for Approach 3 depends on which implementation you're looking at. The in-place implementation has the same complexity analysis as Approach 1, whereas the auxiliary space implementation has the same complexity analysis as Approach 2.

<br/>

---

### Approach 4: Memoization (Top-Down)

**Intuition**

Usually, for dynamic programming problems, we start with a recursive [memoization-based approach](https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/), and then figure out how to convert it to an iterative dynamic programming (tabulaton) approach. For this particular problem, most people will more naturally think of the problem in terms of iterative dynamic programming from the start though. But it is still worth having a look at how we could instead use memoization.

**Algorithm**

We'll define a recursive helper function `minPath(row, col)` that returns the minimum path sum from the cell at `(row, col)`, down to the base of the triangle. The minimum path sum for the entire triangle, would, therefore, be `minPath(0, 0)`.

The recursive case is where there is still at least one row below the current cell. Like before, we simply need to add the current cell to the minimum path sum of the cells below it. That is:

`return triangle[row][col] + min(minPath(row + 1, col), minPath(row + 1, col + 1))`

The base case is where there are no more rows below. In this case, we should simply return the current cell's value:

`return triangle[row][col]`

To avoid re-calculating the same results over and over again, we can use a `memoization` table.


<iframe src="https://leetcode.com/playground/YFTZ9yym/shared" frameBorder="0" width="100%" height="500" name="YFTZ9yym"></iframe>


**Complexity Analysis**

Let $$n$$ be the number of rows in the triangle.

* Time Complexity: $$O(n^2)$$.

    There are two steps to analyzing the time complexity of an algorithm that uses recursive memoization.
    
    Firstly, determine what the cost of each call to the recursive function is. That is, how much time is spent actively executing instructions within a single call. It does not include time spent in functions called by that function.
    
    Secondly, determine how many times the recursive function is called.

    Each call to `minPath` is $$O(1)$$, because there are no loops. The memoization table ensures that `minPath` is only called once for each cell.  As there are $$n^2$$ cells, we get a total time complexity of $$O(n^2)$$.


* Space Complexity: $$O(n^2)$$. 

    Each time a base case cell is reached, there will be a path of $$n$$ cells on the run-time stack, going from the triangle tip, down to that base case cell. This means that there is $$O(n)$$ space on the run-time stack.

    Each time a subproblem is solved (a call to `minPath`), its result is stored in a memoization table. We determined above that there are $$O(n^2)$$ such subproblems, giving a total space complexity of $$O(n^2)$$ for the memoization table.
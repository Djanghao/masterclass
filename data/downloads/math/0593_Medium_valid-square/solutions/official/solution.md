# Official Solution

**Link:** [https://leetcode.com/problems/valid-square/solution/](https://leetcode.com/problems/valid-square/solution/)

---

[TOC]

## Solution

---
### Approach #1 Brute Force [Accepted]

The idea behind determining whether 4 given set of points constitute a valid square or not is really simple. Firstly, we need to determine if the sides of the quadrilateral formed by these 4 points are equal. But checking only this won't suffice. Since, this condition will be satisfied even in the case of a rhombus, where all the four sides are equal but the adjacent sides aren't perpendicular to each other. Thus, we also need to check if the lengths of the diagonals formed between the corners of the quadrilateral are equal. If both the conditions are satisfied, then only the given set of points can be deemed appropriate for constituting a square.

Now, the problem arises in determining which pairs of points act as the adjacent points on the square boundary. So, the simplest method is to consider every possible case. For the given 4 points, $$[p_0, p_1, p_2, p_3]$$, there are a total of 4! ways in which these points can be arranged to be considered as the square's boundaries. We can generate every possible permutation and check if any permutation leads to the valid square arrangement of points.

<iframe src="https://leetcode.com/playground/2NJc8Xxy/shared" frameBorder="0" width="100%" height="500" name="2NJc8Xxy"></iframe>

**Complexity Analysis**

* Time complexity : $$O(1)$$. Constant number of permutations($$4!$$) are generated.

* Space complexity : $$O(1)$$. Constant space is required.

---
### Approach #2 Using Sorting [Accepted]

Instead of considering all the permutations of arrangements possible, we can make use of maths to simplify this problem a bit. If we sort the given set of points based on their x-coordinate values, and in the case of a tie, based on their y-coordinate value, we can obtain an arrangement, which directly reflects the arrangement of points on a valid square boundary possible.

Consider the only possible cases as shown in the figure below:

![Valid_Square](../Figures/593_Valid_Square_1.PNG)

In each case, after sorting, we obtain the following conclusion regarding the connections of the points:

1. $$p_0p_1$$, $$p_1p_3$$, $$p_3p_2$$ and $$p_2p_0$$ form the four sides of any valid square.

2. $$p_0p_3$$ and $$p_1p_2$$ form the diagonals of the square.

Thus, once the sorting of the points is done, based on the above knowledge, we can directly compare $$p_0p_1$$, $$p_1p_3$$, $$p_3p_2$$ and $$p_2p_0$$ for equality of lengths(corresponding to the sides); and $$p_0p_3$$ and $$p_1p_2$$ for equality of lengths(corresponding to the diagonals).

<iframe src="https://leetcode.com/playground/5985SrgC/shared" frameBorder="0" width="100%" height="446" name="5985SrgC"></iframe>

**Complexity Analysis**

* Time complexity : $$O(1)$$. Sorting 4 points takes constant time.

* Space complexity : $$O(1)$$. Constant space is required.

---
### Approach #3 Checking every case [Accepted]

**Algorithm**

If we consider all the permutations descripting the arrangement of points as in the brute force approach, we can come up with the following set of 24 arrangements:

![Valid_Square](../Figures/593_Valid_Square_2.PNG)

In this figure, the rows with the same shaded color indicate that the corresponding arrangements lead to the same set of edges and diagonals. Thus, we can see that only three unique cases exist. Thus, instead of generating all the 24 permutations, we check for the equality of edges and diagonals for only the three distinct cases.

<iframe src="https://leetcode.com/playground/UEVGf4Ly/shared" frameBorder="0" width="100%" height="500" name="UEVGf4Ly"></iframe>

**Complexity Analysis**

* Time complexity : $$O(1)$$. A fixed number of comparisons are done.

* Space complexity : $$O(1)$$. No extra space required.
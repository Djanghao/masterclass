# Official Solution

**Link:** [https://leetcode.com/problems/island-perimeter/solution/](https://leetcode.com/problems/island-perimeter/solution/)

---

[TOC]

## Solution

---

### Approach 1: Simple Counting

**Intuition**

Go through every cell on the grid and whenever you are at cell
 `1` (land cell), look for surrounding (`UP`, `RIGHT`, `DOWN`, `LEFT`) cells. A land cell without any surrounding land cell will have a perimeter of `4`. Subtract `1` for each 
 surrounding land cell. 
 
 When you are at cell `0` (water cell), you don't need to do anything. Just proceed to another cell.

!?!../Documents/463_Island_Perimeter_1.json:1200,600!?!

**Implementation**

<iframe src="https://leetcode.com/playground/RnEzBcSb/shared" frameBorder="0" width="100%" height="500" name="RnEzBcSb"></iframe>

**Complexity Analysis**

* Time complexity : $$O(mn)$$ where $$m$$ is the number of rows of the grid and $$n$$ is 
the number of columns of the grid. Since two `for` loops  go through all 
the cells on the grid, for a two-dimensional grid of size $$m\times n$$, the algorithm 
would have to check $$mn$$ cells. 

* Space complexity : $$O(1)$$. Only the `result` variable is updated and there is 
no other space requirement.

<br />

---

### Approach 2: Better Counting

*Approach 2 has the same time and space complexity as Approach 1. Even though they 
have the same time and space complexities, Approach 2 is slightly more efficient 
than the Approach 1. Rather than checking 4 surrounding neighbors, we only need to check two neighbors (`LEFT` and `UP`) in Approach 2.*

**Intuition**

Since we are traversing the grid from left to right, and from top to bottom, 
for each land cell we are currently at, we only need to check whether the 
`LEFT` and `UP` cells are land cells with a slight modification on previous 
approach.

* As you go through each cell on the grid, treat all the land cells as having a perimeter of `4` and add that up to the accumulated `result`. 
* If that land cell has a neighboring land cell, remove `2` sides (one from each land cell) which will be touching between these two cells.
    * If your current land cell has a `UP` land cell, subtract `2` from your accumulated `result`. 
    * If your current land cell has a `LEFT` land cell,
subtract `2` from your accumulated `result`.

!?!../Documents/463_Island_Perimeter_2.json:1200,600!?!

**Implementation**

<iframe src="https://leetcode.com/playground/ipkoTE5s/shared" frameBorder="0" width="100%" height="480" name="ipkoTE5s"></iframe>

**Complexity Analysis**

* Time complexity : $$O(mn)$$ where $$m$$ is the number of rows of the grid and $$n$$ is 
the number of columns of the grid. Since two `for` loops  go through all 
the cells on the grid, for a two-dimensional grid of size $$m\times n$$, the algorithm 
would have to check $$mn$$ cells. 

* Space complexity : $$O(1)$$. Only the `result` variable is updated and there is 
no other space requirement.
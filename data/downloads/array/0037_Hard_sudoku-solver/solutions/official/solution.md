# Official Solution

**Link:** [https://leetcode.com/problems/sudoku-solver/solution/](https://leetcode.com/problems/sudoku-solver/solution/)

---

[TOC]

## Solution

---

### Approach 0: Brute Force

The first idea is to use brut-force to generate all possible ways to fill the cells with numbers from `1` to `9`, and then check them to keep the solution only. That means $$9^{81}$$ operations to do, where $$9$$ is the number of available digits and $$81$$ is the number of cells to fill. Hence we're forced to think further about how to optimize.
<br />
<br />


---
### Approach 1: Backtracking

**Conceptions to use**

There are two programming conceptions here that could help.

> The first one is called _constrained programming_. 

That basically means to put restrictions after each number placement. One puts a number on the board and that immediately excludes this number from further usage in the current _row_, _column_ and _sub-box_. That propagates _constraints_ and helps to reduce the number of combinations to consider.

![bla](../Figures/37/37_const3.png)

> The second one called _backtracking_. 

Let's imagine that one has already managed to put several numbers on the board. But the combination chosen is not the optimal one and there is no way to place the further numbers. What to do? _To backtrack_. That means to come back, to change the previously placed number, and try to proceed again. If that does not work either, _backtrack_ again.

![bla](../Figures/37/37_backtrack2.png)

**How to enumerate sub-boxes**

> One tip to enumerate sub-boxes: let's use `box_index = (row / 3) * 3 + column / 3` where `/` is an integer division.

<img src="../Figures/36/36_boxes_2.png" width="500">

**Algorithm**

Now everything is ready to write down the backtrack function `backtrack(row = 0, col = 0)`.

* Start from the upper left cell `row = 0, col = 0`. Proceed till the first free cell.
* Iterate over the numbers from `1` to `9` and try to put each number `d` in the `(row, col)` cell.

    * If number `d` is not yet in the current row, column, and box:
        
        * Place the `d` in a `(row, col)` cell.
        * Write down that `d` is now present in the current row, column, and box.
        * If we're on the last cell `row == 8, col == 8`:
            * That means that we've solved the sudoku.
        * Else
            * Proceed to place further numbers.
        * Backtrack if the solution is not yet here: remove the last number from the `(row, col)` cell.

**Implementation**

<iframe src="https://leetcode.com/playground/GB35PAAq/shared" frameBorder="0" width="100%" height="500" name="GB35PAAq"></iframe>

**Complexity Analysis**

* Time complexity is constant here since the board size is fixed and there is no N-parameter to measure. Though let's discuss the number of operations needed : $$(9!)^9$$. Let's consider one row, i.e. not more than $$9$$ cells to fill. There are not more than $$9$$ possibilities for the first number to put, not more than $$9 \times 8$$ for the second one, not more than $$9 \times 8 \times 7$$ for the third one, etc. In total that results in not more than $$9!$$ possibilities for just one row, which means no more than $$(9!)^9$$ operations in total.
Let's compare:

    - $$9^{81} = 196627050475552913618075908526912116283103450944214766927315415537966391196809$$
for the brute force, 

    - and $$(9!)^9 = 109110688415571316480344899355894085582848000000000$$
for the standard backtracking, i.e. the number of operations is reduced in $$10^{27}$$ times!

* Space complexity: the board size is fixed, and the space is used to store board, rows, columns, and box structures, each containing `81` elements.
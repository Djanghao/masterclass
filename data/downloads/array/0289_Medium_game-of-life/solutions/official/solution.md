# Official Solution

**Link:** [https://leetcode.com/problems/game-of-life/solution/](https://leetcode.com/problems/game-of-life/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/680555550" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

<br />  

<details>

<summary>Clarifying Notes</summary>

From 4:05 to 5:30, line 19 of the code, `int right = Math.max(cols - 1, col + 1);` should be `int right = Math.min(cols - 1, col + 1);`.
    
</details> 


## Solution Article

---

Before moving on to the actual solution, let us visually look at the rules to be applied to the cells to get a greater clarity.
<center>
<img src="../Figures/289/Game_of_life_1.png" width="600"/>
</center>
<center>
<img src="../Figures/289/Game_of_life_2.png" width="600"/>
</center>

### Approach 1: O(mn) Space Solution

**Intuition**

The problem might look very easy at first, however, the most important catch in this problem is to realize that if you update the original array with the given rules, you won't be able to perform *simultaneous* updation as is required in the question. You might end up using the updated values for some cells to update the values of other cells. But the problem demands applying the given rules simultaneously to every cell.

Thus, you cannot update some cells first and then use their updated values to update other cells.

<center>
<img src="../Figures/289/Game_of_life_3.png" width="600"/>
</center>

In the above diagram it's evident that an update to a cell can impact the other neighboring cells. If we use the updated value of a cell while updating its neighbors, then we are not applying rules to all cells simultaneously.

Here `simultaneously` isn't about parallelism but using the original values of the neighbors instead of the updated values while applying rules to any cell. Hence the first approach could be as easy as having a copy of the board. The copy is never mutated. So, you never lose the original value for a cell.

Whenever a rule is applied to any of the cells, we look at its neighbors in the unmodified copy of the board and change the original board accordingly. Here we keep the copy unmodified since the problem asks us to make the changes to the original array in-place.

<center>
<img src="../Figures/289/Game_of_life_4.png" width="600"/>
</center>

**Algorithm**

1. Make a copy of the original board which will remain unchanged throughout the process.
2. Iterate the cells of the `Board` one by one.
3. While computing the results of the rules, use the copy board and apply the result in the original board.

<iframe src="https://leetcode.com/playground/973jSC9x/shared" frameBorder="0" width="100%" height="500" name="973jSC9x"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(M \times N)$$, where $$M$$ is the number of rows and $$N$$ is the number of columns of the `Board`.

* Space Complexity: $$O(M \times N)$$, where $$M$$ is the number of rows and $$N$$ is the number of columns of the `Board`. This is the space occupied by the copy board we created initially.
<br/>
<br/>

---

### Approach 2: O(1) Space Solution

**Intuition**

The problem could also be solved in-place. $$O(M \times N)$$ space complexity could be too expensive when the board is very large. We only have two states `live(1)` or `dead(0)` for a cell. We can use some dummy cell value to signify previous state of the cell along with the new changed value.

For e.g. If the value of the cell was `1` originally but it has now become `0` after applying the rule, then we can change the value to `-1`. The negative `sign` signifies the cell is now dead(0) but the `magnitude` signifies the cell was a live(1) cell originally.

Also, if the value of the cell was `0` originally but it has now become `1` after applying the rule, then we can change the value to `2`. The positive `sign` signifies the cell is now live(1) but the `magnitude` of 2 signifies the cell was a dead(0) cell originally.

<center>
<img src="../Figures/289/Game_of_life_5.png" width="600"/>
</center>

**Algorithm**

1. Iterate the cells of the `Board` one by one.
2. The rules are computed and applied on the original board. The updated values signify both previous and updated value.
3. The updated rules can be seen as this:

      * Rule 1: Any live cell with fewer than two live neighbors dies, as if caused by under-population. Hence, change the value of cell to `-1`. This means the cell was live before but now dead.

      * Rule 2: Any live cell with two or three live neighbors lives on to the next generation. Hence, no change in the value.

      * Rule 3: Any live cell with more than three live neighbors dies, as if by over-population. Hence, change the value of cell to `-1`. This means the cell was live before but now dead. Note that we don't need to differentiate between the rule 1 and 3. The start and end values are the same. Hence, we use the same dummy value.

      * Rule 4: Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction. Hence, change the value of cell to 2. This means the cell was dead before but now live.
      
4. Apply the new rules to the board.
5. Since the new values give an indication of the old values of the cell, we accomplish the same results as approach 1 but without saving a copy.
6. To get the `Board` in terms of binary values i.e. live(1) and dead(0), we iterate the board again and change the value of a cell to a `1` if its value currently is greater than `0` and change the value to a `0` if its current value is lesser than or equal to `0`.

<iframe src="https://leetcode.com/playground/DY7dKUVF/shared" frameBorder="0" width="100%" height="500" name="DY7dKUVF"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(M \times N)$$, where $$M$$ is the number of rows and $$N$$ is the number of columns of the `Board`.

* Space Complexity: $$O(1)$$
<br/>
<br/>

---

### Follow up 2 : Infinite Board

So far we've only addressed one of the follow-up questions for this problem statement. We saw how to perform the simulation according to the four rules in-place i.e. without using any additional memory. The problem statement also mentions another follow-up statement which is a bit open ended. We will look at two possible solutions to address it. Essentially, the second follow-up asks us to address the scalability aspect of the problem. What would happen if the board is infinitely large? Can we still use the same solution that we saw earlier or is there something else we will have to do different? If the board becomes infinitely large, there are multiple problems our current solution would run into:

1. It would be computationally impossible to iterate a matrix that large.
2. It would not be possible to store that big a matrix entirely in memory. We have huge memory capacities these days i.e. of the order of hundreds of GBs. However, it still wouldn't be enough to store such a large matrix in memory.
3. We would be wasting a lot of space if such a huge board only has a few live cells and the rest of them are all dead. In such a case, we have an extremely sparse matrix and it wouldn't make sense to save the board as a "matrix".

Such open ended problems are better suited to design discussions during programming interviews and it's a good habit to take into consideration the scalability aspect of the problem since your interviewer might be interested in talking about such problems. The discussion section already does a great job at addressing this specific portion of the problem. We will briefly go over two different solutions that have been provided in the discussion sections, as they broadly cover two main scenarios of this problem.

One aspect of the problem is addressed by a great solution provided by [Stefan Pochmann](https://leetcode.com/stefanpochmann/). So as mentioned before, it's quite possible that we have a gigantic matrix with a very few live cells. In that case it would be stupidity to save the entire board as is.

>If we have an extremely sparse matrix, it would make much more sense to actually save the location of only the live cells and then apply the 4 rules accordingly using only these live cells.

Let's look at the sample code provided by [Stefan](https://leetcode.com/stefanpochmann/) for handling this aspect of the problem.

<iframe src="https://leetcode.com/playground/aUjnUHQA/shared" frameBorder="0" width="100%" height="327" name="aUjnUHQA"></iframe>

Essentially, we obtain only the live cells from the entire board and then apply the different rules using only the live cells and finally we update the board in-place. The only problem with this solution would be when the entire board cannot fit into memory. If that is indeed the case, then we would have to approach this problem in a different way. For that scenario, we assume that the contents of the matrix are stored in a file, one row at a time.

>In order for us to update a particular cell, we only have to look at its 8 neighbors which essentially lie in the row above and below it. So, for updating the cells of a row, we just need the row above and the row below. Thus, we read one row at a time from the file and at max we will have 3 rows in memory. We will keep discarding rows that are processed and then we will keep reading new rows from the file, one at a time.

[@beagle's](https://leetcode.com/beagle/) solution revolves around this idea and you can refer to the code in the [discussion section](https://leetcode.com/problems/game-of-life/discuss/73217/Infinite-board-solution/201780) for the same. It's important to note that there is no single solution for solving this problem. Everybody might have a different viewpoint for addressing the scalability aspect of the problem and these two solutions just address the most basic problems with handling matrix based problems at scale.
<br/>
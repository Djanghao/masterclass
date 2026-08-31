# Official Solution

**Link:** [https://leetcode.com/problems/rotate-image/solution/](https://leetcode.com/problems/rotate-image/solution/)

---

[TOC]

## Solution

---

### Approach 1: Rotate Groups of Four Cells

**Intuition**

Observe how the cells move in groups when we rotate the image.

![The corners all move](../Figures/48/48_angles.png)

We can iterate over each group of four cells and rotate them.

**Implementation**

Here is a visualization of the algorithm in action.

<div class="video-container">
    <iframe src="https://player.vimeo.com/video/484247719" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

<iframe src="https://leetcode.com/playground/DwpcHZ58/shared" frameBorder="0" width="100%" height="310" name="DwpcHZ58"></iframe>

**Complexity Analysis**

Let $$M$$ be the number of cells in the matrix.

* Time complexity: $$\mathcal{O}(M)$$, as each cell is getting read once and written once.

* Space complexity: $$\mathcal{O}(1)$$ because we do not use any other additional data structures.

<br/>

---


### Approach 2: Reverse on the Diagonal and then Reverse Left to Right

**Intuition**

The most elegant solution for rotating the matrix is to first reverse the matrix around the main diagonal, and then reverse it from left to right. These operations are called **transpose** and **reflect** in linear algebra.

Here is a visualization to help you see why this works.

<div class="video-container">
    <iframe src="https://player.vimeo.com/video/484247738" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>


> **Bonus Question:** What would happen if you reflect and *then* transpose? Would you still get the correct answer?

Even though this approach does twice as many reads and writes as approach 1, most people would consider it a better approach because the code is simpler, and it is built with standard matrix operations that can be found in any matrix library.

**Implementation**

<iframe src="https://leetcode.com/playground/L4wL5MUY/shared" frameBorder="0" width="100%" height="500" name="L4wL5MUY"></iframe>


**Complexity Analysis**

Let $$M$$ be the number of cells in the grid.

* Time complexity: $$\mathcal{O}(M)$$. We perform two steps; transposing the matrix, and then reversing each row. Transposing the matrix has a cost of $$\mathcal{O}(M)$$ because we're moving the value of each cell once. Reversing each row also has a cost of $$\mathcal{O}(M)$$, because again we're moving the value of each cell once.

* Space complexity: $$\mathcal{O}(1)$$ because we do not use any other additional data structures.

<br/>

> **Bonus Question:** If you're not too confident with matrices and linear algebra, get some more practice by also coding a method that transposes the matrix on the *other* diagonal, and another that reflects from top to bottom. You can test your functions by printing out the matrix before and after each operation. Finally, use your functions to find *three more solutions to this problem*. Each solution uses two matrix operations.

<br/>

> **Interview Tip**: Terrified of being asked this question in an interview? Many people are: it can be intimidating due to the fiddly logic. Unfortunately, if you do a lot of interviewing, the probability of seeing it at least once is high, and some people have claimed to have seen it multiple times! This is one of the few questions that I recommend practicing until you can confidently code it and explain it without thinking too much.
# Official Solution

**Link:** [https://leetcode.com/problems/flood-fill/solution/](https://leetcode.com/problems/flood-fill/solution/)

---

[TOC]

### Approach #1: Depth-First Search [Accepted]

**Intuition**

We perform the algorithm explained in the problem description: paint the starting pixels, plus adjacent pixels of the same color, and so on.

**Algorithm**

Say `color` is the color of the starting pixel. Let's flood fill the starting pixel: we change the color of that pixel to the new color, then check the 4 neighboring pixels to make sure they are valid pixels of the same `color`, and of the valid ones, we flood fill those, and so on.

We can use a function `dfs` to perform a flood fill on a target pixel.

<iframe src="https://leetcode.com/playground/StwTP8bA/shared" frameBorder="0" width="100%" height="497" name="StwTP8bA"></iframe>


**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the number of pixels in the image. We might process every pixel.

* Space Complexity: $$O(N)$$, the size of the implicit call stack when calling `dfs`.
# Official Solution

**Link:** [https://leetcode.com/problems/remove-boxes/solution/](https://leetcode.com/problems/remove-boxes/solution/)

---

[TOC]

## Solution

---
### Approach 1: Brute Force Approach [Time Limit Exceeded]

**Algorithm**

Often, the most intuitive approach is brute force approach. We try removing every possible element of the given array and calculate the points obtained for the rest of the array in a recursive manner.

**Implementation**

<iframe src="https://leetcode.com/playground/MnfMP2Se/shared" frameBorder="0" width="100%" height="500" name="MnfMP2Se"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n!)$$. Let $$f(n)$$ be the time to find the solution of n boxes with n different colors, then $$f(n) = n * f(n-1)$$ which results in the $$n!$$ time complexity.

* Space complexity: $$O(n^2)$$. The recursive tree goes upto a depth of $$n$$, with every level consisting of upto $$n$$ $$\text{newBoxes}$$ elements.

---

### Approach 2: Top-Down Dynamic Programming 

**Algorithm**

The problem with the previous approach is that it involves a lot of recomputations, e.g., consider the array `[3, 2, 1, 4, 4, 4]`. In this case, we try to remove 3 and calculate the cost for the remaining array, in which we try removing 2 first leading to the point calculation for the subarray `[1, 4, 4, 4]`. The same happens in the second iteration in which we try to remove 2 first and then remove 3. We can prune the depth of the recursion tree a lot by using memoization.

But the problem of memoization isn't simple in this case. We can't simply use the start and end index of the array to determine the maximum number of points which that subarray will eventually lead to. This is because the points obtained by using the subarray depend not only on the subarray but also on the removals done prior to reaching the current subarray, which aren't even a part of the subarray, e.g., consider the array `[3, 2, 1, 4, 4, 2, 4, 4]`. The points obtained for the subarray `[3, 2, 1]` depend on whether the element 2 (index 5) has been removed before elements 4 or not, since it eventually determines the number of 4's which will be combined together to determine the potential points obtained for the currently considered subarray.

Thus, in order to preserve this information, we need to add another dimension to the memoization array, which tells us how many similar elements are combined together from the end of the current subarray. We make use of a $$\text{dp}$$ array, which is used to store the maximum number of points that can be obtained for a given subarray with a specific number of similar elements at the end. For an entry in $$\text{dp[l][r][k]}$$, $$l$$ represents the starting index of the subarray, $$r$$ represents the ending index of the subarray and $$k$$ represents the number of elements similar to the $$r^{th}$$ element following it which can be combined to obtain the point information to be stored in $$\text{dp[l][r][k]}$$.

This can be better understood with the following example. Consider a subarray $$[x_l, x_{l+1},.., x_i,.., x_r, 6, 6, 6]$$. For this subarray, if $$x_r=6$$, the entry at $$\text{dp[l][r][3]}$$ represents the maximum points that can be obtained using the subarray $$boxes[l:r]$$ if three 6's are appended with the trailing $$x_r$$.

Now, let us look at how to fill in the $$dp$$. Consider the same suabrray as mentioned above. For filling in the entry, $$\text{dp[l][r][k]}$$, we firstly make an initial entry in $$\text{dp[l][r][k]}$$, which considers the assumption that we will firstly combine the last $$k+1$$ similar elements and then proceed with the remaining subarray. Thus, the initial entry becomes:

$$\text{dp[l][r][k]} = dp[l][r-1][0] + (k+1)*(k+1)$$. Here, we combined all the trailing similar elements, so the value 0 is passed as the $$k$$ value for the recursive function, since no similar elements to the $$(r-1)^{th}$$ element exist at its end.

But, the above situation isn't the only possible solution. We could obtain a better solution for the same subarray $$boxes[l:r]$$ for making the entry into $$\text{dp[l][r][k]}$$, if we could somehow combine the trailing similar elements with some extra similar elements lying between $$boxes[l:r]$$.

Thus, we look for the elements within $$boxes[l:r]$$, which could be similar to the trailing $$k$$ elements, which in turn are similar to the $$r^{th}$$ element. Whenever such an element $$boxes[i]$$ is found, we check if the new solution could lead to more points by using the same array. If so, we update the entry at $$\text{dp[l][r][k]}$$.

To get a clearer understanding of the above statment, consider the same subarray again: $$[x_l, x_{l+1},.., x_i,.., x_r, 6, 6, 6]$$. If $$x_i = x_r = 6$$, we could eventually be benefitted by combining $$x_i$$ and $$x_r$$ by removing the elements lying between them, since now we can bring $$k+2$$ similar elements together. By removing the in-between lying elements($$[x_{i+1}, x_{i+2},..., x_{r-1}]$$, the maximum points we can obtain are given by: $$\text{dp[i+1][r-1][0]}$$. Now, the points obtained from the remaining array $$[x_l, x_{l+1},.., x_i,x_r, 6, 6, 6]$$ are given by: $$\text{dp[l][i][k+1]}$$, which is quite clear now.

Thus, the equation used to update $$dp$$ becomes:

$$\text{dp[l][r][k]} = max(\text{dp[l][r][k]}, \text{dp[l][i][k+1]} + \text{dp[i+1][r-1][0]})$$.

At the end, the entry for $$dp[0][n-1][0]$$ gives the required result. In the implementation below, we've made use of `calculatePoints` function which is simply a recursive function used to obtain the $$\text{dp}$$ values.

**Implementation**

<iframe src="https://leetcode.com/playground/X3GhWC3W/shared" frameBorder="0" width="100%" height="500" name="X3GhWC3W"></iframe>

**Complexity Analysis**

* Time complexity: $$O(n^4)$$  $$dp$$ array of size $$n^3$$ is filled, and linear
time is taken to process each element.

* Space complexity: $$O(n^3)$$  $$dp$$ array is of size $$n^3$$.
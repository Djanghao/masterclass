# Official Solution

**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solution/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solution/)

---

[TOC]


## Solution

---
### Approach 1: Brute Force

**Algorithm**

The brute force approach is really simple. We directly traverse along every valid line in the given matrix: i.e. Horizontal, Vertical, Diagonal aline above and below the middle diagonal, Anti-diagonal line above and below the middle anti-diagonal. Each time during the traversal, we keep on incrementing the $$count$$ if we encounter continuous 1's. We reset the $$count$$ for any discontinuity encountered. While doing this, we also keep a track of the maximum $$count$$ found so far.


<iframe src="https://leetcode.com/playground/AgabE82x/shared" frameBorder="0" width="100%" height="500" name="AgabE82x"></iframe>

**Complexity Analysis**

Let $$m$$ be the length of the matrix and $$n$$ be the width of the matrix. As a result, $$mn$$ would be the total number of cells in the matrix.

* Time complexity : $$O(mn)$$. We traverse along the entire matrix 4 times.
* Space complexity : $$O(1)$$. Constant space is used.

---
### Approach 2: Using 3D Dynamic Programming

**Algorithm**

Instead of traversing over the same matrix multiple times, we can keep a track of the 1' along all the lines possible while traversing the matrix once only. In order to do so, we make use of a $$4mn$$ sized $$dp$$ array. Here, $$dp[0]$$, $$dp[1]$$, $$dp[2]$$ ,$$dp[3]$$ are used to store the maximum number of continuous 1's found so far along the Horizontal, Vertical, Diagonal and Anti-diagonal lines respectively. e.g. $$dp[i][j][0]$$ is used to store the number of continuous 1's found so far(till we reach the element $$M[i][j]$$), along the horizontal lines only.

Thus, we traverse the matrix $$M$$ in a row-wise fashion only but, keep updating the entries for every $$dp$$ appropriately. 

The following image shows the filled $$dp$$ values for this matrix:
```
 0 1 1 0

 0 1 1 0
   
 0 0 1 1
   
```

![Longest_Line](../Figures/562_Longest_Line.PNG)

While filling up the $$dp$$, we can keep a track of the length of the longest consecutive line of 1's.

Watch this animation for complete process:

!?!../Documents/562_Longest_Line.json:1000,563!?!

<iframe src="https://leetcode.com/playground/iXtGMNUe/shared" frameBorder="0" width="100%" height="429" name="iXtGMNUe"></iframe>

**Complexity Analysis**

* Time complexity : $$O(mn)$$. We traverse the entire matrix once only.

* Space complexity : $$O(mn)$$. $$dp$$ array of size $$4mn$$ is used, where $$m$$ and $$n$$ are the number of rows ans coloumns of the matrix.

---

### Approach 3: Using 2D Dynamic Programming

**Algorithm**

In the previous approach, we can observe that the current $$dp$$ entry is dependent only on the entries of the just previous corresponding $$dp$$ row. Thus, instead of maintaining a 2-D $$dp$$ matrix for each kind of line of 1's possible, we can use a 1-d array for each one of them, and update the corresponding entries in the same row during each row's traversal. Taking this into account, the previous 3-D $$dp$$ matrix shrinks to a 2-D $$dp$$ matrix now. The rest of the procedure remains same as the previous approach.


<iframe src="https://leetcode.com/playground/4SEeNTxV/shared" frameBorder="0" width="100%" height="497" name="4SEeNTxV"></iframe>

**Complexity Analysis**

* Time complexity : $$O(mn)$$. The entire matrix is traversed once only.

* Space complexity : $$O(n)$$. $$dp$$ array of size $$4n$$ is used, where $$n$$ is the number of columns of the matrix.
# Official Solution

**Link:** [https://leetcode.com/problems/coin-path/solution/](https://leetcode.com/problems/coin-path/solution/)

---

[TOC]


## Solution

---
### Approach #1 Brute Force[Time Limit Exceeded]

In this approach, we make use of a $$next$$ array of size $$n$$. Here, $$n$$ refers to the size of the given $$A$$ array. The array $$nums$$ is used such that $$nums[i]$$ is used to store the minimum number of coins needed to jump till the end of the array $$A$$, starting from the index $$i$$. 

We start by filling the $$next$$ array with all -1's. Then, in order to fill this $$next$$ array, we make use of a recursive function `jump(A, B, i, next)` which fills the $$next$$ array starting from the index $$i$$ onwards, given $$A$$ as the coins array and $$B$$ as the largest jump value.

With $$i$$ as the current index, we can consider every possible index from $$i+1$$ to $$i+B$$ as the next place to be jumped to. For every such next index, $$j$$, if this place can be jumped to, we determine the cost of reaching the end of the array starting from the index $$i$$, and with $$j$$ as the next index jumped from $$i$$, as  $$A[i] + jump(A, B, j, next)$$. If this cost is lesser than the minimum cost required till now, for the same starting index, we can update the minimum cost and the value of $$next[i]$$ as well. 

For every such function call, we also need to return this minimum cost.

At the end, we traverse over the $$next$$ array starting from the index 1. At every step, we add the current index to the $$res$$ list to be returned and also jump/move to the index pointed by $$next[i]$$, since this refers to the next index for the minimum cost. We continue in the same manner till we reach the end of the array $$A$$.

<iframe src="https://leetcode.com/playground/9tcSoGzo/shared" frameBorder="0" name="9tcSoGzo" width="100%" height="515"></iframe>

**Complexity Analysis**

* Time complexity : $$O(B^n)$$. The size of the recursive tree can grow upto $$O(b^n)$$ in the worst case. This is because, we have $$B$$ possible branches at every step. Here, $$B$$ refers to the limit of the largest jump and $$n$$ refers to the size of the given $$A$$ array. 

* Space complexity : $$O(n)$$. The depth of the recursive tree can grow upto $$n$$. $$next$$ array of size $$n$$ is used.

---
### Approach #2 Using Memoization [Accepted]

**Algorithm**

In the recursive solution just discussed, a lot of duplicate function calls are made, since we are considering the same index through multiple paths. To remove this redundancy, we can make use of memoization.

We keep a $$memo$$ array, such that $$memo[i]$$ is used to store the minimum cost of jumps to reach the end of the array $$A$$. Whenever the value for any index is calculated once, it is stored in its appropriate location. Thus, next time whenever the same function call is made, we can return the result directly from this $$memo$$ array, pruning the search space to a great extent.

<iframe src="https://leetcode.com/playground/mAVq4r5H/shared" frameBorder="0" name="mAVq4r5H" width="100%" height="515"></iframe>

**Complexity Analysis**

* Time complexity : $$O(nB)$$. $$memo$$ array of size $$n$$ is filled only once. We also do a traversal over the $$next$$ array, which will go upto $$B$$ steps.  Here, $$n$$ refers to the number of nodes in the given tree.

* Space complexity : $$O(n)$$. The depth of the recursive tree can grow upto $$n$$. $$next$$ array of size $$n$$ is used.

---
### Approach #3 Using Dynamic Programming [Accepted]

**Algorithm**

From the solutions discussed above, we can observe that the cost of jumping till the end of the array $$A$$ starting from the index $$i$$ is only dependent on the elements following the index $$i$$ and not the ones before it. This inspires us to make use of Dynamic Programming to solve the current problem.

We again make use of a $$next$$ array to store the next jump locations. We also make use of a $$dp$$ with the same size as that of the given $$A$$ array. $$dp[i]$$ is used to store the minimum cost of jumping till the end of the array $$A$$, starting from the index $$i$$. We start with the last index as the current index and proceed backwards for filling the $$next$$ and $$dp$$ array.

With $$i$$ as the current index, we consider all the next possible positions from $$i+1$$, $$i+2$$,..., $$i+B$$, and determine the position, $$j$$,  which leads to a minimum cost of reaching the end of $$A$$, which is given by $$A[i]+dp[j]$$. We update $$next[i]$$ with this corresponding index. We also update $$dp[i]$$ with the minimum cost, to be used by the previous indices' cost calculations.

At the end, we again jump over the indices as per the $$next$$ array and put these indices in the $$res$$ array to be returned.

<iframe src="https://leetcode.com/playground/BMCVq3jo/shared" frameBorder="0" name="BMCVq3jo" width="100%" height="515"></iframe>

**Complexity Analysis**

* Time complexity : $$O(nB)$$. We need to consider all the possible $$B$$ positions for every current index considered in the $$A$$ array. Here, $$A$$ refers to the number of elements in $$A$$.

* Space complexity : $$O(n)$$. $$dp$$ and $$next$$ array of size $$n$$ are used.
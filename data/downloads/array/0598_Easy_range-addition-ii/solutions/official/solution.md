# Official Solution

**Link:** [https://leetcode.com/problems/range-addition-ii/solution/](https://leetcode.com/problems/range-addition-ii/solution/)

---

[TOC]

## Solution

---
### Approach #1 Brute Force [Time Limit Exceeded]

The simplest method is to create a actual 2-D array of size $$m$$x$$n$$($$arr$$), perform all the operations one by one on the given range of elements, and then count the number of maximum elements. Now, we know that all the operations performed always include the element at index $$(0,0)$$. Thus, the element $$arr[0][0]$$ will always be the maximum. After performing all the operations, we can count the number of elements equal to $$arr[0][0]$$ to get the required count of the maximum elements.

<iframe src="https://leetcode.com/playground/jvT7P2kk/shared" frameBorder="0" width="100%" height="395" name="jvT7P2kk"></iframe>


**Complexity Analysis**

* Time complexity : $$O(x*m*n)$$. Array is updated $$x$$ times, where $$x$$ represents number of times operation is preformed i.e. $$ops.length$$.

* Space complexity : $$O(m*n)$$. Array of size $$m*n$$ is used.


---
### Approach #2 Single Pass [Accepted]

**Algorithm**

As per the given problem statement, all the operations are performed on a rectangular sub-matrix of the initial all 0's $$M$$ matrix. The upper left corner of each such rectangle is given by the index $$(0, 0)$$ and the lower right corner for an operation $$[i, j]$$ is given by the index $$(i, j)$$. 

The maximum element will be the one on which all the operations have been performed. The figure below shows an example of two operations being performed on the initial $$M$$ array. 

![Range_Addition](../Figures/598_Range_Addition2.PNG)

From this figure, we can observe that the maximum elements will be the ones which lie in the intersection region of the rectangles representing the operations. Further, we can observe that to count the number of elements lying in this intersection region, we don't actually need to perform the operations, but we need to determine the lower right corner of the intersecting region only. This corner is given by $$\big(x, y\big) = \big(\text{min}(\text{op[0]}), \text{min}(op[1])\big)$$, where $$\text{min}(\text{op[i]})$$ represents the minimum value of $$\text{op[i]}$$ from among all the $$\text{op[i]}$$'s in the given set of operations.

Thus, the resultant count of elements lying in the intersection is given by: $$x$$x$$y$$.

<iframe src="https://leetcode.com/playground/UdCoF8mb/shared" frameBorder="0" width="100%" height="208" name="UdCoF8mb"></iframe>


**Complexity Analysis**

* Time complexity : $$O(x)$$. Single traversal of all operations is done. $$x$$ refers to the number of operations.

* Space complexity : $$O(1)$$. No extra space is used.


---
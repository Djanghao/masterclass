# Official Solution

**Link:** [https://leetcode.com/problems/reshape-the-matrix/solution/](https://leetcode.com/problems/reshape-the-matrix/solution/)

---

[TOC]

## Solution

---

### Approach 1: Using Queue 

**Algorithm**

The simplest method is to extract all the elements of the given matrix by reading the elements in a row-wise fashion. In this implementation, we use a queue to put the extracted elements. Then, we can take out the elements of the queue formed in a serial order and arrange the elements in the resultant required matrix in a row-by-row order again.

The formation of the resultant matrix won't be possible if the number of elements in the original matrix isn't equal to the number of elements in the resultant matrix.


<iframe src="https://leetcode.com/playground/FE6ad2ER/shared" frameBorder="0" width="100%" height="378" name="FE6ad2ER"></iframe>

**Complexity Analysis**

* Time complexity : $$O(m \cdot n)$$. We traverse over $$m \cdot n$$ elements twice. Here, $$m$$ and $$n$$ refer to the number of rows and columns of the given matrix respectively.

* Space complexity : $$O(m \cdot n)$$. The queue formed will be of size $$m \cdot n$$.
<br />
<br />


---
### Approach 2: Without Using Extra Space 

**Algorithm**

Instead of unnecessarily using the queue as in the brute force approach, we can keep putting the numbers in the resultant matrix directly while iterating over the given matrix in a row-by-row order. While putting the numbers in the resultant array, we fix a particular row and keep on incrementing the column numbers only till we reach the end of the required columns indicated by $$c$$. At this moment, we update the row index by incrementing it and reset the column index to start from 0 again. Thus, we can save the space consumed by the queue for storing the data that just needs to be copied into a new array.

<iframe src="https://leetcode.com/playground/7ubCtJTn/shared" frameBorder="0" width="100%" height="378" name="7ubCtJTn"></iframe>

**Complexity Analysis**

* Time complexity : $$O(m \cdot n)$$. We traverse the entire matrix of size $$m \cdot n$$ once only. Here, $$m$$ and $$n$$ refers to the number of rows and columns in the given matrix.

* Space complexity : $$O(m \cdot n)$$. The resultant matrix of size $$m \cdot n$$ is used. 
<br />
<br />


---
### Approach 3: Using division and modulus

**Algorithm**

In the last approach, we needed to keep a track of when we reached the end of columns for the resultant matrix and needed to update the current row and column number for putting the extracted elements by checking the current indices every time. Instead of doing these limit checks at every step, we can make use of maths to help ease the situation. 

The idea behind this approach is as follows. Do you know how a 2-D array is stored in the main memory(which is 1-D  in nature)? It is internally represented as a 1-D array only. The element $$nums[i][j]$$ of $$nums$$ array is represented in the form of a one dimensional array by using the index in the form: $$nums[n*i + j]$$, where $$n$$ is the number of columns in the given matrix. Looking at the same in the reverse order, while putting the elements in the elements in the resultant matrix, we can make use of a $$count$$ variable which gets incremented for every element traversed as if we are putting the elements in a 1-D resultant array. But, to convert the $$count$$ back into 2-D matrix indices with a column count of $$c$$, we can obtain the indices as $$res[count/c][count\%c]$$ where $$count/c$$ is the row number and $$count\%c$$ is the coloumn number. Thus, we can save the extra checking required at each step.

<iframe src="https://leetcode.com/playground/8aQJuxFo/shared" frameBorder="0" width="100%" height="310" name="8aQJuxFo"></iframe>

**Complexity Analysis**

* Time complexity : $$O(m \cdot n)$$. We traverse the entire matrix of size $$m \cdot n$$ once only. Here, $$m$$ and $$n$$ refers to the number of rows and columns in the given matrix.

* Space complexity : $$O(m \cdot n)$$. The resultant matrix of size $$m \cdot n$$ is used.
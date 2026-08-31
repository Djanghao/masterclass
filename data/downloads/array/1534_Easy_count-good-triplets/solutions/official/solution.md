# Official Solution

**Link:** [https://leetcode.com/problems/count-good-triplets/solution/](https://leetcode.com/problems/count-good-triplets/solution/)

---

[TOC]

## Solution

---

### Approach 1: Enumeration

#### Intuition

Using $O(n^3)$ loops to enumerate all $(i, j, k)$ in sequence, where $0 \leq i < j < k < {\rm arr.length}$, for each set of $(i, j, k)$, determine whether ${\rm arr}[i]$, ${\rm arr}[j]$, and ${\rm arr}[k]$ satisfy the condition.

Finally, calculate the total number of all triplets that meet the conditions.

#### Implementation

<iframe src="https://leetcode.com/playground/aip2SkcW/shared" frameBorder="0" width="100%" height="446" name="aip2SkcW"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{arr}$.

* Time complexity: $O(n^3)$

We need a triple loop to judge whether all the triplets meet the conditions.

* Space complexity: $O(1)$

Only a few additional variables are needed.

### Approach 2: Optimized enumeration

#### Intuition

We consider using the $O(n^2)$ enumeration of binary pairs $(j,k)$ satisfying $|\rm arr[j]-\rm arr[k]|\le b$, and count how many $i$ satisfy the condition in this pair. Given the constraints on $i$ from the question, $|\rm arr[i]-\rm arr[j]|\le a \ \&\&\ |\rm arr[i]-\rm arr[k]|\le c$, we can expand the absolute values to obtain that the values that meet the conditions must be the intersection of the two intervals $[\rm arr[j]-a,\rm arr[j]+a]$ and $[\rm arr[k]-c,\rm arr[k]+c]$, which we denote as $[l,r]$. Therefore, when enumerating the binary tuple $(j,k)$, we only need to quickly count the number of $i$ that satisfy $i<j$ and the value range of $\rm arr[i]$ is in $[l,r]$.

It is easy to think of maintaining a prefix sum array $\rm sum$ of the frequency array $\rm arr[i]$. For a pair $(j,k)$, we can get the answer in $O(1)$ as $\rm sum[r]-\rm sum[l-1]$. Consider how to maintain the condition that the indices of the numbers stored in the current frequency array satisfy the restriction $i < j$. We just need to enumerate $j$ from small to large and update the value of $\rm arr[j]$ in the $\rm sum$ array each time the pointer moves forward by one, ensuring that the indices of the values stored in the $\rm sum$ array satisfy the restriction when enumerating to $j$.

"Update the value of $\rm arr[j]$ in the $\rm sum$ array." This operation is a brute-force update in this method because the value range of the array is very small. Capable readers may consider how to further optimize the complexity of this part and can consider it from the perspective of discretization or binary indexed trees, which will not be elaborated on here.  

#### Implementation

<iframe src="https://leetcode.com/playground/347cLDL5/shared" frameBorder="0" width="100%" height="500" name="347cLDL5"></iframe>

#### Complexity Analysis

Let $n$ be the length of the array $\textit{arr}$, $S$ is the upper limit of the array values, here it is $1000$.

* Time complexity: $O(n^2+nS)$

Since we have maintained a prefix sum array $\rm sum$ of the frequency array $\rm arr[i]$, for a pair $(j,k)$, we can get the answer in $O(1)$ as $\rm sum[r]-\rm sum[l-1]$. We only need a double loop to enumerate all the binary tuples.

* Space complexity: $O(S)$

We need $O(S)$ space to maintain the prefix sum array of the frequency of $\rm arr[i]$.
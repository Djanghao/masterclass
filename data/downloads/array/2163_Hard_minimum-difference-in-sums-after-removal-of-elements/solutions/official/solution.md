# Official Solution

**Link:** [https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solution/](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solution/)

---

### Approach: Priority Queue

#### Intuition

The requirement in the question is equivalent to:

- Choose a positive integer $k$ in the interval $[n, 2n]$.

- The first $k$ numbers of the array $\textit{nums}$ belong to the first part, but only $n$ of them can be retained.

- The last $3n - k$ numbers of the array $\textit{nums}$ belong to the second part, but again, only $n$ of them can be retained.

- The goal is to minimize the difference between the sum of the first part and the sum of the second part.

The reason $k \in [n, 2n]$ is required is that we must ensure each part has at least $n$ elements.

Since we need to minimize the difference between the sum of the first part and the sum of the second part, we want the first part to be as small as possible and the second part to be as large as possible. In other words:

> We need to select the $n$ smallest elements from the first part and the $n$ largest elements from the second part.

To do this, we can use a priority queue for selection. For the first part, we start by placing $\textit{nums}[0 .. n-1]$ into a max heap. Then, for each index $i$ in $[n, 2n)$, we insert $\textit{nums}[i]$ into the max heap and remove the largest element (i.e., the heap top). The remaining elements in the heap will be the $n$ smallest elements in $\textit{nums}[0 .. i]$.

For the second part, we perform a similar process in reverse. We begin by placing $\textit{nums}[2n .. 3n-1]$ into a min heap, and then iterate through indices $i$ in reverse from $2n-1$ down to $n$. At each step, we insert $\textit{nums}[i]$ into the heap and remove the smallest element. The heap will then contain the $n$ largest elements in $\textit{nums}[i .. 3n-1]$.

While modifying the heaps, we maintain the sum of the elements currently in each heap. When an element is inserted, we add its value; when the top element is removed, we subtract its value. This lets us compute $\textit{part}_1[n-1], \dots, \textit{part}_1[2n-1]$ and $\textit{part}_2[n], \dots, \textit{part}_2[2n]$, where:

- $\textit{part}_1[i]$ is the sum of the $n$ smallest elements in $\textit{nums}[0 .. i]$,

- $\textit{part}_2[i]$ is the sum of the $n$ largest elements in $\textit{nums}[i .. 3n-1]$.

The final answer is the minimum value of all expressions $\textit{part}_1[i] - \textit{part}_2[i+1]$ where $i \in [n-1, 2n)$.

We can simplify the indexing by subtracting $n-1$ from all subscripts in $\textit{part}_1$ and $n$ from all subscripts in $\textit{part}_2$, so that both have index ranges in $[0, n)$. This means we only need two arrays of length $n+1$ to store these values.

Further, while computing $\textit{part}_2$, we don’t actually need an array; we can just use a single variable. At index $i$, the relevant value from $\textit{part}_1$ is $\textit{part}_1[i - n]$, so we can compute the answer as $\textit{part}_1[i - n] - \textit{part}_2$ during the iteration.

#### Implementation

<iframe src="https://leetcode.com/playground/BX46sAM7/shared" frameBorder="0" width="100%" height="500" name="BX46sAM7"></iframe>

#### Complexity analysis

- Time complexity: $O(n \log n)$.
  
  The priority queue contains $n$ elements, with a time complexity of $O(\log n)$ per operation, and a total of $O(n)$ operations.

- Space complexity: $O(n)$.
  
  This is the space required for the priority queue and the array $\textit{part}_1$.
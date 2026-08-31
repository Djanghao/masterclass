# Official Solution

**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solution/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solution/)

---

### Approach: Hash Table + Sorting

#### Intuition

We enumerate all subarrays of length $k$, using a hash table $\textit{cnt}$ to count the occurrences of each number within the subarray. For each key-value pair $(\textit{key}, \textit{value})$ in the hash table—where $\textit{key}$ represents a number and $\textit{value}$ represents its occurrence count—we store them in an array and sort this array primarily in descending order by $\textit{value}$, and secondarily in descending order by $\textit{key}$.

After sorting, the first $x$ tuples correspond to the $x$ most frequent elements and their counts. By summing their products, we obtain the answer for this subarray.

#### Implementation

<iframe src="https://leetcode.com/playground/2rdjrpjQ/shared" frameBorder="0" width="100%" height="500" name="2rdjrpjQ"></iframe>

#### Complexity Analysis

- Time complexity: $O(n \times k \log k)$.
  
  The time to enumerate all subarrays of length $k$ is $O(n)$, and each subarray takes $O(k \log k)$ time for sorting and computing the answer.

- Space complexity: $O(k)$.
  
  This is the space required for hash table and arrays.

---
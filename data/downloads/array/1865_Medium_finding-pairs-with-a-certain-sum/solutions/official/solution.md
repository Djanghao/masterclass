# Official Solution

**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solution/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solution/)

---

### Approach: Hash table

#### Intuition

Since the length of the array $\textit{nums}_1$ is less than or equal to that of $\textit{nums}_2$, for the $\texttt{getPairs(tot)}$ operation, we can store the elements of $\textit{nums}_2$ in a hash map. Then, we enumerate each element $\textit{num}$ in $\textit{nums}_1$ and look up the value corresponding to the key $\textit{tot} - \textit{num}$ in the hash map. The sum of these values gives us the answer.

We store the arrays $\textit{nums}_1$ and $\textit{nums}_2$, and also maintain a hash map $\textit{cnt}$ to keep track of the frequencies of elements in $\textit{nums}_2$.

For the $\texttt{add(index, val)}$ operation, we decrement $\textit{cnt}[\textit{nums}_2[\textit{index}]]$, add $\textit{val}$ to $\textit{nums}_2[\textit{index}]$, and then increment the updated $\textit{cnt}[\textit{nums}_2[\textit{index}]]$.

For the $\texttt{getPairs(tot)}$ operation, we enumerate each element $\textit{num}$ in $\textit{nums}_1$, add $\textit{cnt}[\textit{tot} - \textit{num}]$ to the result, and return the final sum.

#### Implementation

<iframe src="https://leetcode.com/playground/2vEoLGrz/shared" frameBorder="0" width="100%" height="500" name="2vEoLGrz"></iframe>

#### Complexity analysis

Let $n$ and $m$ be the lengths of the arrays $\textit{nums}_1$ and $\textit{nums}_2$, respectively, and let $q_1$ and $q_2$ be the number of times the operations $\texttt{add(index, val)}$ and $\texttt{getPairs(tot)}$ are called.

- Time complexity: $O(n + m + q_1 + q_2 \cdot n)$.
  
    The initialization takes $O(n + m)$ time to store the two arrays and build the frequency map for $\textit{nums}_2$.
    
    Each add(index, val) operation takes $O(1)$ time, so $q_1$ calls take $O(q_1)$ in total.
    
    Each getPairs(tot) operation iterates over all elements in $\textit{nums}_1$ and performs a hash map lookup for each, resulting in $O(n)$ per call. So $q_2$ calls take $O(q_2 \cdot n)$ in total.

- Space complexity: $O(n + m)$.
  
  Storing the arrays $\textit{nums}_1$ and $\textit{nums}_2$ takes $O(n)$ and $O(m)$ space, respectively.
  
  The hash map stores the frequency of elements in $\textit{nums}_2$, which takes $O(m)$ space.
  
  Each `add` operation does not allocate additional memory beyond constant space, assuming we overwrite the values in-place.

> Note: If we choose to delete keys from the hash map when their frequency becomes zero, the map’s space usage remains bounded by $O(m)$, independent of the number of `add` operations.
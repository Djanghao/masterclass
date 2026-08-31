# Official Solution

**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solution/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solution/)

---

### Approach 1: Sorting

#### Intuition

If we do not perform any operation on the array $\textit{nums}$, then after each update of $\textit{original}$, we would need to traverse the entire array, which takes $O(n)$ time. The overall time complexity would therefore be $O(n^2)$.

We can optimize this process. Specifically, each time we find $\textit{original}$ in the array, its value becomes larger than before the update. Therefore, we can first sort the array $\textit{nums}$ in ascending order. This way, the position of the updated $\textit{original}$ value in the array (if it exists) can only appear after its previous position. We only need to traverse the sorted $\textit{nums}$ array from left to right while updating $\textit{original}$ whenever we find a match.

#### Implementation

<iframe src="https://leetcode.com/playground/DJZnyfeY/shared" frameBorder="0" width="100%" height="276" name="DJZnyfeY"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n \log n)$.
  
  Sorting the array takes $O(n \log n)$ time, and traversing it to update $\textit{original}$ takes $O(n)$ time, giving a total of $O(n \log n)$.

- Space complexity: $O(\log n)$.
  
  Apart from the sorting process (which may require additional space depending on the implementation), no extra data structures are used.

### Approach 2: Hash Table

#### Intuition

We can take a more direct approach by trading space for time. The idea is to store all elements of the array $\textit{nums}$ in a hash set, allowing constant-time lookups for any value. Then, we repeatedly check whether $\textit{original}$ exists in the hash set:

- If $\textit{original}$ is found in the hash set, we multiply $\textit{original}$ by $2$ and check again.

- If $\textit{original}$ is not found in the hash set, we stop and return the current value of $\textit{original}$ as the final result.
This eliminates the need to traverse the array multiple times and reduces the time complexity significantly.

#### Implementation

<iframe src="https://leetcode.com/playground/3AvtzbpF/shared" frameBorder="0" width="100%" height="500" name="3AvtzbpF"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n)$.
  
  The time complexity of traversing the array to maintain an element hash set is $O(n)$, and the time complexity of traversing to update $\textit{original}$ is at most $O(n)$.

- Space complexity: $O(n)$.
  
  That is the space cost of the element hash set.

---
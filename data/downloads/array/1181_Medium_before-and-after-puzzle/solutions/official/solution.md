# Official Solution

**Link:** [https://leetcode.com/problems/before-and-after-puzzle/solution/](https://leetcode.com/problems/before-and-after-puzzle/solution/)

---

### Approach: Hash Table + Sorting

#### Intuition

This problem leans more toward implementation details than complex algorithms. The task is to concatenate two phrases such that the last word of the first phrase is the same as the first word of the second phrase. To achieve this, we only need to extract the first and last words of each phrase and compare them pairwise. Since the final list must not contain duplicates, we use a hash table to record all valid concatenated phrases and then sort them before returning.

#### Algorithm

1. Traverse the string array `phrases`, split each phrase by spaces, and store its first and last words in a new array `sp`. The array `sp` should preserve the order of `phrases`.
2. Perform a double traversal of the array `sp`. If `sp[i][0] == sp[j][1]`, then the phrases at indices `i` and `j` can be concatenated. Store the concatenated phrase in the hash table.
3. Collect all concatenated phrases from the hash table into a new array, then sort and return it.

#### Implementation

<iframe src="https://leetcode.com/playground/PquwfEJe/shared" frameBorder="0" width="100%" height="500" name="PquwfEJe"></iframe>

#### Complexity Analysis

Let $N$ be the length of the string array `phrases`, and $K$ be the average length of the string phrases.

- Time complexity: $O(N^2K(\log N+\log K))$

  The nested loop runs $O(N^2)$ times. For each valid pair, string comparison (for matching) is $O(K)$ in the worst case, and constructing the concatenated string is $O(K)$. Inserting each concatenated string (of length $O(K)$) into a balanced BST (set) requires $O(K \cdot \log M)$ per insertion, where $M$ is the size of the set (up to $O(N^2)$). The total cost is dominated by $O(N^2 \cdot K \cdot \log N)$.

- Space complexity: $O(N^2K)$

  The hash table can store up to $N(N-1)$ entries, each occupying $O(K)$ space. In addition, the two-dimensional array `sp` has a maximum size proportional to the input array `phrases`.

---
# Official Solution

**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solution/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solution/)

---

### Approach: Search for the starting index of each group

#### Intuition

We assume that the length of the string $s$ is $n$. Since the length of each group of strings - except for the last one i.e., $k$, we can determine the starting index of each group: the starting index of the $i$-th group is $k \times i$. Based on this, we can compute the index range of the characters in each group of the string $s$, which corresponds to the closed interval $[k \times i, \min((k + 1) \times i, n) - 1]$.

We use the array $\textit{res}$ to store each group of strings, and a variable $\textit{curr}$ to track the starting index of the current group. Initially, $\textit{curr}$ is set to $0$. As long as $\textit{curr}$ is a valid index, it indicates that the current group exists. We then append the substring $s[k \times i..\min((k + 1) \times i, n) - 1]$ to the end of $\textit{res}$ and increment $\textit{curr}$ by $k$ to move to the next group's starting index.

Finally, the last element in the array $\textit{res}$ may need padding. We use the fill character $\textit{fill}$ to extend its length to $k$. After completing this process, we return the array $\textit{res}$ as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/jkebCf4F/shared" frameBorder="0" width="100%" height="446" name="jkebCf4F"></iframe>

#### Complexity analysis

Let $n$ be the length of the string $s$.

- Time complexity: $O(\max(n, k))$.
  
  This is the time complexity for grouping the strings and applying padding.

- Space complexity: $O(1)$.
  
  The output array is not included in the space complexity.
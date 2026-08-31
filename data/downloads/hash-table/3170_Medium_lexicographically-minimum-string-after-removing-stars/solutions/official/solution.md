# Official Solution

**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solution/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solution/)

---

[TOC]

## Solution

---

### Approach: Greedy

#### Intuition

According to the problem statement, whenever a `*` is encountered, we must remove the smallest character (in lexicographical order) to its left. To ensure that the resulting string is as lexicographically small as possible, and following the greedy principle, it's better to remove characters from the end rather than the beginning. This helps keep the smaller characters closer to the front, which contributes to minimizing the overall lexicographical order of the string.

We traverse the string $s$ from left to right. Since the string contains only lowercase letters, we use $26$ stacks to store the indices of each character we've seen so far. The $k$-th stack stores the indices of the $k$-th lowercase letter (`a` corresponds to 0, `b` to 1, and so on).

* When we encounter a `*`, we find the non-empty stack with the smallest lexicographical character, mark the corresponding character in the string $s$ as `*`, and remove the index from the top of that stack.
* When we encounter a non-`*` character, we push its index into the corresponding stack.

The final answer is formed by selecting all characters from left to right in the string $s$ that are not `*`.

#### Implementation

<iframe src="https://leetcode.com/playground/Wzy2mi7D/shared" frameBorder="0" width="100%" height="500" name="Wzy2mi7D"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $s$, and let $|\Sigma|$ be the size of the character set. Since all characters in this problem are lowercase letters, we have $|\Sigma| = 26$.

- Time complexity: $O(n \times |\Sigma|)$.
  
  During traversal, whenever we encounter a `*`, we need to find the smallest character (in lexicographical order) to its left. This requires scanning through all $|\Sigma|$ possible character stacks, which takes $O(|\Sigma|)$ time. Since there can be at most $n$ occurrences of `*`, the total time complexity is $O(n \times |\Sigma|)$.

- Space complexity: $O(n + |\Sigma|)$.
  
  The space used is $O(n + |\Sigma|)$: we need $O(n)$ space to store the indices of all characters in the string, and $O(|\Sigma|)$ space for maintaining the stacks for each character.
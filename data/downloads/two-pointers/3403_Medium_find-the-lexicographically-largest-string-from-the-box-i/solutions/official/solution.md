# Official Solution

**Link:** [https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/solution/](https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Enumeration

#### Intuition

When $\textit{numFriends} = 1$, we simply return the entire $\textit{word}$.

When $\textit{numFriends} > 1$, we consider all substrings starting at index $i$. Under the constraints of the problem, the maximum length of such a substring is $\min(n - \textit{numFriends} + 1, n - i)$. Among substrings of a fixed starting index, longer substrings have higher lexicographical order. Therefore, we can iterate over all starting indices $i$ from $0$ to $n - 1$, extract the substring of length $\min(n - \textit{numFriends} + 1, n - i)$ starting at $i$, and return the lexicographically largest substring among them.

#### Implementation

<iframe src="https://leetcode.com/playground/Mis8AqBb/shared" frameBorder="0" width="100%" height="344" name="Mis8AqBb"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $\textit{word}$.

- Time Complexity: $O(n^2)$

    We need to enumerate all substrings that meet the problem’s conditions. Since there are up to $n$ possible starting indices and for each we may extract a substring of up to $O(n)$ length, the overall time complexity is $O(n^2)$.

- Space Complexity: $O(n)$ or $O(1)$

    The space complexity depends on how the language handles string slicing:

    - In languages where slicing creates a new copy of the substring (e.g., C++, Java), the space complexity is $O(n)$ due to the storage of temporary substrings.

    - In languages where slicing creates a view or reference without copying (e.g., Python), the space complexity can be considered $O(1)$.

### Approach 2: Two Pointers

#### Intuition

> **Note:** To fully understand the two-pointer method used here, it's essential to first solve [1163. Last Substring in Lexicographical Order](https://leetcode.com/problems/last-substring-in-lexicographical-order/), which introduces the core idea behind this technique.

As in Approach 1, when $\textit{numFriends} > 1$, if the left endpoint of the lexicographically largest suffix of the string is $i$, then the substring $s_i$ which starts at index $i$ and has length $\min(n - \textit{numFriends} + 1, n - i)$ will be the lexicographically largest substring that satisfies the problem's constraints.

We use a proof by contradiction to verify this. Suppose there exists another valid substring $s_j$, starting at index $j$, such that $s_j > s_i$ lexicographically. We consider two cases:

- Case 1: $s_i$ is a suffix substring
That is, $n - \textit{numFriends} + 1 \geq n - i$. Then $s_i$ spans to the end of the string, and $s_j > s_i$ contradicts the assumption that $s_i$ is the lexicographically largest suffix.

- Case 2: $s_i$ is not a suffix substring
That is, $n - \textit{numFriends} + 1 < n - i$, meaning $s_i$ is shorter than the entire suffix. Since $s_j$ must also be of length at most $n - \textit{numFriends} + 1$, it is no longer than $s_i$. If $s_j > s_i$, it must differ at some position where the character in $s_j$ is greater than that in $s_i$. This implies that the suffix starting at $j$ is greater than the suffix starting at $i$, which again contradicts the assumption that the suffix starting at $i$ is the lexicographically largest.

Therefore, $s_i$ must indeed produce the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/FaCgNtGs/shared" frameBorder="0" width="100%" height="500" name="FaCgNtGs"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $\textit{word}$.

- Time Complexity: $O(n)$

    The two pointers together traverse at most $n$ characters. Each character is compared only a constant number of times, so the overall time complexity is linear.

- Space Complexity: $O(n)$ or $O(1)$

    The space complexity depends on the language's string handling behavior.

    - In languages where string slicing creates a new copy (e.g., C++, Java), the space complexity is $O(n)$ in the worst case due to substring creation.

    - In languages where string slices are views or references (e.g., Python), the space overhead can be considered $O(1)$ since no new characters are copied.
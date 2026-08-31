# Official Solution

**Link:** [https://leetcode.com/problems/maximum-number-of-words-you-can-type/solution/](https://leetcode.com/problems/maximum-number-of-words-you-can-type/solution/)

---

### Approach: Traversal + Hash Table

#### Intuition

We traverse the string $\textit{text}$ to count the number of words that can be completely entered.

To determine whether a character can be entered, we use a hash set to store the broken letters. At the same time, we maintain a boolean variable $\textit{flag}$ that indicates whether the current word can be fully entered. Initially, $\textit{flag}$ is set to $\texttt{true}$. When it is $\texttt{true}$, the current word is still valid; when it is $\texttt{false}$, the current word can no longer be fully entered.

While traversing the string, we handle three cases based on the current character:

- If the current character is a space, it marks the end of the previous word. If $\textit{flag}$ is $\texttt{true}$, then the previous word can be fully entered, so we increment the count. We then reset $\textit{flag}$ to $\texttt{true}$.
- If the current character is a broken letter, then the entire word cannot be fully entered, so we set $\textit{flag}$ to $\texttt{false}$.
- If the current character is a valid letter, we do nothing.

After finishing the traversal, we still need to check $\textit{flag}$ to determine whether the last word can be counted. Finally, we return the total count as the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/4Jnd4qwD/shared" frameBorder="0" width="100%" height="500" name="4Jnd4qwD"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{text}$ and $m$ the number of broken letters.

- Time complexity: $O(n + m)$.
  
  Building the hash set of broken letters takes $O(m)$, and traversing $\textit{text}$ to count the words takes $O(n)$. Together, this gives $O(n + m)$.

- Space complexity: $O(m)$.

    We use a hash set to store the broken letters, which requires $O(m)$ space. Apart from this, only a few constant-sized variables are used.
---
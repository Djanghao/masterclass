# Official Solution

**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solution/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solution/)

---

### Approach: Judge Individually

#### Intuition

Due to the equivalence and transitivity of "anagrams," it is only necessary to retain the first word among multiple consecutive anagrams that appear in $\textit{words}$.

Therefore, we can implement the removal operation as follows:

We use $\textit{res}$ to represent the result array, which initially contains $\textit{words}[0]$. We then traverse the remaining words in $\textit{words}$ in order, and for each new word, we check whether it and the previous word in $\textit{words}$ are anagrams. If they are, the word should be skipped (i.e., we perform no operation); otherwise, we append the word to the end of $\textit{res}$.

To determine whether two words $\textit{word}_1$ and $\textit{word}_2$ are anagrams, we define the function $\textit{compare}(\textit{word}_1, \textit{word}_2)$. Specifically, we use a frequency array $\textit{freq}$ of length equal to the number of English letters (26) to count character occurrences. When traversing each character of $\textit{word}_1$, we add 1 to the corresponding index in $\textit{freq}$; when traversing $\textit{word}_2$, we subtract 1. Finally, if all elements of $\textit{freq}$ are 0, it indicates that the two words are anagrams, and we return $\texttt{true}$; otherwise, we return $\texttt{false}$.

The final $\textit{res}$ array represents the words remaining after removing anagrams, and we return this array as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/d4LzofeP/shared" frameBorder="0" width="100%" height="500" name="d4LzofeP"></iframe>

#### Complexity Analysis

Let $n$ be the number of elements in the array $\textit{words}$, $m$ be the length of each word, and $|\Sigma|$ be the size of the character set.

- Time complexity: $O(mn)$.
  
  For each of the $n$ words, we may need to compare it with its previous word to determine whether they are anagrams. Each comparison requires $O(m)$ time to compute the frequency difference, leading to an overall time complexity of $O(mn)$.

- Space complexity: $O(|\Sigma|)$.
  
  This corresponds to the auxiliary space used for storing the frequency array that tracks character counts.

---
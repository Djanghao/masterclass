# Official Solution

**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solution/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solution/)

---

### Approach: Hash Table + Enumeration

#### Intuition

The task requires us to delete certain characters from the given string so that the difference in the frequency of any two types of characters does not exceed $k$.

To do this, we first use a hash table to count the number of occurrences of each character, where $\textit{cnt}[c]$ represents the number of times the character $c$ appears. Since there are only $26$ character types, we can enumerate one of them as the "character with the lowest frequency after the deletion operation" and set it as $c$. Then, all characters with frequencies less than $\textit{cnt}[c]$ will be entirely deleted, and all characters with frequencies greater than $\textit{cnt}[c] + k$ will be reduced to exactly $\textit{cnt}[c] + k$ instances.

Among all such enumeration schemes, we select the one that results in the smallest total number of deletions.

#### Implementation

<iframe src="https://leetcode.com/playground/HDoKtrdr/shared" frameBorder="0" width="100%" height="500" name="HDoKtrdr"></iframe>

#### Complexity analysis

Let $n$ be the length of the string $\textit{word}$, and let $C$ be the size of the character set, which is $26$ in this case.

- Time complexity: $O(n + C^2)$.
  
  We enumerate each character and calculate the number of deleted characters.

- Space complexity: $O(C)$.
  
  The space complexity when using a hash table is $O(C)$.
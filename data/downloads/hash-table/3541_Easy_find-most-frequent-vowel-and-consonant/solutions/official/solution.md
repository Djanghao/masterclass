# Official Solution

**Link:** [https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/solution/](https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/solution/)

---

### Approach: Traversal

#### Intuition

First, we use a hash table to record the number of occurrences of each character in the string. Then, we traverse all lowercase letters, separating them into vowels and consonants to find the maximum frequency in each group. Finally, summing these two values gives the answer.

#### Implementation

<iframe src="https://leetcode.com/playground/mKZUMxkr/shared" frameBorder="0" width="100%" height="497" name="mKZUMxkr"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $s$, and $C$ be the number of lowercase English letters, which is $26$.

- Time complexity: $O(n)$.

- Space complexity: $O(C)$.

---
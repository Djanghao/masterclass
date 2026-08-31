# Official Solution

**Link:** [https://leetcode.com/problems/valid-word/solution/](https://leetcode.com/problems/valid-word/solution/)

---

### Approach: One-Time Traversal

#### Intuition

First, we check whether the length of the given word is at least 3. Then, using a single traversal, we determine whether the word contains at least one vowel letter, at least one consonant letter, and only valid characters, i.e., letters and digits. Any other characters are not allowed.

#### Implementation

<iframe src="https://leetcode.com/playground/awZXUYXz/shared" frameBorder="0" width="100%" height="500" name="awZXUYXz"></iframe>

#### Complexity analysis

Let $n$ be the length of $\textit{word}$.

- Time complexity: $O(n)$.
  
  We iterate through the word only once to check each character, so the time complexity is linear in the length of the word.

- Space complexity: $O(1)$.
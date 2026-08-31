# Official Solution

**Link:** [https://leetcode.com/problems/shortest-word-distance/solution/](https://leetcode.com/problems/shortest-word-distance/solution/)

---

## Solution

This is a straight-forward coding problem. The distance between any two positions $$i_1$$ and $$i_2$$ in an array is $$|i_1 - i_2|$$. To find the shortest distance between `````word1````` and `````word2`````, we need to traverse the input array and find all occurrences $$i_1$$ and $$i_2$$ of the two words, and check if $$|i_1 - i_2|$$ is less than the minimum distance computed so far.

---
### Approach #1 (Brute Force)

**Algorithm**

A naive solution to this problem is to go through the entire array looking for the first word. Every time we find an occurrence of the first word, we search the entire array for the closest occurrence of the second word.

<iframe src="https://leetcode.com/playground/aYzTeZJd/shared" frameBorder="0" width="100%" height="310" name="aYzTeZJd"></iframe>

**Complexity Analysis**

The time complexity is $$O(n^2)$$, since for every occurrence of `word1`, we traverse the entire array in search for the closest occurrence of `word2`.

Space complexity is $$O(1)$$, since no additional space is used.

---
### Approach #2 (One-pass)

**Algorithm**

We can greatly improve on the brute-force approach by keeping two indices `i1` and `i2` where we store the *most recent* locations of `word1` and `word2`. Each time we find a new occurrence of one of the words, we do not need to search the entire array for the other word, since we already have the index of its most recent occurrence.

<iframe src="https://leetcode.com/playground/4sBBVa72/shared" frameBorder="0" width="100%" height="361" name="4sBBVa72"></iframe>

**Complexity Analysis**

* Time complexity: $$O(N \cdot M)$$ where $$N$$ is the number of words in the input list, and $$M$$ is the total length of two input words.

* Space complexity: $$O(1)$$, since no additional space is allocated.


---
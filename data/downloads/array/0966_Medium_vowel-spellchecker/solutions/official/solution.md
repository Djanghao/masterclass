# Official Solution

**Link:** [https://leetcode.com/problems/vowel-spellchecker/solution/](https://leetcode.com/problems/vowel-spellchecker/solution/)

---

[TOC]

## Solution
---
### Approach 1: HashMap

**Intuition and Algorithm**

We analyze the 3 cases that the algorithm needs to consider: when the query is an exact match, when the query is a match up to capitalization, and when the query is a match up to vowel errors.

In all 3 cases, we can use a hash table to query the answer.

* For the first case (exact match), we hold a set of words to efficiently test whether our query is in the set.
* For the second case (capitalization), we hold a hash table that converts the word from its lowercase version to the original word (with correct capitalization).
* For the third case (vowel replacement), we hold a hash table that converts the word from its lowercase version with the vowels masked out, to the original word.

The rest of the algorithm is careful planning and reading the problem carefully.

<iframe src="https://leetcode.com/playground/cFnotWCP/shared" frameBorder="0" width="100%" height="500" name="cFnotWCP"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\mathcal{C})$$, where $$\mathcal{C}$$ is the total *content* of `wordlist` and `queries`.

* Space Complexity:  $$O(\mathcal{C})$$.
<br />
<br />
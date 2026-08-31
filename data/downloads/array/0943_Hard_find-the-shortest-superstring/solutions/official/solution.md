# Official Solution

**Link:** [https://leetcode.com/problems/find-the-shortest-superstring/solution/](https://leetcode.com/problems/find-the-shortest-superstring/solution/)

---

[TOC]

## Solution
---
### Approach 1: Dynamic Programming

**Intuition**

We have to put the words into a row, where each word may overlap the previous word.  This is because no word is contained in any word.

Also, it is sufficient to try to maximize the total overlap of the words.

Say we have put some words down in our row, ending with word `A[i]`.  Now say we put down word `A[j]` as the next word, where word `j` hasn't been put down yet.  The overlap increases by `overlap(A[i], A[j])`.

We can use dynamic programming to leverage this recursion.  Let `dp(mask, i)` be the total overlap after putting some words down (represented by a bitmask `mask`), for which `A[i]` was the last word put down.  Then, the key recursion is `dp(mask ^ (1<<j), j) = max(overlap(A[i], A[j]) + dp(mask, i))`, where the `j`th bit is not set in mask, and `i` ranges over all bits set in `mask`.

Of course, this only tells us what the maximum overlap is for each set of words.  We also need to remember each choice along the way (ie. the specific `i` that made `dp(mask ^ (1<<j), j)` achieve a minimum) so that we can reconstruct the answer.

**Algorithm**

Our algorithm has 3 main components:

* Precompute `overlap(A[i], A[j])` for all possible `i, j`.
* Calculate `dp[mask][i]`, keeping track of the "`parent`" `i` for each `j` as described above.
* Reconstruct the answer using `parent` information.

Please see the implementation for more details about each section.

<iframe src="https://leetcode.com/playground/n5UnrAXW/shared" frameBorder="0" width="100%" height="500" name="n5UnrAXW"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N^2 (2^N + W))$$, where $$N$$ is the number of words, and $$W$$ is the maximum length of each word.

* Space Complexity:  $$O(N (2^N + W))$$.
<br />
<br />
# Official Solution

**Link:** [https://leetcode.com/problems/stamping-the-sequence/solution/](https://leetcode.com/problems/stamping-the-sequence/solution/)

---

[TOC]

## Solution
---
### Approach 1: Work Backwards

**Intuition**

Imagine we stamped the sequence with moves $$m_1, m_2, \cdots$$.  Now, from the final position `target`, we will make those moves in reverse order.  

Let's call the `i`th *window*, a subarray of `target` of length `stamp.length` that starts at `i`.  Each move at position `i` is possible if the `i`th window matches the stamp.  After, every character in the window becomes a wildcard that can match any character in the stamp.

For example, say we have `stamp = "abca"` and `target = "aabcaca"`.  Working backwards, we will reverse stamp at window `1` to get `"a????ca"`, then reverse stamp at window `3` to get `"a??????"`, and finally reverse stamp at position `0` to get `"???????"`.

**Algorithm**

Let's keep track of every window.  We want to know how many cells initially match the stamp (our "`made`" list), and which ones don't (our `"todo"` list).  Any windows that are ready (ie. have no todo list), get enqueued.

Specifically, we enqueue the positions of each character.  (To save time, we enqueue by character, not by window.)  This represents that the character is ready to turn into a `"?"` in our working `target` string.

Now, how to process characters in our queue?  For each character, let's look at all the windows that intersect it, and update their todo lists.  If any todo lists become empty in this manner `(window.todo is empty)`, then we enqueue the characters in `window.made` that we haven't processed yet.

<iframe src="https://leetcode.com/playground/UwjdAegP/shared" frameBorder="0" width="100%" height="500" name="UwjdAegP"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N(N-M))$$, where $$M, N$$ are the lengths of `stamp`, `target`.

* Space Complexity:  $$O(N(N-M))$$.
<br />
<br />
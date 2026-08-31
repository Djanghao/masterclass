# Official Solution

**Link:** [https://leetcode.com/problems/backspace-string-compare/solution/](https://leetcode.com/problems/backspace-string-compare/solution/)

---

[TOC]

---
### Approach #1: Build String [Accepted]

**Intuition**

Let's individually build the result of each string (`build(S)` and `build(T)`), then compare if they are equal.

**Algorithm**

To build the result of a string `build(S)`, we'll use a stack based approach, simulating the result of each keystroke.

<iframe src="https://leetcode.com/playground/g7aBaNuB/shared" frameBorder="0" width="100%" height="327" name="g7aBaNuB"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(M + N)$$, where $$M, N$$ are the lengths of `S` and `T` respectively.

* Space Complexity:  $$O(M + N)$$.


---
### Approach #2: Two Pointer [Accepted]

**Intuition**

When writing a character, it may or may not be part of the final string depending on how many backspace keystrokes occur in the future.

If instead we iterate through the string in reverse, then we will know how many backspace characters we have seen, and therefore whether the result includes our character.

**Algorithm**

Iterate through the string in reverse.  If we see a backspace character, the next non-backspace character is skipped.  If a character isn't skipped, it is part of the final answer.

See the comments in the code for more details.

<iframe src="https://leetcode.com/playground/DGF5YvNa/shared" frameBorder="0" width="100%" height="500" name="DGF5YvNa"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(M + N)$$, where $$M, N$$ are the lengths of `S` and `T` respectively.

* Space Complexity:  $$O(1)$$.
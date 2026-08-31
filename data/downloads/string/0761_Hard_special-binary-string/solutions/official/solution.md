# Official Solution

**Link:** [https://leetcode.com/problems/special-binary-string/solution/](https://leetcode.com/problems/special-binary-string/solution/)

---

[TOC]

### Approach #1: Recursion [Accepted]

**Intuition**

We can represent binary strings as "up and down" drawings, as follows:

<img src="../Figures/761/Special_Binary_String_1.png" width=80% height=80% />

In such a drawing, `"1"` is a line up one unit, and `"0"` is a line down one unit, where all lines are 45 degrees from horizontal.

Then, a binary string is *special* if and only if its up and down drawing does not cross below the starting horizontal line.

Now, say a special binary string is a *mountain* if it has no special proper prefix.  When viewed through the lens of up and down drawings, a special binary string is a mountain if it touches the starting horizontal line only at the very beginning and the very end of the drawing.  Notice that every special string can be written as consecutive mountains.

Without loss of generality, we can assume we only swap mountains.  Because if we swap special adjacent substrings A and B, and A has mountain decomposition $$A = M_1M_2\dots M_k$$, then we could instead swap $$B$$ and $$M_k$$, then $$B$$ and $$M_{k-1}$$, and so on.

Also, if $$S$$ has mountain decomposition $$S = M_1M_2\dots M_k$$, and we choose $$A$$ to start not at the start of some $$M_i$$, then $$A$$ has global height $$h > 0$$, and so $$A$$ cannot be special if it includes parts of another mountain $$M_{i+1}$$ as the end of mountain $$M_i$$ will cause it to dip to global height $$0 < h$$.

**Algorithm**

Say `F(String S)` is the desired `makeLargestSpecial` function. If `S` has mountain decomposition $$S = M_1M_2\dots M_k$$, the answer is $$\text{reverseSorted}(F(M_1), F(M_2), \dots, F(M_k))$$, as swaps `A, B` involving multiple $$M_i$$ cannot have `A` or `B` start differently from where these $$M_i$$ start.

It remains to determine how to handle the case when $$S = S_0, S_1, \dots , S_{N-1}$$ is a mountain.  In that case, it must start with `"1"` and end with `"0"`, so the answer is `"1" + F([S[1], S[2], ..., S[N-2]]) + "0"`.

<iframe src="https://leetcode.com/playground/PXKwe2CK/shared" frameBorder="0" width="100%" height="378" name="PXKwe2CK"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N^2)$$, where $$N$$ is the length of $$S$$.

* Space Complexity: $$O(N)$$.
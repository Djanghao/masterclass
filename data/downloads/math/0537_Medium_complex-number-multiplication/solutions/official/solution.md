# Official Solution

**Link:** [https://leetcode.com/problems/complex-number-multiplication/solution/](https://leetcode.com/problems/complex-number-multiplication/solution/)

---

[TOC]

## Solution

---
### Approach #1 Simple Solution[Accepted]

**Algorithm**

Multiplication of two complex numbers can be done as:

$$
(a+ib) \times (x+iy)=ax+i^2by+i(bx+ay)=ax-by+i(bx+ay)
$$

We simply split up the real and the imaginary parts of the given complex strings based on the '+' and the 'i' symbols. We store the real parts of the two strings $$a$$ and $$b$$ as $$x[0]$$ and $$y[0]$$ respectively and the imaginary parts as $$x[1]$$ and $$y[1]$$ respectively. Then, we multiply the real and the imaginary parts as required after converting the extracted parts into integers. Then, we again form the return string in the required format and return the result.

<iframe src="https://leetcode.com/playground/jgLSUzDc/shared" frameBorder="0" name="jgLSUzDc" width="100%" height="309"></iframe>

**Complexity Analysis**

* Time complexity : $$O(1)$$. Here splitting takes constant time as length of the string is very small $$(<20)$$.

* Space complexity : $$O(1)$$. Constant extra space is used.
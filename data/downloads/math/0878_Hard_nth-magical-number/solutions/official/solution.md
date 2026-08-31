# Official Solution

**Link:** [https://leetcode.com/problems/nth-magical-number/solution/](https://leetcode.com/problems/nth-magical-number/solution/)

---

[TOC]

## Solution
---
### Approach 1: Mathematical

**Intuition and Algorithm**

Let's try to count to the $$N$$-th magical number mathematically.

First, the pattern of magical numbers repeats.  Let $$L$$ be the least common multiple of $$A$$ and $$B$$.  If $$X \leq L$$ is magical, then $$X + L$$ is magical, because (for example) $$A \| X$$ and $$A \| L$$ implies $$A \| (X + L)$$, and similarly if $$B$$ were the divisor.

There are $$M = \frac{L}{A} + \frac{L}{B} - 1$$ magical numbers less than or equal to $$L$$: $$\frac{L}{A}$$ of them are divisible by $$A$$, $$\frac{L}{B}$$ of them are divisible by $$B$$, and $$1$$ of them is divisible by both.  So instead of counting one at a time, we can count by $$M$$ at a time.

Now, suppose $$N = M*q + r$$ (with $$r < M$$).  The first $$L*q$$ numbers contain $$M*q$$ magical numbers, and within the next numbers $$(L*q + 1, L*q + 2, \cdots)$$ we want to find $$r$$ more magical ones.

For this task, we can use brute force.  The next magical number (less $$L*q$$) will either be $$A$$ or $$B$$.  If for example it is $$A$$, then the next number will either be $$2*A$$ or $$B$$, and so on.

If the $$r$$-th such magical number is $$Y$$, then the final answer is $$L*q + Y$$.  Care must also be taken in the case that $$r$$ is $$0$$.

<iframe src="https://leetcode.com/playground/fQiDrmd6/shared" frameBorder="0" width="100%" height="500" name="fQiDrmd6"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(A+B)$$, assuming a model where integer math operations are $$O(1)$$.  The calculation of `q * L` is $$O(1)$$.  The calculation of the $$r$$-th magical number after $$q*M$$ is $$O(M)$$ which is $$O(A+B)$$.

* Space Complexity:  $$O(1)$$.
<br />
<br />


---
### Approach 2: Binary Search

**Intuition**

The number of magical numbers less than or equal to $$x$$ is a monotone increasing function in $$x$$, so we can binary search for the answer.

**Algorithm**

Say $$L = \text{lcm}(A, B)$$, the *least common multiple* of $$A$$ and $$B$$; and let $$f(x)$$ be the number of magical numbers less than or equal to $$x$$.  A well known result says that $$L = \frac{A * B}{\text{gcd}(A, B)}$$, and that we can calculate the function $$\gcd$$.  For more information on least common multiples and greatest common divisors, please visit [Wikipedia - Lowest Common Multiple](https://en.wikipedia.org/wiki/Least_common_multiple).

Then $$f(x) = \lfloor \frac{x}{A} \rfloor + \lfloor \frac{x}{B} \rfloor - \lfloor \frac{x}{L} \rfloor$$.  Why?  There are $$\lfloor \frac{x}{A} \rfloor$$ numbers $$A,  2A,  3A,  \cdots$$ that are divisible by $$A$$, there are $$\lfloor \frac{x}{B} \rfloor$$ numbers divisible by $$B$$, and we need to subtract the $$\lfloor \frac{x}{L} \rfloor$$ numbers divisible by $$A$$ and $$B$$ that we double counted.

Finally, the answer must be between $$0$$ and $$N * \min(A, B)$$.  
Without loss of generality, suppose $$A \geq B$$, so that it remains to show

$$
\lfloor \frac{N * \min(A, B)}{A} \rfloor + \lfloor \frac{N * \min(A, B)}{B} \rfloor - \lfloor \frac{N * \min(A, B)}{\text{lcm}(A, B)} \rfloor \geq N
$$

$$
\Leftrightarrow \lfloor \frac{N*A}{A} \rfloor + \lfloor \frac{N*A}{B} \rfloor - \lfloor \frac{N*A*\gcd(A, B)}{A*B} \rfloor \geq N
$$

$$
\Leftrightarrow \lfloor \frac{N*A}{B} \rfloor \geq \lfloor \frac{N*\gcd(A, B)}{B} \rfloor
$$

$$
\Leftrightarrow A \geq \gcd(A, B)
$$

as desired.

Afterwards, the binary search on $$f$$ is straightforward.  For more information on binary search, please visit [[LeetCode Explore - Binary Search]](https://leetcode.com/explore/learn/card/binary-search/).

<iframe src="https://leetcode.com/playground/LDujXtuh/shared" frameBorder="0" width="100%" height="480" name="LDujXtuh"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\log (N * \min(A, B)))$$.

* Space Complexity:  $$O(1)$$.
<br />
<br />
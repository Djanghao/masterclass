# Official Solution

**Link:** [https://leetcode.com/problems/power-of-four/solution/](https://leetcode.com/problems/power-of-four/solution/)

---

[TOC]

## Solution

---

### Overview

**Prerequisites**

This bitwise trick will be used as something already known:

- How to check if the number is a power of two : `x > 0 and x & (x - 1) == 0`.

    Please check the article [Power of Two](https://leetcode.com/articles/power-of-two/)
    for the detailed explanation.

**Intuition**

There is an obvious $$\mathcal{O}(\log N)$$ time solution
and we're not going to discuss it here.

<iframe src="https://leetcode.com/playground/kBwkCQug/shared" frameBorder="0" width="100%" height="174" name="kBwkCQug"></iframe>

Let's discuss $$\mathcal{O}(1)$$ time and $$\mathcal{O}(1)$$ space solutions only.
<br />
<br />


---
### Approach 1: Brute Force + Precomputations

Let's precompute all possible answers, as we once did for the problem 
[Nth Tribonacci Number](https://leetcode.com/articles/n-th-tribonacci-number/).

Input number is known to be [signed 32 bits integer](https://en.wikipedia.org/wiki/Integer_(computer_science)#Common_long_integer_sizes),
i.e. $$x \le 2^{31} - 1$$. Hence the max power of four to be considered is
$$[\log_4\left(2^{31} - 1\right)] = 15$$. 
Voila, here is all 16 possible 
answers: $$4^0$$, $$4^1$$, $$4^2$$, ..., $$4^{15}$$. Let's precompute them all,
and then during the runtime just check if input number is in the list of answers. 

<iframe src="https://leetcode.com/playground/DngXqVYu/shared" frameBorder="0" width="100%" height="378" name="DngXqVYu"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(1)$$.

* Space complexity: $$\mathcal{O}(1)$$.
<br />
<br />


---
### Approach 2: Math

If num is a power of four $$x = 4^a$$, then 
$$a = \log_4 x = \frac{1}{2}\log_2 x$$ is an integer. 
Hence let's simply check if $$\log_2 x$$ is an even number.

<iframe src="https://leetcode.com/playground/2H6eahtj/shared" frameBorder="0" width="100%" height="140" name="2H6eahtj"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(1)$$.

* Space complexity : $$\mathcal{O}(1)$$.
<br />
<br />


---
### Approach 3: Bit Manipulation

Let's first check if num is a power of two: 
`x > 0 and x & (x - 1) == 0`. 

Now the problem is to distinguish between even powers of two (when $$x$$ 
is a power of four) and odd powers of two (when $$x$$ is _not_ a power of four).
In binary representation both cases are single 1-bit followed by zeros.

> What is the difference? In the first case (power of four), 
1-bit is at even position: bit 0, bit 2, bit 4, etc. In the
second case, at odd position. 
  
![fig](../Figures/342/odd_even.png)

Hence power of four would make a zero in a bitwise AND with number 
$$(101010...10)_2$$:

$$4^a \land (101010...10)_2 == 0$$

> How long should be $$(101010...10)_2$$ if $$x$$ is a signed integer?
32 bits. To write shorter, in 8 charaters instead of 32, it's common to use 
[hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) representation:
$$(101010...10)_2 = (aaaaaaaa)_{16}$$.

$$x \land (aaaaaaaa)_{16} == 0$$

<iframe src="https://leetcode.com/playground/C4tgMnm5/shared" frameBorder="0" width="100%" height="140" name="C4tgMnm5"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(1)$$.

* Space complexity : $$\mathcal{O}(1)$$.
<br />
<br />


---
### Approach 4: Bit Manipulation + Math

Let's first check if $$x$$ is a power of two: 
`x > 0 and x & (x - 1) == 0`. 
Now one could be sure that $$x = 2^a$$.
Though $$x$$ is a power of four only if $$a$$ is even.

Next step is to consider both cases $$a = 2k$$ and $$a = 2k + 1$$,
and to compute $$x$$ modulo after division by three:

$$(2^{2k} \mod 3) = (4^k \mod 3) = ((3 + 1)^k \mod 3) = 1$$

$$((2^{2k + 1}) \mod 3) = ((2 \times 4^k) \mod 3) = ((2 \times(3 + 1)^k) \mod 3) = 2$$

> If $$x$$ is a power of two and `x % 3 == 1`, then $$x$$ _is_ a power of four.

<iframe src="https://leetcode.com/playground/5vq3RSaj/shared" frameBorder="0" width="100%" height="140" name="5vq3RSaj"></iframe>

**How this works: mod arithmetic**

To show the idea, let's compute $$x = 2^{2k} \mod 3$$.

First, $$2^{2k} = {2^2}^k = 4^k$$. Second, since $$4 = 3 + 1$$, $$x$$
could be rewritten as 

$$x = ((3 + 1)^k \mod 3)$$

Let's decompose 

$$(3 + 1)^k = (3 + 1) \times (3 + 1)^{k - 1} = 3 \times (3 + 1)^{k - 1} + (3 + 1)^{k - 1}$$. 

The first term is divisible by 3, i.e. $$(3 \times (3 + 1)^{k - 1}) \mod 3 = 0$$. Hence

$$x = ((3 + 1)^{k - 1} \mod 3)$$

One could continue like this k -> k - 1 -> k - 2 -> ... -> 1 and finally rewrite $$x$$ as

$$x = ((3 + 1)^1 \mod 3) = 1$$. 

The job is done. Now $$y = 2^{2k + 1} \mod 3$$ is simple, because if $$x \mod 3 = 1$$,
then $$y \mod 3 = 2x \mod 3 = 2$$.

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(1)$$.

* Space complexity : $$\mathcal{O}(1)$$.
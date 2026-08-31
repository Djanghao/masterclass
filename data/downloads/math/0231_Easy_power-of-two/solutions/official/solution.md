# Official Solution

**Link:** [https://leetcode.com/problems/power-of-two/solution/](https://leetcode.com/problems/power-of-two/solution/)

---

[TOC]

## Solution

--- 

### Overview

A intuitive way to check the power of two is to check whether we can divide the number repeatedly by 2 until we reach 1. If at any point the number isn't divisible by 2, then it isn't a power of two.

This solution runs in $\mathcal{O}(\log N)$ time because we divide the number by 2 at each step, and it takes approximately $\log_2(N)$ divisions before we reach 1 (or realize it's not possible).

<iframe src="https://leetcode.com/playground/Vb9vutdu/shared" frameBorder="0" width="100%" height="191" name="Vb9vutdu"></iframe>

Instead, the problem will be solved in $$\mathcal{O}(1)$$ time with the help of bitwise operators. The idea is to discuss such bitwise tricks as 

- How to get / isolate the rightmost 1-bit : `n & (-n)`.

- How to turn off (= set to 0) the rightmost 1-bit : `n & (n - 1)`.

These tricks are often used as something obvious in more complex bit-manipulation solutions, like for [N Queens problem](https://leetcode.com/articles/n-queens-ii/), and it's important to recognize them to understand what is going on.
<br /> 
<br />


---
#### Intuition

The idea behind both solutions will be the same: a power of two in binary representation is one 1-bit, followed by some zeros:

$$1 = (0000 0001)_2$$

$$2 = (0000 0010)_2$$

$$4 = (0000 0100)_2$$

$$8 = (0000 1000)_2$$

A number that is not a power of two has more than one 1-bit in its binary representation:

$$3 = (0000 0011)_2$$

$$5 = (0000 0101)_2$$

$$6 = (0000 0110)_2$$

$$7 = (0000 0111)_2$$

The only exception is 0, which should be treated separately.
<br /> 
<br />


---
### Approach 1: Bitwise Operators: Get the Rightmost 1-bit

**Get/Isolate the Rightmost 1-bit**

Let's first discuss why `n & (-n)` is a way to keep the rightmost 1-bit and to set all the other bits to 0.

Basically, that works because of [two's complement](https://en.wikipedia.org/wiki/Two%27s_complement). In two's complement notation $$-n$$ is the same as $$\lnot n + 1$$. In other words, to compute $$-n$$ one has to revert all bits in $$n$$ and then add 1 to the result.

Adding 1 to $$\lnot n$$ in binary representation means to carry that 1-bit till the rightmost 0-bit in $$\lnot n$$ and to set all the lower bits to zero. Note, that the rightmost 0-bit in $$\lnot n$$ corresponds to the rightmost 1-bit in $$n$$. 

> In summary, $$-n$$ is the same as $$\lnot n + 1$$. This operation reverts all bits of n except the rightmost 1-bit.

![fig](../Figures/231/twos.png)

Hence, n and -n have just one bit in common - the rightmost 1-bit. That means that `n & (-n)` would keep that rightmost 1-bit and set all the other bits to 0.

![fig](../Figures/231/rightmost.png) 

**Detect Power of Two**

So let's do `n & (-n)` to keep the rightmost 1-bit and set all the other bits to zero. As discussed above, for the power of two, it would result in `n` itself, since a power of two contains just one 1-bit.

Other numbers have more than 1-bit in their binary representation and hence for them `n & (-n)` would not be equal to `n` itself. 

Hence a number is a power of two if `n & (-n) == n`.

![fig](../Figures/231/first2.png) 

**Implementation**

<iframe src="https://leetcode.com/playground/HHDHanSe/shared" frameBorder="0" width="100%" height="191" name="HHDHanSe"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(1)$$. 

* Space complexity: $$\mathcal{O}(1)$$.
<br /> 
<br />


---
### Approach 2: Bitwise operators: Turn off the Rightmost 1-bit

**Turn off the Rightmost 1-bit**

Let's first discuss why `n & (n - 1)` is a way to set the rightmost 1-bit to zero.

To subtract 1 means to change the rightmost 1-bit to 0 and to set all the lower bits to 1.  

Now AND operator: the rightmost 1-bit will be turned off because `1 & 0 = 0`, and all the lower bits as well. 

![fig](../Figures/231/turn2.png)

**Detect Power of Two**

The solution is straightforward: 

1. Power of two has just one 1-bit.

2. `n & (n - 1)` sets this 1-bit to zero, and hence one has to verify if the result is zero `n & (n - 1) == 0`.

![fig](../Figures/231/second2.png)

**Implementation**

<iframe src="https://leetcode.com/playground/QRrCCKma/shared" frameBorder="0" width="100%" height="174" name="QRrCCKma"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(1)$$. 

* Space complexity: $$\mathcal{O}(1)$$.
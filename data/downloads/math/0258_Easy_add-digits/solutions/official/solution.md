# Official Solution

**Link:** [https://leetcode.com/problems/add-digits/solution/](https://leetcode.com/problems/add-digits/solution/)

---

[TOC]

---

### Overview

The value we're asked to compute is the so-called [Digital Root](https://en.wikipedia.org/wiki/Digital_root). Logarithmic time solution is easy to write, although the main question here is how to fit into a constant time.

<iframe src="https://leetcode.com/playground/hvP39Nsq/shared" frameBorder="0" width="100%" height="327" name="hvP39Nsq"></iframe>

<br />

---

### Approach 1: Mathematical: Digital Root

**Formula for the Digital Root**

There is a known formula to compute a digital root in a decimal numeral system

$$
dr_{10}(n) = 0, \qquad \text{if } n = 0 
$$

$$
dr_{10}(n) = 9, \qquad \text{if } n = 9 k 
$$

$$
dr_{10}(n) = n \mod 9, \qquad \text{if } n \neq 9 k
$$

How to derive it? Probably, you already know the following proof from school, where it was used for divisibility by 9: "The original number is divisible by 9 if and only if the sum of its digits is divisible by 9". Let's revise it briefly. 

The input number could be presented in a standard way, where $$d_0, d_1, .. d_k$$ are digits of n:

$$
n = d_0 + d_1 \cdot 10^1 + d_2 \cdot 10^2 + ... + d_k \cdot 10^k
$$

One could expand each power of ten, using the following:

$$
10 = 9 \cdot 1 + 1 \\ 
100 = 99 + 1 = 9 \cdot 11 + 1 \\ 
1000 = 999 + 1 = 9 \cdot 111 + 1 \\
... \\
10^k = 1\underbrace{00..0}_\text{k times} = \underbrace{99..9}_\text{k times} + 1 = 9 \cdot \underbrace{11..1}_\text{k times} + 1
$$

That results in 

$$
n = d_0 + d_1 \cdot (9 \cdot 1 + 1) + d_2 \cdot(9 \cdot 11 + 1) + ... + d_k \cdot (9 \cdot \underbrace{11..1}_\text{k times} + 1)
$$

and could be simplified as

$$
n = (d_0 + d_1 + d_2 + ... + d_k) + 9 \cdot (d_1 \cdot 1 + d_2 \cdot 11 + ... + d_k \cdot \underbrace{11..1}_\text{k times})
$$

The last step is to take the modulo from both sides:

$$
n \mod 9 = (d_0 + d_1 + d_2 + ... + d_k) \mod 9
$$

and to consider separately three cases: the sum of digits is 0, the sum of digits is divisible by 9, and the sum of digits is _not_ divisible by nine:

$$
dr_{10}(n) = 0, \qquad \text{if } n = 0
$$

$$
dr_{10}(n) = 9, \qquad \text{if } n = 9 k 
$$

$$
dr_{10}(n) = n \mod 9, \qquad \text{if } n \neq 9 k
$$

**Implementation**

The straightforward implementation is 

<iframe src="https://leetcode.com/playground/CzKYBRXZ/shared" frameBorder="0" width="100%" height="191" name="CzKYBRXZ"></iframe>

though two last cases could be merged into one

$$
dr_{10}(n) = 0, \qquad \text{if } n = 0 
$$

$$
dr_{10}(n) = 1 + (n - 1) \mod 9, \qquad \text{if } n \neq 0
$$

<iframe src="https://leetcode.com/playground/5sUsPBbx/shared" frameBorder="0" width="100%" height="157" name="5sUsPBbx"></iframe>

#### Complexity Analysis

Let $n$ be the input number.

- Time complexity: $O(1)$

    The function performs a constant number of operations, regardless of the input size. The operations involve simple arithmetic calculations and a conditional check, all of which take constant time.

- Space complexity: $O(1)$

    The function uses a constant amount of extra space. It does not depend on the input size and only uses a few variables for the calculations, which do not grow with the input.

---
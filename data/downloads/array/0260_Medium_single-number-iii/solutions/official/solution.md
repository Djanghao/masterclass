# Official Solution

**Link:** [https://leetcode.com/problems/single-number-iii/solution/](https://leetcode.com/problems/single-number-iii/solution/)

---

[TOC]

## Solution

--- 

### Overview

The problem could be solved in $$\mathcal{O}(N)$$ time and $$\mathcal{O}(N)$$ space by using a hashmap. 

Solving the problem in a constant space is a bit tricky but could be done with the help of two bitmasks. 

![fig](../Figures/260/two2.png)
<br /> 
<br />


---
### Approach 1: Hashmap

Build a hashmap: element -> its frequency. Return only the elements with the frequency equal to 1.

**Implementation**

<iframe src="https://leetcode.com/playground/kRoVhaS9/shared" frameBorder="0" width="100%" height="293" name="kRoVhaS9"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ to iterate over the input array. 

* Space complexity : $$\mathcal{O}(N)$$ to keep the hashmap of $$N$$ elements.
<br /> 
<br />


---
### Approach 2: Two bitmasks 

**Prerequisites**

This article will use two bitwise tricks, discussed in detail last week :

- If one builds an array bitmask with the help of the XOR operator, following `bitmask ^= x` strategy, the bitmask would keep only the bits that appear odd number of times. That was discussed in detail in the article [Single Number II](https://leetcode.com/articles/single-number-ii/).

![fig](../Figures/260/xor3.png)

- `x & (-x)` is a way to isolate the rightmost 1-bit, i.e. to keep the rightmost 1-bit and to set all the other bits to zero. Please refer to the article [Power of Two](https://leetcode.com/articles/power-of-two/) for a detailed explanation. 

![fig](../Figures/260/isolate3.png)

**Intuition**

> An interview tip. Imagine, you have a problem identifying an array element (or elements), which appears exactly a given number of times. Probably, the key is to build first an array bitmask using the XOR operator. Examples: [In-Place Swap](leetcode.com/articles/single-number-ii/356460/Single-Number-II/324042), [Single Number](https://leetcode.com/articles/single-number/), [Single Number II](leetcode.com/articles/single-number-ii/356460/Single-Number-II/324042).
  
So let's create an array bitmask: `bitmask ^= x`. This bitmask will _not_ keep any number that appears twice because the XOR of two equal bits results in a zero bit `a^a = 0`.

Instead, the bitmask would keep only the difference between two numbers (let's call them x and y) which appear just once. The difference here it's the bits that are different for x and y. 

![fig](../Figures/260/diff_new.png)

> Could we extract x and y directly from this bitmask? No. However, we could use this bitmask as a marker to separate x and y.

Let's do `bitmask & (-bitmask)` to isolate the rightmost 1-bit, which is different between x and y. Let's say this is 1-bit for x and 0-bit for y. 

![fig](../Figures/260/isolate2_new.png)

Now let's use XOR as before, but for the new bitmask `x_bitmask`, which will contain only the numbers which have 1-bit in the position of `bitmask & (-bitmask)`. This way, this new bitmask will contain only number x `x_bitmask = x`, because of two reasons:

- y has 0-bit in the position `bitmask & (-bitmask)` and hence will not enter this new bitmask. 

- All numbers but x will not be visible in this new bitmask because they appear two times. 

![fig](../Figures/260/x_bitmask2.png)

Voila, x is identified. Now to identify y is simple: `y = bitmask^x`.

**Implementation**

<iframe src="https://leetcode.com/playground/3kgq8Dzb/shared" frameBorder="0" width="100%" height="344" name="3kgq8Dzb"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N)$$ to iterate over the input array. 

* Space complexity : $$\mathcal{O}(1)$$, it's a constant space solution.
# Official Solution

**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solution/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solution/)

---

[TOC]

## Solution

---

### Approach 1: One Pass + Count

Let's first implement a pretty straightforward one-pass idea: to iterate over the array and count the number of zeros in between the 
"neighbor" `1`s. Each two neighbors `1`s should have at least $$k$$ zeros in-between. If it's not the case, return false.

![simple](../Figures/1437/one_pass2.png) 
*Fig 1. One pass: count the number of zeros in-between the "neighbour" `1`s.*


**Implementation**

<iframe src="https://leetcode.com/playground/MAJo6UcM/shared" frameBorder="0" width="100%" height="497" name="MAJo6UcM"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ to parse an array of $$N$$ elements.
    
* Space complexity: $$\mathcal{O}(1)$$ since we don't allocate any additional data structures here. 
<br />
<br />


---
### Approach 2: Bit Manipulation

This approach would be more suitable for the Facebook variation of this problem when the input is not a binary array but an integer.

In this situation, the problem could be solved with the bitwise trick to remove trailing zeros in the binary representation:

<iframe src="https://leetcode.com/playground/UWXKH6v3/shared" frameBorder="0" width="100%" height="123" name="UWXKH6v3"></iframe>

![simple](../Figures/1437/bitwise.png) 
*Fig 2. Approach 2: use bit manipulations to work with the binary 
representation of the integer.*


**Algorithm**

- Convert a binary array into integer `x`. Note that this conversion always works fine in Python where there is no limit on the value of integers. In Java, the usage of this approach is limited by the integer capacity.

- Consider the base cases: return true if `x == 0` or `k == 0`.

- Remove trailing zeros in the binary representation of `x`. That ensures that the last bit of `x` is 1-bit.

- While `x` is greater than `1`:

    - Remove trailing 1-bit with the right shift: `x >>= 1`.
    
    - Remove trailing zeros one by one, and count them using counter `count`. The number of zeros in-between 1-bits should be greater or equal to `k`. Hence, return false if `count < k`.
    
- We're here because all 1-bits are separated by more than `k` zeros. Return true.

**Implementation**

<iframe src="https://leetcode.com/playground/iRGuvXeZ/shared" frameBorder="0" width="100%" height="500" name="iRGuvXeZ"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ to parse an array of $$N$$ elements.
    
* Space complexity: $$\mathcal{O}(1)$$ since we don't allocate any additional data structures here.
<br />
<br />


---
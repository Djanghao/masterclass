# Official Solution

**Link:** [https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solution/](https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solution/)

---

[TOC]

## Solution

---

#### Overview

The sequence described in the problem is [A047778](https://oeis.org/A047778), and you can check the first few terms [here](https://oeis.org/A047778/list). As we see, the number grows rapidly.

Below, we will discuss three approaches: *Change to Binary String*, *Math*, and *Math (Bitwise Operation)*.

Generally, we recommend the third approach since it has fast performance and low space usage.

---

#### Approach 1: Change to Binary String

**Intuition**

The problem requires us to do three things:

1. Transform numbers from $$1$$ to $$n$$ into binary.

  This step is similar to [Convert a Number to Hexadecimal](https://leetcode.com/problems/convert-a-number-to-hexadecimal/). All we need to do is keep dividing by $$2$$ and collecting the remainders. Also, many programming languages have built-in APIs.
  
2. Concatenate binarys.

  It is simple since we always have a built-in API.
  
3. Transform the concatenation into decimal.

  The third step is similar to [Convert Binary Number in a Linked List to Integer](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/). We need to iterate each element, and for each element, we multiply the current result by $$2$$ and add the element to the result.

![Figure 1.1](../Documents/5620/5620_1_1.drawio.svg)

If you are unclear about the detail, please check the problem linked above.

However, if we directly combine those three steps, we probably meet *Time Limit Exceed*. This is because the second step, concatenation, takes a long time since it needs to generate a new string after each connection or to reallocate itself. Of course, in some programming languages such as Python, it is fast enough to pass, but for some others, optimizations are needed.

Luckily, if we dig into those three steps, we will find that the concatenation is **not** necessary. When we transform the binary into the decimal, we only need the **next** element when iterating. Therefore, we can transform the next number into binary when we need the next element.

For example, if `n == 3`, and we have calculated the binary form of `1` (binary: `1`) and `2` (binary: `10`), and the current result is `110` (binary) = `6` (decimal). Now we want to include `3`. We can transform `3` into `11` (binary) and then add to the result. There is no need for concatenation.

![Figure 1.2](../Documents/5620/5620_1_2.drawio.svg)

**Algorithm**

*Step 1:* Initialize an integer `result` to store the final result.

*Step 2:* Iterate from 1 to n. For each number:
  - Convert the number into binary form.
  - Iterate the binary string. For each element (`0` or `1`), update `result` to 2*`result` + element.

*Step 3:* Return `result`.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

<iframe src="https://leetcode.com/playground/TVzoNojK/shared" frameBorder="0" width="100%" height="446" name="TVzoNojK"></iframe>

Note: Due to the convenient API and big integer characteristics in Python, we can directly **concatenate** strings together and make it into decimal at once. Though it requires extra space but is easier to implement.

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(n\log(n))$$. We iterate $$n$$ numbers, and for each number we spend $$\mathcal{O}(\log(n))$$ to transform it into the binary form and add it to the final result.

* Space Complexity: Depends on the implementation. In Python, we firstly concatenate all string together, so the total space usage is $$\mathcal{O}(n\log(n))$$. While in Java and C++, we add the string into the final result immediately without concatenating, so the space complexity is $$\mathcal{O}(n)$$. Of course, you can implement the immediately adding version in Python, but that requires extra codes.

---

#### Approach 2: Math

**Intuition**

Recall the last example in *Approach 1*. Let's dig into what happens when we add `3` (binary: `11`) to previous result `110` (binary, concatenated by `1` and `10`) (decimal: `6`).

What we do indeed is shift `110` (binary) two units left and then add `3`.

![Figure 2.1](../Documents/5620/5620_2_1.drawio.svg)

Moving "two" units left is because `11` (binary) has a length of $$2$$.

To find out the length of the binary representation of a number, we can use $$\log$$ with base $$2$$. Alternatively, we can record the current length, and increase it when we meet a power of $$2$$.

In conclusion, we can multiply the previous result by some power of $$2$$ to shift it to the left, and add the number to get the next result.

This process does not involve anything related to the binary transformation!

**Algorithm**

*Step 1:* Initialize an integer `result` to store the final result.

*Step 2:* Iterate from 1 to n. For each number `i`:
  - Find the length of the binary representation of the number. Denote by `length`.
  - Update `result` to $$\text{result} \cdot 2^{\text{length}} + i$$.

*Step 3:* Return `result`.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

<iframe src="https://leetcode.com/playground/NNixBe8w/shared" frameBorder="0" width="100%" height="327" name="NNixBe8w"></iframe>

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(n\log(n))$$. We iterate $$n$$ numbers, and for each number we spend $$\mathcal{O}(\log(n))$$ to check wether it is power of $$2$$ and add to the final result.

* Space Complexity: $$\mathcal{O}(1)$$, since we do not need any extra data structure.

---

#### Approach 3: Math (Bitwise Operation)

**Intuition**

In *Approach 2*, we still need to spend $$\mathcal{O}(\log(i))$$ to find the length of number `i`. Can we make it faster?

Of course! 

With bitwise operation, we can check whether a number is the power of $$2$$ in $$\mathcal{O}(1)$$. If `(x & (x-1)) == 0`, then `x` is the power of $$2$$.

For example, if `x == 4`, then `x - 1 == 3`. Their binary form is `100` (binary) and `011` (binary). All of their bits are different, so the bitwise "and" operation yields `0`.

![Figure 3.1](../Documents/5620/5620_3_1.drawio.svg)

We only need to increase the length when we meet a power of $$2$$.

Also, we can use bitwise operations to replace other executions.

![Figure 3.1](../Documents/5620/5620_3_2.drawio.svg)

**Algorithm**

*Step 1:* Initialize an integer `result` to store the final result.

*Step 2:* Iterate from 1 to n. For each number `i`:
  - Find the length of the binary representation of the number. Denote by `length`.
  - Update `result` to `result << length | i`.

*Step 3:* Return `result`.

> Challenge: Can you implement the code yourself without seeing our implementations?

**Implementation**

<iframe src="https://leetcode.com/playground/JvkhN3MA/shared" frameBorder="0" width="100%" height="327" name="JvkhN3MA"></iframe>

**Complexity Analysis**

* Time Complexity: $$\mathcal{O}(n)$$. We iterate $$n$$ numbers, and for each number we spend $$\mathcal{O}(1)$$ to add it to the final result.

* Space Complexity: $$\mathcal{O}(1)$$, since we do not need any extra data structure.
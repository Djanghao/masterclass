# Official Solution

**Link:** [https://leetcode.com/problems/hamming-distance/solution/](https://leetcode.com/problems/hamming-distance/solution/)

---

[TOC]

## Solution

---
#### Intuition

[Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance) is an interesting metric that is widely applied in several domains, _e.g._ in coding theory for error detection, in information theory for quantifying the difference between strings.

>The Hamming distance between two **integer** numbers is the number of positions at which the corresponding bits are different.

Given the above definition, it might remind one of the bit operation called [XOR](https://en.wikipedia.org/wiki/Bitwise_operation#XOR) which outputs `1` _if and only if_ the input bits are different. 

![pic](../Figures/461/461_XOR.png)

>As a result, in order to measure the hamming distance between `x` and `y`, we can first do `x XOR y` operation, then we simply count the number of bit `1` in the result of XOR operation.

We now convert the original problem into a bit-counting problem. There are several ways to count the bits though, as we will discuss in the following sections.

### Approach 1: Built-in BitCounting Functions

**Intuition**

First of all, let us talk of the elephant in the room. As one can imagine, we have various built-in functions that could count the bit `1` for us, in all (or at least most of) programming languages. So if this is the task that one is asked in a project, then one should probably just go for it, rather than reinventing the wheel. We given two examples in the following.

Now, since this is a LeetCode problem, some of you would argue that using the built-in function is like _"implementing a LinkedList with LinkedList"_, which we fully second as well. So no worry, we will see later some fun hand-crafted algorithms for bit counting.

**Algorithm**

<iframe src="https://leetcode.com/playground/VodiqY97/shared" frameBorder="0" width="100%" height="140" name="VodiqY97"></iframe>


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(1)$$

    - There are two operations in the algorithm. First, we do the XOR operation which takes a constant time.

    - Then, we call the built-in bitCount function. In the worst scenario, the function would take $$\mathcal{O}(k)$$ time where $$k$$ is the number of bits for an integer number. Since the Integer type is of fixed size in both Python and Java, the overall time complexity of the algorithm becomes constant, regardless the input numbers.

- Space Complexity: $$\mathcal{O}(1)$$, a temporary memory of constant size is consumed, to hold the result of XOR operation.
    - We assume that the built-in function also takes a constant space.
<br/>
<br/>

---
### Approach 2: Bit Shift

**Intuition**

In order to count the number of bit `1`, we could _shift_ each of the bit to either the leftmost or the rightmost position and then check if the bit is one or not. 

More precisely, we should do the [logical shift](https://en.wikipedia.org/wiki/Bitwise_operation#Logical_shift) where zeros are shifted in to replace the discarded bits.

![pic](../Figures/461/461_shift.png)

Here we adopt the right shift operation, where each bit would has its turn to be shifted to the rightmost position. Once shifted, we then check if the rightmost bit is one, which we can use either the `modulo` operation (_i.e._ `i % 2`) or the bit AND operation (_i.e._ `i & 1`). Both operations would _**mask out**_ the rest of the bits other than the rightmost bit.

**Algorithm**

<iframe src="https://leetcode.com/playground/NipkuPME/shared" frameBorder="0" width="100%" height="310" name="NipkuPME"></iframe>



**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(1)$$, since the Integer is of fixed size in Python and Java, the algorithm takes a constant time. For an Integer of 32 bit, the algorithm would take _at most_ 32 iterations.

- Space Complexity: $$\mathcal{O}(1)$$, a constant size of memory is used, regardless the input.
<br/>
<br/>

---
### Approach 3: Brian Kernighan's Algorithm

**Intuition**

In the above approach, one might wonder that _"rather than shifting the bits one by one, is there a faster way to count the bits of one ?"_. And the answer is yes.

>If we is asked to count the bits of one, as humans, rather than mechanically examining each bit, we could _**skip**_ the bits of zero in between the bits of one, _e.g._ `10001000`.

In the above example, after encountering the first bit of one at the rightmost position, it would be more efficient if we just jump at the next bit of one, skipping all the zeros in between.

This is the basic idea of the [Brian Kernighan's bit counting algorithm](http://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetKernighan), which applies some smart bit and arithmetic operations to _**clear**_ the rightmost bit of one. Here is the secret recipe.

>When we do AND bit operation between `number` and `number-1`, the rightmost bit of one in the original `number` would be cleared.

![pic](../Figures/461/461_brian.png)

Based on the above idea, we then can count the bits of one for the input of `10001000` in 2 iterations, rather than 8.

**Algorithm**

<iframe src="https://leetcode.com/playground/harXi46x/shared" frameBorder="0" width="100%" height="259" name="harXi46x"></iframe>

Note, according to the online book of [Bit Twiddling Hacks](http://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetKernighan), the algorithm was published as an exercise in 1988, in the book of _the C Programming Language 2nd Ed_. (by **Brian W. Kernighan** and Dennis M. Ritchie), though on April 19, 2006 Donald Knuth pointed out that this method _"was first published by Peter Wegner in CACM 3 (1960), 322. (Also discovered independently by Derrick Lehmer and published in 1964 in a book edited by Beckenbach.)"_.
By the way, one can find many other tricks about bit operations in the aforementioned book.


**Complexity Analysis**

- Time Complexity: $$\mathcal{O}(1)$$.

    - Similar as the approach of bit shift, since the size (_i.e._ bit number) of integer number is fixed, we have a constant time complexity.

    - However, this algorithm would require less iterations than the bit shift approach, as we have discussed in the intuition.

- Space Complexity: $$\mathcal{O}(1)$$, a constant size of memory is used, regardless the input.
<br/>
<br/>
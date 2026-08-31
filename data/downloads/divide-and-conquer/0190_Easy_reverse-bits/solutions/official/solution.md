# Official Solution

**Link:** [https://leetcode.com/problems/reverse-bits/solution/](https://leetcode.com/problems/reverse-bits/solution/)

---

[TOC]

## Solution

---
### Approach 1: Bit by Bit

**Intuition**

Though the question is not difficult, it often serves as a warm-up question to kick off the interview. The point is to test one's basic knowledge on data type and bit operations.

>As one of the most intuitive solutions that one could come up during an interview, one could reverse the bits **one by one**.

![pic](../Figures/190/190_mapping.png)

As easy as it sounds, the above intuition could lead to quite some variants of implementation. For instance, to retrieve the _right-most_ bit in an integer `n`, one could either apply the modulo operation (_i.e._ `n % 2`) or the bit AND operation (_i.e._ `n & 1`). Another example would be that in order to combine the results of reversed bits (_e.g._ $$2^a, 2^b$$), one could either use the addition operation (_i.e._ $$2^a + 2^b$$) or again the bit OR operation (_i.e._ $$2^a | 2^b$$).

**Algorithm**

Here we show on example of implementation based on the above intuition.

![pic](../Figures/190/190_reverse_bits.png)

>The key idea is that for a bit that is situated at the index `i`, after the reversion, its position should be `31-i` (note: the index starts from zero).

- We iterate through the bit string of the input integer, from right to left (_i.e._ `n = n >> 1`). To retrieve the right-most bit of an integer, we apply the bit AND operation (`n & 1`).
<br/>

- For each bit, we reverse it to the correct position (_i.e._ `(n & 1) << power`). Then we accumulate this reversed bit to the final result.
<br/>

- When there is no more bits of one left (_i.e._ `n == 0`), we terminate the iteration.
<br>


<iframe src="https://leetcode.com/playground/6cJMEbPX/shared" frameBorder="0" width="100%" height="259" name="6cJMEbPX"></iframe>


**Complexity**

- Time Complexity: $$\mathcal{O}(1)$$.  Though we have a loop in the algorithm, the number of iteration is fixed regardless the input, since the integer is of fixed-size (32-bits) in our problem.
<br/>

- Space Complexity: $$\mathcal{O}(1)$$, since the consumption of memory is constant regardless the input.
<br/>
<br/>

---
### Approach 2: Byte by Byte with Memoization

**Intuition**

Someone might argument it might be more efficient to reverse the bits, **per byte**, which is an unit of 8 bits. Though it is not necessarily true in our case, since the input is of fixed-size 32-bit integer, it could become more advantageous when dealing with the input of long bit stream. 

![pic](../Figures/190/190_reverse_bytes.png)

Another implicit advantage of using **byte** as the unit of iteration is that we could apply the technique of **[memoization](https://leetcode.com/explore/learn/card/recursion-i/255/recursion-memoization/)**, which caches the previously calculated values to avoid the re-calculation.

The application of memoization can be considered as a response to the **follow-up** question posed in the description of the problem, which is stated as following:

>_If this function is called many times, how would you optimize it?_

To reverse bits for a byte, one could apply the same algorithm as we show in the above approach. Here we would like to show a different algorithm which is solely based on the arithmetic and bit operations without resorting to any loop statement, as following:

```
def reverseByte(byte):
    return (byte * 0x0202020202 & 0x010884422010) % 1023
```

The algorithm is documented as ["reverse the bits in a byte with 3 operations"](http://graphics.stanford.edu/~seander/bithacks.html#ReverseByteWith64BitsDiv) on the online book called **Bit Twiddling Hacks** by Sean Eron Anderson, where one can find more details.

**Algorithm**

- We iterate over the bytes of an integer. To retrieve the right-most byte in an integer, again we apply the bit AND operation (_i.e._ `n & 0xff`) with the bit mask of `11111111`. 
<br/>

- For each byte, first we reverse the bits within the byte, via a function called `reverseByte(byte)`. Then we shift the reversed bits to their final positions.
<br/>

- With the function `reverseByte(byte)`, we apply the technique of memoization, which caches the result of the function and returns the result directly for the future invocations of the same input.

Note that, one could opt for a smaller unit rather than byte, _e.g._ a unit of 4 bits, which would require a bit more calculation in exchange of less space for cache. It goes without saying that, the technique of memoization is a trade-off between the space and the computation.

<iframe src="https://leetcode.com/playground/UX5kWJ9P/shared" frameBorder="0" width="100%" height="446" name="UX5kWJ9P"></iframe>


**Complexity**

- Time Complexity: $$\mathcal{O}(1)$$. Though we have a loop in the algorithm, the number of iteration is fixed regardless the input, since the integer is of fixed-size (32-bits) in our problem.
<br/>

- Space Complexity: $$\mathcal{O}(1)$$. Again, though we used a cache keep the results of reversed bytes, the total number of items in the cache is bounded to $$2^8 = 256$$.
<br/>
<br/>

---
### Approach 3: Mask and Shift

**Intuition**

We have shown in Approach #2 an example on how to reverse the bits in a byte without resorting to the loop statement. During the interview, one might be asked to reverse the entire 32 bits without using loop. Here we propose one solution that utilizes only the bit operations.

>The idea can be considered as a strategy of **_divide and conquer_**, where we divide the original 32-bits into blocks with fewer bits via **bit masking**, then we reverse each block via **bit shifting**, and at the end we merge the result of each block to obtain the final result.

In the following graph, we demonstrate how to reverse two bits with the above-mentioned idea. As one can see, the idea could be applied to **blocks** of bits.

![pic](../Figures/190/190_mask_shift.png)

**Algorithm**

We can implement the algorithm in the following steps:

- 1). First, we break the original 32-bit into 2 blocks of 16 bits, and switch them.
<br/>

- 2). We then break the 16-bits block into 2 blocks of 8 bits. Similarly, we switch the position of the 8-bits blocks
<br/>

- 3). We then continue to break the blocks into smaller blocks, until we reach the level with the block of 1 bit.
<br>

- 4). At each of the above steps, we merge the intermediate results into a single integer which serves as the input for the next step.

The credit of this solution goes to @tworuler and @bhch3n for their [post and comment](https://leetcode.com/problems/reverse-bits/discuss/54741/O(1)-bit-operation-C%2B%2B-solution-(8ms)) in the discussion forum.

<iframe src="https://leetcode.com/playground/KqtAXSmn/shared" frameBorder="0" width="100%" height="242" name="KqtAXSmn"></iframe>


**Complexity**

- Time Complexity: $$\mathcal{O}(1)$$, no loop is used in the algorithm.
<br/>

- Space Complexity: $$\mathcal{O}(1)$$. Actually, we did not even create any new variable in the function.
<br/>
<br/>
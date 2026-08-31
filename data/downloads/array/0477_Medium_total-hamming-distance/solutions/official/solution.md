# Official Solution

**Link:** [https://leetcode.com/problems/total-hamming-distance/solution/](https://leetcode.com/problems/total-hamming-distance/solution/)

---

[TOC]

## Solution
---
### Approach #1 Brute Force [Time Limit Exceeded]

**Intuition**

1. Check all the unique pairs of elements for differing bits.
2. `xor` of two bits is `1` if they are not the same, and `0` otherwise.

**Algorithm**

Bitwise `xor` of two numbers will give a bitwise representation of where the bits of two numbers differ. Such bit positions are represented by a `1` bit in the resultant. For example:

        0010 1101   ==  45
      ^ 0100 1010   ==  74
    ----------------
        0110 0111
         ^^   ^^^   => 5 differing bits

Hence the numbers $$45$$ and $$74$$ have five differing bits. Thus the Hamming Distance between them is $$5$$.

For each of the $$\approx n^2/2$$ pairs of elements, simply apply bitwise `xor` to them to find out a resultant representation which tells us the differing bits. Count the `1` bits to find the Hamming Distance for that pair of elements. Sum over all pairs to get the total Hamming Distance.

<iframe src="https://leetcode.com/playground/HpH92ApX/shared" frameBorder="0" name="HpH92ApX" width="100%" height="275"></iframe>

**NOTE:** The `__builtin_popcount()` method is an internal built-in function available in **C** (and hence by extension **C++**) which gives the count of `1` bits for an `int` type argument. Being a low level built-in method, it is understandably faster than running a hand rolled loop.
As an alternative, you can iterate over all the bits of the number and count the `1` bits. Take a look at the code for [Approach #2](#approach-2-loop-over-the-bits-accepted) for hints on how to achieve that.

**Complexity Analysis**

* Time complexity: $$O(n^2 \cdot log_2V) \simeq O(n^2)$$.

    + There are exactly $$\binom{n}{2} = {}^nC_2 = \frac{n \cdot (n-1)}{2}$$ unique pairs of elements for an $$n$$ element array.
    + Each of these pairs, when `xor`ed, result in a resultant number which is $$\lceil log_2V \rceil$$ bits long. Here $$V$$ is the largest value any of the elements can ever take.
    + We iterate over these many bits to count the number of `1` bits.  In our case, since all elements are $$\leq 10^9$$, the value $$\lceil log_2V \rceil = 30$$ is a small constant. Hence counting the `1` bits takes place in nearly constant (i.e. $$O(1)$$) time.

* Space complexity: $$O(1)$$ constant space.

---
### Approach #2 Loop over the bits! [Accepted]

**Intuition**

Looping over all possible combinations of two element pairs, increases quadratically over the size of the input. If we could instead loop over the bits of the elements (which is constant), we could shave off an input dimension from our runtime complexity.

**Algorithm**

Say for any particular bit position, count the number of elements with this bit **ON** (i.e. this particular bit is `1`). Let this count be $$k$$. Hence the number of elements with this bit **OFF** (i.e. `0`) is $$(n - k)$$ (in an $$n$$ element array).

Certainly unique pairs of elements exists where one element has this particular bit **ON** while the other element has this **OFF** (i.e. this particular bit differs for the two elements of this pair).
> We can argue that every such pair contributes one unit to the Hamming Distance for this particular bit.

We know that the count of such unique pairs is $${}^kC_1 * {}^{n-k}C_1 = k \cdot (n-k)$$ for this particular bit. Hence Hamming Distance for this particular bit is $$k \cdot (n-k)$$.

For each of the $$\lceil log_2V \rceil$$ bits that we can check, we can calculate a Hamming Distance pertaining to that bit. Taking sum over the Hamming Distances of all these bits, we get the total Hamming Distance.

<iframe src="https://leetcode.com/playground/EoYRygcG/shared" frameBorder="0" name="EoYRygcG" width="100%" height="445"></iframe>

**NOTE:** You *can switch the order of the loops* while counting `1` bits without affecting complexity. However it might give some performance changes due to locality of reference and the resultant cache hits/misses.

**Complexity Analysis**

* Time complexity: $$O(n \cdot log_2V) \simeq O(n)$$. Runtime performance is limited by the double loop where we are counting elements for particular bits. In our case, since all elements are $$\leq 10^9$$, the value $$\lceil log_2V \rceil = 30$$ is a small constant. Thus the inner loop runs in nearly constant time.

* Space complexity: $$O(log_2V) \to O(1)$$ extra space.

    + For each of the $$\lceil log_2V \rceil$$ bits, we need to maintain a count which is later used to calculate the Hamming Distance for that bit. Since $$\lceil log_2V \rceil \approx 32$$ is a small constant in our case, that takes nearly constant extra space.
    + Another thing to notice, is that if we **switch the order of the double loop,** we can do away with storing the count and calculate the Hamming Distance for that bit then and there. That results in only constant extra space being used.

---
### Bonus!

This question is a perfect example of how vectorized operations can result in small, elegant and good performance code. Take a look at this slick **Python** solution to this problem (by [@StefanPochmann](https://leetcode.com/StefanPochmann/)):

<iframe src="https://leetcode.com/playground/uskMAwMG/shared" frameBorder="0" name="uskMAwMG" width="100%" height="88"></iframe>

The `*` operator turns the list of `32`-bit wide binary strings returned by `map` into individual arguments to the `zip` method. The `zip` method vectorizes the string arguments to create a list of vectors (each of which is a vector `b` of particular bits from every element in the input array; There are `32` such vectors of size `len(nums)` each, in this list ). Finally we use the same technique as [Approach #2](#approach-2-loop-over-the-bits-accepted) to calculate the total Hamming Distance.
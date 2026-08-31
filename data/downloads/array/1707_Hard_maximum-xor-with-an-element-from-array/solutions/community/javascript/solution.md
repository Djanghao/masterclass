# Javascript | Very Optimized (288ms / 61.4MB) Non-Trie Solution w/ Detailed Explanation | 100% / 100%

**Author:** sgallivan
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/997992/](https://leetcode.com/problems/maximum-xor-with-an-element-from-array/solutions/997992/)

---

***Basic Logic:***

A bitwise XOR operation (ie, **a ^ b**) compares the binary bits of each number and yields the number found by turning each bit to **1** *if and only if* one, *but not both* of the corresponding bits in numbers **a** and **b** are **1**. If both bits are **0**, or both **1**, then that bit becomes a **0**.
```
		Bitwise XOR ( ^ ) example:

			base10:    229   ^   51   =   214
			base2:  11100101 ^ 110011 = 11010110

					    1 1 1 0 0 1 0 1          if the compared bits
					^   0 0 1 1 0 0 1 1          are opposite of each other
					----v-v-X-v-X-v-v-X----
					    1 1 0 1 0 1 1 0          return a 1, otherwise a 0
```
This means that in order to find the max result of **x ^ N[j])**, we need to check each bit from the left to right and eliminate numbers (if possible) which are less optimal until we find the best option in **N**. If, for example, the 30th bit of **x** was a **1**, then the best choices in **N** would have a 30th bit that was a **0**.

Therefore, for any given bit, as long as there are options in **N** with the *opposite* value of the corresponding bit in **x**, then we could eliminate any option with a *same* bit value. If no option exists with the opposite bit value, we'll be forced to accept the same bit value, however, before moving to the next bit to the right. By the time we finish with the 0th bit, we will have found our ideal solution in **N**.

` `
***Caveat:***

The hints for this problem suggest using a **trie** data structure, and I'll admit that my first solution went that direction, but I found it to be very inefficient. The nature of the test cases is such that you can't even easily use a simple object, or even a Map, as the basis for the trie due to memory concerns.

Instead, since we're already doing a bit-by-bit comparison between a target and an array of numbers, we can use a more simple and efficient **binary search** to yield the answer to each query without relying on a bulky trie.

` `
***Implementation:***

In order to accomplish a binary search of **N**, of course, it first must be sorted. We'll then need to define the **function** that will use a binary search in order to find a **target** value within a subset of **N**, between **l** and **r**.

This is a fairly standard implementation, in which we repeatedly narrow the subset down by finding a midpoint **m**. In this case, we're using a bitwise right shift (ie, **num >> 1**), which moves every bit to the right by **1** step. Just like dropping the last digit of a base 10 number would be like dividing the number by 10 and throwing away the remainder, the bitwise shift for binary numbers is the equivalent of dividing **num** by **2** and throwing away the remainder, or **Math.floor(num / 2)**. Here, we're using it to find the midpoint between **l** and **r** with **l + r >> 1**, which is simply a more efficient way of doing the exact same thing as **Math.floor((l + r) / 2)**.
```
		Bitwise shift left or right ( << or >> ) example:

			base10:    229   << 3 =    1832
			base2:  11100101 << 3 = 11100101000

					  1 1 1 0 0 1 0 1          229
				1 1 1 0 0 1 0 1 < < <          shifted left three bits
			 ---v-v-v-v-v-v-v-v-X-X-X---
				1 1 1 0 0 1 0 1 0 0 0          becomes 1832


			base10:    229   >> 3 =  28
			base2:  11100101 >> 3 = 11100

				      1 1 1 0 0 1 0 1          229
				      > > > 1 1 1 0 0|X X X    shifted right three bits
			       ---------v-v-v-v-v---------
						    1 1 1 0 0          becomes 28
```
After we find **m**, we check it against the **target**, and narrow the range by moving the respective endpoint, **l** or **r**, in. This is repeated until we find our target's index. It's important to note that this implementation of a binary search will return the index of the number that either matches the **target** exactly, or is the next number larger if no number is an exact match for the **target**.

The next step is to iterate through the list of queries, **Q**. In order to maintain efficiency, we can replace each query in **Q** with its result before ultimately returning **Q**. To do this, we'll start by using a destructuring assignment to simultenously extract the comparison value **x** and the upper bound **lim**, while replacing them with the default result of **-1**. This will allow us to check to make sure that the smallest number, **N[0]**, is already higher than **lim**, and if so we can just **continue** to the next query.

If this is not the case, then the next thing we need to do is to **find** the right endpoint **r** of our initial subset range. Since we cannot include numbers that are larger than **lim**, but we do need to include numbers that exactly match **lim** (and based on the explanation above), we'll need to slightly stagger the **find** parameters by searching instead for **lim+1** and then subtracting **1** from the resulting index.

Now that we've defined the initial range, we can get to the heart of the query. First, we can simplify the check by noting how many bits are used in the largest value of our range, **N[r]** and iterate our shift amount **j** from one less than that down to **0**, rather than always iterating down from the max possible shift amount of **29**.

For each bit, we'll first check to see if a binary search is even necessary. If the smallest and largest values left in our subset range, **N[l]** and **N[r]**, have the same value for the current bit position, the optimal choice becomes moot and we can just move on to the next iteration. There are several ways in which we can accomplish this, but in this case we'll utilitize a bitwise AND (ie, **a & b**) comparison between each option and a shifted bitmask of **1 << j**.

A bitwise AND comparison between corresponding bits will return a **1** *if and only if* both bits are a **1** and a **0** otherwise. Our bitmask of **1 << j** will create a number that is a **1** followed by **j** number of **0**s. For example, if we were comparing the 6th bit, our bitmask would be **1 << 5**, or **100000** in binary. In other words, a bitmask of **1 << 5** will create a number in which the *only* **1** is in the 6th bit, allowing us to isolate the 6th bit of *another* number by means of the bitwise AND comparison, since only that 6th bit can possibly have both values be a **1**.
```
		Bitwise AND ( & ) example:

			base10:    229   &   51   =   33
			base2:  11100101 & 110011 = 100001

					    1 1 1 0 0 1 0 1          if the compared bits
					&   0 0 1 1 0 0 1 1          are both 1s
					----X-X-v-X-X-X-X-v----
					    0 0 1 0 0 0 0 1          return a 1, otherwise a 0
```
```
		Bitwise AND ( & ) combined with a Bitmask ( 1 << n ) examples:
		
			base10:    229   & 1 << 5 =   32
			base2:  11100101 & 100000 = 100000

					    1 1 1 0 0 1 0 1          performing a bitwise AND
					&   0 0 1 0 0 0 0 0          using a bitmask for the 6th bit (1 << 5)
					----X-X-v-X-X-X-X-X----
					    0 0 1 0 0 0 0 0          returns the isolated 6th bit only


			base10:    229   & 1 << 4 = 0
			base2:  11100101 &  10000 = 0

					    1 1 1 0 0 1 0 1          performing a bitwise AND
					&   0 0 0 1 0 0 0 0          using a bitmask for the 5th bit (1 << 4)
					----X-X-X-X-X-X-X-X----
					    0 0 0 0 0 0 0 0          returns the isolated 5th bit only
```
So our check of **N[l] & 1 << j** and **N[r] & 1 << j** will be equal if both **N[l]** and **N[r]** have the same value in the (**j+1**)th bit, meaning that we can skip to the next step.

If they're not equal, however, then we can simply **find** the index at which our remaining options flip from a **0** to a **1** in that bit. Thanks to the previous check, we know at this point that our **N[r]** value must have a **1** in the current bit, so we can simply achieve this with **N[r] >> j << j**. As explained earlier, shifting to the right will throw out that many of the rightmost bits, so shifting right by **j** and then shifting left by **j** will have the effect of zeroing out the last **j** bits of **N[r]**, which neatly provides us the lowest possible optimal **target** value, which we can pass into the **find** function in order to find the midpoint index of the remaining **N** values.

By using another bitmask, we can find out if the current bit of **x** is a **1** or **0** with **x & 1 << j**. If it's a **1**, then we want to choose the left half of our range of remaing **N** values, corresponding to the ones with a **0** in that bit. We do that by dropping our right-end index **r** to **mid**, but adjusted by **-1** remembering that our **find** function is set up to include matching results in the right half. Otherwise, we choose the right half of the remaining range by moving **l** to **mid**.

Once the **for** loop has iterated all the way through the **0**th bit, our range should have narrowed to one result, meaning that **l** should equal **r**. At that point, we can just update **Q** with the result of the query, **x ^ N[l]**, and when all queries are done, return the fully-updated **Q**.

` `
***Code:***
```
const maximizeXor = (N, Q) => {                          // TL;DR:
    N.sort((a,b) => a - b)                               // Sort N to enable binary search
    for (let i = 0, x, lim; i < Q.length; i++) {         // Iterate through the queries
        [[x, lim], Q[i]] = [Q[i], -1]                    // Extract query params and replace with default result of -1,
        if (lim < N[0]) continue                         //    then skip to the next query if no usable values below lim
        let l = 0, r = find(N, 0, N.length, lim+1) - 1   // Set the initial index range
        for (let j = ~~Math.log2(N[r]); ~j; j--)         // Check bits backwards from largest possible
            if ((N[l] & 1 << j) !== (N[r] & 1 << j)) {   // Skip if all options have the same value in the current bit
                let mid = find(N, l, r, N[r] >> j << j)  // Find the midpoint index where the bit flips from 0 to 1
                if (x & 1 << j) r = mid - 1              // If the current bit of x is a 1, choose the left side of mid
                else l = mid                             //    with 0s, otherwise take the right side of mid with 1s
            }
		Q[i] = x ^ N[l]                                  // Update Q with the result, overwriting the default -1
    }
    return Q                                             // Return the fully-updated Q
}

const find = (N, l, r, target) => {                      // Binary search function, finding target in N between l and r
    while (l <= r) {
        let m = l + r >> 1                               // Find the midpoint; equivalent of Math.floor((l + r) / 2)
        if (N[m] < target) l = m + 1                     // If the midpoint is not high enough, move l up
        else r = m - 1                                   // Otherwise, move r back
    }
    return l                                             // Return the index that matches (or is the closest >) target
}

```
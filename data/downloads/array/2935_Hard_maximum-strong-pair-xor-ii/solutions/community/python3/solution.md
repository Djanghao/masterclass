# [Python] Lee215 Solution Explained | O(N)

**Author:** mikelalala
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278642/](https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278642/)

---

# Note 
This is lee215's solution. The original post is here [[Java/C++/Python] Bit by Bit, Same as 421](https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4278213/java-c-python-bit-by-bit-same-as-421/)


# Intuition
As he mentioned this problem is just [421. Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/description) with an additional constraint $$|a - b| <= min(a, b)$$.

We construct the maximum bit by bit in a greedy manner,

For illustration we use 5 bits instead of 20 bits, since 5 bit suffice for our example.





# Approach
Consider the following example, where we have the nums array and their 5 bit binary representation.
```
[3, 10, 5, 25, 2, 8] -> ["00011", "01010", "00101", "11001", "00010", "01000"]
```

## Step 1: Solve without the constraint


We iteratively look at the possible prefixes up to the $$i$$ th bit using a set, and check if a greedy guess is obtainable,

Consider the first iteration,
```
["0", "0", "0", "1", "0", "0"] -> using a set -> ["0", "1"]
```
A greedy guess for the prefix of our maximum XOR value at this moment is `"1"`.

But how do we know if this is actually obtainable? 

With the following XOR properties,
a ^ b = c $$\\iff$$ a \\^ c = b

We can easily check for each pref in the set, if `maximum_possible ^ pref` is in the set.

`1 ^ 0 == 1 is in ["0", "1"]` thus obtainable.

In the second iteration,
```
["00", "01", "00", "11", "00", "01"] -> {"00", "01", "11"}
```
We knew that `"1"` in the last interation was obtainable thus another greedy guess we see if we can obtain`"11"` .

We have `11 ^ 00 == 11 is in ["00", "01", "11"]` thus obtainable.
```
["000", "010", "0001", "110", "000", "010"] 
-> ["000", "010", "001", "110"] 
-> Guess 111
-> `111 ^ 001 == 110 is in ["000", "010", "001", "110"]`
-> "111"
```

```
["0001", "0101", "0010", "1100", "0001", "0100"] 
-> ["0001", "0101", "0010", "1100", "0001", "0100"]
-> Guess 1111 
-> Not obtainable
-> "1110"
```
Note that in this iteration we were not ablt to obtain `"1111"` thus the maximum we can get is `"1110"`.

Since the maximum possible prefix in the last iteration was`"1110"` we we greedily see if we can obtain`"11101"` in the following iteration.
```
["00011", "01010", "00101", "11001", "00010", "01000"]
-> Guess 11101 
-> Not obtainable
-> "11100" = 28 
```
We couuldnt obtain `"11101"` thus `"11100"` is maximum.

Now we have solved the problem without the constraint.

## Step 2: Adding in the constraint
Instead of creating a prefix set in the last step, we create two maps `pref` and `pref2` during each interation, where value of `pref` records the minimum value in the array that has the correspoding prefix and `pref2` the maximum respectively. 

Base on Lee215's deduction,
**Let a, b be a pair of array element (a, b)**
**Assume a >= b**,
**then a - b <= b
then a <= b * 2**

**We use pref[p] to record the minimum array element with a prefix p,
and use pref2[p] to record the maximum array element with a prefix p.
The above condition become pref[x] <= pref2[y] * 2, where x and y is the prefix**.

And now in addition to the XOR check, if the greedy guess is obtainable we also check if `pref[x] <= pref2[y] * 2`.

Since `pref[x] <= pref2[y] * 2` implies there must exist a pair of array element (a, b) such that that 
a has prefix x, 
b has prefix y, 
and $$\u2223a\u2212b\u2223<=min(a,b)$$

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

class Solution:
    def maximumStrongPairXor(self, A: List[int]) -> int:
        res = 0
        for i in range(20, -1, -1):
            # 0011 -> 00110 Shift left
            res <<= 1
            pref, pref2 = {}, {}
            for a in A:
                p = a >> i
                if p not in pref:
                    pref[p] = pref2[p] = a
                pref[p] = min(pref[p], a)
                pref2[p] = max(pref2[p], a)
            for x in pref:
                # greedy guess
                y = res ^ 1 ^ x
                if x >= y and y in pref and pref[x] <= pref2[y] * 2:
                    # 00110 -> 00111 Add one to last bit
                    res |= 1
                    break
        return res


```
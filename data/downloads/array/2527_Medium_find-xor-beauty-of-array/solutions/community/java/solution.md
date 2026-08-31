# Why just XOR of all numbers works ?

**Author:** arutsudar
**Votes:** 369
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3015014/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3015014/)

---

**Simple reason why taking XOR of all numbers work**:

Let's just consider all possible combinations, and simplify the xor operations.

Split all the possible triplets into below 3 types.

- **Type 1**: Considering 1 number `a` with **all 3 indices same**
`(a | a) & a`    =     `a`

- **Type 2**: Considering 2 numbers `a b` with **any 2 indices same**

    Different combinations are:
    1. `(a | a) & b` = `a & b`
    2. `(b | b) & a` = `b & a`
    3. `(a | b) & a` = `aa | ab` = `a | ab` = `a` (By `Distributive_law` and `Absorption_law`)
    4. `(b | a) & a` = `a`
    5. `(a | b) & b` = `b`
    6. `(b | a) & b` = `b`

    XOR of the above values :
    (a & b) ^ (b & a) ^ a ^ a ^ b ^ b
    = `(a&b)^(a&b)` ^ `a^a` ^ `b^b`
    = `0`

    We can also note that,
    - 1st point and 2nd pt are same.
    - 3rd point and 4th pt are same.
    - 5th point and 6th pt are same.

- **Type 3**: Considering 3 numbers `a b c` with **all 3 indices are different**
    - Whenever we consider `(a | b) & c`,
    we should also consider `(b | a) & c`.
It is easy to note that, both these have the same values. So, taking XOR of these 2, equates to `0`.
    - Similarily, we can do the same for `(a|c)&b`, along with `(c|a)&b`. XOR of these is `0`.
    - Also, for `(b|c)&a` ^ `(c|b)&a` is `0`.

So, the only numbers that remain are the numbers which have all 3 indices same
`(a | a) & a`.

**Code**
```
class Solution {
    public int xorBeauty(int[] nums) {
        int xor = 0;
        for (int num : nums)
            xor ^= num;
        return xor;
    }
}
```

**Complexity**
- Time complexity: `O(n)`
- Space complexity: `O(1)`
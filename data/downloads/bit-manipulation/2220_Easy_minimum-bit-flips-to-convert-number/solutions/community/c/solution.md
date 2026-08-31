# [C++] 1 liner[xor,count set bits]

**Author:** prilily
**Votes:** 72
**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/1907028/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/1907028/)

---

To get minimum bit flips we find XOR of two number : which have set bits only at those places where A differs from B. 
So, after getting the **xor** `( a ^ b )` , we need to count the number of set bits.
We can do that using **__builtin_popcount(i)**: This function is used to count the number of set bits in an integer.

```
class Solution {
public:
    int minBitFlips(int start, int goal) {
        return __builtin_popcount(start^goal);
    }
};
```
Please let me know ways to improve my solution.
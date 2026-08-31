# [C++] 100% time, ~80% space - time => linear to number of digits; space => constant

**Author:** Ajna
**Votes:** 21
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/714994/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/714994/)

---

I just produce slicing the last digit off `n` until it boils down to `0`, all the while updating the product `p` and the sum `s` of the digits.

Note - I am pretty sure interviewers seeing you convert the number to string, splitting it into `char`s, converting them back to numbers, etc won't be that impressed.

The code:

```cpp
class Solution {
public:
    int subtractProductAndSum(int n) {
        int p = 1, s = 0, t;
        while (n) {
            t = n % 10;
            p *= t;
            s += t;
            n /= 10;
        }
        return p - s;
    }
};
```
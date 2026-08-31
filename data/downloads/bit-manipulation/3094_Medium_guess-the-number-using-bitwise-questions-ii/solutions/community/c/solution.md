# Track Zeros

**Author:** votrubac
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4935450/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-ii/solutions/4935450/)

---

We first call `commonBits` with `0` to count the number of zeros.

Then we try each bit (1, 2, 4, 8, ...). If that bit is in the number, commonBits result will be higher than the nubmer of `zeros`.

Note that we need to increase `zeros` when we find a matching bit.

This is because that bit will flip from `1` to `0` after the operation.

Similarly, we need to decrease `zeros` when there is a missmatch. 

**C++**
```cpp
int findNumber() {
    int res = 0, zeros = commonBits(0);
    for (int i = 1; i < (1 << 30); i <<= 1) {
        if (commonBits(i) > zeros) {
            res += i;
            ++zeros;
        }
        else
            --zeros;
    }
    return res;
}
```
**Simplified Solution**
**C++**
```cpp
int findNumber() {
    int res = 0;
    for (int i = 1; i < (1 << 30); i <<= 1)
        res += commonBits(i) > commonBits(i) ? i : 0;
    return res;
}
```
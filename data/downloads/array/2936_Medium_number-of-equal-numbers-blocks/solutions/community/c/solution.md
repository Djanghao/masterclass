# Exponential Advance vs. Divide and Conquer

**Author:** votrubac
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4296493/](https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4296493/)

---

I think that the first solution is easier to implement. However, it is slower than the second one:
- Exponential Advance: 430 ms
- Divide and Conquer: 220 ms
 
In both cases, we minimize the number of calls to `nums->at()` to make it faster.

#### Exponential Advance
**C++**
```cpp
int countBlocks(BigArray* nums) {
    long long res = 0, sz = nums->size(), prev = 0;
    for (long long i = 0, j = 0; i < sz; ++i) {
        int val = nums->at(i);
        res += prev != val;
        prev = val;
        for (j = 1; i + j < sz && val == nums->at(i + j); j *= 2)
            i += j;
    }
    return res;
}
```
#### Divide and Conquer
**C++**
```cpp
int search(BigArray* nums, long long l, int lval, long long r, int rval) {
    if (lval == rval)
        return 1;
    if (l + 1 == r)
        return 2;
    long long m = (l + r) / 2, mval = nums->at(m);
    return search(nums, l, lval, m, mval) + search(nums, m, mval, r, rval) - 1;
}
int countBlocks(BigArray* nums) {
    return search(nums, 0, nums->at(0), nums->size() - 1, nums->at(nums->size() - 1));
}
```
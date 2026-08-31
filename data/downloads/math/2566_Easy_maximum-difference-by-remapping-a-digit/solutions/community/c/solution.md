# Remap to 0 or 9

**Author:** votrubac
**Votes:** 20
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3202068/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3202068/)

---

We remap each `i` ([0..9]) to `0` or `9` to get minimum and maximum possible value. 

**C++**
```cpp
int minMaxDifference(int num) {
    int min_v = num, max_v = num;
    for (int i = 0; i < 10; ++i) {
        int lo = 0, hi = 0, mul = 1;
        for (int n = num; n; n /= 10) {
            bool replace = n % 10 == i;
            lo += (replace ? 0 : n % 10) * mul;
            hi += (replace ? 9 : n % 10) * mul;
            mul *= 10;
        }
        min_v = min(min_v, lo);
        max_v = max(max_v, hi);
    }
    return max_v - min_v;
}
```
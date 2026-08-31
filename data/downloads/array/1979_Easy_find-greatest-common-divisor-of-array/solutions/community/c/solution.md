# One liner

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1418733/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/1418733/)

---

**C++**
```cpp
int findGCD(vector<int>& n) {
    return gcd(*min_element(begin(n), end(n)), *max_element(begin(n), end(n)));
}
```
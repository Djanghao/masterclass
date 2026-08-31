# One-liner

**Author:** votrubac
**Votes:** 38
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/1953778/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/1953778/)

---

**C++**
```cpp
int findClosestNumber(vector<int>& nums) {
    return *min_element(begin(nums), end(nums), [](int a, int b) {
        return abs(a) < abs(b) || (abs(a) == abs(b) && a > b);
    });
}
```
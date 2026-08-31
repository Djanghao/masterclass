# Count Moduli

**Author:** votrubac
**Votes:** 57
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3313988/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3313988/)

---

For an element `n`, we can achieve the minimum non-negative value of `n % value`.

We can also transform element `n` to `n % value + k * value`. So, we first count moduli we can get from all numbers.

Then, we iterate `i` from zero upwards, and check if we have a modulo (`i % value`) that we can tranform to `i`.

If so, we decrease the counter for that modulo. If the counter is zero, we cannot produce `i` and it's our missing value. 

**Python 3**
```python
class Solution:
    def findSmallestInteger(self, nums: List[int], value: int) -> int:
        m = Counter([n % value for n in nums])
        for i in range(len(nums)):
            if m[i % value] == 0:
                return i
            m[i % value] -= 1
        return len(nums)
```
    
**C++**
```cpp
int findSmallestInteger(vector<int>& nums, int v) {
    int m[100001] = {}, sz = nums.size();
    for (auto n : nums)
        // C++ fix for negative remainder: (b + (a % b)) % b
        ++m[(v + n % v) % v];
    for (int i = 0; i < sz; ++i)
        if (--m[i % v] < 0)
            return i;
    return sz;
}
```
A different way to look at it (suggested by [Benlegend](https://leetcode.com/Benlegend/)). 

We can find a modulo with the smalest count. That modulo and count to compute the missing value.

This is useful when value is much smaller than the number of elements.

**C++**
```cpp
int findSmallestInteger(vector<int>& nums, int v) {
    int m[100001] = {}, sz = nums.size();
    for (auto n : nums)
        // C++ fix for negative remainder: (b + (a % b)) % b
        ++m[(v + n % v) % v];
    int i = min_element(begin(m), begin(m) + v) - begin(m);
    return i + m[i] * v;
}
```
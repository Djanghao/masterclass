# Hacker's Delight

**Author:** votrubac
**Votes:** 21
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4063345/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4063345/)

---

In this solution, we do not count bits.

The `getNextSamePopcount` function (taken from the Hacker's Delight book) returns the next bigger number with the same number of bits set.

**C++**
```cpp
int getNextSamePopcount(int a) {
    if (a == 0)
        return INT_MAX;
  int c = (a & -a), r = a + c;
  return ((((r ^ a) >> 2) / c) | r);
}    
int sumIndicesWithKSetBits(vector<int>& nums, int k) {
    int res = 0;
    for (int i = (1 << k) - 1; i < nums.size(); i = getNextSamePopcount(i))
        res += nums[i];
    return res;
}
```
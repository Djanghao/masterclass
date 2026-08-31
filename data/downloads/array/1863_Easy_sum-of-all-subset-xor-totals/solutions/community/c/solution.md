# One-liner + Bitmask

**Author:** votrubac
**Votes:** 139
**Link:** [https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/1211182/](https://leetcode.com/problems/sum-of-all-subset-xor-totals/solutions/1211182/)

---

I'll start with a one-liner O(n) solution, but it may help to check out approach 2 first.

This approach requires an additional bit of intuition: if you look at binary representation of XOR total for all 2 ^ n subsets (which you can generate in approach 2), you can see that each bit appears 2 ^ (n - 1) times. So we collect all bits using binary OR, and then multiply it by 2 ^ (n - 1).

#### Approach 1: O(n)
**C++**
```cpp
int subsetXORSum(vector<int>& n) {
    return accumulate(begin(n), end(n), 0, bit_or<int>()) << (n.size() - 1);
}
```
#### Approach 2: O(n * 2 ^ n)
Since we only have 12 numbers, we can represent all combinations using a bitmask: `[1 << 0.... 1 << n)`:
- Iterate through all bitmask values;
- Go through array and do XOR numbers at positions indicated by the bitmask.

**C++**
```cpp
int subsetXORSum(vector<int>& nums) {
    int res = 0;
    for (auto i = 1; i < (1 << nums.size()); ++i) {
        int total = 0;
        for (auto j = 0; j < nums.size(); ++j)
            if (i & (1 << j))
                total ^= nums[j];
        res += total;
    }
    return res;
}
```
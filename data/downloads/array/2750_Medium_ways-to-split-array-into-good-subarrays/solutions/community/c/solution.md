# Zeros in Between

**Author:** votrubac
**Votes:** 4
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3679183/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3679183/)

---

We have exactly `m` good subarrays, where `m` is the number of `1`.

Zeros in between two `1` add split points. Condiser `100101` as the example.

Between first two `1` we can split in 3 points: `1|0|0|1`, and between second two `1` - in 2: `1|0|1`.

The total number of splits is 3 * 2. So we count `zeros` in between of two `1`, and mulitply the result by `zeros + 1`.

**C++**
```cpp
int numberOfGoodSubarraySplits(vector<int>& nums) {
    long long res = 0, zeros = 0;
    for (int i = 0; i < nums.size(); ++i) {
        if (nums[i] == 0)
            zeros += res > 0;
        else {
            res = res ? res * (zeros + 1) % 1000000007 : 1;
            zeros = 0;
        }
    }
    return res;
}
```
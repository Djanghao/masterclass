# Sort

**Author:** votrubac
**Votes:** 32
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/1238666/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/1238666/)

---

The smallest number should be matched with the largest one (easy to prove otherwise).

So we sort the array, match the smallest with largest, next smallest with next largest, and so on.

**C++**
```cpp
int minPairSum(vector<int>& nums) {
    int res = INT_MIN;
    sort(begin(nums), end(nums));
    for (auto i = 0; i < nums.size() / 2; ++i)
        res = max(res, nums[i] + nums[nums.size() - i - 1]);
    return res;
}
```
**Java**
```java
public int minPairSum(int[] nums) {
    int res = Integer.MIN_VALUE;
    Arrays.sort(nums);
    for (int i = 0; i < nums.length / 2; ++i)
        res = Math.max(res, nums[i] + nums[nums.length - i - 1]);
    return res;
}
```
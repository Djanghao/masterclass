# Two Pointers

**Author:** votrubac
**Votes:** 120
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3231114/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3231114/)

---

Intuition for this problem is tricky.

Indices `i` and `j` form a pair (if `2 * nums[i] < nums[j]`). If we want to make `m` pairs, the best strategy is to pick `m` smallest numbers as `nums[i]`.

At the same time, we cannot make more than `n / 2` pairs. Therefore, we consider `n - n / 2` largest numbers for `nums[j]`.

So, we sort the array, and greedily match smallest numbers with numbers in the second half of the sorted array.

**C++**
```cpp
int maxNumOfMarkedIndices(vector<int>& nums) {
    int i = 0, n = nums.size();
    sort(begin(nums), end(nums));
    for (int j = n - n / 2; j < n; ++j)
        i += 2 * nums[i] <= nums[j];
    return i * 2;
}
```

**Java**
```java
public int maxNumOfMarkedIndices(int[] nums) {
    int i = 0, n = nums.length;
    Arrays.sort(nums);
    for (int j = n - n / 2; j < n; ++j)
        i += 2 * nums[i] <= nums[j] ? 1 : 0;
    return i * 2;
}
```
**Python 3**
```python
class Solution:
    def maxNumOfMarkedIndices(self, nums: List[int]) -> int:
        i, n = 0, len(nums)
        nums.sort()
        for j in range(n - n // 2, n):
            i += 2 * nums[i] <= nums[j]
        return i * 2
```
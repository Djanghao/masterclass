# Sliding Window

**Author:** votrubac
**Votes:** 148
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/2138778/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/2138778/)

---

This problem is similar to [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/).

We use a sliding window technique, tracking the sum of the subarray in the window.

The score of the subarray in the window is `sum * (i - j + 1)`. We move the left side of the window, decreasing `sum`, if that score is equal or greater than `k`.

Note that element `i` forms `i - j + 1` valid subarrays. This is because subarrays `[j + 1, i]`, `[j + 2, i]` ... `[i, i]` are valid if subarray `[j, i]` is valid.

**C++**
```cpp
long long countSubarrays(vector<int>& nums, long long k) {
    long long sum = 0, res = 0;
    for (int i = 0, j = 0; i < nums.size(); ++i) {
        sum += nums[i];
        while (sum * (i - j + 1) >= k)
            sum -= nums[j++];
        res += i - j + 1;
    }
    return res;
}
```
Minimalizm version (just for kicks):
```cpp
long long countSubarrays(vector<int>& n, long long k) {
    long long s = 0, res = 0, sz = n.size();
    for (int i = 0, j = 0; i < sz; res += (i++) - j + 1)
        for (s = s + n[i]; s * (i - j + 1) >= k; s -= n[j++]);
    return res;
}
```
**Java**
```cpp
public long countSubarrays(int[] nums, long k) {
    long sum = 0, res = 0;
    for (int i = 0, j = 0; i < nums.length; ++i) {
        sum += nums[i];
        while (sum * (i - j + 1) >= k)
            sum -= nums[j++];
        res += i - j + 1;
    }
    return res;
}
```
**Python 3**
```python
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        sum, res, j = 0, 0, 0
        for i, n in enumerate(nums):
            sum += n
            while sum * (i - j + 1) >= k:
                sum -= nums[j]
                j += 1
            res += i - j + 1
        return res
```
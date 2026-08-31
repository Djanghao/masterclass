# Python3 || 6 lines, 2*k subarrays  || T/S: 99% / 96%

**Author:** Spaulding_
**Votes:** 14
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6034964/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6034964/)

---

The problem is equivalent to: "Given an array `nums`, determine whether there exists a subarray of `nums` of length `2*k`, say *arr*, such that *arr[:k]* and *arr[k:]* are strictly increasing subarrays."

```python3 []
class Solution:
    def hasIncreasingSubarrays(self, nums: List[int], k: int) -> bool:

        def mono(idx: int)-> bool:

            for i in range(idx, idx + k - 1):
                if nums[i] >= nums[i + 1]: return False

            return True


        for idx in range(len(nums) - k - k + 1):
            if mono(idx) and mono(idx + k): return True

        return False
```
```cpp []
class Solution {
public:
    bool hasIncreasingSubarrays(const std::vector<int>& nums, int k) {
        auto mono = [&](int idx) -> bool {
            for (int i = idx; i < idx + k - 1; ++i) {
                if (nums[i] >= nums[i + 1]) return false;}
            return true;
        };

        for (int idx = 0; idx <= nums.size() - 2 * k; ++idx) {
            if (mono(idx) && mono(idx + k)) {
                return true; }
        }
        return false;}
};
```
```java []
class Solution {
    public boolean hasIncreasingSubarrays(List<Integer> nums, int k) {
        for (int idx = 0; idx <= nums.size() - 2 * k; idx++) {
            if (mono(nums, idx, k) && mono(nums, idx + k, k)) {
                return true;}
        }
        return false;}

    private boolean mono(List<Integer> nums, int idx, int k) {
        for (int i = idx; i < idx + k - 1; i++) {
            if (nums.get(i) >= nums.get(i + 1)) return false; }
        return true;}
}
```
[https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/submissions/1449973418/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/submissions/1449973418/)

I could be wrong, but I think that time complexity is *O*(*NK*) and space complexity is *O*(1), in which *N* ~ `len(nums)` and *K* ~ `k`.
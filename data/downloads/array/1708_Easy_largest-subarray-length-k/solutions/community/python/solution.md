# Python solution sliding window

**Author:** rnicoletti
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/1678103/](https://leetcode.com/problems/largest-subarray-length-k/solutions/1678103/)

---

```
		start = 0
        end = k-1
        largest = 0
        ans = []
        while end < len(nums):
            if nums[start] > largest:
                largest = nums[start]
                ans = nums[start:end+1]
            start += 1
            end += 1
        return ans
```
# Python3. O(N) Time, O(1) space; Two pointers; explanation added

**Author:** yaroslav-repeta
**Votes:** 43
**Link:** [https://leetcode.com/problems/get-the-maximum-score/solutions/767941/](https://leetcode.com/problems/get-the-maximum-score/solutions/767941/)

---

Logic is simple:
Let's say that a place where `nums1[i] = nums2[j]` is checkpoint.
Then result will be max prefix sum of two arrays + checkpoint + max sum postfix of two arrays
Or: `max(sum(nums1[0:i]), sum(nums2[0:j]) + checkpoint + max(sum(nums1[i + 1:]), sum(nums2[j + 1:]))` 

So what we need to do is:
1. Iterate through two arrays with calculating sum until we find checkpoint
2. Add larger sum to result.
3. Add checkpoint to result.
4. Reset sums.
5. Repeat.

```python
class Solution:
    def maxSum(self, nums1: List[int], nums2: List[int]) -> int:
		M, N = len(nums1), len(nums2)
        sum1, sum2 = 0, 0
        i, j = 0, 0
        res = 0
        while i < M and j < N:
            if nums1[i] < nums2[j]:
                sum1 += nums1[i]
                i += 1
            elif nums1[i] > nums2[j]:
                sum2 += nums2[j]
                j += 1
            else:
                res += max(sum1, sum2) + nums1[i]
                i += 1
                j += 1
                sum1 = 0
                sum2 = 0
                
        while i < M:
            sum1 += nums1[i]
            i += 1
        while j < N:
            sum2 += nums2[j]
            j += 1
        return (res + max(sum1, sum2)) % 1000000007
```

Time: O(N), where N is the total number of elements in arrays.
Space: O(1)
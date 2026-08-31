# Python 3 | Prefix Sum, Hash Table, One Pass O(N) | Explanation

**Author:** idontknoooo
**Votes:** 4
**Link:** [https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/1430148/](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/solutions/1430148/)

---

### Explanation
- `s1`, `s2` are the prefix sum, `d` is a hash table for index of prefix-sum difference
- Record the first index of `s1-s2` in `d`, when the same value of `s1-s2` is met __after__ the first time:
	- Update `ans` by subtract `i` with `d[s1-s2]`
- For example: `nums1 = [1, 0, 1, 1]; nums2 = [0, 0, 1, 1]`
	- At index `0`, we will have `d[1] = 0`
	- At index `1`, diff = 1 again, we will update `ans = 1 - d[1] = 1 - 0 = 1`. This is because `nums1[1:2] == nums2[1:2]`
	- At index `2`, diff = 1 again, `ans = 2 - d[1] = 2 - 0 = 2`, due to `nums1[1:3] == nums2[1:3]`
	- At index `3`, diff = 1 again, `ans = 3 - d[1] = 3 - 0 = 3`, due to `nums1[1:4] == nums2[1:4]`
### Implementation
```
class Solution:
    def widestPairOfIndices(self, nums1: List[int], nums2: List[int]) -> int:
        d = {0: -1}
        ans = s1 = s2 = 0
        for i, (v1, v2) in enumerate(zip(nums1, nums2)):
            s1, s2 = s1+v1, s2+v2
            diff = s1 - s2
            if diff not in d:
                d[diff] = i
            ans = max(ans, i - d.get(diff, sys.maxsize))
        return ans
```
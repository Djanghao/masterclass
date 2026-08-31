# Python 3 | String built-in find() | Explanation

**Author:** idontknoooo
**Votes:** 2
**Link:** [https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/1074629/](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/solutions/1074629/)

---

### Explanation
- Convert int array to string
- Use `find()` to check status
- It's slow but intuitive, to me at least
### Implementation
```
class Solution:
    def canChoose(self, groups: List[List[int]], nums: List[int]) -> bool:
        groups = ['-'.join(str(s) for s in group) for group in groups]
        nums = '-'.join(str(s) for s in nums)
        j = k = 0
        while k < len(groups):
            group = groups[k]
            i = nums.find(group, j)
            if i == -1: return False
            if i == 0 or i > 0 and nums[i-1] == '-':
                j = i + len(group)
                k += 1
            else: j += 1
        return True    
```
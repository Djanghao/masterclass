# Python 3 | Hashmap, Sliding Window | Explanation

**Author:** idontknoooo
**Votes:** 9
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/1325238/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/1325238/)

---

### Explanation
- Count frequency of each character
- Moving window from left to right
	- If frequency down to 0, `cur` (current count) decrease by 1
	- If frequency move from 0 to 1, `cur` (current count) increase by 1
### Implementation
```
class Solution:
    def distinctNumbers(self, nums: List[int], k: int) -> List[int]:
        c = collections.Counter(nums[:k])
        cur = len(c)
        ans = [cur]
        for i in range(k, len(nums)):
            c[nums[i-k]] -= 1
            if c[nums[i-k]] == 0:
                cur -= 1
            if c[nums[i]] == 0:
                cur += 1
            c[nums[i]] += 1
            ans.append(cur)
        return ans
```
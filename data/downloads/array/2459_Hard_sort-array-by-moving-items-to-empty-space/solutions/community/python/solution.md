# [Python 3]Hint solution

**Author:** chestnut890123
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/2767839/](https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/2767839/)

---

```
class Solution:
    def sortArray(self, nums: List[int]) -> int:
        
        n = len(nums)
        # target: [0, 1, 2, ..., n-1]
        loc = {x: i for i, x in enumerate(nums) if i != x or x == 0}
        c1 = 0
        cur = loc.pop(0)
        while cur != 0 or loc:
            # if empty space not at begin, then swap with the number should be at this space (which is the index)
            if cur != 0:
                new_cur = loc[cur]
                del loc[cur] # delete since already in the right position
                cur = new_cur
            # else pick one from candidates where index != num
            else:
                k, v = loc.popitem()
                cur, loc[k] = v, cur # swap position since still need to reassign in the future
            c1 += 1
            
        if c1 == 0: return c1

        # target: [1, 2, ..., n-1, 0]
        loc = {x: i for i, x in enumerate(nums) if i + 1 != x or x == 0}
        c2 = 0
        cur = loc.pop(0)
        while cur != n - 1 or loc:
            if cur != n - 1:
                new_cur = loc[cur + 1]
                del loc[cur + 1]
                cur = new_cur
            else:
                k, v = loc.popitem()
                cur, loc[k] = v, cur
            c2 += 1
        
        return min(c1, c2)
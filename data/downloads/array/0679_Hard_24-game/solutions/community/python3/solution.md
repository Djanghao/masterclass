# Python - 80ms

**Author:** azsefi
**Votes:** 20
**Link:** [https://leetcode.com/problems/24-game/solutions/299842/](https://leetcode.com/problems/24-game/solutions/299842/)

---

```
import itertools as it

class Solution:
    def judgePoint24(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return round(nums[0], 4) == 24
        else:
            for (i, m), (j, n) in it.combinations(enumerate(nums), 2):
                    new_nums = [x for t, x in enumerate(nums) if i != t != j]
                    inter = {m+n, abs(m-n), n*m}
                    if n != 0: inter.add(m/n)
                    if m != 0: inter.add(n/m)
                    
                    if any(self.judgePoint24(new_nums + [x]) for x in inter):
                        return True
            
            return False
```
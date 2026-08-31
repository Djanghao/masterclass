# Python simple easy-to-understand solution

**Author:** YehudisK
**Votes:** 7
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/796529/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/796529/)

---

```
class Solution:
    def isPossibleDivide(self, nums: List[int], k: int) -> bool:
        if len(nums) % k != 0:
            return False
        
        my_dict = defaultdict(int)
        for num in nums:
            my_dict[num]+=1
        numbers_left = len(nums)
        
        while numbers_left > 0:
            mini = min(my_dict.keys())
            for i in range(k):
                if not my_dict.get(mini+i):
                    return False
                my_dict[mini+i]-=1
                numbers_left -= 1
                if my_dict[mini+i] == 0:
                    del my_dict[mini+i]
        return True
```
# [Python3] Bit manipulation with explanation

**Author:** frolovdmn
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4221632/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4221632/)

---

Iterate over each bit **i** in the range of values from 0 to 31. For each bit **i**, iterate over each element **num** in **nums**. Check whether the bit **i** is set in **num** by using the bitwise AND operator: (2 ** i & num) == 2 ** i. If so, increment a variable **count** by 1.
If the **count** is greater than or equal to **k**, set the bit **i** in ans to 1 using the bitwise OR operator: ans |= 2 ** i. This means that the K-or of nums will have the bit **i**  set if there are at least **k** elements in nums that have bit i set.

```
class Solution:
    def findKOr(self, nums: List[int], k: int) -> int:
        ans = 0
        
        for i in range(32):
            count = 0
            
            for num in nums:
                if 2 ** i & num == 2 ** i:
                    count += 1
                    
            if count >= k:
                ans |= 2 ** i
                
        return ans
```
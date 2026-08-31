# [Python 3] Two solution with Counter and two pointers || beats 99.9%

**Author:** yourick
**Votes:** 44
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/3697500/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/3697500/)

---

#### Counter:
```python3 []
class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        res, d = 0, Counter(nums)
        for val1, val1_cnt in d.items():
            val2 = k - val1
            # to get rid of duplicates consider only pairs where val1 >= val2
            if val1 < val2 or val2 not in d: continue 
            res += min(val1_cnt, d[val2]) if val1 != val2 else val1_cnt//2
        
        return res
```

![Screenshot 2024-01-24 at 18.59.21.png](./images/0.png)


#### Sorting and two pointers:
```python3 []
class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:
        nums.sort()
        res, l, r = 0, 0 ,len(nums) - 1

        while l < r:
            S = nums[l] + nums[r]
            if S > k:
                r -= 1
            elif S < k:
                l += 1
            else:
                res += 1
                l += 1
                r -= 1
        return res
```
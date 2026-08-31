# [Python3] summarizing Contain Duplicates I, II, III

**Author:** ye15
**Votes:** 74
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/825267/](https://leetcode.com/problems/contains-duplicate-iii/solutions/825267/)

---

This is a very self-consistent series. Although ad-hoc implementations exist (please check the corresponding posts in Dicuss), their solutions bear great resemblance to each other. 

Starting with [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/), the key is to memoize what has been seen in a set
```
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()
        for x in nums:
            if x in seen: return True 
            seen.add(x)
        return False
```

Progressing to [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/), extra info needs to be memoized, i.e. position via a dictionary. 
```
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        seen = {}
        for i, x in enumerate(nums): 
            if x in seen and i - seen[x] <= k: return True 
            seen[x] = i
        return False 
```

Coming back to this problem, we can summarize numbers in a given range into bucket. By bucketing numbers properly, this becomes almost identical to 219. Contains Duplicate except that numbers in adjacent buckets need to be check as well. 
```
class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        if t < 0: return False # edge case 
        
        seen = {}
        for i, x in enumerate(nums): 
            bkt = x//(t+1)
            if bkt in seen and i - seen[bkt][0] <= k: return True 
            if bkt-1 in seen and i - seen[bkt-1][0] <= k and abs(x - seen[bkt-1][1]) <= t: return True 
            if bkt+1 in seen and i - seen[bkt+1][0] <= k and abs(x - seen[bkt+1][1]) <= t: return True 
            seen[bkt] = (i, x) 
        return False 
```

As mentioned in the beginning, ad-hoc implementations do exist. But these three questions can all be solved by properly memoizing certain info, which makes them quite consistent for practice.
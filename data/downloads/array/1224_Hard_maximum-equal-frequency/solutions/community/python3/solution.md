# Python3: Count collections

**Author:** ColtMac
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/403781/](https://leetcode.com/problems/maximum-equal-frequency/solutions/403781/)

---

The basic idea is to first count the occurence of each number in `nums`.
Then, count the counts--i.e. count the occurrence groups. 
The solution must be 1 of a few scenarios (there were more trivial scenarios then I thought - leading to bad submissions).
If the count of counts is not one such scenario:     `nums.pop()` and re-evaluate.

Here are the possible, valid scenarios:
`length of count of counts == 1`
1.There is only one number in `nums` (count of counts looks like this: `{n:1}` )
2. There is only one count of each distinct number (count of counts looks like this: `{1:m}` )

`len(count of counts) == 2`
3. All numbers occur the same number of times, except a SINGLE occurence of some other number ( `{n:m,1:1}` )
4. All numbers occur the same number of times, except one number occurs one additional time: ( `{n:m, n+1:1}` ) 

```
from collections import Counter

class Solution:
    def maxEqualFreq(self, nums: List[int]) -> int:
        dic = Counter(nums)
        dicdic = Counter(list(dic.values()))
        if len(nums) == 2:
            return 2
        
        while True:
            if len(dicdic) == 1 and (min(dicdic) == 1 or min(dicdic.values()) == 1):
                return len(nums)                
            if len(dicdic) == 2:
                max_dicdic_keys = max(dicdic)
                min_dicdic_keys = min(dicdic)
                if  max_dicdic_keys - min_dicdic_keys == 1 and dicdic[max_dicdic_keys] == 1:
                    return len(nums)
                if min_dicdic_keys == 1 and dicdic[min_dicdic_keys] == 1:
                    return len(nums)
            cleanup = nums.pop()
            if dic[cleanup] - 1 == 0:
                del dic[cleanup]
            else:
                dic[cleanup] = dic[cleanup] -1
            dicdic = Counter(list(dic.values()))
        
        return
```
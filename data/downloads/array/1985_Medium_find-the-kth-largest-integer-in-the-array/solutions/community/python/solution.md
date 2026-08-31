# Python | The Right Way during Interview | Comparators

**Author:** malraharsh
**Votes:** 41
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/1432093/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/1432093/)

---

Although, this ways works, ie by directly converting all string to integer. Then sort and reverse.

```
class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        nums = sorted(map(int, nums), reverse=True)
        return str(nums[k-1])
```

This works because there is no limit to size of int in Python, here 100 digits. So it works, but it only works in Python, not in any other. And it may not work if the length of string is much larger or even if work ,can take large memory. So you can't risk using this method in actual interview. This is the correct way.

By sorting based on customize sort function, which sorts x and y like
1. when left is smaller, then -1, to keep left on left, 
2. when left is larger, then +1, to put on right

'4', '33' - len of 4 is smaller, so left smaller, -1
'555', '66' - len of 555 is larger, so right larger, +1
'342', '312' - left if larger, so +1
'11', '11', - both same, so 0

cmp_to_key - is an comparator in python, used to create customized sort based on compare conditions (x, y for eg, in default sort, if x < y then x stays on left, else x goes on right of y).

```
from functools import cmp_to_key
class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        def sorter(x, y):
            n, m = len(x), len(y)
            if n < m: # if you want to keep x in left of y, return -1, here if len(x) is shorter, so it is smaller, so left # ['33', '4'], 4 to left
                return -1
            elif n > m: # +1, if to keep in right of y
                return 1
            else:
                for i in range(n):
                    if x[i] < y[i]: # if x[i] smaller, then left
                        return -1
                    elif x[i] > y[i]: # else in right 
                        return 1
                    else:
                        continue
            return 0 # if both same, x==y
            
        key = cmp_to_key(sorter)
        nums.sort(key=key, reverse=True)
        # print(nums)
        return nums[k-1]
```

Upper Code in more concise form -

```
from functools import cmp_to_key
class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        def sorter(x, y):
            n, m = len(x), len(y)
            if n != m:
                return -1 if n < m else 1 # when n > m
            else:
                return -1 if x < y else 1 if x > y else 0
            
        key = cmp_to_key(sorter)
        nums.sort(key=key, reverse=True)
        return nums[k-1]
```

**Please give this a Upvote if you liked my effort.**
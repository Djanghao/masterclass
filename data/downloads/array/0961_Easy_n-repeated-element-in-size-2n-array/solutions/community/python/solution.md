# PYTHON 3 : SUPER EASY 99.52% FASTER

**Author:** rohitkhairnar
**Votes:** 22
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/1337509/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/1337509/)

---

**184 ms, faster than 99.52%** USING LIST
```
class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        
        list1 = []
        for i in nums :
            if i in list1 :
                return i
            else :
                list1.append(i)
```
**192 ms, faster than 95.77%** USING SET
```
class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        
        set1 = set()
        for i in nums :
            if i in set1 :
                return i
            else :
                set1.add(i)
```
**208 ms, faster than 58.09%** USING COUNT
```
class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        
        for i in nums :
            if nums.count(i) == len(nums)/2 :
                return i
```
**220 ms, faster than 36.92%** USING DICTIONARY
```
class Solution:
    def repeatedNTimes(self, nums: List[int]) -> int:
        
        dic = {}
        for i in nums :
            if i in dic :
                dic[i] += 1
                if dic[i] == len(nums)/2 :
                    return i
            else :
                dic[i] = 1
```
**Please upvote if it was helpful : )**
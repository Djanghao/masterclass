# Python Solution Using Counter || Beats 99% || O(n)

**Author:** IvanTsukei
**Votes:** 7
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1864079/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1864079/)

---

```py
class Solution:

    def divideArray(self, nums: List[int]) -> bool:
        lena = len(nums)
        count = sum(num//2 for num in Counter(nums).values())
        return (lena/2 == count)
        
```
Or, to simplify it:
```
    def divideArray(self, nums: List[int]) -> bool:
        return all(i % 2 == 0 for i in Counter(nums).values())
```
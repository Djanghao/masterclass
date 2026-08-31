# Python3|| Easy solution.

**Author:** Kalyan_2003
**Votes:** 12
**Link:** [https://leetcode.com/problems/sort-array-by-parity-ii/solutions/3253084/](https://leetcode.com/problems/sort-array-by-parity-ii/solutions/3253084/)

---

# Code
```
class Solution:
    def sortArrayByParityII(self, nums: List[int]) -> List[int]:
        even = []
        odd = []
        lst=[]
        for i in range(len(nums)):
            if nums[i]%2 == 0:
                even.append(nums[i])
            else:
                odd.append(nums[i])
        for i in range(len(even)):
            lst.append(even[i])
            lst.append(odd[i])
        return lst
```
![image.png](./images/0.png)

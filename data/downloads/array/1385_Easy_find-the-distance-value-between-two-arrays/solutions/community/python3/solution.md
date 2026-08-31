# Binary  Search and Brute Force Logic

**Author:** GANJINAVEEN
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/3228703/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/3228703/)

---



# Brute Force Approach
```
class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        count=0
        for i in arr1:
            for j in arr2:
                if abs(i-j)<=d:
                    count+=1
                    break
        return len(arr1)-count
  #please upvote me it would encourage me alot


```
```
class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        count=0
        arr2.sort()
        for i in range(len(arr1)):
            left,right=0,len(arr2)-1
            while left<=right:
                mid=(left+right)//2
                if abs(arr1[i]-arr2[mid])<=d:
                    count+=1
                    break
                elif arr1[i]<arr2[mid]:
                    right=mid-1
                else:
                    left=mid+1
        return len(arr1)-count
```
# please upvote me it would encourage me alot

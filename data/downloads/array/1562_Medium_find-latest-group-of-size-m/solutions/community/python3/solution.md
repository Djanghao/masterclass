# ✅ || tried my best to explain O(n) solution || python ||

**Author:** Abhishen99
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/1342948/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/1342948/)

---

```
class Solution:
    def findLatestStep(self, arr: List[int], m: int) -> int:
        
        
        if m == len(arr): # if the length of group we want is equal to length of arr than in the end eventually we are getting the group of length == m and latest step will be the last step
            
            return m
        
        abhi = [0]*(len(arr)+2)
        
        res = -1
        
        for i , a in enumerate(arr):
            
            left , right = abhi[a-1] , abhi[a+1] # now we are storing the curr length of the right group and left group if exist . the right group and left group means the right and left of current element
            
            if left == m or right == m:
                
                res = i # if any on the above two groups having length of m than the latest step will be i , and result will be updated . 
            
            abhi[a-left] = abhi[a+right] = left + right +1 # and in the final step we have to merge the left group and right group if it makes the contigeous substring of 1's , basically we are increasing the length of group because finally we want to deal with the length of groups . this step is kind of similiar to the step which we do in sub array sum equal to k problem . 
            
        return res
            
            
            
            
            
            
            
        
```
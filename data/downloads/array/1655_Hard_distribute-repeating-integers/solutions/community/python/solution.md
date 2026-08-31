# simple dfs with bitmasking

**Author:** heisenbarg
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-repeating-integers/solutions/1489459/](https://leetcode.com/problems/distribute-repeating-integers/solutions/1489459/)

---

```
class Solution:
    def canDistribute(self, nums: List[int], quantity: List[int]) -> bool:
        
        arr=[0]*(1001)
        for i in nums:
            arr[i]+=1
            
        arr.sort(reverse=True)
        #print(arr)
        arr=arr[:10]
        dict={}
        def dfs(ind,arr):
            if ind==m:
                return True
            if (ind,tuple(arr)) in dict:
                return dict[(ind,tuple(arr))]
            
            for i in range(0,10):
                if arr[i]>=quantity[ind]:
                    arr[i]-=quantity[ind]
                    a=dfs(ind+1,arr)
                    arr[i]+=quantity[ind]
                    if a:
                        dict[(ind,tuple(arr))]=True
                        
                        return True
                    
            dict[(ind,tuple(arr))]=False
            return False
        m=len(quantity)
        return dfs(0,arr)
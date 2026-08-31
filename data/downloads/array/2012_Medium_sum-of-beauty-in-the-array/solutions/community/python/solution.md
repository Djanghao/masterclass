# python3 precomputation

**Author:** saurabht462
**Votes:** 19
**Link:** [https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1471981/](https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1471981/)

---





* **Case1**: for each index in nums if every element before this is smaller and every element after this is bigger 
than we have to increase count by 2
for this can we can make two array which will store minimum and maximum till now for each index
* **Case2**: simply compare with left and right neighbour ,if condition satisfies we will increase count by 1

```

def sumOfBeauties(self, nums) :
        N=len(nums)
        
        # for each index we have to check if all element before it is smaller than this
        min_=[None for _ in range(N)]
        mi_=float('-inf')
        for i in range(N):
            min_[i]=mi_
            mi_=max(nums[i],mi_)
                
        # for each index we have to check if all element after it is bigger than this       
        max_=[None for _ in range(N)]
        mx_=float('inf')
        for i in range(N-1,-1,-1):
            max_[i]=mx_
            mx_=min(mx_,nums[i])
                
        ans=0
        for i in range(1,N-1):
            if min_[i]<nums[i]<max_[i]:
                ans+=2
            elif nums[i-1]<nums[i]<nums[i+1]:
                ans+=1
        return ans
```
		
* **TC - O(N)**
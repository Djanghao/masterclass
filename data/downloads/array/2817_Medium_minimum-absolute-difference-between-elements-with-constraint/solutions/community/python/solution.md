# Heapq or Union Find

**Author:** leetcode_dafu
**Votes:** 36
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3901622/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3901622/)

---

this one has the following three solutions.

1. Sortedlist/Treemap/Ordered Set solutions are simple but **not always allowed for onsite interviews**. 

2. use heapq. we sort the nums and use heapq when we loop from right to left.
               
        nums=sorted((val,idx) for idx,val in enumerate(nums))         
        stack1, stack2, res =[], [], float('inf')  
        
        for val,idx in nums:
           heappush(stack1,(k+idx,val)) 
		   heappush(stack2,(k-idx,val))
		   
           while stack1 and stack1[0][0]<=idx:                
                res=min(res, val-heappop(stack1)[1])             
		   while stack2 and stack2[0][0]<=-idx:                
                res=min(res, val-heappop(stack2)[1])      
                           
        return res
		
3. use union find. we sort numbers and use union find to quickly identify the nearest neighbors when we loop from right to left.

        nums+=[float('inf'),float('-inf')]        
        rnk=sorted(set(nums))

        def find(num):
           nxt=rnk[dp[num]]
           if not active[nxt]:  dp[num]=find(rnk[dp[num]+d])
           return dp[num]

        res,n=float('inf'),len(nums) 
        for d in [1,-1]:
            dp={j:i for i,j in enumerate(rnk)}    
            active=Counter(nums[k:])
            for i in range(n-k-2): 
                res=min(res,abs(rnk[find(nums[i])]-nums[i]))
                active[nums[i+k]]-=1
        return res
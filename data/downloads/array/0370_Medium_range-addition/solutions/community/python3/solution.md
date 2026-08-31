# [Python] Very detailed explanation with stack trace

**Author:** 101leetcode
**Votes:** 10
**Link:** [https://leetcode.com/problems/range-addition/solutions/699349/](https://leetcode.com/problems/range-addition/solutions/699349/)

---

```
class Solution:
    def getModifiedArray(self, length: int, updates: List[List[int]]) -> List[int]:
        ## RC ##
        ## APPROACH : GREEDY ##
        ## LOGIC ##
        ## 1. Instead of incrementing all the elements of the array
        ## 2. We add update value at the start of the updateStart, and decrement at the index after the updateEnd.
        ## 3. so we need to initialize answer array with length + 1
        ## 4. we do a running sum and replace it in ans[i], we get correct values
        
        ## Example : length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]] ##
        ## STACK TRACE ##
        # [0, 2, 0, 0, -2, 0]
        # [0, 2, 3, 0, -2, -3]
        # [-2, 2, 3, 2, -2, -3]
        # [-2, 0, 3, 5, 3, 0] ==> final result
        
		## TIME COMPLEXITY : O(N) ##
		## SPACE COMPLEXITY : O(N) ##

        ans = [0] * (length + 1)
        for update in updates:
            ans[update[0]] += update[2]
            ans[update[1]+1] -= update[2]
            # print(ans)
            
        print([ i+1 for i in range(100) ])
        print(ans)
        sum = 0
        for i,num in enumerate(ans):
            sum += num
            ans[i] = sum
        print(ans)
        return ans[:-1]
```
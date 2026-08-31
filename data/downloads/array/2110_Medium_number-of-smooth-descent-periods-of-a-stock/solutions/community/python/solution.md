# Little Maths, Little Sliding Window Without DP!

**Author:** mostlyAditya
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/1635102/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/1635102/)

---

In order to solve this problem I would prefer you take a pen and paper and make few testcases of your own.
During that youll find some similarities
Let me illustrate:
[3,2,1] -  [3,2] , [2,1] , [3,2,1] and singular values
3+3 = 6
Now when we have 4 numbers
[4,3,2,1] 
when we take two numbers at once
[4,3] ,[3,2] ,[2,1]  3 cases-.
when we take 3 numbers at once
[4,3,2] , [3,2,1] - 2 cases
when we take 4 numbers at once
[4,3,2,1] - 1 cases

To add we sum it i.e **sum of natural numbers **
**(N*(N+1))//2**
Here N is size of the **(contiguous valid array - 1)**
Also we will add all singualar values as they also satisfy the condition
Thus **ans+=len(arr)**.

**So all different contiguous arrays which satisfy + size of array** 
In the code we keep track of contiguous array using the value of k 
And calculate the value using the sum of natural numbers.

```
import sys
class Solution:
    def getDescentPeriods(self, prices: List[int]) -> int: 
        def calculate(k,ans):
            if k>1:
                ans+=((k-1)*(k))//2 
				#Sum of Natural Numbers
                return ans
            else:
                return ans
        end = 0
        start = 0
        prev= sys.maxsize
        k= 0
        ans = 0
        while end<len(prices):     
            if prev- prices[end]==1 or prev == sys.maxsize:
                k+=1
                prev = prices[end]
                end+=1    
            else:             
                ans = calculate(k,ans)
                start = end
                if end<len(prices):
                    prev = sys.maxsize
                k=0
        if k>1:
            ans = calculate(k,ans)
			
        return ans+len(prices)
```
# PYTHON SOL || RECURSION + MEMOIZATION || WELL EXPLAINED || APPROACH EXPLAINED || WELL COMMENTED ||

**Author:** reaper_27
**Votes:** 3
**Link:** [https://leetcode.com/problems/least-operators-to-express-number/solutions/1925389/](https://leetcode.com/problems/least-operators-to-express-number/solutions/1925389/)

---

# EXPLANATION
```
Say number = x and target = target

When target == 1: we can make it by using only one way i.e. x/x
Now we start with our current value cur = x

Now fastest way to reach the target is via multplication
		Example x = 5 target = 125
		What is the fastest way to reach 125 with x = 5 and operations = (/,*,+,-)
		We can try 5*5*5 using only 2 operators

declare op = 0 (operators used )
So we multiply cur by x until cur >= target and do op += 1

Now if cur == target : we can reach the target by operations = op

If op == 0:
   i.e.  during the start the target was smaller than x
   example target = 2 and x = 3
   one way to reach the target is : 1 + solve(target - 1)
													  to make one we do x/x and inluding + operator we have used total 2 operators

else:
   i.e. we used  * operator some no. of times
   so what we do is reach the nearest value to target via * such that reachede value < target
   i.e. say x = 3 and target = 12
   So we do multiply cur like 3*3*3 = 27 
   Now 27/3 is the nearest number smaller than target = 12 that we can reach via multiplication
   Now solve for ( target - cur/x) and 1 operation for + and op
   
Final check :
   if cur - target < target :
    i.e. we can reach target by substraction and division from cur
	So tmp = op + 1 + solve(cur-target)
	if tmp is smaller than ans then ans = tmp
finally store ans of target in dp
return ans
```

# CODE WITH COMMENTS
```
class Solution:
    def solve(self,x,target):
        if target in self.dp : return self.dp[target]
        
        # when target == 1 we can solve just by doing x/x  
        if target == 1: return 1
        
         # current value = x and operations performed  = 0
        cur = x
        op = 0
       
        # if cur < target : the best decision is to multiply
        while cur < target:    
            cur *= x
            op += 1
        
        # if cur == target : we reached using minimum possible operations 
        if cur == target :
            return op
        
        if op == 0:
            # cur is already larger than target
            # x/x + make(target-1) : make 2 operations + solve(target-1)
            ans = 2 + self.solve(x,target - 1)
        else:
            # we try to reach nearest val via multiply less than target
            # and find ans for remaining i.e. target - cur/x 
            # here op becomes op - 1 so op - 1 + 1 becomes op
            ans = op + self.solve(x,target-(cur//x))
            
        if cur - target < target :
            # diff between cur and target is less than target
            # i.e. we can make cur and remove cur - target
            tmp = op + 1 + self.solve(x,cur - target)
            if tmp < ans : ans = tmp
        
        # finally use dp for memoization
        self.dp[target] = ans
        return ans
```
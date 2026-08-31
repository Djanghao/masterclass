# Python :Detail explanation (3 solutions easy to difficult) : Recursion, dictionary & DP

**Author:** Abeni
**Votes:** 734
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/1531764/](https://leetcode.com/problems/climbing-stairs/solutions/1531764/)

---

#####
### General inutution
##### 	-> Intution : the next distinict way of climbing stairs is euqal to the sum of the last two distinict way of climbing
##### 		distinct(n) = distinict(n-1) + distinict(n-2)
##### This intution can be applied using the following three approach --> ordered from easy to difficult approach
#####
##### 
##### 
#### Idea 1 : pure recursive (Can't pass the test case :does not work for big number, result time-exced limit)
##### 	- The base case will be when only 1 or 2 steps left
##### 	- Result time-exced limit
##### 
        

```
class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
         def climb(n):
             if n==1: #only one step option is availble
                 return 1
             if n ==2: # two options are possible : to take two 1-stpes or to only take one 2-steps
                 return 2
             return climb(n-1) + climb(n-2)
         return climb(n)
    
```
#####     
#####         '''
####         Idea 2 : use dictionary (look-up table) to memorize repeating recursion
#####             - The memory start with the base case and recored every recurssion
#####         '''
```
class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        memo ={}
        memo[1] = 1
        memo[2] = 2
        
        def climb(n):
            if n in memo: # if the recurssion already done before first take a look-up in the look-up table
                return memo[n]
            else:   # Store the recurssion function in the look-up table and reuturn the stored look-up table function
                memo[n] =  climb(n-1) + climb(n-2)
                return memo[n]
        
        return climb(n)
```
    
#####         '''
###         Idea 3 : Dynamic programming 
#####             --> store the distinct ways in a dynamic table
#####             climb = [climb(0), climb(1), climb(2)=climb(0)+climb(1), climb(3)=climb(2)+climb(1),......climb(n)=climb(n-1)+climb(n-2)]
#####             dp = [   0,           1,            2,                               3,                      5,                           dp(i-1)+dp(i-2])]
#####             return dp[n]
#####         '''
	def climb(n):
        #edge cases
        if n==0: return 0
        if n==1: return 1
        if n==2: return 2
        dp = [0]*(n+1) # considering zero steps we need n+1 places
        dp[1]= 1
        dp[2] = 2
        for i in range(3,n+1):
            dp[i] = dp[i-1] +dp[i-2]
        print(dp)
        return dp[n]
			
### ******  upvote as a sign of appriatation *****
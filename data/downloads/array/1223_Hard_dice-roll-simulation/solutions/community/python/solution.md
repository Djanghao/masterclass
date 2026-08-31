# [Python] Simple memoization

**Author:** alyosha
**Votes:** 9
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/403858/](https://leetcode.com/problems/dice-roll-simulation/solutions/403858/)

---

I am trying to understand the multidimensional DP solution, but meanwhile I tried to solve the problem recursively. Following is the code - 
```

def helper(currentIndex, n, rollMax, pre):
    if currentIndex==n:
        return 1
    elif currentIndex>n:
        return 0
    count = 0
    for index in xrange(6):    # the die can currently turn to all the faces
        if index!=pre: #it cannot turn to the face which has occured just previously
            for repeat in xrange(1,rollMax[index]+1): #can roll till max. consecutive rolls allowed for this face
                count+=helper(currentIndex+repeat,n,rollMax,index)
    return count

class Solution(object):
    def dieSimulator(self, n, rollMax):
        """
        :type n: int
        :type rollMax: List[int]
        :rtype: int
        """
        MOD = 10**7+7
        return helper(0,n,rollMax,-1)%MOD
```
		
It timed out on the following test case - 
10
[2,7,1,2,6,5]

I added memoization and submitted the following code - 
```
def helper(currentIndex, n, rollMax, pre,d):
    if currentIndex==n:
        return 1
    elif currentIndex>n:
        return 0
    count = 0
    if (currentIndex,pre) in d: #if this state is already calculated, return the ans
        return d[(currentIndex,pre)]
    for index in xrange(6):
        if index!=pre:
            for repeat in xrange(1,rollMax[index]+1):
                count+=helper(currentIndex+repeat,n,rollMax,index,d)
    d[(currentIndex,pre)]=count   #save the computation
    return count

class Solution(object):
    def dieSimulator(self, n, rollMax):
        """
        :type n: int
        :type rollMax: List[int]
        :rtype: int
        """
        rolledCount = [0]*6  #no rolls made yet
        MOD = 10**9+7
        d = {}  #dictionary to save the states
        return helper(0,n,rollMax,-1,d)%MOD
```

And it passed all the test cases !!!
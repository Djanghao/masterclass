# [Fastest Solution Explained][0ms][100%] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 19
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/2383701/](https://leetcode.com/problems/climbing-stairs/solutions/2383701/)

---


(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 3.27MB*** (beats 99.04% / 90.42%).
* *** Java ***

Recustion (Top Down Approach)

```
/**
 * Question   : Climbing Stairs
 * Complexity : Time: O(2^n) ; Space: O(n)
 */
class Solution {
    public int climbStairs(int n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
}
```

Recustion + Memorization (Top Down Approach)

```
/**
 * Question   : Climbing Stairs
 * Complexity : Time: O(n) ; Space: O(n)
 */
class Solution {
    public int climbStairs(int n) {
        Map<Integer, Integer> memo = new HashMap<>();
        memo.put(1, 1);
        memo.put(2, 2);
        return climbStairs(n, memo);
    }

    private int climbStairs(int n, Map<Integer, Integer> memo) {
        if (memo.containsKey(n)) {
            return memo.get(n);
        }
        memo.put(n, climbStairs(n - 1, memo) + climbStairs(n - 2, memo));
        return memo.get(n);
    }
}
```

DP (Bottom Up Approach)

```
/**
 * Question   : Climbing Stairs
 * Complexity : Time: O(n) ; Space: O(n)
 */
class Solution {
    public int climbStairs(int n) {
        if (n <= 1) {
            return 1;
        }
        
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;

        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
}
```

DP + Optimization (Bottom Up Approach)

To calculate the new value we only leverage the previous two values. So we don't need to use an array to store all the previous values.

```
/**
 * Question   : Climbing Stairs
 * Complexity : Time: O(n) ; Space: O(1)
 */
class Solution {
    public int climbStairs(int n) {
        if (n <= 1) {
            return 1;
        }

        int prev1 = 1;
        int prev2 = 2;

        for (int i = 3; i <= n; i++) {
            int newValue = prev1 + prev2;
            prev1 = prev2;
            prev2 = newValue;
        }

        return prev2;
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 10MB*** (beats 100.00% / 95.49%).
* *** Python ***

```

# Top down - TLE
def climbStairs1(self, n):
    if n == 1:
        return 1
    if n == 2:
        return 2
    return self.climbStairs(n-1)+self.climbStairs(n-2)
 
# Bottom up, O(n) space
def climbStairs2(self, n):
    if n == 1:
        return 1
    res = [0 for i in xrange(n)]
    res[0], res[1] = 1, 2
    for i in xrange(2, n):
        res[i] = res[i-1] + res[i-2]
    return res[-1]

# Bottom up, constant space
def climbStairs3(self, n):
    if n == 1:
        return 1
    a, b = 1, 2
    for i in xrange(2, n):
        tmp = b
        b = a+b
        a = tmp
    return b
    
# Top down + memorization (list)
def climbStairs4(self, n):
    if n == 1:
        return 1
    dic = [-1 for i in xrange(n)]
    dic[0], dic[1] = 1, 2
    return self.helper(n-1, dic)
    
def helper(self, n, dic):
    if dic[n] < 0:
        dic[n] = self.helper(n-1, dic)+self.helper(n-2, dic)
    return dic[n]
    
# Top down + memorization (dictionary)  
def __init__(self):
    self.dic = {1:1, 2:2}
    
def climbStairs(self, n):
    if n not in self.dic:
        self.dic[n] = self.climbStairs(n-1) + self.climbStairs(n-2)
    return self.dic[n]

```

```
```

```
```

The best result for the code below is ***0ms / 23.7MB*** (beats 59.24% / 60.42%).
* *** C++ ***

**Idea - this is just simple fibonacci!**
The base cases are:

* n = 0 -> 0
* n = 1 -> 1
* n = 2 -> 2

Then, for each step i, the number of ways to get to it is: either the last step was of 1 step, so we have prev, or it was a 2 step, and that's prev2, so all together the number of ways to get to our current step is prev + prev2.
If we check the first few, we can see clearly that it comes out a fibonacci sequence.

Time Complexity: **O(n)**
Space Complexity: **O(1)**

```

class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) return n;
        int prev = 2, prev2 = 1, res;
        for (int i = 3; i <= n; i++) {
            res = prev + prev2;
            prev2 = prev;
            prev = res;
        }
        return res;
    }
};

```

```
```

```
```

The best result for the code below is ***0ms / 78MB*** (beats 100.00% / 100.00%).
* *** JavaScript ***

```
/*
DP

dp[i] represents the total number of different ways to take i steps
So, we want to get dp[n].
dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.

We have two base cases: dp[1] = 1 and dp[2] = 2 because
there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step)
*/
var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
    // T.C: O(N)
    // S.C: O(N)
};
```
```
/*
Recursion

climbStairs(n) returns the total number of different ways of taking n steps.
Hence, climbStairs(n-1) + climbStairs(n-2) gives the result
since we can either climb 1 or 2 steps

For more optimised solution, we use an Array to keep track of results that have already been computed
*/

var climbStairs = function(n, memo = new Array()) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
    // T.C: O(N)
    // S.C: O(N)
};
```

```
```

```
```

The best result for the code below is ***0ms / 15.23MB*** (beats 89.94% / 90.99%).
* *** Python3 ***


General inutution
-> Intution : the next distinict way of climbing stairs is euqal to the sum of the last two distinict way of climbing
distinct(n) = distinict(n-1) + distinict(n-2)
This intution can be applied using the following three approach --> ordered from easy to difficult approach



Idea 1 : pure recursive (Can't pass the test case :does not work for big number, result time-exced limit)
- The base case will be when only 1 or 2 steps left
- Result time-exced limit

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

'''
Idea 2 : use dictionary (look-up table) to memorize repeating recursion
- The memory start with the base case and recored every recurssion
'''
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
'''
Idea 3 : Dynamic programming
--> store the distinct ways in a dynamic table
climb = [climb(0), climb(1), climb(2)=climb(0)+climb(1), climb(3)=climb(2)+climb(1),......climb(n)=climb(n-1)+climb(n-2)]
dp = [ 0, 1, 2, 3, 5, dp(i-1)+dp(i-2])]
return dp[n]
'''
```
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
```

```
```

```
```

The best result for the code below is ***0ms / 33.33MB*** (beats 99.00% / 60.12%).
* *** Kotlin ***


```

fun climbStairs(n: Int): Int {
      tailrec fun fib(i: Int, first: Int, second: Int): Int =
          if (i == n)
              first + second
          else
              fib(i + 1, first = second, second = first + second)

      return fib(1, 0, 1)
}

```

* Base case: First steir - we have just 1 option, Second stair - same, only one option.
* Starting from 3rd stair Iterate over stairs,
number of posiible stair options - is a sum of possible options for previous stair + pre-previous, since we can move by 2 stairs in one step.

```
Time complexity - O(n) - iterate through all n stairs
Space complexity - O(n+1) - space for dp array
```

```
fun climbStairs(n: Int): Int {
    val dp = IntArray(n + 1)

    dp[0] = 1
    dp[1] = 1

    for (i in 2..n) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}
```

```
```

```
```

The best result for the code below is ***0ms / 13.17MB*** (beats 79.34% / 99.92%).
* *** Swift ***


```

class Solution {
    // - Complexity:
    //   - time: O(n), where n is the number of steps.
    //   - space: O(1), only constant space is used.

    func climbStairs(_ n: Int) -> Int {
        if n == 0 || n == 1 { return 1 }

        var first = 1
        var second = 1
        var third = 0
        
        for _ in 2...n {
            third = first + second
            first = second
            second = third
        }

        return second
    }

}

```

```
```

```
```

The best result for the code below is ***0ms / 62.07MB*** (beats 99.99% / 99.99%).
* *** PHP ***


```

function climbStairs($n) {

    $arr = [NULL, 1, 2];
    for($i = 3; $i <= $n; $i++)
      $arr[$i] = $arr[$i-1] + $arr[$i-2];

    return $arr[$n];
}

```

```
function climbStairs($n) {
            return round(pow((sqrt(5)+1)/2, $n+1) / sqrt(5));
    }
```

```
```

```
```

The best result for the code below is ***0ms / 1.17MB*** (beats 99.64% / 99.92%).
* *** C ***


```

int climbStairs(int n){
    if(n==0 || n==1 || n==2)
    return n;
    // Create an array to store the answer...
    int ans[50];
    ans[0]=0;
    ans[1]=1;
    ans[2]=2;
    for(int i=3; i<=n; i++) {
        // There are two options...
        // 1.we came from (i-1)th step
        // 2.we came from (i-2)th step
        ans[i] = ans[i-1] + ans[i-2];
    }
    return ans[n];      // Return the answer...
}

```

```
int climbStairs(int n){
    if(n==1) return 1;
    else if(n==2) return 2;
    else
    {
        int sum = 0,s1 = 1,s2 = 2;
        for(int i=3;i<=n;i++)
        {
            sum=s1+s2;
            s1 = s2;
            s2 = sum;
        }
        return sum;
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***

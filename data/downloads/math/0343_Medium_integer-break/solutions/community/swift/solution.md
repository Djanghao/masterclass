# Python and swift, bottoms up DP, intuitive, fun and detailed explanation.

**Author:** Alpha2404
**Votes:** 2
**Link:** [https://leetcode.com/problems/integer-break/solutions/4137001/](https://leetcode.com/problems/integer-break/solutions/4137001/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Looking at the problem we get to know that there will be many cases if we try to brute force it. But if you have learnt DP before it is not a surprise that this can be solved using DP, this is just a typical 1D DP but with some additional step.  
Basically in this question we need to express a number in its **optimal form**, as I would like to call it. I you think about it a number can be expressed in its optimal form if its 'Components' can be expressed in the same form too.(can you see where this is going...).

# Approach
<!-- Describe your approach to solving the problem. -->
1. Define the base cases i.e, 1-1, 2-2 and 3-3.
2. Next, since we use bottom up DP, we might need an array for memoization, so intialize an array for memoization (of length n+1).
3. Set the base cases in the array. 
4. Now start using the base cases to contruct other solutions.  
    -  Starting with $4$, solve the problem for all numbers till $n$. (That's what the outer loop does)
    - Next, for a given number try including a number from $2$ to $n$ as one of its components and treat the expression of the remaining of the number as another subproblem(which we will have the answer to in the memoization array since it is bottom up DP)
    - Look which one has the maximum product, the number itself or the one which is brokern down to components.
5. Finally return the last element of the memoization array which would be the solution of the problem.

# Complexity
- Time complexity:$O(\\log n)$
There are $O(n)$ possible states of num that $memo array$ can be called with. We only calculate each state once, as we calculate one state per outer for loop iteration. To calculate a state, we iterate from 2 until num, which costs up to $O(n)$. Thus, we have a time complexity of $O(n^2)$.

(Layman's trick):- One for loop inside another thus $O(n^2)$.
$^*$Might not work always, proceed with caution.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
For maintaining the memoization array.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->



# Code
## Swift
```
class Solution {
    func integerBreak(_ n: Int) -> Int {
        if n<=3{
            return n-1
        }

        //An array used for memoization for our DP approach
        var memo:[Int] = Array(repeating:0,count:n+1)

        //Setting the base case in the array
        for i in [1,2,3]{
            memo[i] = i
        }

        //Constructing the solution from the bottom up fashion
        for num in 4...n{
            var ans = num // This is the case where the number is not split at all.
            for i in 2..<num{
                ans = max(ans,i*memo[num-i])
            
        }
        memo[num] = ans
    }
    return memo[n]
    }

}
```

## Python
```
class Solution:
    def integerBreak(self, n: int) -> int:
        if n <= 3:
            return n - 1
        
        dp = [0] * (n + 1)

        # Set base cases
        for i in [1, 2, 3]:
            dp[i] = i
            
        for num in range(4, n + 1):
            ans = num
            for i in range(2, num):
                ans = max(ans, i * dp[num - i])
            
            dp[num] = ans
        
        return dp[n]
```


### Please support me by giving an upvote\uD83D\uDE42
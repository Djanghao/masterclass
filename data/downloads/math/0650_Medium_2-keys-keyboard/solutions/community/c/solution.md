# C++ Recursive DP Solution

**Author:** ahsan83
**Votes:** 36
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/916980/](https://leetcode.com/problems/2-keys-keyboard/solutions/916980/)

---

Runtime: 36 ms, faster than 23.21% of C++ online submissions for 2 Keys Keyboard.
Memory Usage: 11.1 MB, less than 5.04% of C++ online submissions for 2 Keys Keyboard.

```
In each step there are 2 choices: 
Paste copy value with current value => 1 step
Copy current value and then paste it with itself => 2 step

Get minimum value from those 2 recursive calls.

Intial Step = 1
Value = 1
Copy = 1
Target = 1
```


```
class Solution {
public:
        
    // dp vector to store <step,value> result for using in future
    int dp[1001][1001];
    
    int minKeyPress(int step, int value, int copy, int&n)
    {
        // impossible case when step>n or value>n, so return INT_MAX
        if(step>n || value>n) return INT_MAX;
        
        // reached target value and so return step 
        if(value==n) return step;
        
        // return recalculated value
        if(dp[step][value]!=-1) return dp[step][value];
        
        // return min step to reach the target value
        // there are 2 choices: paste copied value with current value => 1 step
        // copy current value and paste it with itself => 2 step
        return dp[step][value] = min(minKeyPress(step+1,value+copy,copy,n),minKeyPress(step+2,2*value,value,n));
    }
    
    int minSteps(int n) {
    
        // base case : n==1 no steps needed
        if(n==1) return 0;
        
        memset(dp,-1,sizeof(dp));
        
        // start with value 1 and copy 1 and intial step 1 (assuming we already copied the intial value 'A')
        return minKeyPress(1,1,1,n);
    }
};
```
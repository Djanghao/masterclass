# C++ O(n) time and O(1) space

**Author:** chhavibansal
**Votes:** 39
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/585739/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/585739/)

---

After observing the sample inputs i observed that 
1. if all the inputs are positive then min answer should be one
2.  incase of -ve inputs then answer should be the negation of min sum + 1

 [-3,2,-3,4,2]-> answer is 5 
 how ?
 -3 + 2 + -3 gives answer -4 
what if we added 4 to it  
then the step by step sum would be  0 at some point 
but what we require here  is that step by step sum is never less than 1. 

so answer would be -4*-1 + 1 .. here we iterate any longer also the sum would always become more positive hereon

```
  int minStartValue(vector<int>& nums) {
        int ans = 0 , minAns=0;
        for(int x : nums){
            ans+= x;
            if(ans < minAns)
                minAns = ans;
        }
        return -minAns+1;
    }
```

also  when all are +ve then also minAns = 0  and minAns + 1 would us 1 

Hence the solution 

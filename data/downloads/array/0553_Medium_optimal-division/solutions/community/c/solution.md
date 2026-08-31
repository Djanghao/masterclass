# C++ Effective approach || Easy maths solution || Proper explanation || Faster than 100%

**Author:** drig
**Votes:** 13
**Link:** [https://leetcode.com/problems/optimal-division/solutions/1306765/](https://leetcode.com/problems/optimal-division/solutions/1306765/)

---

Hi,
As this question can be solved using different approaches lets discuss them
- ***Using DP (recursion)*** : Using this approach for any i we can canculate value for ```left``` and  ```right```  expression of it and then dividing left by right ``` left / right ``` so this way problem is devided into 2 subproblems. By doing this for each i we can choose optimal (maximum) among these.
If you would like to solve similar problem you can refer to [241 Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/).

- ***Using a little bit of observation and maths : Lets consider 2 cases***
	1. if we have something like ```1000/100/10/2``` without any parantheses then to evaluate the expression we start from beginning so ```1000/100``` reduces to ```10``` and expression becomes ```10/10/2``` which then reduces to ```1/2``` and finally to ```0.5```. lets analysis another case
	2. if we have parantheses everywhere like ```1000/(100/(10/2))``` so to evaluate this expression we start calculating from last (inner paranthese first) so this reduces to ```1000/(100/5)``` then ```1000/20``` and finally to ```50```.
so from above two cases what we see is that if go like 1st case numerator start decreasing and so its final value but in second case numerator is as it is and denominator is decreasing that finally giving us a maimum value.

So for us to get largest value of the expression we want to maximize numerator and minimize denominator and thats why we will use 2nd way to keep maximum numerator and 1st way to minimize denomitor so this will look like ```1000/(100/10/2)```  to remove confusion numerator is ```1000``` and denominator is ```(100/10/2)```.

```

// This code is using 2nd Approach.

class Solution {
public:
    string optimalDivision(vector<int>& nums) {
        int n=nums.size();
        string ans;
		
		// check for size if its 1 then we can't use parantheses and 
		// if its 2 then also we should not use it.
		
        if(n==1) return ans=to_string(nums[0]);
        if(n==2) return ans=to_string(nums[0])+"/"+to_string(nums[1]);
		
		//  for size greater than 2 add paranthese after first number 
		
        ans=to_string(nums[0]);
        ans.append("/(");
        for(int i=1;i<n-1;i++){
            ans.append(to_string(nums[i])+"/");
        }
        ans.append(to_string(nums[n-1]));
        ans.append(")");
		
		// finally this becomes as a/(b/c/d/....) which is our answer
		
        return ans;
    }
};
```



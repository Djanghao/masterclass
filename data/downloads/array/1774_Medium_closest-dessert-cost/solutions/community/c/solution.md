# How to approach to recursion- begineers || C++ easy to understand

**Author:** ajaykumar0
**Votes:** 41
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/1087500/](https://leetcode.com/problems/closest-dessert-cost/solutions/1087500/)

---

***Resources: https://github.com/AJAYKR00KJ/LeetCode_Solution***

**How to approach problem**

**Constraints:** Most Important Factor

* n == baseCosts.length
* m == toppingCosts.length
* 1 <= n, m <= 10
* 1 <= baseCosts[i], toppingCosts[i] <= 104
* 1 <= target <= 104

From the problem we can clearly see that **we have to select few choices from given array** and we can see the constraints **1 <= n, m <= 10.**

**NOTE:**``` Here Recursion came into existence ```

So, lets move to problem.

**We are given 3 inputs.**
1. **baseCosts** ***-> Array,*** We have to select only 1 **(Compoulsary)** from it.
1. **toppingCosts** ***-> Array,*** We have to select only 0 or more toppingcost **(** but we can select same topping atmost 2 time **)** from it.
2. **target** -> an integer representing your target price for dessert.

**Aim:**  
Make a dessert with a total cost as close to target as possible by **selecting 1 baseCost(Compoulsary)** and select only 0 or more toppingcost **(** but we can select same topping atmost 2 time **)** from it.

**Algorithm:**
``` Take each baseCost every time and select toppingCost and store ans which is closest to target```

```
class Solution {
public:
    
    //ans-> store final result
    //mn -> Current minimum difference b/w target and curr_price
    int ans=INT_MAX,mn=INT_MAX;
    
    /*
      i-> index of tc(toppingCosts)
      curr -> current cost taken
      tar -> Target cost
    */  
    
    void find(int i,vector<int>& tc,int curr, int tar)
    { 
        /*
           if difference b/w current cost and target cost is 
           less than min difference , so we have to update ans 
           and min difference because we got closest to target
        */
        if(abs(curr-tar)<mn)
        { 
            mn=abs(curr-tar);
            ans=curr;
        }
        
        /*
           if difference b/w current cost and target cost is 
           equal to min difference , so we have to update ans 
           and takin minimum one as condition given in problem
        */
        if(abs(curr-tar)==mn) ans=min(ans,curr); 
        
        /*
           If we are going out of bound just return 
           because we will nothing get after here
        */
        if(i>=tc.size() || curr-tar>mn) return;
        
        
        /*  Main interesting thing -> How to recurse */
        /*
            Just put all the required conditions
            
            NOTE: We have already taken 1 baseCosts, so left that
                  We have to select from tc(toppingCosts)
                  
            In our question we have 3 conditon
            1. Take ith toppingCosts and go for next (i+1)th toppingCost
            2. Take ith toppingCosts 2 times and go for next (i+1)th toppingCost
            3. We will not take ith toppingCosts and will select next ones
        */
        
        //taking ith toppingCosts and moving to (i+1)th toppingCosts
         find(i+1,tc,curr+tc[i],tar); 
        
        //taking ith toppingCosts 2 times and moving to (i+1)th toppingCosts
         find(i+1,tc,curr+2*tc[i],tar); 
        
        //Without taking ith toppingCosts and move to (i+1)th toppingCosts for next one
         find(i+1,tc,curr,tar); 
        
        
    }
    int closestCost(vector<int>& baseCosts, vector<int>& toppingCosts, int target) {
        
        //take each baseCost every time
        for(auto x:baseCosts)
        {
            //taking ith baseCost and select toppingCosts
            find(0,toppingCosts,x,target); 
        }
        
        //return closest to target answer
        return ans;
        
    }
};
```

**Time Complexity: O(n * 3^(m)), n -> baseCosts.length,m -> toppingCosts.length
Space Complexity: O(1) ,ignoring recursive stack**

**Complexity Analysis**

So, the basic idea of the **complexity of recursive solutions depends on the base case** of the recursive solution.
Here our base case is 

```f(i>=tc.size() || curr-tar>mn) return;```

Here we will return our function if we reach the end of the size. And for every i we are calling our function 3 times
So, for i=0 we we call 3 times 
```
find(i+1,tc,curr+tc[i],tar);  
find(i+1,tc,curr+2*tc[i],tar);  
find(i+1,tc,curr,tar); 
```
For i=1, we are calling again 3 times, **NOTE: These three will be called for every 3 previous function calls**
```
find(i+1,tc,curr+tc[i],tar);  
find(i+1,tc,curr+2*tc[i],tar);  
find(i+1,tc,curr,tar); 
```
.
.
.
For i=m
, we are calling again 3 times, **NOTE: These three will be called for every 3 previous (m-1) function calls**
```
find(i+1,tc,curr+tc[i],tar);  
find(i+1,tc,curr+2*tc[i],tar);  
find(i+1,tc,curr,tar); 
```
 

**just think like grandfather have 3 child, So, now all the three childs have 3 childs again and all these have 3 again**
``` 
                  A
           /     |    \\
        A       A       A
      / | \\    / | \\    / | \\
    A A A      A A A    A A A
```

So, total number of call will be **3^0 + 3^1 + 3^2 + ........ + 3^m** ,where **m is size of toppingCosts.length**
Sum of GP = **3^0 * (((3^m) -1 )/ (3-1))** = **((3^m) -1)/2** \u2245 **3^m**

So, for every  baseCosts.length we are calling the function, and  **baseCosts.length is n**,

**So, overall time complexity is O(n * (3^m))**

-----------------------------------------------------------------------------------------------------------

**Please let me know if any improvement needed**

-------------------------------------------------------------

**Feel free to comment :)**

**Hit \uD83D\uDC4D , if it was helpful**
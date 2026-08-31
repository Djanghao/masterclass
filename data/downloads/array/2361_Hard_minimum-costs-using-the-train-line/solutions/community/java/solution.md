# Simple Java Solution | O(n) Runtime Complexity | Easy To Understand

**Author:** user0044rr
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/2559284/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/2559284/)

---

### Explanation 
The idea is, a station `n` can be reached by one of the below two ways
 * you can go from `(n-1)` regular stop to next `n` regular stop
 * you can go from `(n-1)` express stop to next `n` express stop

 * Now you need pick the cheapest option. So you can express it by 
`ans[n] = min(minCostReg[n-1] + cost for going from n-1 reg to n reg,
                         minCostExp[n-1] + cost for going from n-1 exp to n exp)`
						 

Now we need to track the minumum cost of reaching regular and express stops. 
*  A regular stop n can be reached either by going from `(n-1`) regular stop to `n` regular stop **OR** going from `(n-1)` express stop to `n` express stop and then switching lanes. Since switching from express to regular is 0, we will ignore it in the equation. 

 * `minCostReg[n] = Math.min(
                    minCostReg[n-1] + cost of going from previous regular to curr regular , 
                    minCostExp[n-1] +  cost of going from previous express to curr express
            );`
			
* An express stop n can be reached  either  by switching lanes from regular stop `n` to express stop `n` **OR** by going from previous express stop `(n-1)` to express stop `n`. It can be expressed as follows 
* `  minCostExp[n] = Math.min(
                    minCostReg[i+1] + switching Cost, 
                    minCostExp[i] + cost of going from previous exp stop to cur express stop);`
					
* Putting it all together
					 
### Code 
```
class Solution {  
    public long[] minimumCosts(int[] regular, int[] express, int switchingCost) 
    {      
      long[] minCostReg = new long[regular.length+1];
      long[] minCostExp = new long[regular.length+1];
      long[] ans = new long[regular.length];
        
      minCostReg[0] = 0;
      minCostExp[0] = switchingCost;
        
      for (int i = 0; i<regular.length; i++)  
      {     
           ans[i] = 
                Math.min(
                    (minCostReg[i] + regular[i]), // Going from reg stop to next reg
                    (minCostExp[i] + express[i]) // Going from prev express stop to cur express
                );
          
          minCostReg[i+1] = Math.min(
              minCostReg[i] + regular[i], // going from previous reg to cur reg
              minCostExp[i] + express[i]  // going from previous exp to cur expr stop and then switching lanes to reg
          );

          minCostExp[i+1] = Math.min(
              minCostReg[i+1] + switchingCost, // reaching cur reg stop and switching to express
              minCostExp[i] + express[i] // moving from previous exp to cur expres
          );    
      }
    return ans;        
   }   
}
```
 ### Dry Run

```
Input: regular = [11,5,13], express = [7,10,6], expressCost = 3
Expected Output: [10,15,24]
```

 
 ```
 ##############
Iteration 1
##############
i = 0
minCostReg = [0, 0, 0, 0]
minCostExp = [3, 0, 0, 0]
ans[i] = Math.min( 0 + 11, 3 + 7)
ans = [10, 0, 0]
minCostReg[i+1] = Math.min( 0 + 11, 3 + 7)
minCostReg = [0, 10, 0, 0]
minCostReg[i+1] = Math.min( 0 + 3, 3 + 7)
minCostExp = [3, 10, 0, 0]
##############
Iteration 2
##############
i = 1
minCostReg = [0, 10, 0, 0]
minCostExp = [3, 10, 0, 0]
ans[i] = Math.min( 10 + 5, 10 + 10)
ans = [10, 15, 0]
minCostReg[i+1] = Math.min( 10 + 5, 10 + 10)
minCostReg = [0, 10, 15, 0]
minCostReg[i+1] = Math.min( 10 + 3, 10 + 10)
minCostExp = [3, 10, 18, 0]
##############
Iteration 3
##############
i = 2
minCostReg = [0, 10, 15, 0]
minCostExp = [3, 10, 18, 0]
ans[i] = Math.min( 15 + 13, 18 + 6)
ans = [10, 15, 24]
minCostReg[i+1] = Math.min( 15 + 13, 18 + 6)
minCostReg = [0, 10, 15, 24]
minCostReg[i+1] = Math.min( 15 + 3, 18 + 6)
minCostExp = [3, 10, 18, 24]
Ans = [10, 15, 24]
 ```

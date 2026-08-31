# C++ DP Solution w/ Detailed Explanation

**Author:** Dennosity
**Votes:** 171
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/748271/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/748271/)

---

The problem tells us "Every time you guess wrong, I'll tell you whether the number I picked is higher or lower." This means our target number is within `[1,n]` and guessing incorrectly number `x` will tell us that our target is either between `[1,x)` OR `(x,n]`. In turn our answer to guaranteeing a win between `[1,n]`  is equal to our solution to guaranteeing a win between `[1,x)` OR `(x,n]` plus the cost of guessing `x` incorrectly. Through this we should see that the each incorrect guess breaks down into our original problem just with different bounds. Since the problem also asks us to "find out how much money you need to have to guarantee a win" we need to assume the worst case scenario, if guaranteeing a win between `[1,x)` cost more than that of `(x,n]` then we assume the former. If you have an idea on how to approach the problem you should stop reading and try it out for yourself. 

1. This problem is a classic [merging intervals](https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns#Merging-Intervalshttp://) problem. To do this we initialize a 2D vector/array where the rows represent the beginning of a range (inclusive) and the columns represent its end (exclusive). For example, dp[0][3] represents the indices `[0,2]`  and for our problem the numbers `[1,3]`. Since the range is exlusive at the end we initialize the vector to be of size `n` by `n+1`.

```
vector<vector<int>> dp(n+1, vector<int>(n+1, 0));
```

2.  We take a bottom-up approach to this problem as before answering dp[0][3] we answer dp[0][2] 
```
for(int len=2; len<=n; ++len){
	for(int begin=0; begin<=n-len; ++begin){
		int end = begin + len;
		//...
        }
     }
```

3. To find the minimum money necessary between a given range we use our earlier idea from the intro. We iterate through all possible guesses between our given range and choose the guess that is expected to cost us the least while expecting the worst possible outcome. Combine this with `2)` and we have our solution. 
```
for(int i=begin; i<end; ++i){
	int numPicked = i+1;
	if(i == begin){
		dp[begin][end] = numPicked + dp[begin+1][end];
	} else {
		dp[begin][end] = min(dp[begin][end], max(dp[begin][i], dp[i+1][end]) + numPicked);
	}
```
4. **To illustrate the process**

len = 2
* dp[0][2] = 1 `(Given the range was between 1 and 2 (inclusive) the worst case scenario, while minimizing costs, is to guess 1 incorrectly and then choose 2 without penalty)` or `1 + dp[2][2] ` 
* dp[1][3] = 2
* ...
* dp[n-2][n] =n-1

len  = 3
* dp[0][3] = 2` (Given the range was between 1 and 3 we could guess 2 and then our next guess is guarenteed to be correct)`  
* dp[1][4] = 3
* ...

len = 4
* dp[0][4] = 4 `Given the range was between 1 and 4 we guess 1 and then guess 3 then our next guess will guarentee our answer.` 
 Here I would like to illustrate that the solution doesn't rely on binary search to minimize the cost. Using binary,  our guess would begin at `2` followed by `3` (assuming the worst case scenario `target = 4`). A binary search was what I initially thought of, but this clearly disproves the approach.
 
5) **Full Solution** (please don't copy pasta the solution without reading the post!)
```
class Solution {
public:
    int getMoneyAmount(int n) {
        vector<vector<int>> dp(n+1, vector<int>(n+1, 0));
        for(int len=2; len<=n; ++len){
            for(int begin=0; begin<=n-len; ++begin){
                
                int end = begin + len;
                for(int i=begin; i<end; ++i){
                    int numPicked = i+1;
                    if(i == begin){
                        dp[begin][end] = numPicked + dp[begin+1][end];
                    } else {
                        dp[begin][end] = min(dp[begin][end], max(dp[begin][i], dp[i+1][end]) + numPicked);
                    }
                    
                }
            }
        }

        return dp[0][n];
    }
};
```
6) Useful [post](https://leetcode.com/discuss/general-discussion/458695/dynamic-programming-patterns) for those starting out with DP
7) Don't forget to upvote if this post helped you :)
	...if it didn't please don't downvote... I'm sorry I'll do anything!

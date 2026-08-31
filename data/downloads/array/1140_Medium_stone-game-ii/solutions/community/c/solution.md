# C++ memoization with proper explanation

**Author:** roger2001
**Votes:** 28
**Link:** [https://leetcode.com/problems/stone-game-ii/solutions/1247693/](https://leetcode.com/problems/stone-game-ii/solutions/1247693/)

---

```
class Solution {
public:
    int dp[101][1001];
    int solve(vector<int>& piles,int ind, int m){
        //base condn
        if(ind>=piles.size()){
            return 0;
        }
        if(dp[ind][m]!=-1){
            return dp[ind][m];
        }
        int sum = 0;
        
        // let us suppose a edge scene 
        // suppose we had already traversed our array upto n-4th index, we are having only 4 cells left  to check
        // now see if our player found those 4 cells into its range(i.e from 1 to 2*m)
        // he will consume all those to make its profit max 
        if(ind+2*m>=piles.size()){
            for(int i=ind;i<piles.size();i++){
                sum+=piles[i];     
            }
            return dp[ind][m] = sum;
        }
        
        int value = INT_MIN;
        
        for(int i=1;i<=m*2;i++){
            sum+=piles[ind+i-1];
            
            // the sum indicates our current player profit
            // the recursive call indicates the optimal profit of our opponent
            // so, the value indicates the difference between our profit and our                        opponent profit
            // as if this will be maximum then only player will win the game
            value = max(value,sum-solve(piles,ind+i,max(m,i)));
        }
        return dp[ind][m] = value;
    }
    
    
    int stoneGameII(vector<int>& piles) {
        // this question is 90% same as Stone game-III
        int m = 1;
        memset(dp,-1,sizeof(dp));
        // VALUE is basically the diffrence between the profit of player A and B
        int value = solve(piles,0,m);
        
        // now how to find maximum stones of alice from this value
        // profit_alice + profit_bob = total_stones ....... eq(1)
        // profit_alice - profit_bob = value        ....... eq(2)
        // we add both equation 1 and 2
        // 2*profit_alice = total_stones+value
        
        int total_stones = 0;
        for(int i=0;i<piles.size();i++){
            total_stones+= piles[i];
        }
        int profit_alice = (total_stones+value)/2;
        return profit_alice;
        
    }
};
```
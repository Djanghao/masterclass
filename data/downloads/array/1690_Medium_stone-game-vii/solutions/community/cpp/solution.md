# C++ memoization code with proper explanation

**Author:** roger2001
**Votes:** 49
**Link:** [https://leetcode.com/problems/stone-game-vii/solutions/1248811/](https://leetcode.com/problems/stone-game-vii/solutions/1248811/)

---


```
class Solution {
public:
    int dp[1001][1001];
    int solve(vector<int>& stones, int i, int j, int sum){
        if(i>=j){
            return 0;
        }
        if(sum<=0){
            return 0;
        }
        if(dp[i][j]!=-1){
            return dp[i][j];
        }
        
        // both the player have two options either they can choose the first element
        // or they can choose the last element
        // they will choose that particular element which will give them the maximum                profit
        // as player A wants to maximize its profit
        // and player B wants to minimize the difference between them
        // hence both will choose the maximum value only
        int choose_front = sum-stones[i]-solve(stones,i+1,j,sum-stones[i]);
        int choose_back = sum-stones[j]-solve(stones,i,j-1,sum-stones[j]);
        
        int profit = max(choose_front,choose_back);
        return dp[i][j] = profit;
    }
    int stoneGameVII(vector<int>& stones) {
        int n = stones.size();
        int sum = 0;
        for(int i=0;i<n;i++){
            sum+=stones[i];
        }
        memset(dp,-1,sizeof(dp));
        // same as stone game-II, III 
        // here value is the difference between profit of A and profit of B
        int value =  solve(stones,0,n-1,sum);
        return value;
    }
};
```

---------------------------------------------------------------------------------------------------------------
for any state[i,j] ,
there are two things either i can choose front element or back element.

let us take example for front -> int choose_front = sum-stones[i]-solve(stones,i+1,j,sum-stones[i]); 
1.  sum-stones[i] => this is the profit that current player make if he choose the front element
2.  solve(stones,i+1,j,sum-stones[i]) => the value of this function represent the optimal profit that the opponent can make
hence  equation [ int choose_front = sum-stones[i]-solve(stones,i+1,j,sum-stones[i]) ] represents the difference between current player's profit and opponent's profit.
* same for choose_back case.

As question required, difference in Alice and Bob's score if they both play optimally. So by maximum profit for current state[i,j] we mean, the maximum difference between current player's profit and opponent's profit (that can come from either choosing back_element or the front_element).
**Time complexity -> O(n*n)**

---------------------------------------------------------------------------------------------------------------

**Try these questions also**
*logic is 80% same*
[1140. Stone Game II](https://leetcode.com/problems/stone-game-ii/discuss/1247693/C%2B%2B-memoization-with-proper-explanation)
[1406. Stone Game III](https://leetcode.com/problems/stone-game-iii/)

**Please upvote 0'_'0**
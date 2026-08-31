# Easy DP solution with full explanation in C++

**Author:** the_unknown_10
**Votes:** 25
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/1235478/](https://leetcode.com/problems/last-stone-weight-ii/solutions/1235478/)

---

So, if you look the problem carefully you will find this is the problem of minimum subset sum difference, if you can't, I'll show you how. 
See the main line is that we have to store the value y-x where y and x are the weights of any two choosen stones. And if the weights are same both the stones will be destroyed, this sums up the problem as we have two divide the array stones in two subsets in such a way that the difference between the sums of the subsets should be minimum.

Now in order to solve the minimum subset sum difference problem we have to find two subsets say S1 and S2 but we can write S2 as (Sum-S1) where sum is the sum of all the elements in the array stones. Now our task is to minimise abs(Sum-(2*S1)).
In order to handle the absolute value we will take S2>S1.

Now we have to find the values S1 can take and return the max of them in order to min the above equation (as S1 is +ve). In order to do that we will maintain an array dp[n+1][sum+1] and for it's last row if(dp[n][j]==true) we will push the corresponding j value to a vector.

At the end we have to find the max value of the resultant vector say its max.
So return sum-(2*max)
Hit like if you like my approach :-).
And here is the simple code
```
class Solution {
public:
    int lastStoneWeightII(vector<int>& stones) {
        int sum=0, n=stones.size();
        for(int i=0; i<n; i++){
            sum += stones[i];
        }
        
        bool dp[n+1][sum+1];
        for(int i=0; i<n+1; i++){
            for(int j=0; j<sum+1; j++){
                if(i==0)
                    dp[i][j]=false;
                if(j==0)
                    dp[i][j]=true;
            }
        }
        for(int i=1; i<n+1; i++){
            for(int j=1; j<sum+1; j++){
                if(stones[i-1]<=j){
                    dp[i][j]=dp[i-1][j]+dp[i-1][j-stones[i-1]];
                }
                else
                    dp[i][j]=dp[i-1][j];
            }
        }
        vector<int> temp;
        for(int j=0; j<=(sum/2); j++){
            if(dp[n][j]==true){
                temp.push_back(j);
            }
        }
        int max=-1;
        for(int i=0; i<temp.size(); i++){
            if(temp[i]>max)
                max=temp[i];
        }
        
        int res = sum - (2*max);
        return res;
    }
};
```
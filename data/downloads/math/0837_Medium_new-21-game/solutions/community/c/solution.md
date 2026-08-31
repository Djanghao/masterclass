# C++ solution using dp

**Author:** Maitreya47
**Votes:** 8
**Link:** [https://leetcode.com/problems/new-21-game/solutions/1286733/](https://leetcode.com/problems/new-21-game/solutions/1286733/)

---

We store the probability of every state, i.e. probability of getting 2, 3, etc at any point- in our dp vector. Realise that play will stop at k, so atmax the player will draw is (k-1) + maxPts, so we are guaranteed to get anything <= k-1-maxPts. We start with zero points so probability of ending up with 0 points also = 1. After checking k, we set dp[0] = 1 (for same reason as stated).
Now comes the tricky part, we iterate for i=0 to n and in each iteration update the dp[i+1] (hence go until <n, as we need to update upto dp[n].
In each iteration, check if 'i' is <k, if it is add its value in sum and calcuate dp[i+1] = sum/maxPts.
This is done because we are checking how many ways are present to reach that state. For example:
f(1)- only one possible way- from f(0) draw card=1
f(2)- two ways, either draw card=2 from f(0) or draw card=1 from f(1)
hence we keep adding the dp[i] and atlast divide it with maxPts as we can only draw card between range [1, maxPts].
Now, if i>=maxPts, we need to subtract dp[i-maxPts] from it- take this example, we have maxPts=5, hence we can draw any card [1, 2, 3, 4, 5] with equal probability. Now if we need to calculate f(7)
f(7) = f(6) (after this draw 1) + f(5) (after this draw 2)+ f(4) (after this draw 3)+ f(3) (after this draw 4)+ f(2) (after this draw 5), no other states possible that can reach f(7) in 1 step. Hence, if our current sum contains value of dp[1] (f(1)),  that needs to subtracted from sum. 
Atlast, add all the probabilities of states that are possible stopping values, i.e. we can stop at k, k+1, or anything else upto n (remember we checked n>=k-1+maxPts at the start). Now the summation of this probabilities will be our answer.
```
class Solution {
public:
    double new21Game(int n, int k, int maxPts) {
        if(k==0 || n>=k+maxPts-1)
            return (double) 1;
        vector<double> dp(n+1);
        dp[0]=1;
        double sum = 0;
        for(int i=0; i<n; i++)
        {
            if(i<k)
                sum+=dp[i]; // reach f(2) by directly drawing f(2) or f(1) and f(1) 
            if(i>=maxPts)
                sum-=dp[i-maxPts];
                
            dp[i+1] = sum/maxPts;
        }
        double ret = 0;
        for(int i=k; i<=n; i++)
            ret+=dp[i];
        return ret;
    }
};
```
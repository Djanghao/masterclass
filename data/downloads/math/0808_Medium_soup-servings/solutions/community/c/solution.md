# C++ Recursive DP Memorization Solution

**Author:** ahsan83
**Votes:** 10
**Link:** [https://leetcode.com/problems/soup-servings/solutions/895866/](https://leetcode.com/problems/soup-servings/solutions/895866/)

---

Runtime: 8 ms, faster than 60.53% of C++ online submissions for Soup Servings.
Memory Usage: 138.8 MB, less than 10.29% of C++ online submissions for Soup Servings.

As each operation has equal probability 0.25, we add the probability of the operations as different
operations in same step are mutually exclusive and multiply 0.25 each step operations as nested operations are dependent.

As we want to find the probability that soup A will be empty first, plus half the probability that A and B become empty at the same time, there are 3 base cases:

```
A<=0 and B<=0 means two soup ended at the same time which has half probability means 0.5 cause both
soup empty at the same time and we want its half probability

A<=0 and B>0 means soup A ended first which has full probability means 1.0 cause it comes to the state
where soup A empty first and want its full probability

A>0 and B<=0 means soup B ended first which has 0 probability cause we can not reach any state from
it where A will empty first or  A and B empty at the same time
```

We use memorization to reuse the precalculated results later. 

```
class Solution {
public:
    vector<vector<double>>dp;
    
    double eatSoup(int A, int B)
    {
        // A empty first, has full probability
        if(A<=0 && B>0) return 1.0;
        
        // A and B empty at same time, has half probability
        if(A<=0 && B<=0) return 0.5;
        
        // B empty first, has 0 probability
        if(A>0 && B<=0) return 0.0;

        // return precalculated result
        if(dp[A][B]!=-1.0) return dp[A][B];
        
        // run recursion for all four operations and add their proabbility results and multiply by 0,25
        // as all operations has equal probability 0.25 and also mutually exclusive 
        return dp[A][B] = 0.25*(eatSoup(A-100,B)+eatSoup(A-75,B-25)+eatSoup(A-50,B-50)+eatSoup(A-25,B-75));

    }

    double soupServings(int N){

        // Corner case probability becomes 1 when N>5000
        if(N>=5000) return 1.0;
        
        // NxN dp vector holds the probability result for soup state (A,B)
        dp.resize(N+1,vector<double>(N+1,-1.0));

        // call recursion with (A=N, B=N)
        return eatSoup(N,N);
    }
};
```
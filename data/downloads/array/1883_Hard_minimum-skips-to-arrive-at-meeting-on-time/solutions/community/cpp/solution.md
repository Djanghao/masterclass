# C++ || DP || Memoization || Explained || Clean code

**Author:** KR_SK_01_In
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1950243/](https://leetcode.com/problems/minimum-skips-to-arrive-at-meeting-on-time/solutions/1950243/)

---

```
  double dp[1001][1001];
    
    int ceil_function(double val)
    {
        int a=val; // a is integer part of val
        if(a==val)
        {
            return val; // if both interger then return 
        }
        
        return a+1; // val = 2.349 , a=2 , in this case we have to return 3i.e a+1
    }
    
    // i is going from n-1 to 0 .
    // we are taking skips =k , k can be (0 ,1 ,2 .. n-1) .
    // we have to minimise the value of k
    
    double dfs(vector<int>& dist , int speed , int skips , int i)
    {
        if(i<0)
        {
            return 0;
        }
        
        if(dp[i][skips]!=0)
        {
            return dp[i][skips];
        }
        
    // if rest is not skipped , i.e rest has been taken i.e we will take to full integer.
        
        double t = (double)dist[i]/speed;
        
        double val= ceil_function( (double) dfs(dist , speed , skips , i-1) + t );
        
        if(skips>0)
        {
            val = min( val , (double) dfs(dist , speed , skips-1 , i-1) +  t - (1e-7)  );
        }
        
        // 1e-8 or u can use 1e-7 is used for precision in storing time .
        
        return dp[i][skips]=val;
    }
    int minSkips(vector<int>& dist, int speed, int time) {
        memset(dp , 0 , sizeof(dp));
        
        int n=dist.size();
        
        for(int i=0;i<dist.size();i++)
        {
            if(dfs(dist , speed ,i , n-1)<=time)  // considering i skips 
            {
                return i;// at any i , time_calculated  value is less than the time return i
            }
        }
        
        return -1;
    }
```
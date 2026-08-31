# C++ || Recursion+DP(tabulation) || beginner friendly || intutive

**Author:** batsy01
**Votes:** 7
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/3339034/](https://leetcode.com/problems/dice-roll-simulation/solutions/3339034/)

---

# Intuition
if start=1, sequence can be -> (1)(...), (11)(...), (111)(...), (1111)(...)

# Approach
See recursive code:
```
    int fun(int n, int start, vector<int>& rollmax)
    {
        //eg start = 1 if possible according to rollmax: -> (1)(...), (11)(...), (111)(...), (1111)(...)

        if(n==0) return 0;

        int ans=0;
        for(int taken=1;taken<=rollmax[start-1];taken++) //i is how many starts we have taken in beginning
        {
            if(taken==n) //can not take more than n
            {
                ans++;
                break;
            }

            for(int next_start=1;next_start<=6;next_start++)
            {
                if(next_start!=start)
                {
                    if(n-taken>0)
                    {
                        ans+=fun(n-taken,next_start,rollmax);
                        ans%=mod;
                    }
                }
            }
        }
        return ans;
    }

//-----------------------------------
//main: 
        int ans=0;
        for(int start=1;start<=6;start++)
        {
            ans+=fun(n,start,rollMax);
            ans%=mod;
        }
        return ans;

```

# Complexity
- Time complexity:
O(N^6^maxRoll[i])

- Space complexity:
- O(N*6)

# Code
```
class Solution {
public:
    const int mod=1e9+7;

    int dieSimulator(int n, vector<int>& rollMax) {

        // Intution:  if start=1, sequence can be -> (1)(...), (11)(...), (111)(...), (1111)(...)

        int dp[n+1][7];
        memset(dp,0,sizeof(dp));

        for(int i=1;i<=n;i++)
        {
            for(int start=1;start<=6;start++)
            {
                int ans=0;
                for(int taken=1;taken<=rollMax[start-1];taken++)
                {
                    if(taken==i) //can not take more than i
                    {
                        ans++;
                        break;
                    }
                    
                    for(int next_start=1;next_start<=6;next_start++)
                    {
                        if(next_start!=start)
                        {
                            ans+=dp[i-taken][next_start];
                            ans%=mod;
                        }
                    }
                }

                dp[i][start]=ans;
            }
        }

        int f_ans=0;
        for(int start=1;start<=6;start++) 
        {
            f_ans+=dp[n][start];
            f_ans%=mod;
        }
        return f_ans;
    }
};

```
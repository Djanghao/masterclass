# C++ || Brute ( Recursion ) -> Better ( DP ) -> Optimal ( DP + Binary Search ) || Clear and Concise

**Author:** jk20
**Votes:** 49
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/1613010/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/1613010/)

---

## 1. Brute Force ( Recursion )
 In brute force we use simple recursion technique and opt between two choices:
1. Opt for an ride and add value to the answer
2. Skip the ride and move ahead

```
class Solution {
public:
    long long recur(vector<vector<int>>&rides,int nn,int idx)
    {
        if(idx>=nn)
            return 0;
        int i;
        for(i=idx+1;i<nn;i++)
        {
            if(rides[i][0]>=rides[idx][1])
                break;
        }
        long long op1=recur(rides,nn,idx+1);
        long long op2=rides[idx][1]-rides[idx][0]+rides[idx][2]+recur(rides,nn,i);
        
        return max(op1,op2);
    }
    long long maxTaxiEarnings(int n, vector<vector<int>>& rides) {
        
        sort(rides.begin(),rides.end());
        int nn=rides.size();
        
        return recur(rides,nn,0);
    }
};
```

## 2. Better Approach ( Recursion + Memoization )

```
class Solution {
public:
    long long dp[(int)1e5];
    long long recur(vector<vector<int>>&rides,int nn,int idx)
    {
        if(idx>=nn)
            return 0;
        int i;
        if(dp[idx]!=-1)
            return dp[idx];
        for(i=idx+1;i<nn;i++)
        {
            if(rides[i][0]>=rides[idx][1])
                break;
        }
        long long op1=recur(rides,nn,idx+1);
        long long op2=rides[idx][1]-rides[idx][0]+rides[idx][2]+recur(rides,nn,i);
        
        return dp[idx]=max(op1,op2);
    }
    long long maxTaxiEarnings(int n, vector<vector<int>>& rides) {
        
        sort(rides.begin(),rides.end());
        int nn=rides.size();
        memset(dp,-1,sizeof dp);
        return recur(rides,nn,0);
    }
};
```

## 3. Optimal Approach ( Recursion + Memoization + Binary Search )

```
class Solution {
public:
    long long dp[(int)1e5];
   int find(vector<vector<int>>&events,int start,int toFind)
    {
        int low=start;
        int high=events.size()-1;
        int ans=-1;
        while(low<=high)
        {
            int mid=(low+high)/2;
            
            if(events[mid][0]>=toFind)
            {
                ans=mid;
              high=mid-1;
            }
            else
            {
                low=mid+1;
            }
        }
      
        return ans;
        
    }
    long long recur(vector<vector<int>>&rides,int nn,int idx)
    {
        if(idx>=nn)
            return 0;
       if(idx<0)
           return 0;
        if(dp[idx]!=-1)
            return dp[idx];
        
        /* O(n) time in worst case */
        // for(i=idx+1;i<nn;i++)
        // {
        //     if(rides[i][0]>=rides[idx][1])
        //         break;
        // }
        
        /* O(logn) time in worst case Binary Search */
        int i=find(rides,idx+1,rides[idx][1]);
        long long op1=recur(rides,nn,idx+1);
        long long op2=rides[idx][1]-rides[idx][0]+rides[idx][2]+recur(rides,nn,i);
        
        return dp[idx]=max(op1,op2);
    }
    long long maxTaxiEarnings(int n, vector<vector<int>>& rides) {
        
        sort(rides.begin(),rides.end());
        int nn=rides.size();
        memset(dp,-1,sizeof dp);
        return recur(rides,nn,0);
    }
};
```


**Pls upvote if you found the post to be helpful.**


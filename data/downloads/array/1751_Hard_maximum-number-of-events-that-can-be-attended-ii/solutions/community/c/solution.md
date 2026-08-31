# C++ || Brute ( Recursion ) -> Better ( DP ) -> Optimal ( DP + Binary Search ) || Explained

**Author:** jk20
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/1611263/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/1611263/)

---

## 1. Brute Force ( Recursion ) 

In brute force we use simple recursion technique and opt between two choices:
			 1. Opt for an activity and add value to the answer
			 2. Skip the activity and move ahead

```
class Solution {
public:
    int recur(int idx,vector<vector<int>>&events,int k)
    {
        if(idx>=events.size() or k==0)
            return 0;
        int i;
        for(i=idx+1;i<events.size();i++)
        {
            if(events[i][0]>events[idx][1])
            {
                break;
            }
        }
        int op1=recur(idx+1,events,k);
        int op2=events[idx][2]+recur(i,events,k-1);
        
        return max(op1,op2);
    }
    int maxValue(vector<vector<int>>& events, int k) {
        
        //Sort the events first by Start Time and If
        // StartTime of two events are same sort by 
        // EndTime of those Events
        
        sort(events.begin(),events.end(),[]
            (vector<int>&a,vector<int>&b)
             {
                 if(a[0]==b[0])
                     return a[1]<b[1];
                 return  a[0]<b[0];
             }
            );
        
        return recur(0,events,k);
        
        
    }
};
```
## 2. Better Approach ( Recursion + Memoization ) 

```
class Solution {

public:
    
    int recur(vector<vector<int>>&dp,int idx,vector<vector<int>>&events,int k)
    {
        if(idx>=events.size() or k==0)
            return 0;
        int i;
        
        if(dp[idx][k]!=-1)
            return dp[idx][k];
        for(i=idx+1;i<events.size();i++)
        {
            if(events[i][0]>events[idx][1])
            {
                break;
            }
        }
        int op1=recur(dp,idx+1,events,k);
        int op2=events[idx][2]+recur(dp,i,events,k-1);
        
        return dp[idx][k]=max(op1,op2);
    }
    int maxValue(vector<vector<int>>& events, int k) {
        
        //Sort the events first by Start Time and If
        // StartTime of two events are same sort by 
        // EndTime of those Events
        
        sort(events.begin(),events.end(),[]
            (vector<int>&a,vector<int>&b)
             {
                 if(a[0]==b[0])
                     return a[1]<b[1];
                 return  a[0]<b[0];
             }
            );
        int n=events.size();
        vector<vector<int>>dp(n+1,vector<int>(k+1,-1));
        return recur(dp,0,events,k);
        
        
    }
};
```


## 3. Optimal Approach ( Recursion + Memoization + Binary Search )

In our recursion function we are finding new activity that has start time greater than the current activity's end time. This may take up to O ( n ) 
time. 

Since the activities are already sorted we can use Binary Search Technique to solve the problem.

```

class Solution {

public:
    int find(vector<vector<int>>&events,int start,int toFind)
    {
        int low=start;
        int high=events.size()-1;
        int ans=-1;
        while(low<=high)
        {
            int mid=(low+high)/2;
            
            if(events[mid][0]>toFind)
            {
                ans=mid;
              high=mid-1;
            }
            else
            {
                low=mid+1;
            }
        }
       // cout<<ans<<endl;
        return ans;
        
    }
    int recur(vector<vector<int>>&dp,int idx,vector<vector<int>>&events,int k)
    {
        if(idx==-1)
            return 0;
        if(idx>=events.size() or k==0)
            return 0;

        
        if(dp[idx][k]!=-1)
            return dp[idx][k];
        // for(i=idx+1;i<events.size();i++)
        // {
        //     if(events[i][0]>events[idx][1])
        //     {
        //         break;
        //     }
        // }
        
        
        // Binary Search the value 
        int i=find(events,idx+1,events[idx][1]);
        int op1=recur(dp,idx+1,events,k);
        int op2=events[idx][2]+recur(dp,i,events,k-1);
        
        return dp[idx][k]=max(op1,op2);
    }
    int maxValue(vector<vector<int>>& events, int k) {
        
        //Sort the events first by Start Time and If
        // StartTime of two events are same sort by 
        // EndTime of those Events
        
        sort(events.begin(),events.end(),[]
            (vector<int>&a,vector<int>&b)
             {
                 if(a[0]==b[0])
                     return a[1]<b[1];
                 return  a[0]<b[0];
             }
            );
        int n=events.size();
        vector<vector<int>>dp(n+1,vector<int>(k+1,-1));
        return recur(dp,0,events,k);
        
        
    }
};
```

**Please Upvote if you gained something**

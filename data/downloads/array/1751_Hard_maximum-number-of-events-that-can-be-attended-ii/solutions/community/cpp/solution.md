# C++✅✅ | Faster🚀 than 95%🔥| Explained❗| 2D - DP + MEMOIZATION + BINARY SEARCH | Clean Code |

**Author:** mr_kamran
**Votes:** 99
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766452/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766452/)

---

# PLEASE DO UPVOTE!!!!!

**CONNECT WITH ME ON LINKEDIN :  https://www.linkedin.com/in/md-kamran-55b98521a/**

# Intuition

Intuition is very simple, first we will sort our vector according to the start values of events, then we have two options with us either we can attend the event, or we can simply not attend that particular event, incase if we attend an event, we get that particular value of attending the event (ie, events[index][2]). Also,we can only attend a new event after this particular event gets over, so we have to search an event such that its starting time is greater than our current event's ending time which we have considered, we will take the maximum one of this two cases.

**Tip : You can a use a for loop too for searching the next index to be considered but that will give a TLE verdict, thats why we have to use Binary Search Here**


# Approach

1. Sort the Vector According to Starting Time (ie. events[index][0])
2. Initialize DP function
3. if we are choosing an event then add its value to c1 and search a new index whose starting time is greater than current ending time, and decrease k by 1
4. if not choosing the event simply increase index value
5. Take Maximum of these two cases


# Time Complexity 

**O(N(K + log(N)))**, N is size of the array, K is maximum events allowed to attend

# Space Complexity

**O(NK)**, N is size of the array, K is maximum events allowed to attend

# Code
```
class Solution {
public:

int BS(int index,vector<vector<int>>&events,int value)
{
    int lo = index;
    int hi = events.size()-1;
    int req = -1;
    while(hi>=lo)
    {
      int mid = lo+(hi-lo)/2;
      if(events[mid][0] > value)
      {
        req = mid;
        hi = mid-1;
      }
      else lo = mid+1;
    }
    return req;
}

int helper(int i,vector<vector<int>>&events,int k, vector<vector<int>>&dp)
{
  if(i >= events.size() || k == 0 || i == -1) return 0;
  if(dp[i][k] != -1) return dp[i][k];

  int index = BS(i+1,events,events[i][1]);

  int c1 = events[i][2] + helper(index,events,k-1,dp);
  int c2 = helper(i+1,events,k,dp);

  return dp[i][k] = max(c1,c2);
}


 int maxValue(vector<vector<int>>& events, int k){

    sort(events.begin(),events.end());
    int n = events.size();
    vector<vector<int>>dp(n+5,vector<int>(k+1,-1));
    return helper(0,events,k,dp);
  }
};

```
![b62ab1be-232a-438f-9524-7d8ca4dbd5fe_1675328166.1161866.png](./images/0.png)
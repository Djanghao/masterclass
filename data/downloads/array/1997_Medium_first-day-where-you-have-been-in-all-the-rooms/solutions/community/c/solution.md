# C++ | Detailed Explanation | O(n) DP

**Author:** Akshat_Upadhyay
**Votes:** 16
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1463203/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1463203/)

---

There two major observation in the problem.
(i) If the count of visit of ith room is odd we cannot move forward.
(ii) In order to move forward from i -> i+1 room all rooms <= i must have an even count of visit

Now let us assume dp[i] is no. of days required to reach i rooms
dp[0] = 0

We start from room 1 now we'll have basically two condn. dp[i-1] == nextVisit[i-1]
or dp[i-1] != nextVisit[i-1];

(i) For fist condn. we will always require 2 more days to reach the next day.
say you have nextVisit as : [0,1,2]

for 0 -> 0 days
    1 -> 2 days
    2 -> 4 days
    
   and so on

so we can say dp[i] = dp[i-1] + 2;

(ii) For second condn. it's a path we retrace say we have nextVisit as : [0,1,0]

for 0 and 1 it'll be case(i)
for 2 our path so far is 0->0->1->1->2
now from 2 we reach 0 and we again retrace that path hence it becomes
0->0->1->1->2->0->0->1->1->2->3

So, we can see total days require is 10 and we can generalise this as

dp[i] = dp[i-1] + (dp[i-1] - dp[nextVisit[i-1]]) + 2

Which means as follows
dp[i-1] : is the no. of days require to reach i-1 rooms
dp[i-1] - dp[nextVisit[i-1]] : is the no. of days to reach i-1th room again from nextVisit[i-1]
2 : is the i-1 to nextVisit[i-1] + i-1 to i in above example it is from 2->0 and 2->3 that is
    2 extra days will always be required.

If you like the explaination please upvote.

```
class Solution {
public:
    int firstDayBeenInAllRooms(vector<int>& nextVisit) {
        int n = nextVisit.size();
        int mod = 1e9 + 7;
        long long dp[n];
        dp[0] = 0;
        
        for(int i = 1 ; i < n ; i++)
        {
            if(dp[i-1] == nextVisit[i-1])
                dp[i] = dp[i-1] + 2;
            else
                dp[i] = (2 + 2*dp[i-1] + mod - dp[nextVisit[i-1]])%mod;
        }
        
        return (int) dp[n-1]%mod;
    }
};
```
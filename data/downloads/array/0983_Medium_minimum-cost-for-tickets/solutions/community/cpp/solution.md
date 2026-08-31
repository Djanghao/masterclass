# explanation from someone who took 2 hours to solve

**Author:** RohanPrakash
**Votes:** 748
**Link:** [https://leetcode.com/problems/minimum-cost-for-tickets/solutions/630868/](https://leetcode.com/problems/minimum-cost-for-tickets/solutions/630868/)

---

**before starting with DP one must master the art of recursion**
it took me 2 hours to solve this and 1 hours wo write this post , hopefully you will understand the question. and how we get the solution

**step1 : understand the problem**
here we are given days and cost of passes for 1 day pass, week pass, month pass, "pass means , once you buy it is valid for that some period of time which means free travel during that period"

**step 2: logic building and deriving recurence relation**

**1st sub step : asking questions**
when we buy pass what should we think ? 
we should think like, what pass should i buy today ? 
should i buy pass of one day , week or month pass ? 

**2nd sub step : Ariving at recurence relation**
if i buy one month pass , then i would be able to travel for next 30 days for free, then my cost will be 30 day pass cost + cost for remaining days after 30 day
if i buy one week pass , then i would be able to travel for next 7 days for free, then my cost will be 7 day pass cost + cost for remaining days after 30 day
if i buy 1 day pass ....... ("you get it");

so we can skip to next day OR , next week OR next month ,
so cost for i would total pay today is going to be ? ... ? 
```
# a = cost[one day pass] + cost of next day
# b = cost[ week pass ] + cost of next day after week
# c = cost[ month pass ] + cost of next day after month
```

ie we can skip 1, 7, or 30 days ;
cost = min( a , b , c )

here is 1st solution using recursion ( TLE )
**step 3: code recursive solution**
```
 int sub(vector<int> &day, vector<int> &cost, int si)		// si denotes starting index
    {
        int n = day.size();
        if(si>=n)   return 0;
        
        int cost_day = cost[0] + sub(day , cost , si+1);
        
        int i;
        for(i = si ; i<n and day[i]<day[si]+7 ; i++);   //skip till ith day is curr_day+7 as we are buying week pass
        int cost_week = cost[1] + sub(day, cost, i);
        
        for(i = si ; i<n and day[i]<day[si]+30 ; i++);   //skip till ith day is curr_day+30 as we are buying month pass
        int cost_month = cost[2] + sub(day, cost, i);      
        
        return min({cost_day, cost_week , cost_month  });
    }
    
    int mincostTickets(vector<int>& days, vector<int>& costs) {        
        return sub(days,costs,0);
    }
```
Now you know the sub problems so we can convert OUR recursion solution to top-down-memoization , ie we store our answers at each step before returning, then if we already knows the answer , we can return right back withour re calculating;

**step4 : memoization-top-down**
```
vector<int> dp;
    int sub(vector<int> &day, vector<int> &cost, int si)    // subproblem
    {
        int n = day.size();
        if(si>=n)   return 0;
        
        if(dp[si])  return dp[si];      // ie we aready knows the answer so no need to re calculate , return answer.
        
        int cost_day = cost[0] + sub(day , cost , si+1);
        
        int i;
        for(i = si ; i<n and day[i]<day[si]+7 ; i++);
        int cost_week = cost[1] + sub(day, cost, i);
        
        for(i = si ; i<n and day[i]<day[si]+30 ; i++);
        int cost_month = cost[2] + sub(day, cost, i);     
        
        dp[si] = min({cost_day, cost_week , cost_month  });   // we store answer for future references 
        
        return dp[si];
    } 
    int mincostTickets(vector<int>& days, vector<int>& costs) {        
        dp.resize(367);
        return sub(days,costs,0);    
    }
```

so you see , once we get to the recursive solution we converted it into DP top-dow using 3-4 lines.

**step 5 : now you know the base casses , you know the sub problems so try coming up with bottom up solution yourself** 

```
int mincostTickets(vector<int>& DAYS, vector<int>& cost) {
        
        unordered_set<int> days(DAYS.begin(),DAYS.end());
        vector<int> dp(367);
        
        for(int i=1 ; i<366 ; i++)
        {
            dp[i] = dp[i-1];
            if(days.find(i) != days.end())
            {
			// cost of ith day , decision of ith day will be
                dp[i] = min({ dp[i - 1] + cost[0],   // 1st case
                             dp[max(0, i - 7)] + cost[1],  // 2nd case
                             dp[max(0, i - 30)] + cost[2]});  // 3rd case
            }
        }
        return dp[365];
    }
```

**thanks for reading**
**previous tutorial on DP** 
https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/discuss/642422/Lets-solve-it-together-%3A-step-by-step

https://leetcode.com/problems/dungeon-game/discuss/745340/post-Dedicated-to-beginners-of-DP
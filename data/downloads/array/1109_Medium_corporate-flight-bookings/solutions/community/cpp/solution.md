# C++ Prefix sum Easy to Understand solution

**Author:** Me_999
**Votes:** 41
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/2221703/](https://leetcode.com/problems/corporate-flight-bookings/solutions/2221703/)

---

Idea:
For a given booking: [first,last,seats], this could be assumed as 'seats' number of passengers are boarding at the 'first' stop and leaving at the 'last+1' stop.

For example consider a booking [3,4,10], here 10 passengers boarded the flight at 3rd stop and leaving at the 5th stop.

So number of passengers at 3rd stop would be +10 and at 5th stop would be -10. Now the problem turns into finding the total number of passengers in the flight at each stop.

According to given testcase,  [[1,2,10],[2,3,20],[2,5,25]] 
Our stops array: [0,0,0,0,0,0] )(last =(6th)stop is destination stop and later we observe that it doesn't matter)
Consider 1st booking: +10 at 1st stop and -10 at 3rd stop => [10,0,-10,0,0]
Consider 2nd booking: +20 at 2nd stop and -20 at 4th stop => [10,20,-10,-20,0]
Consider 3rd booking: +25 at 2nd stop and -25 at 6th stop=>[10,45,-10,-20,0,-25]

So total passengers at each stop: [10,10+45,10+45-10,10+45-10-20,10+45-10-20+0,10+45-10-20+0-25]=[10,55,45,25,25,0]

Always at the destination stop count is 0 since all passengers are dropped finally so we don't need that stop.

**C++ code**
```
 vector<int> corpFlightBookings(vector<vector<int>>& bookings, int n) {
        vector<int>res(n+1,0);
        
        for(auto it:bookings){
            res[it[0]-1]+=it[2];
            res[it[1]]-=it[2];
        }
        
        for(int i=1;i<n;i++)
            res[i]+=res[i-1];
            
        res.pop_back();
        return res;
    }
```
Thank you!
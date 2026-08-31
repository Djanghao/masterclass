# c++ concise , beats 100% (both memory and time) with comments

**Author:** goelrishabh5
**Votes:** 9
**Link:** [https://leetcode.com/problems/corporate-flight-bookings/solutions/328942/](https://leetcode.com/problems/corporate-flight-bookings/solutions/328942/)

---

```
vector<int> res(n,0);
        vector<int> change(n+1,0);
        for(int i=0;i<bookings.size();i++)
        {
            change[bookings[i][0]-1]+=bookings[i][2]; // add no of seats to change[start] 
            change[bookings[i][1]]-=bookings[i][2]; // delete no of seats from change[end+1] , so when we add prev seats in future, this will cancel that addition
        }
        res[0]=change[0];
        for(int i=1;i<n;i++)
            res[i]+=res[i-1]+change[i]; // add prev and current seats
        return res;
```
# Easy solution with comments | beating 97%

**Author:** Ghost1818
**Votes:** 4
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/4680579/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/4680579/)

---

# Intuition
- You can only move ( one step forword ) if you have visited current index even times( minimum 2 times every index )


# Approach
- 2 visits if nextVisit[index]=index 
(kyuki usi index par dobara visit karke current index ke even count ho jayega then, index+1 par visit karenge)

- else part ( nextVisit[index]<index) 
  ( count ko even karne keliye kuch index back jaake dobara anaa hoga )

# Complexity
- Time complexity: O(n)

- Space complexity: O(n) : dp vector for storing min days to visit that index
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:   
    int firstDayBeenInAllRooms(vector<int>& nextVisit) {
        long long n=nextVisit.size(),day=0, mod=1e9+7;
        vector<long long> min_day_to_visit(n,0);
        for(int i=0;i<n;i++)
        {
            if(i==n-1)  return day;
            if(nextVisit[i]==i) day+=2;
            else
            {
                int dobara=(day-min_day_to_visit[nextVisit[i]]+mod)%mod;
                //-> dobara chalna parega nextVisit[index] wali position        
                //   se current index tak
                // -> plus piche wale index par jane ke liye 1 din
                // -> plus index+1 par jane ke liye 1 din
                day+=((dobara+2)%mod);
            }
            day%=mod;
            min_day_to_visit[i+1]=day;
        }
        return -1;
    }
};
```
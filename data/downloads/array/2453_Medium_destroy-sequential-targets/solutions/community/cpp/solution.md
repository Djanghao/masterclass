# ✅✅✅ C++ Solution with explanation ||  Using modulo & map

**Author:** kreakEmp
**Votes:** 90
**Link:** [https://leetcode.com/problems/destroy-sequential-targets/solutions/2756382/](https://leetcode.com/problems/destroy-sequential-targets/solutions/2756382/)

---

<b>Up Vote if you like the solution
```
/* 
Very simple approach is to just take the reminder of eanch element when divided by space.
Then take the smallest element with having reminder same as that of maximum elements with same reminder.

1. Count number of elements with same reminder, this can be achived by simple adding reminder to map & increamenting it.
2. Also keep track of the max count of reminder with same reminder value.
3. Scan the array again and find the smallest element with the max count reminder value, that we found in above step.

If you wonder why modulus/reminder:
- When adding c*space to a fix number, all of the number generated from this will be having same reminder. 
*/

class Solution {
public:
    int destroyTargets(vector<int>& nums, int space) {
        int ans = INT_MAX, mx = INT_MIN;
        unordered_map<int, int> mp;
        for(auto n: nums){
            int r = n % space;                  //evaluate reminder
            mp[r]++;                               // add reminder to map
            if(mx < mp[r])  mx = mp[r];   //keep track of the max count, with same reminder
        }
        for(auto n: nums){  //scan smalest element with same riminder as of mx
            if(mx == mp[n%space])  ans = min(ans, n);
        }
        return ans;
    }
};
```

<b>Here is an article of my recent interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted
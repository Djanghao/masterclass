# It's Easy | CPP | 98%

**Author:** 13_degree
**Votes:** 28
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/1038982/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/1038982/)

---

Just check that the frequency of previous elements must be less than current element
```
class Solution {
public:
    bool isPossible(vector<int>& nums) {
        unordered_map<int,int> mp;
        for(auto& it:nums)
            mp[it]++;
        for(auto& it:nums)
        {
            if(mp[it] == 0)
                continue;
            int freq = mp[it] , curr = it , count = 0;
            while(mp.count(curr) && mp[curr] >= freq)
            {
                freq = fmax(freq,mp[curr]);
                mp[curr]--;
                count++;
                curr++;
            }
            if(count < 3)
                return false;
        }
        return true;
    }
};
```
upvote if you like the solution :)
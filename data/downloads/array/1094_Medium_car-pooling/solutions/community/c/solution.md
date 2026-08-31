# [C++] Simple solution using sorting on vectors

**Author:** dev1988
**Votes:** 196
**Link:** [https://leetcode.com/problems/car-pooling/solutions/318138/](https://leetcode.com/problems/car-pooling/solutions/318138/)

---

We simply add the pairs of {start,passengers} and {end, -passengers} to our vector(These are the possible trigger points for car occupancy change).

We sort all these triggers and check if occupancy is greater than capacity after each trigger.
```
class Solution {
public:
    bool carPooling(vector<vector<int>>& trips, int capacity) {
        vector<pair<int, int>> v;
        
        for(int i = 0; i < trips.size(); i++){
            v.push_back({trips[i][1], trips[i][0]});
            v.push_back({trips[i][2], -trips[i][0]});
        }
        
        sort(v.begin(), v.end());
        
        int filled = 0;
        
        for(int i = 0; i < v.size(); i++){
            filled += v[i].second;
            if(filled > capacity) return false;
        }
        return true;
    }
};
```
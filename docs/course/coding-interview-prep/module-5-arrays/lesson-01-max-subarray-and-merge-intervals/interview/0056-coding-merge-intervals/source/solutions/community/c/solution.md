# [C++] 9 lines 99% Run Time Easy to understand solution

**Author:** hunarbatra
**Votes:** 271
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/482195/](https://leetcode.com/problems/merge-intervals/solutions/482195/)

---

```
 vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if(intervals.size()<=1) return intervals;
        sort(intervals.begin(), intervals.end());
        vector<vector<int>> output;
        output.push_back(intervals[0]);
        for(int i=1; i<intervals.size(); i++) {
            if(output.back()[1] >= intervals[i][0]) output.back()[1] = max(output.back()[1] , intervals[i][1]);
            else output.push_back(intervals[i]); 
        }
        return output;
    }
```
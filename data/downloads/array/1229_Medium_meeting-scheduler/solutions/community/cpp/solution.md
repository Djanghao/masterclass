# Clean and simple C++ solution + comments

**Author:** shlom
**Votes:** 1
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/608458/](https://leetcode.com/problems/meeting-scheduler/solutions/608458/)

---

```cpp
class Solution {
public:
    vector<int> minAvailableDuration(vector<vector<int>>& slots1, vector<vector<int>>& slots2, int duration) {
        // sort both time slots
		sort(begin(slots1), end(slots1));
        sort(begin(slots2), end(slots2));
        
        int i = 0, j = 0;
        while (i < slots1.size() && j < slots2.size()) {
            int max_start_time = max(slots1[i][0], slots2[j][0]);
            int min_end_time = min(slots1[i][1], slots2[j][1]);
            
			// if max_start_time < min_end_time we found an intersection
            if (max_start_time < min_end_time) {
                auto diff = min_end_time - max_start_time;
                if (diff >= duration) {
                    return {max_start_time, max_start_time + duration};
                }
            }
            // move the time interval that ends sooner forward
            slots1[i][1] < slots2[j][1] ? ++i : ++j;
        }
        return {};
    }
};
```
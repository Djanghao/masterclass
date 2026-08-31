# C++ beginner friendly solution

**Author:** rachav
**Votes:** 2
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/1182603/](https://leetcode.com/problems/meeting-scheduler/solutions/1182603/)

---

```
vector<int> minAvailableDuration(vector<vector<int>>& slots1, vector<vector<int>>& slots2, int duration) {
        vector<int> vec;
        sort(slots1.begin(), slots1.end());
        sort(slots2.begin(), slots2.end());
        int i, j, start, end;
        for(i=0,j=0; i<slots1.size() && j<slots2.size();)
        {
            start = max(slots1[i][0], slots2[j][0]);
            end = min(slots1[i][1], slots2[j][1]);
            if(start < end)
            {
                if(end-start >= duration)
                    return {start, start+duration};
            }
            if(slots1[i][1] < slots2[j][1])
                i++;
            else if(slots1[i][1] > slots2[j][1])
                j++;
            else
            {
                i++;
                j++;
            }
        }
        return vec;
    }
```
Please UPVOTE if my approach helped you.
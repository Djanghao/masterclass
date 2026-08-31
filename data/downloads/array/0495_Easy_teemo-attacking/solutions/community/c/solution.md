# C++ super-simple and short solution - O(n), O(1) - faster than 98%

**Author:** YehudisK
**Votes:** 17
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/865761/](https://leetcode.com/problems/teemo-attacking/solutions/865761/)

---

```
class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        if (timeSeries.size() == 0)
            return 0;
        int res = 0;
        for(int i=0; i<timeSeries.size()-1; i++) {
            if (timeSeries[i+1] - timeSeries[i] < duration)
                res += timeSeries[i+1] - timeSeries[i];
            else
                res += duration;
        }
        return res+duration;
    }
};
```
**Like it? please upvote...**
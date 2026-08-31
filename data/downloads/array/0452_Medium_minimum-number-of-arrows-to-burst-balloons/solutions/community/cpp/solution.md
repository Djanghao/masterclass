# ✅C++||SHORT AND EASY CODE||EXPLAINED✅

**Author:** vishnoi29
**Votes:** 200
**Link:** [https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/3000353/](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/solutions/3000353/)

---



# Approach
**Greedy algorithm**
1.An arrow shoots through multiple intervals, all of which are coincident. We try to stack the overlapping intervals together and give a jump.
2.To facilitate identifying coincidence in a single traversal, we sort in ascending order on the right

# Complexity
- Time complexity:O(NlogN)

- Space complexity:O(1)

# Code
```
class Solution {
public:
    int findMinArrowShots(vector<vector<int>>& p) {
        sort(p.begin(), p.end());
        int lastpoint = p[0][1];
        int ans = 1;
        for(auto point : p) {
            if(point[0] > lastpoint) {
                ans++;
                lastpoint = point[1];
            }
            lastpoint = min(point[1],lastpoint);
        }
        return ans;
    }
};
```
***IF YOU LIKE THE SOLUTION PLEASE UPVOTE.***
let's connnect [Linkdin](https://www.linkedin.com/in/mahesh-vishnoi-a4a47a193/) AND [Telegram](https://t.me/mahesh_vishnoi29)

